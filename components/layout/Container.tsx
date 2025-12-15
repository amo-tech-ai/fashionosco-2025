import React from 'react';
import { cn } from '../../lib/cn';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={cn("mx-auto w-full max-w-[1400px] px-6 md:px-12", className)}>
      {children}
    </div>
  );
};