import React from 'react';
import { Languages as LanguagesIcon, Globe2 } from 'lucide-react';
import { portfolioData, LanguageItem } from '../data/portfolioData';

export const Languages: React.FC = () => {
  return (
    <section id="languages" className="py-20 border-t border-slate-200/90 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-stone-700 uppercase tracking-widest mb-2 font-semibold">
            <Globe2 className="h-3.5 w-3.5" />
            <span>Communication & Fluency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Languages
          </h2>
          <div className="h-1 w-12 bg-stone-600 rounded-full mt-3" />
        </div>

        {/* Language Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {portfolioData.languages.map((lang: LanguageItem, idx: number) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm relative overflow-hidden"
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-stone-50 text-stone-700 border border-stone-100">
                    <LanguagesIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{lang.name}</h3>
                    <p className="text-xs text-slate-500 font-medium">{lang.badge}</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold text-stone-800 bg-stone-50 border border-stone-200">
                  {lang.level}
                </span>
              </div>

              {/* Visual Proficiency Bar */}
              <div className="mt-4 space-y-1.5">
                <div className="flex justify-between text-xs font-mono text-slate-500">
                  <span>Proficiency Indicator</span>
                  <span className="text-stone-700 font-semibold">{lang.level === 'Native' ? 'Full Native Mastery' : 'Professional Working'}</span>
                </div>
                <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                  <div
                    className="h-full bg-gradient-to-r from-stone-600 to-stone-700 rounded-full transition-all duration-500"
                    style={{ width: `${lang.percentage}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
