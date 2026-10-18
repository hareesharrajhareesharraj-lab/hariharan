import React, { useEffect } from 'react';
import { X, Layers, Cpu, CheckCircle2, MapPin, Camera, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onContactClick: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onContactClick }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const isMapProject = project.id === 'event-crowd-map';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative flex flex-col max-h-[90vh] w-full max-w-3xl bg-white border border-slate-300 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-white shrink-0">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700 border border-cyan-100">
              {isMapProject ? <MapPin className="h-5 w-5" /> : <Camera className="h-5 w-5" />}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">{project.title}</h3>
                <span className="text-[11px] font-mono text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200 font-medium">
                  {project.metrics}
                </span>
              </div>
              <p className="text-xs text-slate-500">Technical Case Study & Architecture Overview</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-slate-700">
          {/* Executive Summary */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-800 mb-2">Project Brief</h4>
            <p className="text-sm text-slate-800 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">
              {project.shortDesc}
            </p>
          </div>

          {/* Key Deliverables & Methodologies */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-800 mb-3 flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4" />
              Core Implementation & Contributions
            </h4>
            <ul className="space-y-2.5">
              {project.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 text-xs sm:text-sm text-slate-800">
                  <div className="h-2 w-2 rounded-full bg-cyan-600 mt-1.5 shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Architecture Breakdown */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-800 mb-3 flex items-center gap-1.5">
              <Layers className="h-4 w-4" />
              Architecture Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl">
                  <div className="text-[11px] font-mono text-cyan-700 mb-1 font-semibold">Module 0{idx + 1}</div>
                  <div className="text-xs font-medium text-slate-900">{highlight}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Stack */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-800 mb-2 flex items-center gap-1.5">
              <Cpu className="h-4 w-4" />
              Technologies Applied
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-100 text-slate-800 border border-slate-200 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200 bg-white shrink-0">
          <button
            onClick={() => {
              onClose();
              onContactClick();
            }}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-700 hover:text-cyan-800 transition-colors cursor-pointer"
          >
            Discuss this project with Hariharan <ArrowRight className="h-3.5 w-3.5" />
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
