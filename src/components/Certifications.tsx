import React from 'react';
import { Award, Calendar, ShieldCheck } from 'lucide-react';
import { portfolioData, CertificationItem } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 border-t border-slate-200/90 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-700 uppercase tracking-widest mb-2 font-semibold">
            <Award className="h-3.5 w-3.5" />
            <span>Credentials & Verification</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Certifications
          </h2>
          <div className="h-1 w-12 bg-cyan-600 rounded-full mt-3" />
          <p className="text-sm text-slate-600 mt-4">
            Industry recognized coursework and certifications in generative AI, prompt engineering, and modern analytics.
          </p>
        </div>

        {/* Certifications 3-Card Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioData.certifications.map((cert: CertificationItem, idx: number) => {
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all duration-200 group relative overflow-hidden"
              >
                <div className="space-y-4">
                  {/* Top Badge & Issuer */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700 border border-cyan-100 group-hover:scale-105 transition-transform">
                      <Award className="h-5 w-5" />
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 font-medium">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      <span>Verified</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-semibold text-cyan-700 mt-1 font-mono">
                      {cert.issuer}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {cert.description}
                  </p>
                </div>

                {/* Footer Date if available */}
                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
                  {cert.date ? (
                    <span className="flex items-center gap-1.5 text-slate-700 font-medium">
                      <Calendar className="h-3.5 w-3.5 text-cyan-600" />
                      {cert.date}
                    </span>
                  ) : (
                    <span className="text-slate-400">Official Coursework</span>
                  )}
                  <span className="text-cyan-700 font-medium">Anthropic Ecosystem</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
