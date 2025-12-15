import React from 'react';
import { Container } from '../layout/Container';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { FadeIn } from '../ui/FadeIn';

export const Talent: React.FC = () => {
  const images = [
    "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=800&q=80",
    "https://images.unsplash.com/photo-1502163140606-888448ae8cfe?w=800&q=80",
    "https://images.unsplash.com/photo-1534126511673-b6899657816a?w=800&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80"
  ];

  return (
    <section className="py-24 bg-fashion-cream">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-6xl mb-8">
              World-Class<br />
              Creative Talent
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-md">
              Access a curated network of industry professionals. From editorial photographers to set designers, build your dream team in minutes.
            </p>

            <ul className="space-y-6 mb-12">
              {[
                "Photography",
                "Video Production",
                "Web Design",
                "AI Marketing"
              ].map((item, i) => (
                <li key={i} className="flex items-center group cursor-pointer border-b border-fashion-line pb-4">
                  <ArrowRight size={16} className="mr-4 text-fashion-pink opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="text-xs uppercase tracking-widest font-semibold">{item}</span>
                </li>
              ))}
            </ul>

            <Button>Book a Service</Button>
          </FadeIn>

          <FadeIn delay={200} className="grid grid-cols-2 gap-4">
            <div className="space-y-4 translate-y-12">
               <img src={images[0]} alt="Talent 1" className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-500" />
               <div className="w-full aspect-square bg-fashion-line/30 flex items-center justify-center">
                  <span className="font-serif italic text-fashion-line text-4xl">.01</span>
               </div>
            </div>
            <div className="space-y-4">
               <div className="w-full aspect-square bg-fashion-black flex items-center justify-center p-6">
                 <p className="text-white font-serif text-center italic">"The team delivered the campaign 3 days early."</p>
               </div>
               <img src={images[1]} alt="Talent 2" className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
};