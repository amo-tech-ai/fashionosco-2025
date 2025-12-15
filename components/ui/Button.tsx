import React from 'react';
import { cn } from '../../lib/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  children,
  ...props 
}) => {
  const variants = {
    primary: "bg-fashion-black text-white hover:bg-gray-800 border border-transparent",
    outline: "bg-transparent border border-fashion-black text-fashion-black hover:bg-fashion-black hover:text-white",
    ghost: "bg-transparent text-fashion-black hover:text-fashion-pink",
    white: "bg-white text-fashion-black hover:bg-gray-100 border border-transparent"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs uppercase tracking-wider",
    md: "px-6 py-3 text-sm uppercase tracking-widest",
    lg: "px-8 py-4 text-sm uppercase tracking-[0.2em]",
  };

  return (
    <button 
      className={cn(
        "inline-flex items-center justify-center transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};