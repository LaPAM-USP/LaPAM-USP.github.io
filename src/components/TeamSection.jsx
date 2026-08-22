import React, { useState } from 'react';
import { 
  Users, 
  Mail, 
  ExternalLink, 
  BookOpen, 
  Camera, 
  Dna 
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { labData } from '../data/labData';

export default function TeamSection({ lang }) {
  const [filter, setFilter] = useState('all');
  const { pi, members } = labData.team;

  const filteredMembers = filter === 'all' 
    ? members 
    : members.filter(m => m.category === filter);

  return (
    <section id="team" className="py-20 bg-slate-50 border-t border-b border-slate-200/80">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold">
            <Users className="w-3.5 h-3.5 text-teal-600" />
            <span>{lang === 'pt' ? 'Membros do Laboratório' : 'Lab Members'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            {lang === 'pt' ? 'Nossa Equipe' : 'Our Team'}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {lang === 'pt'
              ? 'Pesquisadores, pós-graduandos e mestrandos do LaPAM no ICB II - USP.'
              : 'Principal investigator, PhD candidate, and Master\'s students at LaPAM (ICB II - USP).'}
          </p>
        </div>

        {/* PI / Lab Head Featured Section */}
        <div className="mb-14">
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              
              {/* Circular Photo Frame for PI */}
              <div className="flex flex-col items-center shrink-0">
                <div className="relative">
                  <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1 bg-slate-100 border-2 border-teal-600/60 shadow-xs">
                    <div className="w-full h-full rounded-full bg-slate-100 overflow-hidden flex items-center justify-center">
                      {pi.image ? (
                        <img
                          src={pi.image}
                          alt={pi.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-slate-100 flex flex-col items-center justify-center text-slate-600">
                          <span className="text-2xl font-bold font-mono tracking-tight text-slate-800">
                            {pi.initials}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono mt-0.5 flex items-center gap-1">
                            <Camera className="w-3 h-3" /> Foto PI
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <span className="absolute bottom-0 right-1 px-2 py-0.5 rounded-full bg-slate-900 text-white font-semibold text-[10px] uppercase tracking-wider shadow-xs">
                    PI
                  </span>
                </div>
              </div>

              {/* PI Details & Bio */}
              <div className="flex-1 text-center md:text-left space-y-3">
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-teal-50 text-teal-800 border border-teal-200 text-xs font-semibold mb-1.5">
                    {lang === 'pt' ? pi.rolePt : pi.roleEn}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {lang === 'pt' ? pi.name : pi.nameEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium">
                    {lang === 'pt' ? pi.institutionPt : pi.institutionEn}
                  </p>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {lang === 'pt' ? pi.bioPt : pi.bioEn}
                </p>

                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80 text-xs text-slate-700 flex items-start gap-2">
                  <Dna className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900">
                      {lang === 'pt' ? 'Foco de Pesquisa: ' : 'Research Focus: '}
                    </span>
                    <span>{lang === 'pt' ? pi.focusPt : pi.focusEn}</span>
                  </div>
                </div>

                {/* Academic Profiles & Contact Links */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-1">
                  <a
                    href={pi.lattes}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-medium text-slate-800 transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-teal-700" />
                    <span>Currículo Lattes</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>

                  <a
                    href={pi.orcid}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-medium text-slate-800 transition-colors"
                  >
                    <span className="w-3.5 h-3.5 rounded-full bg-[#A6CE39] text-white font-black text-[9px] flex items-center justify-center">iD</span>
                    <span>ORCID</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>

                  <a
                    href={`mailto:${pi.email}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-50 hover:bg-teal-100 text-xs font-semibold text-teal-800 border border-teal-200 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-teal-700" />
                    <span>{pi.email}</span>
                  </a>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* Staff & Candidates Section (Kevim PhD + Master's) */}
        <div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                {lang === 'pt' ? 'Pós-Graduandos' : 'Graduate Students'}
              </h3>
              <p className="text-xs text-slate-500">
                {lang === 'pt' ? '1 Doutorando e 7 Mestrandos' : '1 PhD Candidate and 7 Master\'s Students'}
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-slate-200 text-xs overflow-x-auto max-w-full">
              {[
                { id: 'all', labelPt: 'Todos (8)', labelEn: 'All (8)' },
                { id: 'phd', labelPt: 'Doutorado (1)', labelEn: 'PhD (1)' },
                { id: 'msc', labelPt: 'Mestrado (7)', labelEn: 'Master\'s (7)' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors cursor-pointer ${
                    filter === tab.id
                      ? 'bg-slate-900 text-white font-semibold shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {lang === 'pt' ? tab.labelPt : tab.labelEn}
                </button>
              ))}
            </div>
          </div>

          {/* Member Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  
                  {/* Top Avatar & Role */}
                  <div className="flex items-center gap-3.5 mb-3.5">
                    {/* Round Avatar Placeholder / Real Image */}
                    <div className="shrink-0">
                      <div className="w-16 h-16 rounded-full p-0.5 bg-slate-100 border border-slate-300 shadow-2xs">
                        <div className="w-full h-full rounded-full bg-slate-100 overflow-hidden flex items-center justify-center">
                          {member.image ? (
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center text-slate-500">
                              <span className="text-xs font-mono font-bold">{member.initials}</span>
                              <Camera className="w-2.5 h-2.5 text-slate-400 mt-0.5" />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-mono font-semibold uppercase tracking-wider mb-1 ${
                        member.category === 'phd'
                          ? 'bg-teal-50 text-teal-800 border border-teal-200'
                          : 'bg-slate-100 text-slate-700'
                      }`}>
                        {lang === 'pt' ? member.rolePt : member.roleEn}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 truncate">
                        {lang === 'pt' ? member.name : member.nameEn}
                      </h4>
                      <span className="text-[11px] text-slate-400 font-mono block">
                        LaPAM / ICB II - USP
                      </span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="mb-3">
                    <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      {lang === 'pt' ? member.projectPt : member.projectEn}
                    </p>
                  </div>

                  {/* Skills / Tech Tags */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {member.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 text-slate-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Footer links */}
                <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <a
                      href={member.lattes}
                      className="text-slate-500 hover:text-teal-700 transition-colors text-[11px]"
                      title="Currículo Lattes"
                    >
                      Lattes
                    </a>
                    <span className="text-slate-300">•</span>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-slate-900 transition-colors"
                      title="GitHub"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <a
                    href={`mailto:${member.email}`}
                    className="text-slate-500 hover:text-teal-700 transition-colors"
                    title="Contato"
                  >
                    <Mail className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
