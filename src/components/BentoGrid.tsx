import React, { useState } from 'react';
import { designCategoriesData } from '../data/portfolioData';
import { DesignCategory } from '../types';
import { CategoryWorksModal } from './CategoryWorksModal';
import { 
  Sparkles, 
  Layers, 
  Palette, 
  Megaphone, 
  Shirt, 
  Compass, 
  ArrowUpRight 
} from 'lucide-react';

export const BentoGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<DesignCategory | null>(null);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'festive-posters':
        return <Sparkles className="w-5 h-5 text-amber-300" />;
      case 'ui-ux':
        return <Layers className="w-5 h-5 text-cyan-300" />;
      case 'creative-posters':
        return <Palette className="w-5 h-5 text-purple-300" />;
      case 'promotional':
        return <Megaphone className="w-5 h-5 text-emerald-300" />;
      case 't-shirts':
        return <Shirt className="w-5 h-5 text-pink-300" />;
      case 'logos':
        return <Compass className="w-5 h-5 text-blue-300" />;
      default:
        return <Sparkles className="w-5 h-5 text-slate-300" />;
    }
  };

  return (
    <section id="bento" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-slate-300 font-mono text-xs tracking-widest uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5 text-slate-400" />
              <span>Interactive Snapshot</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              The Builder Matrix
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Click into any discipline below to view curated works without visual clutter.
          </p>
        </div>

        {/* Layout: First Box (Core Synthesis) + 6 Categorized Works Boxes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* First Box: Philosophy & Stack Snippet (5 cols) - Deep obsidian with warm side glow */}
          <div className="lg:col-span-5 rounded-3xl glass-panel bg-[#131a21]/95 p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between border border-white/10 hover:border-white/20 hover:-translate-y-1.5 transition-all duration-300 shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-md bg-white/10 text-slate-200 font-mono text-[11px] border border-white/10">
                  DESIGN_ENGINEERING // CORE
                </span>
                <span className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.9)] animate-pulse" />
                  Dual Discipline
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
                Where Visual Identity Meets Digital Ergonomics
              </h3>
            </div>

            {/* Interactive code snippet */}
            <div className="rounded-xl bg-[#0b1015]/95 border border-white/10 p-3.5 font-mono text-xs text-slate-300 mt-auto shadow-inner">
              <div className="flex items-center justify-between mb-2 pb-2 border-b border-white/10 text-[11px] text-slate-400">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <span>sharmishtha_stack.ts</span>
              </div>
              <div className="space-y-1 text-[11.5px] leading-relaxed">
                <p><span className="text-slate-400">const</span> <span className="text-amber-300">profile</span> = <span className="text-slate-200">defineBuilder</span>({'{'}</p>
                <p className="pl-4">design: <span className="text-slate-300">['Figma', 'Canva', 'Posters', 'Logos', 'T-Shirts']</span>,</p>
                <p className="pl-4">frontend: <span className="text-slate-300">['React 19', 'Tailwind v4', 'HTML5/CSS3']</span>,</p>
                <p className="pl-4">hardware: <span className="text-slate-300">['ESP32', 'Sensors', 'ThingSpeak', 'ECE']</span>,</p>
                <p className="pl-4">leadership: <span className="text-white">['Creatrix', 'Enthiran', 'GFG', 'Event Host']</span></p>
                <p>{'})'};</p>
              </div>
            </div>
          </div>

          {/* Right: 6 Small Categorized Boxes (7 cols) - Darker obsidian with dynamic lift & glow */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
            {designCategoriesData.map((cat) => (
              <div
                key={cat.id}
                onClick={() => setSelectedCategory(cat)}
                className="p-5 rounded-2xl glass-panel bg-[#141b22]/95 border border-white/10 hover:border-white/20 hover:bg-[#18212a] hover:-translate-y-2 hover:shadow-2xl active:scale-[0.98] transition-all duration-300 cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-amber-400/15 group-hover:border-amber-400/40 group-hover:scale-110 transition-all duration-300">
                      {getCategoryIcon(cat.id)}
                    </div>
                    <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-amber-300 group-hover:bg-white/10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <h4 className="font-display text-base font-bold text-white mb-1 group-hover:text-amber-200 transition-colors">
                    {cat.name}
                  </h4>
                  <p className="text-[11px] text-slate-400 leading-snug line-clamp-2">
                    {cat.shortDesc}
                  </p>
                </div>

                <div className="pt-3 mt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span className="text-white font-medium group-hover:text-amber-300 group-hover:underline">Click to view</span>
                  <span className="group-hover:text-slate-300">{cat.works.length} {cat.works.length === 1 ? 'work' : 'works'}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Interactive Category Works Modal */}
      <CategoryWorksModal
        category={selectedCategory}
        onClose={() => setSelectedCategory(null)}
      />
    </section>
  );
};
