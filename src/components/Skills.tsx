import React, { useState } from 'react';
import {
  Code2,
  Terminal,
  Cpu,
  Database,
  FileSpreadsheet,
  BrainCircuit,
  BarChart3,
  Layout,
  Lightbulb,
  Layers
} from 'lucide-react';
import { portfolioData, SkillCategory, SkillItem } from '../data/portfolioData';

// Dynamic icon mapper for skills
const iconMap: Record<string, React.ElementType> = {
  Code2,
  Terminal,
  Cpu,
  Database,
  FileSpreadsheet,
  BrainCircuit,
  BarChart3,
  Layout,
  Lightbulb,
};

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = portfolioData.skillCategories;

  const filteredCategories =
    activeCategory === 'all'
      ? categories
      : categories.filter((c) => c.category === activeCategory);

  return (
    <section id="skills" className="py-20 border-t border-slate-200/90 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="flex flex-col items-start max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-700 uppercase tracking-widest mb-2 font-semibold">
              <Layers className="h-3.5 w-3.5" />
              <span>Competency Matrix</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Technical Skills
            </h2>
            <div className="h-1 w-12 bg-cyan-600 rounded-full mt-3" />
          </div>

          {/* Interactive Filter Control Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-xl shadow-xs">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeCategory === 'all'
                  ? 'bg-slate-100 text-cyan-800 font-semibold border border-slate-200/80 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Skills
            </button>
            {categories.map((c) => (
              <button
                key={c.category}
                onClick={() => setActiveCategory(c.category)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  activeCategory === c.category
                    ? 'bg-slate-100 text-cyan-800 font-semibold border border-slate-200/80 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {c.category}
              </button>
            ))}
          </div>
        </div>

        {/* Categorized Skills Grid */}
        <div className="space-y-8">
          {filteredCategories.map((cat: SkillCategory) => (
            <div
              key={cat.category}
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-slate-100 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full bg-cyan-600" />
                    {cat.category}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {cat.description}
                  </p>
                </div>
                <span className="text-xs font-mono text-cyan-700 font-medium shrink-0">
                  {cat.skills.length} {cat.skills.length === 1 ? 'skill' : 'skills'}
                </span>
              </div>

              {/* Skill Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {cat.skills.map((skill: SkillItem) => {
                  const Icon = iconMap[skill.iconName] || Code2;
                  return (
                    <div
                      key={skill.name}
                      className="bg-slate-50 border border-slate-200/90 hover:border-cyan-500/50 hover:bg-white p-4 rounded-xl transition-all duration-200 group flex items-start gap-3.5 shadow-2xs hover:shadow-xs"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-cyan-700 border border-slate-200 group-hover:bg-cyan-50 group-hover:border-cyan-200 transition-colors">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-sm font-bold text-slate-900 group-hover:text-cyan-700 transition-colors truncate">
                          {skill.name}
                        </h4>
                        {skill.level && (
                          <p className="text-[11px] text-slate-500 mt-0.5 font-mono truncate">
                            {skill.level}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
