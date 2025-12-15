import React from 'react';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { FadeIn } from '../ui/FadeIn';

export const ProductionBand: React.FC = () => {
  const steps = [
    { num: '01', title: 'Book', desc: 'Select talent & dates' },
    { num: '02', title: 'Plan', desc: 'Shot lists & moodboards' },
    { num: '03', title: 'Shoot', desc: 'Live capture integration' },
    { num: '04', title: 'Deliver', desc: 'Instant retouch & approval' },
  ];

  return (
    <section className="bg-fashion-dark-blue text-white py-24">
      <Container>
        <FadeIn className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl mb-4">Production, Simplified.</h2>
            <p className="text-gray-400 font-light">From concept to call sheet in one workflow.</p>
          </div>
          <Button variant="white">Start a Shoot</Button>
        </FadeIn>

        <FadeIn delay={200} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="group relative border-t border-white/20 pt-8 hover:border-fashion-pink transition-colors duration-300">
              <span className="text-4xl font-serif text-white/10 absolute top-4 right-0 group-hover:text-fashion-pink/20 transition-colors">
                {step.num}
              </span>
              <h3 className="text-xl font-serif mb-2">{step.title}</h3>
              <p className="text-sm text-gray-400">{step.desc}</p>
            </div>
          ))}
        </FadeIn>
      </Container>
    </section>
  );
};