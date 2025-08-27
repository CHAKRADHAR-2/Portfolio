
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';

const Index = () => {
  useEffect(() => {
    // Add custom cursor effect
    const cursor = document.createElement('div');
    cursor.className = 'fixed w-4 h-4 bg-portfolio-primary rounded-full pointer-events-none z-50 mix-blend-difference';
    document.body.appendChild(cursor);

    const cursorFollower = document.createElement('div');
    cursorFollower.className = 'fixed w-8 h-8 border border-portfolio-primary rounded-full pointer-events-none z-50 mix-blend-difference';
    document.body.appendChild(cursorFollower);

    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX - 8 + 'px';
      cursor.style.top = e.clientY - 8 + 'px';
      
      cursorFollower.style.left = e.clientX - 16 + 'px';
      cursorFollower.style.top = e.clientY - 16 + 'px';
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.body.removeChild(cursor);
      document.body.removeChild(cursorFollower);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-portfolio-dark via-portfolio-dark-light to-portfolio-dark relative overflow-x-hidden">
      {/* Global Background Effects */}
      <div className="fixed inset-0 bg-gradient-radial from-portfolio-primary/5 via-transparent to-transparent" />
      <div className="fixed inset-0 bg-gradient-conic from-portfolio-secondary/5 via-transparent to-portfolio-accent/5" />
      
      {/* Floating Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-portfolio-primary/10 to-portfolio-secondary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-portfolio-accent/10 to-portfolio-emerald/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-portfolio-gold/10 to-portfolio-rose/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Main Content */}
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Contact />
      
      {/* Elegant Footer */}
      <footer className="relative bg-gradient-to-t from-portfolio-dark via-portfolio-dark-light to-transparent py-12 overflow-hidden">
        {/* Footer Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-portfolio-primary/5 via-transparent to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            {/* Logo */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-3 text-3xl font-bold">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-portfolio-primary to-portfolio-secondary p-1 animate-rotate-3d">
                  <div className="w-full h-full rounded-full bg-portfolio-dark flex items-center justify-center">
                    <span className="text-2xl">✨</span>
                  </div>
                </div>
                <span className="gradient-text font-playfair">Chakradhar</span>
              </div>
            </div>
            
            {/* Copyright */}
            <p className="text-gray-400 mb-4 font-medium">
              © 2024 Chakradhar Somisetty. All rights reserved.
            </p>
            
            {/* Tagline */}
            <p className="text-gray-500 font-medium text-sm">
              Crafted with precision and innovation.
            </p>
            
            {/* Divider */}
            <div className="mt-8 w-full h-px bg-gradient-to-r from-transparent via-portfolio-primary to-transparent" />
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-portfolio-primary rounded-full animate-float" />
        <div className="absolute top-20 right-20 w-1 h-1 bg-portfolio-secondary rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-10 left-1/4 w-1.5 h-1.5 bg-portfolio-accent rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-portfolio-emerald rounded-full animate-float" style={{ animationDelay: '3s' }} />
      </footer>
    </div>
  );
};

export default Index;
