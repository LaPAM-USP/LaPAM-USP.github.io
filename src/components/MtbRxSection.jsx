import React from 'react';
import {
  Microscope,
  ExternalLink,
  CheckCircle2,
  Search,
  BookMarked,
  Clock
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { labData } from '../data/labData';

export default function MtbRxSection({ lang }) {
  const data = labData.mtbrx;

  return (
    <section id="mtbrx" className="py-16 bg-white border-b border-slate-200/80">

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Badge & Title */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold">
            <Microscope className="w-3.5 h-3.5 text-teal-600" />
            <span>{lang === 'pt' ? 'Novo • Aplicação Web Gratuita' : 'New • Free Web App'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            MtbRx
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {lang === 'pt' ? data.subtitlePt : data.subtitleEn}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* Search preview card */}
          <div className="lg:col-span-2 p-6 rounded-2xl bg-slate-900 text-slate-100 shadow-xs flex flex-col gap-5">
            <div className="space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                {lang === 'pt' ? 'Experimente buscar' : 'Try searching'}
              </h3>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 font-mono text-sm text-teal-300">
                <Search className="w-4 h-4 text-slate-500 shrink-0" />
                <span>{data.exampleQueries[0]}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {data.exampleQueries.map((q) => (
                  <span
                    key={q}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800 text-slate-300 border border-slate-700"
                  >
                    {q}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={data.appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-900 bg-teal-400 hover:bg-teal-300 transition-colors"
            >
              <span>{lang === 'pt' ? 'Abrir o MtbRx' : 'Launch MtbRx'}</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <p className="flex items-start gap-2 text-[11px] text-slate-400 leading-relaxed">
              <Clock className="w-3.5 h-3.5 shrink-0 mt-0.5" />
              <span>
                {lang === 'pt'
                  ? 'Hospedado em instância gratuita: o primeiro acesso pode levar 30–60 s para iniciar.'
                  : 'Hosted on a free instance: the first load may take 30–60 s to wake up.'}
              </span>
            </p>
          </div>

          {/* Features card */}
          <div className="lg:col-span-3 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs space-y-6">
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                {lang === 'pt' ? 'Principais Recursos' : 'Key Capabilities'}
              </h3>

              <div className="grid grid-cols-1 gap-2.5">
                {(lang === 'pt' ? data.highlightsPt : data.highlightsEn).map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2.5 text-slate-700 text-xs sm:text-sm leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-2">
              <a
                href={data.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-xs"
              >
                <GithubIcon className="w-4 h-4" />
                <span>LaPAM-USP/mtbrx</span>
              </a>
              <a
                href={data.doiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-teal-800 bg-teal-50 border border-teal-200 hover:bg-teal-100 transition-colors"
              >
                <BookMarked className="w-3.5 h-3.5 text-teal-700" />
                <span>DOI · Zenodo</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
