import React from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '../../lib/cn';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // in ms
  duration?: number;
}

export const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  className, 
  delay = 0,
  duration = 700
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px', // Trigger slightly before it's fully in view
  });

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-out transform",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
        className
      )}
      style={{ 
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms` 
      }}
    >
      {children}
    </div>
  );
};