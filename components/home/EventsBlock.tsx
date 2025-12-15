import React from 'react';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { FadeIn } from '../ui/FadeIn';

export const EventsBlock: React.FC = () => {
  return (
    <section className="bg-fashion-gray py-24 md:py-32">
      <Container>
        <div className="relative">
          {/* Background Image */}
          <FadeIn className="w-full lg:w-3/4 ml-auto h-[500px] lg:h-[600px] bg-gray-300 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1574634534894-89d7576c8259?w=1600&q=80" 
              alt="Runway event" 
              className="w-full h-full object-cover"
            />
          </FadeIn>

          {/* Floating Card */}
          <FadeIn delay={300} className="bg-white p-12 shadow-2xl max-w-lg lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-0 z-10">
            <h2 className="font-serif text-4xl mb-6">Orchestrate<br />The Moment</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Comprehensive tools for fashion weeks, private viewings, and global launches. Manage guest lists, seating, and press with military precision.
            </p>
            
            <ul className="space-y-3 mb-10">
              {['Venue Management', 'Smart Seating Charts', 'Sponsor ROI Tracking', 'Run of Show'].map((item) => (
                <li key={item} className="flex items-center text-sm font-medium">
                  <span className="w-1.5 h-1.5 bg-fashion-pink rounded-full mr-3" />
                  {item}
                </li>
              ))}
            </ul>

            <Button variant="outline">Plan an Event</Button>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
};