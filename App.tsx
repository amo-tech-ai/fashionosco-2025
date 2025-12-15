import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/home/Hero';
import { ValueGrid } from './components/home/ValueGrid';
import { Talent } from './components/home/Talent';
import { ProductionBand } from './components/home/ProductionBand';
import { EventsBlock } from './components/home/EventsBlock';
import { MediaGrid } from './components/home/MediaGrid';
import { DigitalExperiences } from './components/home/DigitalExperiences';
import { SocialCommerce } from './components/home/SocialCommerce';
import { Personas } from './components/home/Personas';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ValueGrid />
        <Talent />
        <ProductionBand />
        <EventsBlock />
        <MediaGrid />
        <DigitalExperiences />
        <SocialCommerce />
        <Personas />
      </main>
      <Footer />
    </div>
  );
}

export default App;