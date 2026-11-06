import React from 'react';
import { projectsData } from '../data/portfolioData';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (projectId: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-slate-300 font-mono text-xs tracking-widest uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 text-slate-400" />
            <span>Selected Works</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Featured Case Studies
          </h2>
          <p className="text-slate-400 text-sm mt-3 leading-relaxed">
            Deep-dive projects exploring full-stack engineering, citizen welfare UX, and brand identity systems.
          </p>
        </div>

        {/* Project Cards Grid - Darker obsidian glass with warm side glow and hover lift */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project.id)}
              className="group rounded-3xl glass-panel p-6 sm:p-7 flex flex-col justify-between hover:border-white/20 hover:bg-[#18212a] hover:-translate-y-2 hover:shadow-2xl active:scale-[0.99] transition-all duration-300 relative overflow-hidden cursor-pointer bg-[#141b22]/95 border border-white/10"
            >
              <div>
                {/* Top badges */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    {project.badge && (
                      <span className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/10 text-[11px] font-mono text-slate-200 group-hover:border-amber-400/30 transition-colors">
                        {project.badge}
                      </span>
                    )}
                  </div>
                  <div className="w-8 h-8 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-amber-300 group-hover:bg-amber-400/15 group-hover:border-amber-400/40 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-display text-2xl font-bold text-white group-hover:text-amber-200 transition-colors mb-1">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-xs font-mono mb-3">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Tags & Action Row */}
              <div className="pt-4 border-t border-white/10 mt-auto">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-white/5 text-slate-300 text-[10px] font-mono border border-white/5 group-hover:border-white/15 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-1.5 py-0.5 rounded bg-white/5 text-slate-400 text-[10px] font-mono">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-white font-medium group-hover:text-amber-300 group-hover:translate-x-1 transition-all flex items-center gap-1.5 text-[11px]">
                    <span>Inspect Case Study</span>
                    <span>&rarr;</span>
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
