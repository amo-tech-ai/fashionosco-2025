import React from 'react';
import { Container } from '../layout/Container';
import { FadeIn } from '../ui/FadeIn';

export const SocialCommerce: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-fashion-pink/5 to-transparent">
      <Container>
        <FadeIn className="text-center mb-16">
          <div className="w-12 h-1 bg-fashion-pink mx-auto mb-6" />
          <h2 className="font-serif text-4xl">Social Commerce Intelligence</h2>
          <p className="mt-4 text-gray-600">Turn your content into revenue. Automated tagging, scheduling, and performance analytics.</p>
        </FadeIn>

        <FadeIn delay={200} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "AI Captioning", desc: "Generates on-brand copy for every platform instantly." },
            { title: "Product Tagging", desc: "Syncs visual assets with your Shopify catalog." },
            { title: "Multi-Channel", desc: "One-click publish to Instagram, TikTok, and Pinterest." }
          ].map((card, i) => (
            <div key={i} className="bg-white border border-fashion-line p-8 hover:shadow-lg transition-shadow duration-300">
               <h3 className="font-serif text-lg font-bold mb-3">{card.title}</h3>
               <p className="text-sm text-gray-500">{card.desc}</p>
            </div>
          ))}
        </FadeIn>
        
        <FadeIn delay={400} className="mt-12 flex justify-center">
            <button className="px-8 py-3 border border-fashion-line bg-white text-xs uppercase tracking-widest hover:border-fashion-black transition-colors">
                Launch a Campaign
            </button>
        </FadeIn>
      </Container>
    </section>
  );
};