import React from 'react';
import { MapPin, Camera, ChevronRight, Sparkles } from 'lucide-react';
import { portfolioData, ProjectItem } from '../data/portfolioData';

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="py-20 border-t border-slate-200/90 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-700 uppercase tracking-widest mb-2 font-semibold">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Applied Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Featured Projects
          </h2>
          <div className="h-1 w-12 bg-cyan-600 rounded-full mt-3" />
          <p className="text-sm text-slate-600 mt-4">
            Hands-on implementations demonstrating practical machine learning, computer vision, and geospatial data visualization.
          </p>
        </div>

        {/* Projects 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {portfolioData.projects.map((project: ProjectItem, idx: number) => {
            const isMap = project.id === 'event-crowd-map';

            return (
              <div
                key={project.id}
                className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all duration-200 group relative overflow-hidden"
              >
                <div>
                  {/* Top Bar inside card */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700 border border-cyan-100 group-hover:scale-105 transition-transform">
                        {isMap ? <MapPin className="h-6 w-6" /> : <Camera className="h-6 w-6" />}
                      </div>
                      <div>
                        <span className="text-[11px] font-mono text-cyan-700 font-semibold block">Project 0{idx + 1}</span>
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag: string, tIdx: number) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-100 text-slate-700 border border-slate-200/80 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bullet Points */}
                  <div className="space-y-3 mb-6">
                    {project.bullets.map((bullet: string, bIdx: number) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <span className="text-cyan-700 font-bold mt-0.5 leading-none">›</span>
                        <p className="leading-relaxed">{bullet}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action & Highlights Footer */}
                <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-xs font-mono text-slate-500">
                    <span className="text-slate-400 block text-[10px]">Specialization</span>
                    <span className="text-cyan-700 font-medium">{project.metrics}</span>
                  </div>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl border border-slate-200/90 transition-colors cursor-pointer group/btn shadow-2xs"
                  >
                    <span>View Details</span>
                    <ChevronRight className="h-4 w-4 text-cyan-700 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
