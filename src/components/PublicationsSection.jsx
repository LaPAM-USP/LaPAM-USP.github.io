import React, { useState } from 'react';
import { 
  BookOpen, 
  ExternalLink, 
  Search, 
  Copy, 
  Check 
} from 'lucide-react';
import { labData } from '../data/labData';

export default function PublicationsSection({ lang }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedDoi, setCopiedDoi] = useState(null);

  const handleCopyCitation = (paper, index) => {
    const citation = `${paper.authors} (${paper.year}). ${paper.title}. ${paper.journal}. DOI: ${paper.doi}`;
    navigator.clipboard.writeText(citation);
    setCopiedDoi(index);
    setTimeout(() => setCopiedDoi(null), 2000);
  };

  const filteredPubs = labData.publications.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.tag.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.journal.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
              {lang === 'pt' ? 'Publicações em Destaque' : 'Selected Publications'}
            </h2>
          </div>

          {/* Search bar */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder={lang === 'pt' ? 'Filtrar artigos...' : 'Filter papers...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-500"
            />
          </div>
        </div>

        {/* Publications List */}
        <div className="space-y-3">
          {filteredPubs.map((pub, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-start justify-between gap-4"
            >
              <div className="space-y-1.5 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-teal-50 text-teal-800 border border-teal-200">
                    {pub.tag}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {pub.journal} ({pub.year})
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
                  onClick={() => handleCopyCitation(pub, idx)}
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-600 text-xs font-medium border border-slate-200 transition-colors cursor-pointer"
                  title="Copiar citação"
                >
                  {copiedDoi === idx ? (
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

                <a
                  href={pub.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-teal-50 hover:bg-teal-100 text-teal-800 text-xs font-semibold border border-teal-200 transition-colors"
                >
                  <span>DOI</span>
                  <ExternalLink className="w-3 h-3 text-teal-700" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
