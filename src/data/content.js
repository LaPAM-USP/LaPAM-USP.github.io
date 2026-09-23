// Content edited through the CMS (/admin) plus the auto-generated publication list.
import team from '../content/team.json';
import overrides from '../content/publications-overrides.json';
import generated from './publications.json';

export { team };

const idOf = (p) => p.doi || p.url;
const matches = (list, p) => (list || []).some((id) => {
  const key = id.trim().replace(/^https?:\/\/doi\.org\//i, '').toLowerCase();
  return key === (p.doi || '').toLowerCase() || id.trim() === p.url;
});

const edited = (p) => {
  const edit = (overrides.edits || []).find((e) => matches([e.id], p));
  return edit ? { ...p, tag: edit.tag || p.tag, journal: edit.journal || p.journal } : p;
};

const all = [
  ...(overrides.extra || []).map((p) => ({ ...p, doi: '', year: Number(p.year) })),
  ...generated.publications,
]
  .filter((p) => !matches(overrides.hidden, p))
  .map(edited)
  .map((p) => ({ ...p, id: idOf(p), featured: matches(overrides.featured, p) }))
  .sort((a, b) => (b.year || 0) - (a.year || 0));

export const publications = all;
export const publicationsUpdatedAt = generated.updatedAt;
