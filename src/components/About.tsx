import React from 'react';
import { Target, Compass, Sparkles, TrendingUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  const pillars = [
    {
      title: "Data-Driven Engineering",
      desc: "Transforming raw numbers into structured models and predictive solutions using statistics and clean code.",
      icon: TrendingUp,
    },
    {
      title: "Continuous Learning",
      desc: "Rapidly mastering emerging AI tools, frameworks, and foundational computer science methodologies.",
      icon: Compass,
    },
    {
      title: "Impactful Problem Solving",
      desc: "Developing projects targeted at real-world bottlenecks, from computer vision to crowd analytics.",
      icon: Target,
    },
  ];

  return (
    <section id="about" className="py-20 border-t border-slate-200/90 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-700 uppercase tracking-widest mb-2 font-semibold">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            About Me
          </h2>
          <div className="h-1 w-12 bg-cyan-600 rounded-full mt-3" />
        </div>

        {/* Core Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Statement Box */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="text-cyan-700">01.</span> Philosophy & Aspirations
            </h3>

            <blockquote className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              "{portfolioData.personal.bio}"
            </blockquote>

            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-slate-500">
                <span className="text-slate-400 block font-medium">Current Focus</span>
                <span className="text-cyan-700 font-semibold font-mono">Foundations of Artificial Intelligence & Machine Learning</span>
              </div>
              <div className="text-xs text-slate-500">
                <span className="text-slate-400 block font-medium">Institution</span>
                <span className="text-slate-800 font-semibold">{portfolioData.education.institution}</span>
              </div>
            </div>
          </div>

          {/* Pillars List */}
          <div className="lg:col-span-5 space-y-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 hover:border-cyan-500/50 transition-all p-5 rounded-2xl flex items-start gap-4 shadow-sm group"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700 border border-cyan-100 group-hover:scale-105 transition-transform">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
