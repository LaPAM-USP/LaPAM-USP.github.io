import React from 'react';
import { 
  ExternalLink 
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { labData } from '../data/labData';

export default function Footer({ lang }) {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-500 text-xs">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          
          {/* Col 1: About LaPAM */}
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <img
                src="./img/LOGO%20LAPAM.png"
                alt="LaPAM Logo"
                className="h-8 w-auto object-contain"
              />
              <span className="font-bold text-slate-900 text-sm">
                LaPAM
              </span>
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              {lang === 'pt' ? labData.fullNamePt : labData.fullNameEn}
            </p>
            <p className="text-slate-400 text-[11px]">
              {lang === 'pt' ? 'Edifício Biomédicas II (ICB II) - USP' : 'Biomedical Sciences Bldg II (ICB II) - USP'}
            </p>
          </div>

          {/* Col 2: Research & Tools */}
          <div className="space-y-2">
            <h4 className="font-semibold text-slate-900 text-xs">
              {lang === 'pt' ? 'Projetos & Ferramentas' : 'Projects'}
            </h4>
            <ul className="space-y-1.5">
              <li>
                <a
                  href="#brseqtb"
                  className="hover:text-teal-700 transition-colors"
                >
                  BrSeqTB WGS Pipeline
                </a>
              </li>
              <li>
                <a
                  href="#mtbrx"
                  className="hover:text-teal-700 transition-colors"
                >
                  MtbRx Genomic Explorer
                </a>
              </li>
              <li>
                <a
                  href="#research"
                  className="hover:text-teal-700 transition-colors"
                >
                  {lang === 'pt' ? 'Microbiologia Experimental' : 'Experimental Microbiology'}
                </a>
              </li>
              <li>
                <a
                  href="#research"
                  className="hover:text-teal-700 transition-colors"
                >
                  {lang === 'pt' ? 'Epidemiologia & Vigilância' : 'Epidemiology & Surveillance'}
                </a>
              </li>
              <li>
                <a
                  href="#research"
                  className="hover:text-teal-700 transition-colors"
                >
                  {lang === 'pt' ? 'Tuberculose em Animais' : 'Animal Tuberculosis'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Institutional Links */}
          <div className="space-y-2">
            <h4 className="font-semibold text-slate-900 text-xs">
              {lang === 'pt' ? 'Institucional' : 'Institutional'}
            </h4>
            <ul className="space-y-1.5">
              <li>
                <a
                  href={labData.links.icbUsp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-900 transition-colors inline-flex items-center gap-1"
                >
                  <span>ICB II - USP</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href={labData.links.usp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-900 transition-colors inline-flex items-center gap-1"
                >
                  <span>Universidade de São Paulo (USP)</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href={labData.links.lattesPi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-900 transition-colors inline-flex items-center gap-1"
                >
                  <span>Lattes - Prof.ª Ana Marcia</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href={labData.links.githubOrg}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-900 transition-colors inline-flex items-center gap-1"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub: LaPAM-USP</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Funding */}
          <div className="space-y-2">
            <h4 className="font-semibold text-slate-900 text-xs">
              {lang === 'pt' ? 'Apoio' : 'Funding'}
            </h4>
            <div className="flex flex-wrap gap-1.5 text-[10px] font-mono">
              <span className="px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">FAPESP</span>
              <span className="px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">CNPq</span>
              <span className="px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">CAPES</span>
              <span className="px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">USP</span>
            </div>
          </div>

        </div>

        {/* Bottom Banner with Falat Labs Logo linked to falatfernando.github.io */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} LaPAM - Laboratório de Pesquisa Aplicada a Micobactérias • ICB II - USP.
          </div>

          {/* Developed by Falat Labs (Clickable link to falatfernando.github.io) */}
          <div className="flex items-center gap-2">
            <span>Developed by</span>
            <a
              href="https://falatfernando.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-2 py-1 rounded-md bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all shadow-2xs group"
              title="Falat Labs (falatfernando.github.io)"
            >
              <img
                src="./img/falat_labs_trimmed.webp"
                alt="Falat Labs"
                className="h-6 sm:h-7 w-auto object-contain invert mix-blend-multiply transition-transform group-hover:scale-105"
              />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
