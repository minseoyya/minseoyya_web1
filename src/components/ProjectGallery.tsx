import { useRef, useState, useEffect } from 'react';
import type { MediaItem } from '@/types';

interface ProjectGalleryProps {
  media: MediaItem[];
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
        }}
      >
      {media.map((item, index) => (
        <div
          key={item.id}
          className="flex-shrink-0 snap-center"
          style={{ maxWidth: '1000px' }} // 필요 없으면 삭제 가능
        >
          <div className="relative overflow-hidden h-[520px] flex items-center justify-center leading-none">
            {item.type === 'video' ? (
              <video
                src={item.url}
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-auto max-w-none object-contain"
              />
            ) : (
              <img
                src={item.url}
                alt={item.alt || ''}
                className="h-full w-auto max-w-none object-contain"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            )}
          </div>
        </div>
      ))}

      </div>

      {/* Navigation Arrows */}
      {canScrollLeft && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
          aria-label="Scroll left"
        >
          <svg
            className="w-5 h-5 text-neutral-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}

      {canScrollRight && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
          aria-label="Scroll right"
        >
          <svg
            className="w-5 h-5 text-neutral-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
