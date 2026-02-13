import { useRef, useEffect, useState } from 'react';
import type { Project } from '@/types';
import { ProjectGallery } from './ProjectGallery';

interface ProjectSectionProps {
  project: Project;
  index: number;
  isActive: boolean;
  onEnter: () => void;
}

export function ProjectSection({
  project,
  index,
  isActive: _isActive,
  onEnter,
}: ProjectSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            onEnter();
          } else {
            // Only set invisible if it's scrolled far away
            if (entry.intersectionRatio < 0.1) {
              setIsVisible(false);
            }
          }
        });
      },
      {
        threshold: [0.1, 0.5, 0.8],
        rootMargin: '-10% 0px -10% 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [onEnter]);

  return (
    <section
      ref={sectionRef}
      id={project.id}
      className="min-h-screen flex flex-col justify-center py-20 md:py-24"
    >
      <div className="w-full px-6 md:px-10 lg:px-16">
        {/* Project Header */}
        <div
          className={`mb-8 md:mb-12 transition-all duration-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-8">
            {/* Left: Number & Title */}
            <div className="flex items-start gap-4 md:gap-6">
              <span className="text-sm text-neutral-400 font-mono mt-2">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-neutral-900 tracking-tight">
                  {project.title}
                </h2>
                <p className="text-neutral-500 mt-2 text-sm md:text-base">
                  {project.category}
                </p>
              </div>
            </div>

            {/* Right: Year & Description */}
            <div className="md:text-right md:max-w-md">
              <span className="text-sm text-neutral-400">{project.year}</span>
              <p className="text-neutral-600 mt-2 text-sm md:text-base leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div
          className={`transition-all duration-700 delay-200 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <ProjectGallery media={project.media} />
        </div>

        {/* Media Count */}
        <div
          className={`mt-6 flex items-center gap-4 text-sm text-neutral-400 transition-all duration-700 delay-300 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <span>
            {project.media.length} items (
            {project.media.filter((m) => m.type === 'video').length} videos,{' '}
            {project.media.filter((m) => m.type === 'image').length} images)
          </span>
        </div>
      </div>
    </section>
  );
}
