import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowDown, ArrowUpRight, Palette, Cpu, Sparkles, MessageSquare } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden slate-vignette">
      {/* Dynamic atmospheric ambient glow with smooth floating keyframe animations */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[700px] h-[350px] bg-slate-400/10 blur-[140px] rounded-full pointer-events-none -z-10 animate-float-1" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[320px] bg-amber-400/10 blur-[130px] rounded-full pointer-events-none -z-10 animate-float-2" />

      <div className="max-w-6xl mx-auto px-4 md:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Text & CTA (7 cols) */}
          <div className="lg:col-span-7">
            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
              Designing for humans. <br />
              <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                Building with code & design.
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-4">
              Hey, I'm <strong className="text-white font-semibold">{personalInfo.name}</strong>. A 2nd-year Electronics & Communication Engineering undergraduate at <em>Galgotias College of Engineering & Technology</em>.
            </p>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mb-8">
              I combine UI/UX design, poster/graphic design (under <span className="text-white font-mono">@underbuilt_</span>), frontend development, and IoT hardware to create meaningful, human-first digital products.
            </p>

            {/* Action Buttons: Artoo Frosted & Solid White with dynamic hover & active feedback */}
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-white text-[#161e25] font-semibold text-sm hover:bg-slate-100 hover:shadow-xl hover:shadow-black/40 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 flex items-center gap-2 cursor-pointer group"
              >
                <span>Explore Works</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl bg-[#141b22]/90 hover:bg-[#1a232c] text-white border border-white/15 hover:border-white/30 hover:shadow-lg hover:-translate-y-0.5 active:scale-95 text-sm font-medium transition-all duration-200 flex items-center gap-2 cursor-pointer group"
              >
                <MessageSquare className="w-4 h-4 text-slate-300 group-hover:text-amber-300 transition-colors" />
                <span>Connect With Me</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-amber-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Photo Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group max-w-sm w-full">
              {/* Soft Slate & Golden Outer Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-amber-400/25 via-white/10 to-amber-500/25 blur-xl opacity-70 group-hover:opacity-100 transition duration-500" />

              <div className="relative rounded-3xl glass-panel bg-[#141b22]/95 border-white/15 p-3 overflow-hidden shadow-2xl hover:-translate-y-2 transition-all duration-300">
                {/* Photo */}
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#0d1217]">
                  <img
                    src={personalInfo.avatarUrl}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1419]/90 via-transparent to-transparent" />

                  {/* On-image badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono">
                    <div className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/15 text-slate-200">
                      <span>GCET // ECE</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/15 backdrop-blur-md border border-white/20 text-white">
                      <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.9)] animate-pulse" />
                      <span>Coordinator</span>
                    </div>
                  </div>
                </div>

                {/* Sub-card snippet */}
                <div className="p-3 pt-4 flex items-center justify-between text-xs font-mono text-slate-400">
                  <div>
                    <span className="text-white font-semibold block">{personalInfo.name}</span>
                    <span className="text-[11px] text-slate-400">Creatrix • Enthiran • GFG</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-white/10 text-slate-300 border border-white/10 text-[10px]">
                    2025–2029
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Focus Pillars Banner - Darker obsidian glass with hover lift and warm side glow */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-8 border-t border-white/10">
          <div className="p-4 rounded-2xl glass-panel bg-[#141b22]/92 border border-white/10 hover:border-white/20 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 group cursor-default">
            <div className="flex items-center gap-2 text-white mb-1.5">
              <Palette className="w-4 h-4 text-slate-300 group-hover:text-amber-400 group-hover:scale-110 transition-all duration-300" />
              <span className="text-xs font-mono font-semibold tracking-wide">UI/UX & BRANDING</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">Figma, Canva, posters, logos & t-shirt merchandise</p>
          </div>

          <div className="p-4 rounded-2xl glass-panel bg-[#141b22]/92 border border-white/10 hover:border-white/20 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 group cursor-default">
            <div className="flex items-center gap-2 text-white mb-1.5">
              <Cpu className="w-4 h-4 text-slate-300 group-hover:text-amber-400 group-hover:scale-110 transition-all duration-300" />
              <span className="text-xs font-mono font-semibold tracking-wide">ECE & HARDWARE</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">ESP32 telemetry, ThingSpeak IoT & Technical Enthiran</p>
          </div>

          <div className="p-4 rounded-2xl glass-panel bg-[#141b22]/92 border border-white/10 hover:border-white/20 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 group cursor-default">
            <div className="flex items-center gap-2 text-white mb-1.5">
              <Sparkles className="w-4 h-4 text-slate-300 group-hover:text-amber-400 group-hover:scale-110 transition-all duration-300" />
              <span className="text-xs font-mono font-semibold tracking-wide">CAMPUS LEADERSHIP</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">Creatrix, Enthiran & GFG Coordinator • Event Emcee</p>
          </div>
        </div>

      </div>
    </section>
  );
};
