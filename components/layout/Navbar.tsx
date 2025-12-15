import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Container } from './Container';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#' },
    { name: 'Photography', href: '#' },
    { name: 'Portfolio', href: '#' },
    { name: 'Directory', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-fashion-cream/90 backdrop-blur-md py-4 border-b border-fashion-line' : 'bg-transparent py-6'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="font-serif text-2xl font-bold tracking-tight">
            FashionOS
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-xs uppercase tracking-widest hover:text-fashion-pink transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="#" className="text-xs uppercase tracking-widest hover:text-fashion-pink">
              Log In
            </a>
            <Button size="sm" className="rounded-full px-6">
              Sign Up
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-fashion-cream border-b border-fashion-line p-6 flex flex-col gap-4 animate-fade-in shadow-xl">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-lg font-serif hover:text-fashion-pink"
              >
                {link.name}
              </a>
            ))}
            <div className="h-px bg-fashion-line my-2" />
            <div className="flex flex-col gap-4">
              <a href="#" className="text-sm uppercase tracking-widest">Log In</a>
              <Button className="w-full">Sign Up</Button>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
};