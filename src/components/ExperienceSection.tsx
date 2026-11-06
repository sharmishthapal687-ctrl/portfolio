import React from 'react';
import { experiencesData, achievementsData, educationData, designExpertiseData } from '../data/portfolioData';
import { Briefcase, Trophy, GraduationCap, Calendar, CheckCircle2, Palette } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-2 text-slate-300 font-mono text-xs tracking-widest uppercase mb-2">
            <Briefcase className="w-3.5 h-3.5 text-slate-400" />
            <span>Journey & Leadership</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
            Experience & Campus Impact
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Leading creative directions in student clubs, organizing hackathons, and delivering visual design for campus communities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Timeline (7 cols) - Concise & Brief */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-display text-base font-bold text-white mb-4 flex items-center gap-2 font-mono">
              <span className="w-2 h-2 rounded-full bg-white" />
              Roles & Club Coordination
            </h3>

            <div className="relative pl-6 border-l border-white/10 space-y-6">
              {experiencesData.map((exp, index) => (
                <div key={index} className="relative group">
                  {/* Dynamic Glowing Timeline Node */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.9)] border-2 border-[#12181f] group-hover:scale-125 transition-transform" />

                  <div className="rounded-2xl glass-panel bg-[#141b22]/95 border border-white/10 p-5 hover:border-white/20 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <span className="text-[11px] font-mono text-amber-300 font-semibold uppercase tracking-wider">
                        {exp.type}
                      </span>
                      <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        {exp.period}
                      </span>
                    </div>

                    <h4 className="font-display text-lg font-bold text-white mb-0.5 group-hover:text-amber-200 transition-colors">
                      {exp.role}
                    </h4>
                    <p className="text-xs font-medium text-slate-300 mb-2.5">
                      {exp.organization}
                    </p>

                    <p className="text-xs text-slate-300 leading-relaxed mb-3">
                      {exp.description}
                    </p>

                    <div className="space-y-1.5 mb-3">
                      {exp.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded bg-white/5 text-slate-300 text-[10px] font-mono border border-white/5 group-hover:border-white/15"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Dedicated Design Experience Card + Consolidated Achievements + Education (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Separate Box: Graphic, Event & Merchandise Design Experience */}
            <div className="rounded-2xl glass-panel bg-[#131a21]/95 border border-white/15 p-6 relative overflow-hidden group hover:border-white/25 hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-1 rounded-md bg-amber-400/10 text-amber-300 border border-amber-400/30 text-[10px] font-mono flex items-center gap-1.5">
                  <Palette className="w-3.5 h-3.5 text-amber-400" />
                  {designExpertiseData.badge}
                </span>
              </div>

              <h3 className="font-display text-xl font-bold text-white mb-1.5 group-hover:text-amber-200 transition-colors">
                {designExpertiseData.title}
              </h3>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                {designExpertiseData.description}
              </p>

              {/* Grid of design specialties */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4 font-sans">
                {designExpertiseData.items.map((item, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-black/40 border border-white/10 group-hover:border-white/15 transition-colors">
                    <span className="text-xs font-semibold text-white block mb-1">
                      {item.title}
                    </span>
                    <span className="text-[11px] text-slate-400 leading-snug block">
                      {item.desc}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10 text-[11px] font-mono">
                {designExpertiseData.tools.map((tool) => (
                  <span key={tool} className="px-2 py-0.5 rounded bg-white/10 text-slate-200 border border-white/10 text-[10px]">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Consolidated Top 5 Achievements Box */}
            <div>
              <h3 className="font-display text-base font-bold text-white mb-3 flex items-center gap-2 font-mono">
                <Trophy className="w-4 h-4 text-amber-400" />
                Key Honors & Recognition
              </h3>

              <div className="space-y-3">
                {achievementsData.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl glass-panel bg-[#141b22]/95 border border-white/10 p-4 hover:border-white/20 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="px-2 py-0.5 rounded bg-amber-400/15 text-amber-200 border border-amber-400/30 text-[10px] font-mono font-medium">
                        {item.badge}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        {item.date}
                      </span>
                    </div>

                    <h4 className="font-display text-sm font-bold text-white group-hover:text-amber-200 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 font-mono mb-1.5">
                      {item.event}
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Background */}
            <div>
              <h3 className="font-display text-base font-bold text-white mb-3 flex items-center gap-2 font-mono">
                <GraduationCap className="w-4 h-4 text-slate-300" />
                Academic Background
              </h3>

              {educationData.map((edu, index) => (
                <div key={index} className="rounded-2xl glass-panel bg-[#141b22]/95 border-white/10 p-4 hover:border-white/20 transition-all duration-300">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-mono text-slate-300 font-semibold">
                      Undergraduate Studies
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {edu.period}
                    </span>
                  </div>

                  <h4 className="font-display text-sm font-bold text-white mb-0.5">
                    {edu.degree}
                  </h4>
                  <p className="text-[11px] font-mono text-slate-400 mb-3">
                    {edu.institution}
                  </p>

                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {edu.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-[11px]">
                        <span className="text-amber-400 font-bold">&bull;</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
