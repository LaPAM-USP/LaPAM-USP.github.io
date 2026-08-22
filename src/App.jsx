import React, { useState } from 'react';
import BioCanvas from './components/BioCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrSeqTBSection from './components/BrSeqTBSection';
import ResearchSection from './components/ResearchSection';
import TeamSection from './components/TeamSection';
import FacilitiesSection from './components/FacilitiesSection';
import PublicationsSection from './components/PublicationsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [lang, setLang] = useState('pt'); // 'pt' or 'en'

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
