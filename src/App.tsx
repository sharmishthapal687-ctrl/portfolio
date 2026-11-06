import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeTicker } from './components/MarqueeTicker';
import { BentoGrid } from './components/BentoGrid';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { projectsData } from './data/portfolioData';

export function App() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const selectedProject = projectsData.find((p) => p.id === selectedProjectId) || null;

  return (
    <div className="min-h-screen bg-[#222b32] text-slate-100 slate-vignette relative">
      {/* Global Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Dynamic Infinite Marquee Ribbon */}
        <MarqueeTicker />

        {/* Bento Grid: Snapshot & Categorized Works */}
        <BentoGrid />

        {/* Featured Projects with Filter Tabs */}
        <ProjectsSection onSelectProject={(id) => setSelectedProjectId(id)} />

        {/* Skills & Technical Competencies */}
        <SkillsSection />

        {/* Journey, Leadership & Education */}
        <ExperienceSection />

        {/* Contact & Inquiries */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProjectId(null)}
      />
    </div>
  );
}

export default App;
