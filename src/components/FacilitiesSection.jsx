import React from 'react';
import { 
  ShieldCheck, 
  Layers, 
  Cpu, 
  Dna, 
  CheckCircle2 
} from 'lucide-react';
import { labData } from '../data/labData';

export default function FacilitiesSection({ lang }) {
  const getFacilityIcon = (idx) => {
    switch (idx) {
      case 0:
        return <ShieldCheck className="w-5 h-5 text-teal-600" />;
      case 1:
        return <ShieldCheck className="w-5 h-5 text-teal-600" />;
      case 2:
        return <Dna className="w-5 h-5 text-teal-600" />;
      case 3:
        return <Cpu className="w-5 h-5 text-teal-600" />;
      default:
        return <Layers className="w-5 h-5 text-teal-600" />;
    }
  };

  return (
    <section id="facilities" className="py-20 bg-white">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5 text-teal-600" />
            <span>{lang === 'pt' ? 'Infraestrutura' : 'Facilities'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            {lang === 'pt' ? 'Estrutura & Equipamentos' : 'Laboratory Infrastructure'}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {lang === 'pt'
              ? 'Infraestrutura completa de biossegurança no ICB II - USP, sequenciamento em centros parceiros e computação dedicada.'
              : 'Complete biosafety infrastructure at ICB II - USP, outsourced genomic sequencing partnerships, and dedicated computing.'}
          </p>
        </div>

        {/* 4 Facilities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {labData.facilities.map((fac, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3.5"
            >
              <div className="p-2 rounded-lg bg-white border border-slate-200 shrink-0">
                {getFacilityIcon(idx)}
              </div>

              <div className="space-y-1">
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  {lang === 'pt' ? fac.titlePt : fac.titleEn}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {lang === 'pt' ? fac.descPt : fac.descEn}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
