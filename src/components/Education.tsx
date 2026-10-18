import React from 'react';
import { GraduationCap, Calendar, MapPin, BookCheck, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Education: React.FC = () => {
  const edu = portfolioData.education;

  return (
    <section id="education" className="py-20 border-t border-slate-200/90 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-700 uppercase tracking-widest mb-2 font-semibold">
            <GraduationCap className="h-3.5 w-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Education
          </h2>
          <div className="h-1 w-12 bg-cyan-600 rounded-full mt-3" />
        </div>

        {/* Academic Card */}
        <div className="max-w-4xl bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700 border border-cyan-100 shadow-xs">
                <GraduationCap className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  {edu.institution}
                </h3>
                <p className="text-sm sm:text-base font-semibold text-cyan-700 mt-1">
                  {edu.degree}
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-2.5 text-xs text-slate-500 font-mono">
                  <span className="flex items-center gap-1.5 text-slate-700">
                    <MapPin className="h-3.5 w-3.5 text-cyan-600" />
                    {edu.location}
                  </span>
                  <span className="text-slate-300">·</span>
                  <span className="flex items-center gap-1.5 text-slate-700">
                    <Calendar className="h-3.5 w-3.5 text-cyan-600" />
                    {edu.duration}
                  </span>
                </div>
              </div>
            </div>

            {/* Status Pill */}
            <div className="shrink-0 self-start">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-mono font-medium">
                <ShieldCheck className="h-3.5 w-3.5" />
                {edu.status}
              </span>
            </div>
          </div>

          {/* Academic Highlights & Focus Areas */}
          <div className="pt-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
              <BookCheck className="h-4 w-4 text-cyan-600" />
              Curriculum & Specialized Study Focus
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {edu.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl flex flex-col justify-between"
                >
                  <span className="text-[11px] font-mono text-cyan-700 mb-1.5 font-semibold">Track 0{idx + 1}</span>
                  <p className="text-xs text-slate-700 leading-relaxed font-normal">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
