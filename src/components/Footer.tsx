import React from 'react';
import { Mail, Linkedin, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200/90 bg-[#e9ecef] relative z-10 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-stone-600 to-stone-700 text-[11px] font-bold text-white shadow-xs">
                HR
              </div>
              <span className="text-base font-bold text-slate-900 tracking-tight">
                {portfolioData.personal.name}
              </span>
            </div>
            <p className="text-xs text-slate-600 mt-1.5 font-medium">
              {portfolioData.footer.tagline}
            </p>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-white border border-slate-300 text-slate-700 hover:text-stone-700 hover:border-stone-400 transition-colors shadow-2xs"
              title="Send an Email"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>

            <a
              href={portfolioData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-white border border-slate-300 text-slate-700 hover:text-stone-700 hover:border-stone-400 transition-colors shadow-2xs"
              title="LinkedIn Profile"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>

            <div className="h-4 w-px bg-slate-300" />

            <button
              onClick={scrollToTop}
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-white border border-slate-300 text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer shadow-2xs"
              title="Back to Top"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-slate-300/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p className="font-medium">{portfolioData.footer.copyright}</p>
          <div className="flex items-center gap-4 text-xs font-mono">
            <span>{portfolioData.education.institution}</span>
            <span>·</span>
            <span>Tamil Nadu, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
