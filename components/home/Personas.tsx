import React from 'react';
import { Container } from '../layout/Container';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';

export const Personas: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-fashion-line">
      <Container>
        <FadeIn className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Designers */}
          <div className="group cursor-pointer border border-fashion-line p-12 hover:border-fashion-black transition-colors">
            <h3 className="font-serif text-3xl mb-4">For Designers</h3>
            <p className="text-gray-500 mb-8 max-w-sm">
              Showcase your collections to a global network of vetted retailers and buyers.
            </p>
            <div className="flex items-center text-xs uppercase tracking-widest font-semibold group-hover:translate-x-2 transition-transform">
              Explore Opportunities <ArrowRight size={14} className="ml-2" />
            </div>
          </div>

          {/* Buyers */}
          <div className="group cursor-pointer border border-fashion-line p-12 hover:border-fashion-black transition-colors">
            <h3 className="font-serif text-3xl mb-4">For Buyers</h3>
            <p className="text-gray-500 mb-8 max-w-sm">
              Discover emerging talent and place wholesale orders directly through the platform.
            </p>
            <div className="flex items-center text-xs uppercase tracking-widest font-semibold group-hover:translate-x-2 transition-transform">
              Join the Network <ArrowRight size={14} className="ml-2" />
            </div>
          </div>

        </FadeIn>
      </Container>
    </section>
  );
};