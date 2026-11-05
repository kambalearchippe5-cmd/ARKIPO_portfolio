import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { CyberLab } from './components/CyberLab';
import { ProjectsSection } from './components/ProjectsSection';
import { RootsSection } from './components/RootsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('arkipo_theme');
      if (saved) return saved === 'dark';
      return true; // Default to sleek dark mode for developer / cybersecurity portfolio
    }
    return true;
  });

  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('arkipo_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('arkipo_theme', 'light');
    }
  }, [darkMode]);

  const handleOpenContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-emerald-500 selection:text-white transition-colors duration-200">
      
      {/* Top Bar Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenContact={handleOpenContact}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          onOpenContact={handleOpenContact}
          onOpenResume={() => setResumeModalOpen(true)}
        />
        
        <AboutSection />

        <SkillsSection />

        <CyberLab />

        <ProjectsSection />

        <RootsSection />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenResume={() => setResumeModalOpen(true)}
        onOpenContact={handleOpenContact}
      />

      {/* CV Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

    </div>
  );
}
