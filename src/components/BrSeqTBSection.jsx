import React from 'react';
import { 
  Dna, 
  ExternalLink, 
  CheckCircle2 
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { labData } from '../data/labData';

export default function BrSeqTBSection({ lang }) {
  const data = labData.brseqtb;

  return (
    <section id="brseqtb" className="py-16 bg-slate-50 border-t border-b border-slate-200/80">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Badge & Title */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold">
            <Dna className="w-3.5 h-3.5 text-teal-600" />
            <span>{lang === 'pt' ? 'Pipeline WGS • Software Aberto' : 'Open Source WGS Pipeline'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            BrSeqTB
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {lang === 'pt' ? data.subtitlePt : data.subtitleEn}
          </p>
        </div>

        {/* Minimalist Feature Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-6">
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
              {lang === 'pt' ? 'Principais Recursos' : 'Key Capabilities'}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {(lang === 'pt' ? data.highlightsPt : data.highlightsEn).map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-slate-700 text-xs sm:text-sm leading-relaxed"
                >
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* GitHub CTA Row */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500">
              {lang === 'pt'
                ? 'Desenvolvido pelo LaPAM-USP. Disponível sob licença aberta no GitHub.'
                : 'Developed by LaPAM-USP. Open source code available on GitHub.'}
            </div>

            <a
              href={data.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-xs shrink-0"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Acessar no GitHub (LaPAM-USP/BrSeqTB)</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
