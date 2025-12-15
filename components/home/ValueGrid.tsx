import React from 'react';
import { Camera, Layers, Calendar, Image as ImageIcon, ShoppingBag, Users } from 'lucide-react';
import { Container } from '../layout/Container';
import { FadeIn } from '../ui/FadeIn';

export const ValueGrid: React.FC = () => {
  const features = [
    {
      icon: <Camera size={24} />,
      title: "Creative Services",
      desc: "Book photographers, stylists, and studios instantly."
    },
    {
      icon: <Layers size={24} />,
      title: "Shoots & Production",
      desc: "Manage call sheets, shot lists, and assets in one place."
    },
    {
      icon: <Calendar size={24} />,
      title: "Events & Runway",
      desc: "Guest lists, seating charts, and backstage coordination."
    },
    {
      icon: <ImageIcon size={24} />,
      title: "Media Intelligence",
      desc: "Centralized DAM with AI tagging and usage rights."
    },
    {
      icon: <ShoppingBag size={24} />,
      title: "Commerce",
      desc: "Seamless integration with Shopify and wholesale platforms."
    },
    {
      icon: <Users size={24} />,
      title: "Wholesale",
      desc: "Digital showrooms connecting designers with global buyers."
    },
  ];

  return (
    <section className="py-24 bg-white">
      <Container>
        <FadeIn className="mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            One Platform.<br />
            Every Fashion Workflow.
          </h2>
          <div className="h-1 w-24 bg-fashion-black" />
        </FadeIn>

        <FadeIn delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-fashion-line border border-fashion-line">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className="bg-white p-10 hover:bg-fashion-cream transition-colors group cursor-pointer"
              >
                <div className="mb-6 text-fashion-black group-hover:text-fashion-pink transition-colors">
                  {feature.icon}
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};