// Fetches the PI's publications from OpenAlex (matched by ORCID) and writes
// src/data/publications.json. Runs in CI before every build and weekly on a
// schedule, so the list stays current without manual edits.
//
// Curation (featured / hidden / tags / extra entries) lives in
// src/content/publications-overrides.json and is editable through /admin.
//
// Usage: node scripts/fetch-publications.mjs

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ORCID = '0000-0002-8261-5863';
const OUT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../src/data/publications.json');

// Preprints, datasets, theses etc. are dropped; journal versions are kept.
const KEEP_TYPES = new Set(['article', 'review', 'editorial', 'letter', 'book-chapter', 'book']);
const MAX_AUTHORS = 6;

const stripTags = (s) => (s || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
const normTitle = (s) => stripTags(s).toLowerCase().normalize('NFD').replace(/[^a-z0-9]/g, '');

async function fetchAll() {
  const works = [];
  let cursor = '*';
  while (cursor) {
    const url = new URL('https://api.openalex.org/works');
    url.searchParams.set('filter', `author.orcid:${ORCID}`);
    url.searchParams.set('per-page', '200');
    url.searchParams.set('cursor', cursor);
    url.searchParams.set('select', 'id,doi,title,publication_year,publication_date,type,primary_location,authorships');
    const res = await fetch(url);
    if (!res.ok) throw new Error(`OpenAlex ${res.status}: ${await res.text()}`);
    const data = await res.json();
    works.push(...data.results);
    cursor = data.results.length ? data.meta.next_cursor : null;
  }
  return works;
}

function toPublication(w) {
  const names = w.authorships.map((a) => a.author.display_name);
  const authors = names.length > MAX_AUTHORS
    ? `${names.slice(0, MAX_AUTHORS).join(', ')}, et al.`
    : names.join(', ');
  const loc = w.primary_location || {};
  return {
    doi: w.doi ? w.doi.replace('https://doi.org/', '').toLowerCase() : '',
    title: stripTags(w.title),
    authors,
    journal: loc.source?.display_name || '',
    year: w.publication_year,
    date: w.publication_date,
    type: w.type,
    url: w.doi || loc.landing_page_url || w.id,
  };
}

// Prefer the copy with a DOI and a real journal over repository mirrors.
const score = (p) => (p.doi ? 2 : 0) + (p.journal && !/repositório|referencia|arca/i.test(p.journal) ? 1 : 0);

async function main() {
  const works = await fetchAll();
  const byTitle = new Map();
  for (const w of works) {
    if (!KEEP_TYPES.has(w.type) || !w.title) continue;
    const pub = toPublication(w);
    const key = normTitle(pub.title);
    const prev = byTitle.get(key);
    if (!prev || score(pub) > score(prev)) byTitle.set(key, pub);
  }
  const pubs = [...byTitle.values()].sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  fs.writeFileSync(OUT, JSON.stringify({ source: 'openalex', orcid: ORCID, updatedAt: new Date().toISOString(), publications: pubs }, null, 2) + '\n');
  console.log(`Wrote ${pubs.length} publications (from ${works.length} OpenAlex works) to ${path.relative(process.cwd(), OUT)}`);
}

main().catch((err) => {
  // Keep the last committed list rather than breaking the deploy.
  if (fs.existsSync(OUT)) {
    console.warn(`Could not refresh publications, keeping existing file: ${err.message}`);
  } else {
    console.error(err);
    process.exit(1);
  }
});
