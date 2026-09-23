import React, { useState, useEffect } from 'react';
import { 
  Snowflake, 
  Menu, 
  X, 
  Globe2 
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { labData } from '../data/labData';

export default function Navbar({ lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'brseqtb', labelPt: 'BrSeqTB', labelEn: 'BrSeqTB', highlight: true },
    { id: 'mtbrx', labelPt: 'MtbRx', labelEn: 'MtbRx', highlight: true },
    { id: 'research', labelPt: 'Pesquisa', labelEn: 'Research' },
    { id: 'team', labelPt: 'Equipe', labelEn: 'Team' },
    { id: 'facilities', labelPt: 'Estrutura', labelEn: 'Facilities' },
    { id: 'publications', labelPt: 'Publicações', labelEn: 'Publications' },
    { id: 'contact', labelPt: 'Contato', labelEn: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 py-2 shadow-xs'
          : 'bg-white/85 backdrop-blur-xs py-3 border-b border-slate-100'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand / Logo (Far left, subtitle: Laboratório de Pesquisa Aplicada à Micobactérias) */}
        <a href="#" className="flex items-center gap-3.5 group shrink-0">
          <img
            src="./img/LOGO%20LAPAM.png"
            alt="LaPAM Logo"
            className="h-11 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col justify-center">
            <span className="font-extrabold text-xl tracking-tight text-slate-900 leading-none">
              LaPAM
            </span>
            <span className="text-xs text-slate-500 font-normal mt-1 leading-none hidden sm:block lg:hidden xl:block">
              {lang === 'pt' ? 'Laboratório de Pesquisa Aplicada à Micobactérias' : 'Laboratory of Applied Research in Mycobacteria'}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`h-8 inline-flex items-center px-3 rounded-lg text-xs xl:text-sm font-medium transition-colors ${
                link.highlight
                  ? 'text-teal-700 bg-teal-50 hover:bg-teal-100 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {lang === 'pt' ? link.labelPt : link.labelEn}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions: Freezer -80 Button + Lang + GitHub (Aligned) */}
        <div className="hidden lg:flex items-center gap-2 shrink-0">
          {/* Freezer -80 Button in Header */}
          <a
            href="/freezer"
            title="Freezer -80°C Biobank Platform"
            className="h-8 inline-flex items-center justify-center gap-1.5 px-3 rounded-lg text-xs font-semibold text-sky-800 bg-sky-50 border border-sky-200 hover:bg-sky-100 hover:border-sky-300 transition-colors shadow-2xs"
          >
            <Snowflake className="w-3.5 h-3.5 text-sky-600" />
            <span>Freezer -80°C</span>
          </a>

          {/* Language Switcher */}
          <button
            onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
            className="h-8 inline-flex items-center justify-center gap-1 px-2.5 rounded-lg text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 transition-colors cursor-pointer"
            title={lang === 'pt' ? 'Mudar para Inglês' : 'Switch to Portuguese'}
          >
            <Globe2 className="w-3.5 h-3.5 text-slate-500" />
            <span className="font-mono">{lang === 'pt' ? 'EN' : 'PT'}</span>
          </button>

          {/* GitHub Organization */}
          <a
            href={labData.links.githubOrg}
            target="_blank"
            rel="noopener noreferrer"
            className="h-8 w-8 inline-flex items-center justify-center rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 transition-colors"
            title="GitHub: LaPAM-USP"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={labData.links.freezerRepo || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="h-8 inline-flex items-center justify-center px-2 rounded-lg text-xs font-semibold text-sky-800 bg-sky-50 border border-sky-200"
          >
            <Snowflake className="w-3.5 h-3.5 text-sky-600" />
          </a>

          <button
            onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
            className="h-8 px-2 rounded-lg text-xs text-slate-700 border border-slate-200 bg-slate-50 inline-flex items-center justify-center"
          >
            <span className="font-mono">{lang === 'pt' ? 'EN' : 'PT'}</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="h-8 w-8 rounded-lg text-slate-700 border border-slate-200 hover:bg-slate-100 inline-flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-5 space-y-2 shadow-sm">
          <div className="grid grid-cols-2 gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`p-2 rounded-lg text-xs font-medium ${
                  link.highlight
                    ? 'bg-teal-50 text-teal-800 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {lang === 'pt' ? link.labelPt : link.labelEn}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={labData.links.freezerRepo || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-semibold bg-sky-50 text-sky-800 border border-sky-200"
            >
              <Snowflake className="w-3.5 h-3.5 text-sky-600" />
              <span>Freezer -80°C</span>
            </a>

            <a
              href={labData.links.githubOrg}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-medium text-slate-700 border border-slate-200 hover:bg-slate-50"
            >
              <GithubIcon className="w-4 h-4" />
              <span>github.com/LaPAM-USP</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
