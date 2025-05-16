// src/components/animated-section.tsx
'use client';
import { cn } from '@/lib/utils';
import React, { useEffect, useState, useRef, ReactNode } from 'react';

interface AnimatedSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  delay?: number; // in ms
  animationClass?: 'animate-fadeInUp' | 'animate-fadeIn' | 'animate-slideInFromLeft' | 'animate-slideInFromRight' | 'animate-scaleFadeInUp';
  threshold?: number;
  once?: boolean; // if true, animation only runs once
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  delay = 0,
  animationClass = 'animate-fadeInUp',
  threshold = 0.1,
  once = true,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          if (once && sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        } else {
          if (!once) {
            setIsVisible(false);
          }
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: threshold,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay, threshold, once, animationClass]);

  return (
    <div
      ref={sectionRef}
      className={cn(
        'opacity-0', // Initial state for all animations
        isVisible && animationClass,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
