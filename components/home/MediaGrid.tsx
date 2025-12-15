import React from 'react';
import { Container } from '../layout/Container';
import { FadeIn } from '../ui/FadeIn';

export const MediaGrid: React.FC = () => {
  const categories = ['All', 'Shoots', 'Events', 'Social', 'Campaigns'];
  const images = [
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&q=80",
    "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?w=500&q=80",
    "https://images.unsplash.com/photo-1502989642968-94fbdc9eace4?w=500&q=80",
    "https://images.unsplash.com/photo-1550614000-4b9519e02d48?w=500&q=80",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500&q=80",
    "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?w=500&q=80",
    "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=500&q=80",
    "https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=500&q=80"
  ];

  return (
    <section className="py-24 bg-white">
      <Container>
        <FadeIn className="text-center mb-16">
          <h2 className="font-serif text-4xl mb-4">Intelligent Media Library</h2>
          <p className="text-gray-500 mb-8">Stop digging through Dropbox. AI-powered tagging for every asset.</p>
          
          <div className="flex flex-wrap justify-center gap-6">
            {categories.map((cat, i) => (
              <button 
                key={cat}
                className={`text-xs uppercase tracking-widest pb-1 border-b-2 transition-colors ${i === 0 ? 'border-fashion-black text-fashion-black' : 'border-transparent text-gray-400 hover:text-fashion-black'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={200} className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {images.map((src, i) => (
            <div key={i} className="aspect-square overflow-hidden group relative cursor-pointer">
              <img 
                src={src} 
                alt="Media asset" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-fashion-black/0 group-hover:bg-fashion-black/20 transition-colors duration-300" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xs uppercase tracking-wider">
                View Asset
              </div>
            </div>
          ))}
        </FadeIn>
        
        <FadeIn delay={400} className="mt-12 text-center">
            <a href="#" className="text-xs uppercase tracking-widest border-b border-fashion-black pb-1 hover:text-fashion-pink hover:border-fashion-pink transition-colors">View Media Library</a>
        </FadeIn>
      </Container>
    </section>
  );
};