import React, { useState, useEffect } from 'react';
import BioCanvas from './components/BioCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrSeqTBSection from './components/BrSeqTBSection';
import MtbRxSection from './components/MtbRxSection';
import ResearchSection from './components/ResearchSection';
import TeamSection from './components/TeamSection';
import FacilitiesSection from './components/FacilitiesSection';
import PublicationsSection from './components/PublicationsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const LANG_KEY = 'lapam-lang';

// Manual choice wins; otherwise PT only when the browser's primary language is pt-BR.
function detectLang() {
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === 'pt' || saved === 'en') return saved;
  } catch {}
  const primary = (navigator.languages?.[0] || navigator.language || '').toLowerCase();
  return primary === 'pt-br' ? 'pt' : 'en';
}

export default function App() {
  const [lang, setLangState] = useState(detectLang); // 'pt' or 'en'

  const setLang = (next) => {
    setLangState(next);
    try { localStorage.setItem(LANG_KEY, next); } catch {}
  };

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  }, [lang]);

  return (
    <div className="relative min-h-screen bg-white text-slate-800 font-sans selection:bg-teal-100 selection:text-teal-900 overflow-x-hidden">
      {/* Subtle background canvas */}
      <BioCanvas />

      {/* Main Page Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar
          lang={lang}
          setLang={setLang}
        />

        <main className="flex-1">
          <Hero
            lang={lang}
          />

          <BrSeqTBSection
            lang={lang}
          />

          <MtbRxSection
            lang={lang}
          />

          <ResearchSection
            lang={lang}
          />

          <TeamSection
            lang={lang}
          />

          <FacilitiesSection
            lang={lang}
          />

          <PublicationsSection
            lang={lang}
          />

          <ContactSection
            lang={lang}
          />
        </main>

        <Footer
          lang={lang}
        />
      </div>
    </div>
  );
}
