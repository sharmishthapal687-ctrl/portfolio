import React, { useEffect } from 'react';
import { Project } from '../types';
import { GithubIcon, FigmaIcon } from './Icons';
import { X, ExternalLink, CheckCircle2, Sparkles } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Dialog - Rich Dark Obsidian Glass */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl glass-panel bg-[#12181f]/98 border-white/15 p-6 sm:p-8 md:p-10 shadow-2xl z-10">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 sm:top-7 sm:right-7 p-2 rounded-xl bg-white/10 border border-white/15 text-slate-300 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Tags */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {project.badge && (
            <span className="px-3 py-1 rounded-full text-xs font-mono font-medium border bg-amber-400/15 text-amber-200 border-amber-400/30">
              {project.badge}
            </span>
          )}
          <span className="px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10 text-xs font-mono uppercase">
            {project.category}
          </span>
          {project.metrics && (
            <span className="text-xs font-mono text-slate-400 ml-auto hidden sm:inline-block">
              {project.metrics}
            </span>
          )}
        </div>

        {/* Title & Subtitle */}
        <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-2">
          {project.title}
        </h3>
        <p className="text-slate-300 font-mono text-sm mb-6">
          {project.subtitle}
        </p>

        {/* Long Description */}
        <div className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 border-b border-white/10 pb-6">
          <p>{project.longDescription}</p>
        </div>

        {/* Highlights / Features */}
        <div className="mb-8">
          <h4 className="font-display text-sm font-semibold tracking-wider uppercase text-slate-300 mb-4 flex items-center gap-2 font-mono">
            <Sparkles className="w-4 h-4 text-amber-400" />
            Key Highlights & Design Decisions
          </h4>
          <div className="space-y-3">
            {project.highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-[#161e25]/95 border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-300 leading-normal">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="mb-8">
          <h4 className="font-display text-xs font-mono uppercase text-slate-400 mb-3 tracking-wider">
            Technologies & Tools
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-lg bg-white/10 text-slate-200 border border-white/10 text-xs font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/15 text-xs font-medium flex items-center gap-2 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Source Code</span>
            </a>
          )}
          {project.figmaUrl && (
            <a
              href={project.figmaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/15 text-xs font-medium flex items-center gap-2 transition-colors"
            >
              <FigmaIcon className="w-4 h-4" />
              <span>Design / Preview</span>
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-[#222b32] font-semibold text-xs flex items-center gap-2 transition-colors ml-auto shadow-md"
            >
              <span>Live Demonstration</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>

      </div>
    </div>
  );
};
