import React from 'react';
import { skillCategories } from '../data/portfolioData';
import { Code2, Palette, Cpu, Sparkles, Terminal } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-slate-200" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-slate-200" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-slate-200" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-slate-200" />;
      default:
        return <Terminal className="w-5 h-5 text-slate-200" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-black/15 border-y border-white/5">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-2 text-slate-300 font-mono text-xs tracking-widest uppercase mb-2">
            <Terminal className="w-3.5 h-3.5 text-slate-400" />
            <span>Technical & Creative Stack</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
            Toolkit & Competencies
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            The programming languages, frameworks, design software, and hardware ecosystems I use to build complete end-to-end solutions.
          </p>
        </div>

        {/* Categories Grid */}
        {/* Categories Grid - Darker obsidian glass with hover lift and micro-interactions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl glass-panel bg-[#141b22]/95 border border-white/10 p-6 flex flex-col justify-between hover:border-white/20 hover:bg-[#18212a] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-400/15 group-hover:border-amber-400/40 transition-all duration-300">
                    {getIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-white group-hover:text-amber-200 transition-colors">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-2.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 hover:scale-105 flex items-center gap-1.5 ${
                        skill.highlight
                          ? 'bg-amber-400/15 text-amber-200 border border-amber-400/30 font-medium shadow-[0_0_12px_rgba(245,158,11,0.15)]'
                          : 'bg-white/5 text-slate-300 border border-white/10 hover:border-amber-400/30 hover:text-white'
                      }`}
                    >
                      {skill.highlight && <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_rgba(245,158,11,0.8)]" />}
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom tag */}
              <div className="mt-8 pt-4 border-t border-white/10 text-[11px] font-mono text-slate-400 group-hover:text-slate-300">
                <span>{category.skills.length} core proficiencies</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
