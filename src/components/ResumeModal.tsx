import React, { useEffect } from 'react';
import { X, Download, Printer, Mail, Phone, MapPin, GraduationCap, Award, Code2, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative flex flex-col max-h-[92vh] w-full max-w-4xl bg-white border border-slate-300 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-white shrink-0">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-50 text-cyan-700 border border-cyan-100">
              <Download className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Curriculum Vitae Preview</h3>
              <p className="text-xs text-slate-500">Hariharan R. — AI & Data Science Candidate</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 rounded-lg border border-slate-200 transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="h-4 w-4 text-cyan-700" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Modal Printable Resume Document */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 bg-[#f8fafc] font-sans text-slate-800">
          {/* Header Strip */}
          <div className="border-b border-slate-200 pb-6 flex flex-col sm:flex-row justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                {portfolioData.personal.name}
              </h1>
              <p className="text-sm font-semibold text-cyan-700 mt-1">
                {portfolioData.personal.subtitle}
              </p>
              <p className="text-xs text-slate-600 mt-2 max-w-xl leading-relaxed">
                {portfolioData.personal.bio}
              </p>
            </div>
            <div className="space-y-1.5 text-xs text-slate-600 sm:text-right shrink-0">
              <div className="flex items-center gap-2 sm:justify-end">
                <Mail className="h-3.5 w-3.5 text-cyan-600" />
                <a href={`mailto:${portfolioData.contact.email}`} className="hover:text-cyan-700 transition-colors">
                  {portfolioData.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2 sm:justify-end">
                <Phone className="h-3.5 w-3.5 text-cyan-600" />
                <a href={`tel:${portfolioData.contact.phone}`} className="hover:text-cyan-700 transition-colors">
                  {portfolioData.contact.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2 sm:justify-end">
                <MapPin className="h-3.5 w-3.5 text-cyan-600" />
                <span>Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-2 sm:justify-end">
                <ExternalLink className="h-3.5 w-3.5 text-cyan-600" />
                <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-700 transition-colors">
                  {portfolioData.contact.linkedinDisplay}
                </a>
              </div>
            </div>
          </div>

          {/* Education */}
          <section className="space-y-3">
            <h2 className="text-xs font-bold tracking-wider text-cyan-700 uppercase flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              Education
            </h2>
            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="font-bold text-slate-900 text-sm">{portfolioData.education.institution}</h3>
                <span className="text-xs font-mono text-cyan-700 font-semibold">{portfolioData.education.duration}</span>
              </div>
              <p className="text-xs text-slate-700 font-medium mt-0.5">{portfolioData.education.degree}</p>
              <p className="text-xs text-slate-500 mt-1">{portfolioData.education.location}</p>
              <ul className="mt-2.5 space-y-1 text-xs text-slate-600 list-disc list-inside">
                {portfolioData.education.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="space-y-3">
            <h2 className="text-xs font-bold tracking-wider text-cyan-700 uppercase flex items-center gap-2">
              <Code2 className="h-4 w-4" />
              Technical Proficiencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {portfolioData.skillCategories.map((cat, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-xl p-3.5 shadow-xs">
                  <h4 className="text-xs font-bold text-slate-700 mb-2">{cat.category}</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((s, si) => (
                      <span key={si} className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="space-y-3">
            <h2 className="text-xs font-bold tracking-wider text-cyan-700 uppercase flex items-center gap-2">
              <Award className="h-4 w-4" />
              Key Technical Projects
            </h2>
            <div className="space-y-3">
              {portfolioData.projects.map((proj) => (
                <div key={proj.id} className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-sm font-bold text-slate-900">{proj.title}</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {proj.tags.map((t, ti) => (
                        <span key={ti} className="text-[11px] text-cyan-700 font-mono font-semibold">
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ul className="mt-2.5 space-y-1.5 text-xs text-slate-700">
                    {proj.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-2">
                        <span className="text-cyan-600 font-bold leading-tight">›</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications & Languages */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h2 className="text-xs font-bold tracking-wider text-cyan-700 uppercase mb-3">
                Certifications
              </h2>
              <div className="space-y-2">
                {portfolioData.certifications.map((c, ci) => (
                  <div key={ci} className="bg-white border border-slate-200 rounded-xl p-3 shadow-xs">
                    <p className="text-xs font-bold text-slate-900">{c.title}</p>
                    <p className="text-[11px] text-slate-500 font-medium">{c.issuer} {c.date ? `· ${c.date}` : ''}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xs font-bold tracking-wider text-cyan-700 uppercase mb-3">
                Languages
              </h2>
              <div className="space-y-2">
                {portfolioData.languages.map((l, li) => (
                  <div key={li} className="bg-white border border-slate-200 rounded-xl p-3 flex justify-between items-center shadow-xs">
                    <span className="text-xs font-bold text-slate-900">{l.name}</span>
                    <span className="text-xs font-mono text-cyan-700 font-semibold">{l.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-3.5 border-t border-slate-200 bg-white shrink-0">
          <p className="text-xs text-slate-500">
            Direct Inquiry: <a href={`mailto:${portfolioData.contact.email}`} className="text-cyan-700 font-medium hover:underline">{portfolioData.contact.email}</a>
          </p>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
