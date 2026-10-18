import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Interests } from './components/Interests';
import { Languages } from './components/Languages';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ProjectModal } from './components/ProjectModal';
import { NeuralBackground } from './components/NeuralBackground';
import { ProjectItem } from './data/portfolioData';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#f3f4f6] text-slate-800 flex flex-col selection:bg-cyan-200 selection:text-cyan-900">
      {/* Plain Ash Background */}
      <NeuralBackground />

      {/* Sticky Navigation Bar */}
      <Navbar onResumeClick={() => setResumeOpen(true)} />

      {/* Main Single-Page Content Stream */}
      <main className="relative z-10 flex-1">
        <Hero
          onProjectsClick={() => scrollToSection('projects')}
          onContactClick={() => scrollToSection('contact')}
        />
        <About />
        <Education />
        <Skills />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Certifications />
        <Interests />
        <Languages />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Interactive Overlays */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
      
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onContactClick={() => scrollToSection('contact')}
      />
    </div>
  );
}
