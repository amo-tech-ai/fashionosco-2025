import React from 'react';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { FadeIn } from '../ui/FadeIn';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Content */}
          <FadeIn className="space-y-8 relative z-10">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1]">
              The Operating System for <br />
              <span className="text-fashion-black">Fashion</span>{" "}
              <span className="text-fashion-pink italic font-serif">Intelligence</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 font-light max-w-md leading-relaxed">
              Runway to Retail • Creative to Commerce • AI-Driven Features
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg">Sign Up</Button>
              <Button variant="outline" size="lg">View Demo</Button>
            </div>
          </FadeIn>

          {/* Right Collage */}
          <FadeIn delay={300} className="relative h-[600px] w-full hidden md:block">
            {/* Image 1: Main vertical */}
            <div className="absolute top-0 right-0 w-[60%] h-[500px] bg-gray-200 z-10 overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=80" 
                alt="High fashion model" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Image 2: Lower left overlap */}
            <div className="absolute bottom-0 left-10 w-[45%] h-[350px] bg-gray-200 z-20 overflow-hidden shadow-xl border-8 border-fashion-cream">
              <img 
                src="https://images.unsplash.com/photo-1520975958225-9d23f6c688f1?w=1200&q=80" 
                alt="Editorial shoot" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Image 3: Background accent */}
            <div className="absolute top-20 left-0 w-[40%] h-[300px] bg-gray-200 z-0 opacity-80 overflow-hidden grayscale">
              <img 
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80" 
                alt="Runway detail" 
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>

          {/* Mobile Only Image */}
          <FadeIn delay={200} className="md:hidden mt-8">
            <img 
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80" 
              alt="Fashion model" 
              className="w-full h-[500px] object-cover"
            />
          </FadeIn>

        </div>
      </Container>
    </section>
  );
};