import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, FigmaIcon, InstagramIcon } from './Icons';
import { Mail, Copy, Check, ArrowUpRight, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const connectOptions = [
    {
      name: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: <Mail className="w-5 h-5 text-slate-200" />,
      actionLabel: copied ? 'Copied!' : 'Copy',
      isCopy: true,
      onAction: handleCopyEmail,
    },
    {
      name: 'LinkedIn',
      value: 'sharmishtha-pal',
      href: personalInfo.links.linkedin,
      icon: <LinkedinIcon className="w-5 h-5 text-slate-200" />,
      actionLabel: 'Connect',
      isCopy: false,
    },
    {
      name: 'GitHub',
      value: 'sharmishthapal687-ctrl',
      href: personalInfo.links.github,
      icon: <GithubIcon className="w-5 h-5 text-slate-200" />,
      actionLabel: 'Follow',
      isCopy: false,
    },
    {
      name: 'Instagram',
      value: '@underbuilt_',
      href: personalInfo.links.instagram,
      icon: <InstagramIcon className="w-5 h-5 text-slate-200" />,
      actionLabel: 'View Work',
      isCopy: false,
    },
    {
      name: 'Figma',
      value: 'UI & Concepts',
      href: personalInfo.links.figma,
      icon: <FigmaIcon className="w-5 h-5 text-slate-200" />,
      actionLabel: 'Explore',
      isCopy: false,
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-slate-400/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 md:px-6">
        
        {/* Section Header - Clean & Centered */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-mono tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-slate-400" />
            <span>Connect</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Let's build something together.
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Whether you have an internship opportunity, a freelance project, design inquiries, or just want to discuss ideas, feel free to reach out.
          </p>
        </div>

        {/* Unified Connecting Channels Grid - Darker obsidian glass with warm side glow and dynamic hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {connectOptions.map((item) => (
            <div
              key={item.name}
              className="p-4 rounded-2xl glass-panel bg-[#141b22]/95 border border-white/10 hover:border-white/20 hover:bg-[#18212a] hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 flex items-center justify-between group"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-amber-400/15 group-hover:border-amber-400/40 group-hover:scale-110 transition-all duration-300">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    {item.name}
                  </span>
                  <span className="text-sm font-medium text-white truncate block group-hover:text-amber-200 transition-colors">
                    {item.value}
                  </span>
                </div>
              </div>

              {item.isCopy ? (
                <button
                  onClick={item.onAction}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/15 hover:border-amber-400/40 active:scale-95 text-xs font-mono transition-all flex items-center gap-1.5 shrink-0 ml-2 cursor-pointer"
                  title="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-amber-400" />
                      <span className="text-amber-300 font-medium">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-300" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              ) : (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/20 text-slate-300 hover:text-white border border-white/10 hover:border-amber-400/40 active:scale-95 transition-all shrink-0 ml-2 group/btn"
                  aria-label={`Open ${item.name}`}
                >
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover/btn:text-amber-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
