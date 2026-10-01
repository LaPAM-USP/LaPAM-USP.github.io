import React, { useState } from 'react';
import { marked } from 'marked';
import {
  Newspaper,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Calendar
} from 'lucide-react';
import { news } from '../data/content';

const PAGE_SIZE = 6;

const CATEGORIES = {
  award: { pt: 'Premiação', en: 'Award' },
  call: { pt: 'Chamada', en: 'Call' },
  publication: { pt: 'Publicação', en: 'Publication' },
  event: { pt: 'Evento', en: 'Event' },
  news: { pt: 'Notícia', en: 'News' },
};

const formatDate = (date, lang) => {
  const d = new Date(`${String(date).slice(0, 10)}T12:00:00`);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString(lang === 'pt' ? 'pt-BR' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' });
};

function NewsCard({ post, lang }) {
  const [open, setOpen] = useState(false);
  const title = lang === 'pt' ? post.title : post.titleEn || post.title;
  const body = lang === 'pt' ? post.body : post.bodyEn || post.body;
  const category = CATEGORIES[post.category];

  return (
    <article className="rounded-xl bg-white border border-slate-200 shadow-xs overflow-hidden flex flex-col">
      {post.image && (
        <img src={post.image} alt="" className="w-full h-44 object-cover bg-slate-100" />
      )}

      <div className="p-5 flex flex-col gap-2.5 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          {category && (
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold uppercase tracking-wider bg-teal-50 text-teal-800 border border-teal-200">
              {category[lang]}
            </span>
          )}
          {post.date && (
            <span className="inline-flex items-center gap-1 text-xs text-slate-500">
              <Calendar className="w-3 h-3" />
              {formatDate(post.date, lang)}
            </span>
          )}
        </div>

        <h3 className="text-base font-bold text-slate-900 leading-snug">{title}</h3>

        {body && (
          <div
            className={`news-body text-sm text-slate-600 leading-relaxed ${open ? '' : 'line-clamp-3'}`}
            dangerouslySetInnerHTML={{ __html: marked.parse(body) }}
          />
        )}

        <div className="mt-auto pt-2 flex flex-wrap items-center gap-2">
          {body && (
            <button
              onClick={() => setOpen(!open)}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-600 text-xs font-medium border border-slate-200 transition-colors cursor-pointer"
            >
              {open ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              <span>{open ? (lang === 'pt' ? 'Mostrar menos' : 'Show less') : (lang === 'pt' ? 'Ler mais' : 'Read more')}</span>
            </button>
          )}
          {post.link && (
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-teal-50 hover:bg-teal-100 text-teal-800 text-xs font-semibold border border-teal-200 transition-colors"
            >
              <span>Link</span>
              <ExternalLink className="w-3 h-3 text-teal-700" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function NewsSection({ lang }) {
  const [visible, setVisible] = useState(PAGE_SIZE);
  if (news.length === 0) return null;

  return (
    <section id="news" className="py-20 bg-slate-50 border-t border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold">
            <Newspaper className="w-3.5 h-3.5 text-teal-600" />
            <span>{lang === 'pt' ? 'Notícias' : 'News'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            {lang === 'pt' ? 'Notícias do LaPAM' : 'LaPAM News'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
          {news.slice(0, visible).map((post, i) => (
            <NewsCard key={`${post.date}-${post.title}-${i}`} post={post} lang={lang} />
          ))}
        </div>

        {news.length > visible && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setVisible(visible + PAGE_SIZE)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-medium border border-slate-200 transition-colors cursor-pointer"
            >
              <ChevronDown className="w-4 h-4" />
              <span>{lang === 'pt' ? 'Ver mais notícias' : 'More news'}</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
