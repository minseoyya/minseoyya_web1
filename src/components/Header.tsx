import { useState, useEffect } from 'react';
import type { Project } from '@/types';

interface HeaderProps {
  projects: Project[];
  activeProjectId: string | null;
  onProjectClick: (projectId: string) => void;
}

export function Header({ projects, activeProjectId, onProjectClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-neutral-100'
          : 'bg-white/50 backdrop-blur-sm md:bg-transparent'
        }`}
    >
      <div className="w-full px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo / Title */}
          <div className="flex-shrink-0">
            <h1 className="text-4xl md:text-2xl font-black tracking-tight text-neutral-900 uppercase">
              MINSEOKIM
            </h1>
          </div>

          {/* Project Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => onProjectClick(project.id)}
                className={`px-3 py-1.5 text-sm transition-all duration-300 rounded-full ${activeProjectId === project.id
                    ? 'bg-neutral-900 text-white'
                    : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100'
                  }`}
              >
                {String(index + 1).padStart(2, '0')}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Indicator */}
          <div className="md:hidden text-sm text-neutral-500">
            {activeProjectId
              ? String(
                projects.findIndex((p) => p.id === activeProjectId) + 1
              ).padStart(2, '0') +
              ' / ' +
              String(projects.length).padStart(2, '0')
              : `${String(projects.length).padStart(2, '0')} Works`}
          </div>
        </div>
      </div>

      {/* Mobile Project Navigation - Horizontal Scroll */}
      <div className="md:hidden overflow-x-auto scrollbar-hide border-t border-neutral-100">
        <div className="flex items-center gap-1 px-6 py-2">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => onProjectClick(project.id)}
              className={`flex-shrink-0 px-3 py-1.5 text-sm transition-all duration-300 rounded-full ${activeProjectId === project.id
                  ? 'bg-neutral-900 text-white'
                  : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100'
                }`}
            >
              {String(index + 1).padStart(2, '0')}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
