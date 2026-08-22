import React, { useState } from 'react';
import { 
  FlaskConical, 
  Binary, 
  Activity, 
  ShieldCheck, 
  CheckCircle2, 
  Microscope 
} from 'lucide-react';
import { labData } from '../data/labData';

export default function ResearchSection({ lang }) {
  // Ordered as requested: Bancada, Bioinformática, Epidemiologia
  const [activePillar, setActivePillar] = useState('wetlab');

  const getIcon = (id) => {
    switch (id) {
      case 'wetlab':
        return <FlaskConical className="w-5 h-5 text-teal-600" />;
      case 'bioinformatics':
        return <Binary className="w-5 h-5 text-teal-600" />;
      case 'epidemiology':
        return <Activity className="w-5 h-5 text-teal-600" />;
      case 'animaltb':
        return <ShieldCheck className="w-5 h-5 text-teal-600" />;
      default:
        return <Microscope className="w-5 h-5 text-teal-600" />;
    }
  };

  const selectedData = labData.researchPillars.find((p) => p.id === activePillar) || labData.researchPillars[0];

  return (
    <section id="research" className="py-20 bg-white">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold">
            <Microscope className="w-3.5 h-3.5 text-teal-600" />
            <span>{lang === 'pt' ? 'Linhas de Pesquisa' : 'Research Areas'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            {lang === 'pt' ? 'Linhas de Pesquisa' : 'Research Pillars'}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {lang === 'pt'
              ? 'Bancada experimental em biossegurança NB-3 e NB-2, bioinformática avançada e epidemiologia molecular.'
              : 'BSL-3 and BSL-2 wet lab research, advanced bioinformatics, and molecular epidemiology.'}
          </p>
        </div>

        {/* Reordered Selector Buttons: Bancada, Bioinformática, Epidemiologia, Tuberculose Animal */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mb-6">
          {labData.researchPillars.map((pillar) => {
            const isSelected = activePillar === pillar.id;
            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillar(pillar.id)}
                className={`p-3.5 rounded-xl text-left transition-all border flex flex-col justify-between gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-slate-800 text-teal-300' : 'bg-slate-100 text-teal-600'}`}>
                    {getIcon(pillar.id)}
                  </div>
                  <span className={`text-[10px] font-mono uppercase tracking-wider ${isSelected ? 'text-slate-300' : 'text-slate-400'}`}>
                    {lang === 'pt' ? pillar.tagPt : pillar.tagEn}
                  </span>
                </div>
                <h3 className="text-xs sm:text-sm font-semibold leading-tight mt-1">
                  {lang === 'pt' ? pillar.titlePt : pillar.titleEn}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Minimalist Details Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200">
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              {lang === 'pt' ? selectedData.titlePt : selectedData.titleEn}
            </h3>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {lang === 'pt' ? selectedData.descPt : selectedData.descEn}
            </p>

            <div className="pt-3 border-t border-slate-200">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-3">
                {lang === 'pt' ? 'Tópicos Principais' : 'Core Topics'}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {(lang === 'pt' ? selectedData.pointsPt : selectedData.pointsEn).map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200/80">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
