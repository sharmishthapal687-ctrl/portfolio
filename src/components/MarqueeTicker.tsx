import React from 'react';
import { Sparkles, Layers, Cpu, Palette, Award, Shirt, Compass } from 'lucide-react';

export const MarqueeTicker: React.FC = () => {
  const items = [
    { label: 'UI/UX & Product Design', icon: Layers },
    { label: 'ECE @ Galgotias (GCET)', icon: Cpu },
    { label: 'Top 5 AI Day Noida (Synapse)', icon: Award },
    { label: 'Creatrix, Enthiran & GFG Coordinator', icon: Sparkles },
    { label: '@underbuilt_ Graphic & Posters', icon: Palette },
    { label: 'Apparel & Merchandise Design', icon: Shirt },
    { label: 'Brand Identity & Logos', icon: Compass },
    { label: 'ESP32 Telemetry & IoT Hardware', icon: Cpu },
  ];

  return (
    <div className="relative py-3.5 border-y border-white/10 bg-[#12181f]/85 backdrop-blur-md overflow-hidden select-none">
      {/* Side gradient fades */}
      <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-[#222b32] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-[#222b32] to-transparent z-10 pointer-events-none" />
      
      {/* Infinite scrolling marquee ribbon */}
      <div className="flex animate-marquee gap-8 items-center text-xs font-mono">
        {[...items, ...items].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div 
              key={idx} 
              className="flex items-center gap-2.5 text-slate-300 whitespace-nowrap hover:text-amber-300 transition-colors cursor-default group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.9)] group-hover:scale-125 transition-transform" />
              <Icon className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-300 transition-colors" />
              <span className="tracking-wider uppercase font-medium text-[11px]">{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
