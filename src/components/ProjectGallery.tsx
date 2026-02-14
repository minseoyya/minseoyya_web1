import { useRef, useState, useEffect } from 'react';
import type { MediaItem } from '@/types';

interface ProjectGalleryProps {
  media: MediaItem[];
}

function GalleryItem({ item, index }: { item: MediaItem; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isVisible) {
        videoRef.current.play().catch(() => {
          // Auto-play might be blocked by browser
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVisible]);

  return (
    <div
      ref={containerRef}
      className="flex-shrink-0 snap-center"
      style={{ maxWidth: '100vw' }}
    >
      <div className="relative overflow-hidden h-[350px] sm:h-[450px] md:h-[600px] lg:h-[700px] flex items-center justify-center leading-none">
        {item.type === 'video' ? (
          <video
            ref={videoRef}
            src={item.url}
            muted
            loop
            playsInline
            preload="metadata"
            className="h-full w-auto max-w-none object-contain transition-opacity duration-700"
            style={{ opacity: isVisible ? 1 : 0.8 }}
          />
        ) : (
          <img
            src={item.url}
            alt={item.alt || ''}
            className="h-full w-auto max-w-none object-contain"
            loading={index === 0 ? 'eager' : 'lazy'}
            decoding="async"
          />
        )}
      </div>
    </div>
  );
}

export function ProjectGallery({ media }: ProjectGalleryProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollability, { passive: true });
      checkScrollability();
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScrollability);
      }
    };
  }, [media]);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = container.clientWidth * 0.8;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative group">
      {/* Scroll Container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {media.map((item, index) => (
          <GalleryItem key={item.id} item={item} index={index} />
        ))}
      </div>

      {/* Navigation Arrows - Hidden on touch devices usually, but kept for desktop */}
      <div className="hidden md:block">
        {canScrollLeft && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {canScrollRight && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

