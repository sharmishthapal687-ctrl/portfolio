import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Menu, X, ArrowUpRight, Download } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#bento' },
    { name: 'Projects', href: '#projects' },
    { name: 'Toolkit', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-all duration-300">
      <div 
        className={`max-w-6xl mx-auto rounded-2xl transition-all duration-300 px-4 md:px-6 py-3 flex items-center justify-between ${
          scrolled 
            ? 'glass-panel shadow-2xl shadow-black/60 bg-[#12181f]/92 border-white/10 backdrop-blur-xl' 
            : 'bg-[#141b22]/75 border border-white/10 backdrop-blur-md'
        }`}
      >
        {/* Brand / Monogram */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-300 font-display font-bold text-xs tracking-wider group-hover:scale-105 group-hover:bg-amber-400/25 transition-all">
            SP
          </div>
          <div className="flex flex-col">
            <span className="font-display font-semibold text-sm tracking-tight text-white group-hover:text-amber-200 transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-[10px] font-mono text-slate-400 tracking-wider">
              PORTFOLIO // 2026
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-black/40 p-1.5 rounded-xl border border-white/10 text-xs font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 rounded-lg hover:text-white hover:bg-white/10 transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action / Status */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] text-slate-300 font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.9)]"></span>
            </span>
            <span>Available for Work</span>
          </div>

          <a
            href={personalInfo.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/15 hover:border-amber-400/40 hover:-translate-y-0.5 active:scale-95 font-medium text-xs transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-slate-300" />
            <span>Resume</span>
          </a>

          <a
            href="#contact"
            className="px-4 py-2 rounded-xl bg-white text-[#12181f] font-semibold text-xs hover:bg-slate-100 hover:shadow-xl hover:shadow-black/40 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 flex items-center gap-1.5 cursor-pointer"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-white/10 border border-white/15 text-slate-300 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-6xl mx-auto rounded-2xl glass-panel bg-[#222b32]/95 border-white/10 p-5 shadow-2xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center gap-2 pb-3 border-b border-white/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span className="text-xs font-mono text-slate-300">Available for projects & internships</span>
          </div>

          <div className="flex flex-col gap-1.5 py-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex gap-2">
            <a
              href={personalInfo.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 text-center py-2.5 rounded-xl bg-white/10 border border-white/15 text-white font-medium text-xs tracking-wide hover:bg-white/15 transition-colors flex items-center justify-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5 text-slate-300" />
              <span>Resume</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 text-center py-2.5 rounded-xl bg-white text-[#222b32] font-semibold text-xs tracking-wide hover:bg-slate-100 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
