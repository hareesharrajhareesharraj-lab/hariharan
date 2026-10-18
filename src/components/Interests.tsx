import React from 'react';
import { Code, BookOpen, Camera, Gamepad2, Headphones, Compass, Sparkles } from 'lucide-react';
import { portfolioData, InterestItem } from '../data/portfolioData';

const interestIconMap: Record<string, React.ElementType> = {
  Code,
  BookOpen,
  Camera,
  Gamepad2,
  Headphones,
};

export const Interests: React.FC = () => {
  return (
    <section id="interests" className="py-20 border-t border-slate-200/90 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-700 uppercase tracking-widest mb-2 font-semibold">
            <Compass className="h-3.5 w-3.5" />
            <span>Beyond Academics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Interests & Hobbies
          </h2>
          <div className="h-1 w-12 bg-cyan-600 rounded-full mt-3" />
          <p className="text-sm text-slate-600 mt-4">
            Curiosities that sharpen analytical thinking, creativity, visual observation, and focused endurance.
          </p>
        </div>

        {/* 5-Card Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {portfolioData.interests.map((interest: InterestItem, idx: number) => {
            const Icon = interestIconMap[interest.iconName] || Sparkles;

            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md rounded-2xl p-5 flex flex-col justify-between transition-all duration-200 group shadow-xs"
              >
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 text-cyan-700 border border-slate-200 group-hover:bg-cyan-50 group-hover:border-cyan-200 transition-colors mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                    {interest.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {interest.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] font-mono text-cyan-700 font-medium">
                  Focus Area 0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
