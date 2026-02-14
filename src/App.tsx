import { useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from '@/components/Header';
import { ProjectSection } from '@/components/ProjectSection';
import { projects } from '@/data/projects';
import { CVPage } from '@/pages/CV';
import './App.css';

function Home() {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  const handleProjectClick = useCallback((projectId: string) => {
    const element = document.getElementById(projectId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleProjectEnter = useCallback((projectId: string) => {
    setActiveProjectId(projectId);
  }, []);

  return (

    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <Header
        projects={projects}
        activeProjectId={activeProjectId}
        onProjectClick={handleProjectClick}
      />

      {/* Main Content */}
      <main>
        {/* Fullscreen Hero */}
        <section className="relative overflow-hidden h-[100dvh] bg-white flex items-center justify-center">
          <img
            src="/images/header2.jpg"
            alt="Hero Image"
            className="w-full h-full object-contain md:object-cover"
            fetchPriority="high"
          />

          <div className="absolute inset-0" />

          <div className="hidden md:block absolute top-32 md:top-20 left-6 md:left-16 right-6 text-black z-10 transition-all duration-300">
            <h1 className="text-base md:text-2xl font-bold leading-relaxed max-w-xl">
            </h1>
          </div>
        </section>


        {/* Projects */}
        <div className="border-t border-neutral-100">
          {projects.map((project, index) => (
            <ProjectSection
              key={project.id}
              project={project}
              index={index}
              isActive={activeProjectId === project.id}
              onEnter={() => handleProjectEnter(project.id)}
            />
          ))}
        </div>

        {/* Footer */}
        <footer className="py-16 md:py-24 px-6 md:px-10 lg:px-16 border-t border-neutral-100">




          <div className="mt-16 pt-8 border-t border-neutral-100 flex flex-col md:flex-row items-start text-sm text-neutral-400">
            <h1 className="text-xl md:text-2xl font-bold">
              Graphic designer based in Korea specialized in 3D & Ai.<nav></nav>
              Focused on connecting technology, concept,<nav></nav>
              and visual language into unified one project.
            </h1>
          </div>
          <div className="mt-16 pt-8 border-t border-neutral-100 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-400">
            <span>© 2025 Minseoyya. All rights reserved.</span>
            <div className="flex items-center gap-6">
              <a href="https://www.instagram.com/c352008/" className="hover:text-neutral-900 transition-colors">
                Instagram_Work
              </a>
              <a href="https://www.instagram.com/minseoyya_/" className="hover:text-neutral-900 transition-colors">
                Instagram_Social
              </a>
              <a href="www.linkedin.com/in/minseoyya" className="hover:text-neutral-900 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

        </footer>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CVPage />} />
      </Routes>
    </Router>
  );
}

export default App;
