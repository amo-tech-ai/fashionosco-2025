import React from 'react';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { Globe } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';

export const DigitalExperiences: React.FC = () => {
  return (
    <section className="py-24 bg-fashion-cream overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Mockup */}
          <FadeIn className="w-full lg:w-1/2 relative">
             <div className="bg-white p-4 shadow-2xl rounded-sm transform lg:-rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80" 
                    alt="Store builder" 
                    className="w-full h-auto aspect-video object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
             </div>
             <div className="absolute -bottom-10 -right-10 w-48 h-64 bg-black border-4 border-white shadow-xl hidden lg:block overflow-hidden transform lg:rotate-6">
                <img 
                    src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80" 
                    alt="Mobile view" 
                    className="w-full h-full object-cover"
                />
             </div>
          </FadeIn>

          {/* Content */}
          <FadeIn delay={200} className="w-full lg:w-1/2 lg:pl-12">
            <Globe className="text-gray-400 mb-6" size={32} />
            <h2 className="font-serif text-4xl lg:text-5xl mb-6">Flagship Digital Experiences</h2>
            <p className="text-gray-600 text-lg mb-8">
                High-conversion fashion sites, lookbooks, and launch pages. Built to handle the traffic of a global drop.
            </p>
            <Button>Build Your Website</Button>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
};