import React from 'react';
import { Mail, FolderGit2, Sparkles, Database, Brain, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface HeroProps {
  onProjectsClick: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onProjectsClick, onContactClick }) => {
  return (
    <section id="home" className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center pt-8 pb-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        {/* Split Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            {/* Ambient Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200/90 text-slate-700 text-xs font-mono tracking-wide shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-stone-600" />
              <span className="font-semibold text-slate-900">AI & Data Science Undergrad</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-600">Class of 2029</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                {portfolioData.personal.name}
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-stone-700">
                {portfolioData.personal.subtitle}
              </p>
            </div>

            {/* Tagline & Short Bio */}
            <p className="text-base sm:text-lg text-slate-700 max-w-2xl leading-relaxed font-normal">
              {portfolioData.personal.tagline}
            </p>

            <p className="text-sm text-slate-600 max-w-xl leading-relaxed">
              Undergraduate at {portfolioData.education.institution}, specializing in machine learning algorithms,
              exploratory data analysis, and computer vision systems.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <button
                onClick={onProjectsClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-stone-600 hover:bg-stone-700 rounded-xl shadow-md shadow-stone-600/20 transition-all duration-150 cursor-pointer active:scale-95 whitespace-nowrap"
              >
                <FolderGit2 className="h-4 w-4" />
                <span>View Projects</span>
              </button>

              <button
                onClick={onContactClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 hover:text-slate-900 rounded-xl border border-slate-300/80 shadow-xs transition-all duration-150 cursor-pointer active:scale-95 whitespace-nowrap"
              >
                <Mail className="h-4 w-4 text-stone-600" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Quick Micro-Credentials Unboxed Strip */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-600 font-mono">
              <span className="flex items-center gap-1.5 text-slate-800 font-medium">
                <Brain className="h-3.5 w-3.5 text-stone-600" /> Machine Learning
              </span>
              <span className="text-slate-300">·</span>
              <span className="flex items-center gap-1.5 text-slate-800 font-medium">
                <Database className="h-3.5 w-3.5 text-stone-600" /> Data Analytics
              </span>
              <span className="text-slate-300">·</span>
              <span className="flex items-center gap-1.5 text-slate-800 font-medium">
                <Cpu className="h-3.5 w-3.5 text-stone-600" /> Computer Vision
              </span>
            </div>
          </div>

          {/* Right Column: Profile Image / Geometric Tech Avatar Placeholder */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Geometric Orbiting Tech Ring SVG */}
              <svg className="absolute -inset-6 w-[calc(100%+3rem)] h-[calc(100%+3rem)] pointer-events-none opacity-50 animate-[spin_60s_linear_infinite]" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="94" fill="none" stroke="#78716c" strokeWidth="0.8" strokeDasharray="4 6" />
                <circle cx="100" cy="100" r="82" fill="none" stroke="#94a3b8" strokeWidth="0.5" strokeDasharray="1 8" />
              </svg>

              {/* Profile Card / Avatar Container */}
              <div className="relative h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80 rounded-full p-2 bg-white border border-slate-200 shadow-xl flex items-center justify-center overflow-hidden">
                {portfolioData.personal.avatarUrl ? (
                  <img
                    src={portfolioData.personal.avatarUrl}
                    alt={portfolioData.personal.avatarAlt}
                    className="h-full w-full rounded-full object-cover object-[50%_20%]"
                  />
                ) : (
                  /* Stylized AI & Data Science Profile Visual Placeholder */
                  <div className="relative h-full w-full rounded-full bg-slate-50 flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden border border-slate-100">
                    {/* Tech Background Grid Lines */}
                    <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
                    
                    {/* Centered Avatar Monogram & Icon */}
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="relative flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-full bg-white border-2 border-stone-500/40 shadow-sm">
                        <Brain className="h-10 w-10 sm:h-12 sm:w-12 text-stone-600" />
                        <span className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-stone-600 text-white text-[11px] font-bold shadow-xs">
                          AI
                        </span>
                      </div>
                      
                      <div className="mt-3">
                        <p className="text-sm font-bold text-slate-900 tracking-wide">Hariharan R.</p>
                        <p className="text-[11px] text-stone-700 font-mono mt-0.5 font-medium">B.E. AI & Data Science</p>
                      </div>

                      {/* Informative placeholder helper label */}
                      <span className="mt-2 text-[10px] text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                        Profile Photo Placeholder
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Floating Academic Badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-auto sm:-right-4 z-20 bg-white/95 backdrop-blur-md border border-slate-200 px-3.5 py-2 rounded-xl shadow-lg flex items-center gap-2.5 whitespace-nowrap">
                <div className="h-2 w-2 rounded-full bg-stone-600 animate-ping" />
                <div className="text-[11px] text-slate-700">
                  <span className="text-stone-700 font-semibold">M.A.M. College of Engg.</span>
                  <span className="text-slate-500 block text-[10px]">Tamil Nadu, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Metrics & Highlights Strip Below Hero */}
        <div className="mt-16 pt-8 border-t border-slate-200/90 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white border border-slate-200/90 p-4 rounded-xl shadow-xs">
            <p className="text-xs text-slate-500 font-medium">Academic Focus</p>
            <p className="text-base font-bold text-slate-900 mt-1">AI & Data Science</p>
            <p className="text-[11px] text-stone-700 font-mono mt-0.5 font-medium">B.E. 2025–2029</p>
          </div>
          <div className="bg-white border border-slate-200/90 p-4 rounded-xl shadow-xs">
            <p className="text-xs text-slate-500 font-medium">Core Technologies</p>
            <p className="text-base font-bold text-slate-900 mt-1">Python & ML</p>
            <p className="text-[11px] text-stone-700 font-mono mt-0.5 font-medium">OpenCV · Pandas</p>
          </div>
          <div className="bg-white border border-slate-200/90 p-4 rounded-xl shadow-xs">
            <p className="text-xs text-slate-500 font-medium">Certifications</p>
            <p className="text-base font-bold text-slate-900 mt-1">Anthropic Verified</p>
            <p className="text-[11px] text-stone-700 font-mono mt-0.5 font-medium">Claude 101 & Fluency</p>
          </div>
          <div className="bg-white border border-slate-200/90 p-4 rounded-xl shadow-xs">
            <p className="text-xs text-slate-500 font-medium">Project Disciplines</p>
            <p className="text-base font-bold text-slate-900 mt-1">CV & Crowd Mapping</p>
            <p className="text-[11px] text-stone-700 font-mono mt-0.5 font-medium">Real-world Impact</p>
          </div>
        </div>
      </div>
    </section>
  );
};
