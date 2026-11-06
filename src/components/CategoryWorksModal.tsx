import React, { useEffect } from 'react';
import { DesignCategory } from '../types';
import { X, Image as ImageIcon, ExternalLink } from 'lucide-react';

interface CategoryWorksModalProps {
  category: DesignCategory | null;
  onClose: () => void;
}

export const CategoryWorksModal: React.FC<CategoryWorksModalProps> = ({ category, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (category) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [category, onClose]);

  if (!category) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog - Rich Dark Obsidian Glass */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl glass-panel bg-[#12181f]/98 border-white/15 p-6 sm:p-8 md:p-10 shadow-2xl z-10">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 sm:top-7 sm:right-7 p-2 rounded-xl bg-white/10 border border-white/15 text-slate-300 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-medium border bg-white/10 text-white border-white/15">
            {category.badge}
          </span>
          <span className="text-xs font-mono text-slate-400">
            {category.works.length} {category.works.length === 1 ? 'project' : 'projects'}
          </span>
        </div>

        <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-2">
          {category.name}
        </h3>
        <p className="text-slate-400 text-sm mb-8 border-b border-white/10 pb-6">
          {category.shortDesc}
        </p>

        {/* Works Showcase */}
        <div className="space-y-6">
          {category.works.map((work) => (
            <div
              key={work.id}
              className="rounded-2xl glass-panel bg-[#151d25]/95 border border-white/10 p-5 sm:p-6 hover:border-white/20 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                {/* Optional Image Preview */}
                {work.imageUrl ? (
                  <div className="md:col-span-5 rounded-xl overflow-hidden border border-white/10 bg-[#1a2127] aspect-video sm:aspect-square flex items-center justify-center p-2 relative group/img">
                    <img
                      src={work.imageUrl}
                      alt={work.title}
                      className="max-h-full max-w-full object-contain group-hover/img:scale-105 transition-transform duration-300"
                    />
                    <a
                      href={work.imageUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-2 right-2 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[10px] font-mono text-white border border-white/20 hover:bg-black/90 flex items-center gap-1 opacity-0 group-hover/img:opacity-100 transition-opacity"
                    >
                      <span>Full View</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                ) : (
                  <div className="md:col-span-4 rounded-xl border border-dashed border-white/15 bg-black/15 aspect-video flex flex-col items-center justify-center p-4 text-center">
                    <ImageIcon className="w-8 h-8 text-slate-500 mb-2" />
                    <span className="text-xs font-mono text-slate-300">Design Preview</span>
                    <span className="text-[10px] text-slate-500 mt-1">Ready for user uploads</span>
                  </div>
                )}

                {/* Details */}
                <div className={work.imageUrl ? "md:col-span-7" : "md:col-span-8"}>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h4 className="font-display text-xl font-bold text-white">
                      {work.title}
                    </h4>
                    {work.year && (
                      <span className="text-xs font-mono text-slate-400 shrink-0">
                        {work.year}
                      </span>
                    )}
                  </div>

                  {work.subtitle && (
                    <p className="text-xs font-mono text-slate-300 mb-3">
                      {work.subtitle}
                    </p>
                  )}

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {work.description}
                  </p>

                  {/* Tool chips */}
                  {work.tools && (
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                      {work.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2.5 py-1 rounded-md bg-white/10 text-slate-200 text-[10px] font-mono border border-white/10"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
