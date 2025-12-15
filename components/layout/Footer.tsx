import React from 'react';
import { Container } from './Container';
import { Button } from '../ui/Button';
import { Instagram, Twitter, Linkedin, Zap } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-fashion-dark-blue text-white relative pt-48 pb-12 mt-24">
      {/* Floating CTA */}
      <div className="absolute top-0 left-0 right-0 -translate-y-1/2">
        <Container>
            <div className="bg-fashion-cream text-fashion-black p-12 md:p-20 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="text-xs uppercase tracking-widest text-gray-500">Free to Join</span>
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl mb-4">Create Your <br/>FashionOS Profile</h2>
                    <ul className="space-y-2 text-gray-600 text-sm">
                        <li>• Get discovered through events</li>
                        <li>• Understand your brand with AI</li>
                        <li>• Manage everything from one dashboard</li>
                    </ul>
                </div>
                
                <div className="flex flex-col items-center gap-4">
                     <div className="w-64 h-32 bg-gray-200 overflow-hidden relative group">
                        <img 
                            src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&q=80" 
                            className="w-full h-full object-cover"
                            alt="Preview"
                        />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-white text-xs uppercase tracking-widest">View Sample</span>
                        </div>
                     </div>
                     <Button className="w-full">Get Started</Button>
                </div>
            </div>
        </Container>
      </div>

      <Container>
        <div className="flex flex-col items-center text-center mb-24">
            <Zap className="text-yellow-600 mb-6" size={40} />
            <h2 className="font-serif text-5xl md:text-6xl text-white mb-6">
                Fashion, Powered by <br/>
                <span className="text-yellow-600 italic">Intelligence</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 font-light">
                <span>• Predictive Forecasting</span>
                <span>• Automated Retouching</span>
                <span>• Dynamic Pricing</span>
                <span>• Sustainability Tracking</span>
            </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/10 pt-16">
            <div>
                <h4 className="font-serif text-lg mb-6">About</h4>
                <ul className="space-y-4 text-sm text-gray-400">
                    <li className="hover:text-white cursor-pointer transition-colors">Our Story</li>
                    <li className="hover:text-white cursor-pointer transition-colors">Team</li>
                    <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
                    <li className="hover:text-white cursor-pointer transition-colors">Press</li>
                </ul>
            </div>
            <div>
                <h4 className="font-serif text-lg mb-6">Review Versions</h4>
                <ul className="space-y-4 text-sm text-gray-400">
                    <li className="hover:text-white cursor-pointer transition-colors">Home V1 (Original)</li>
                    <li className="hover:text-white cursor-pointer transition-colors">Home V2 (Minimal)</li>
                    <li className="hover:text-white cursor-pointer transition-colors">Home V3 (Luxury)</li>
                </ul>
            </div>
             <div className="col-span-2">
                <h4 className="font-serif text-lg mb-6">Newsletter</h4>
                <p className="text-sm text-gray-400 mb-4">Insights from the intersection of fashion and technology.</p>
                <div className="flex border-b border-white/30 pb-2">
                    <input type="email" placeholder="Enter your email" className="bg-transparent w-full outline-none text-white placeholder-gray-600" />
                    <button className="text-xs uppercase tracking-widest hover:text-fashion-pink">Subscribe</button>
                </div>
            </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-24 text-xs text-gray-600 border-t border-white/5 pt-8">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
                <span className="font-serif text-lg text-white/50">FashionOS</span>
                <span>© 2025 FashionOS. All rights reserved.</span>
            </div>
            <div className="flex gap-6">
                <Instagram size={16} className="hover:text-white cursor-pointer" />
                <Twitter size={16} className="hover:text-white cursor-pointer" />
                <Linkedin size={16} className="hover:text-white cursor-pointer" />
            </div>
        </div>
      </Container>
    </footer>
  );
};