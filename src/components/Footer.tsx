import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 border-t border-white/10 bg-black/20 text-slate-400 font-mono text-xs">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Left: Brand / Monogram */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-white font-display font-bold text-xs">
              SP
            </div>
            <span className="font-display font-medium text-white text-sm">
              {personalInfo.name}
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400 text-xs">
              {personalInfo.role}
            </span>
          </div>

          {/* Right: Copyright & Back to Top */}
          <div className="flex items-center gap-6">
            <p className="text-slate-400 text-xs">
              &copy; {new Date().getFullYear()} {personalInfo.name}
            </p>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/15 text-slate-300 hover:text-white border border-white/15 transition-colors flex items-center gap-1.5 text-xs cursor-pointer"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
