import React, { useState } from 'react';
import {
  BookOpen,
  ExternalLink,
  Search,
  Copy,
  Check,
  Star,
  ChevronDown
} from 'lucide-react';
import { publications, publicationsUpdatedAt, team } from '../data/content';

const PAGE_SIZE = 10;

function PublicationCard({ pub, lang, copied, onCopy }) {
  return (
    <div
      className={`p-5 rounded-xl bg-white border shadow-xs flex flex-col sm:flex-row items-start justify-between gap-4 ${
        pub.featured ? 'border-teal-300' : 'border-slate-200'
      }`}
    >
      <div className="space-y-1.5 flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          {pub.featured && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-50 text-amber-800 border border-amber-200">
              <Star className="w-3 h-3" />
              {lang === 'pt' ? 'Destaque' : 'Featured'}
            </span>
          )}
          {pub.tag && (
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-teal-50 text-teal-800 border border-teal-200">
              {pub.tag}
            </span>
          )}
          <span className="text-xs text-slate-500 font-medium">
            {pub.journal}{pub.journal && pub.year ? ' ' : ''}{pub.year ? `(${pub.year})` : ''}
          </span>
        </div>

        <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
          {pub.title}
        </h3>

        <p className="text-xs text-slate-500">
          {pub.authors}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
        <button
          onClick={() => onCopy(pub)}
          className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-600 text-xs font-medium border border-slate-200 transition-colors cursor-pointer"
          title={lang === 'pt' ? 'Copiar citação' : 'Copy citation'}
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-teal-600" />
              <span className="text-teal-700">{lang === 'pt' ? 'Copiado' : 'Copied'}</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>{lang === 'pt' ? 'Citar' : 'Cite'}</span>
            </>
          )}
        </button>

        {pub.url && (
          <a
            href={pub.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-teal-50 hover:bg-teal-100 text-teal-800 text-xs font-semibold border border-teal-200 transition-colors"
          >
            <span>{pub.doi ? 'DOI' : 'Link'}</span>
            <ExternalLink className="w-3 h-3 text-teal-700" />
          </a>
        )}
      </div>
    </div>
  );
}

export default function PublicationsSection({ lang }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedId, setCopiedId] = useState(null);
  const [visible, setVisible] = useState(PAGE_SIZE);

  const handleCopyCitation = (paper) => {
    const ref = paper.doi ? `https://doi.org/${paper.doi}` : paper.url;
    const citation = `${paper.authors} (${paper.year}). ${paper.title}. ${paper.journal}. ${ref}`;
    navigator.clipboard.writeText(citation);
    setCopiedId(paper.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const term = searchTerm.trim().toLowerCase();
  const featured = publications.filter((p) => p.featured);
  const list = term
    ? publications.filter((p) =>
        [p.title, p.authors, p.journal, p.tag, String(p.year)]
          .some((field) => (field || '').toLowerCase().includes(term)))
    : publications.filter((p) => !p.featured);
  const shown = list.slice(0, visible);

  const updated = publicationsUpdatedAt
    ? new Date(publicationsUpdatedAt).toLocaleDateString(lang === 'pt' ? 'pt-BR' : 'en-US', { dateStyle: 'medium' })
    : null;

  const cardProps = (pub) => ({
    pub,
    lang,
    copied: copiedId === pub.id,
    onCopy: handleCopyCitation,
  });

  return (
    <section id="publications" className="py-20 bg-slate-50 border-t border-b border-slate-200/80">

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          <div className="text-center sm:text-left space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold">
              <BookOpen className="w-3.5 h-3.5 text-teal-600" />
              <span>{lang === 'pt' ? 'Produção Científica' : 'Publications'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {lang === 'pt' ? 'Publicações' : 'Publications'}
            </h2>
            <p className="text-xs text-slate-500">
              {lang === 'pt'
                ? `${publications.length} publicações • atualizado automaticamente via `
                : `${publications.length} publications • automatically updated from `}
              <a href={team.pi.orcid} target="_blank" rel="noopener noreferrer" className="underline hover:text-teal-700">ORCID / OpenAlex</a>
              {updated && (lang === 'pt' ? ` em ${updated}` : ` on ${updated}`)}
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder={lang === 'pt' ? 'Buscar por título, autor, ano...' : 'Search title, author, year...'}
              value={searchTerm}
              onChange={(e) => { setSearchTerm(e.target.value); setVisible(PAGE_SIZE); }}
              className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-500"
            />
          </div>
        </div>

        {/* Featured */}
        {!term && featured.length > 0 && (
          <div className="space-y-3 mb-8">
            {featured.map((pub) => <PublicationCard key={pub.id} {...cardProps(pub)} />)}
          </div>
        )}

        {/* Publications List */}
        <div className="space-y-3">
          {shown.map((pub) => <PublicationCard key={pub.id} {...cardProps(pub)} />)}

          {term && list.length === 0 && (
            <p className="text-center text-sm text-slate-500 py-6">
              {lang === 'pt' ? 'Nenhuma publicação encontrada.' : 'No publications found.'}
            </p>
          )}
        </div>

        {list.length > visible && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setVisible(visible + PAGE_SIZE)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200 transition-colors cursor-pointer"
            >
              <ChevronDown className="w-4 h-4" />
              {lang === 'pt'
                ? `Mostrar mais (${list.length - visible} restantes)`
                : `Show more (${list.length - visible} remaining)`}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
