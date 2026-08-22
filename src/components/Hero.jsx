import React from 'react';
import { 
  Terminal, 
  FlaskConical, 
  ChevronRight, 
  Users 
} from 'lucide-react';
import { labData } from '../data/labData';

export default function Hero({ lang }) {
  return (
    <section id="about" className="relative pt-32 pb-20 overflow-hidden bg-white">
      
      {/* Subtle clean background accent */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-slate-50 to-white pointer-events-none -z-10" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Main Headline (Clean, no top bubbles) */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.15]">
            {lang === 'pt' ? (
              <>
                Pesquisa Experimental,{' '}
                <span className="text-teal-700">
                  Bioinformática
                </span>{' '}
                & Epidemiologia
              </>
            ) : (
              <>
                Experimental Research,{' '}
                <span className="text-teal-700">
                  Bioinformatics
                </span>{' '}
                & Epidemiology
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {lang === 'pt' ? (
              <>
                Pesquisa básica e aplicada em <i>Mycobacterium</i> spp., epidemiologia molecular da tuberculose e desenvolvimento do <strong>BrSeqTB</strong>, pipeline brasileiro de WGS para detecção de resistência a fármacos, epidemiologia, taxonomia e diagnóstico.
              </>
            ) : (
              <>
                Basic and applied research on <i>Mycobacterium</i> spp., molecular epidemiology of tuberculosis, and home of <strong>BrSeqTB</strong>, Brazil's WGS pipeline for drug resistance detection, epidemiology, taxonomy, and diagnostics.
              </>
            )}
          </p>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href="#brseqtb"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-xs sm:text-sm text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-xs"
          >
            <Terminal className="w-4 h-4 text-teal-400" />
            <span>{lang === 'pt' ? 'Conhecer o BrSeqTB' : 'Explore BrSeqTB Pipeline'}</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </a>

          <a
            href="#research"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium text-xs sm:text-sm text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-colors shadow-xs"
          >
            <FlaskConical className="w-4 h-4 text-teal-600" />
            <span>{lang === 'pt' ? 'Pesquisa' : 'Research'}</span>
          </a>

          <a
            href="#team"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium text-xs sm:text-sm text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-colors shadow-xs"
          >
            <Users className="w-4 h-4 text-teal-600" />
            <span>{lang === 'pt' ? 'Equipe' : 'Team'}</span>
          </a>
        </div>

        {/* Institutional Logos Minimalist Banner */}
        <div className="pt-12 mt-8 border-t border-slate-100 flex flex-wrap items-center justify-center gap-8 sm:gap-16">
          <div className="flex items-center gap-2.5">
            <img
              src="./img/LOGO%20LAPAM.png"
              alt="LaPAM Logo"
              className="h-10 sm:h-11 w-auto object-contain"
            />
            <span className="text-xs font-bold tracking-wider text-slate-800 uppercase">LaPAM</span>
          </div>

          <div className="h-5 w-px bg-slate-200 hidden sm:block" />

          <div className="flex items-center gap-2.5">
            <img
              src="./img/LOGO%20ICB.png"
              alt="ICB Logo"
              className="h-9 sm:h-10 w-auto object-contain"
            />
            <span className="text-xs font-medium text-slate-600">ICB II - USP</span>
          </div>

          <div className="h-5 w-px bg-slate-200 hidden sm:block" />

          <div className="flex items-center gap-2.5">
            <img
              src="./img/LOGO%20USP.png"
              alt="USP Logo"
              className="h-8 sm:h-9 w-auto object-contain"
            />
            <span className="text-xs font-medium text-slate-600">Universidade de São Paulo</span>
          </div>
        </div>

      </div>
    </section>
  );
}
