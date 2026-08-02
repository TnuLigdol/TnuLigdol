'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

type Animation = 'slideInRight' | 'slideInUp' | 'fadeInUp';

interface AnimateInProps {
  animation: Animation;
  /** Delay in ms before the animation starts, matching Elementor's `_animation_delay`. */
  delay?: number;
  className?: string;
  children: React.ReactNode;
}

/**
 * Replicates Elementor's entrance-animation behaviour: the element renders
 * with `visibility: hidden` and plays its animate.css keyframes the first time
 * it scrolls into view.
 */
export function AnimateIn({
  animation,
  delay = 0,
  className,
  children,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        className,
        shown ? `e-animated e-animated-${animation}` : 'e-invisible',
      )}
      style={shown && delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
