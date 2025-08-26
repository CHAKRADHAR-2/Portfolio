
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, Code, Zap, Cpu, Database, Globe, Sparkles } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(textRef, { once: true });
  
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const floatingIcons = [
    { icon: Code, color: 'text-portfolio-primary', delay: 0 },
    { icon: Zap, color: 'text-portfolio-gold', delay: 1 },
    { icon: Cpu, color: 'text-portfolio-secondary', delay: 2 },
    { icon: Database, color: 'text-portfolio-emerald', delay: 3 },
    { icon: Globe, color: 'text-portfolio-accent', delay: 4 },
  ];

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-portfolio-dark via-portfolio-dark-light to-portfolio-dark"
    >
      {/* Elegant Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-portfolio-primary/5 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-conic from-portfolio-secondary/5 via-transparent to-portfolio-accent/5" />
      
      {/* Floating 3D Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-portfolio-primary/20 to-portfolio-secondary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-portfolio-accent/20 to-portfolio-emerald/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-portfolio-gold/10 to-portfolio-rose/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />

      {/* Floating Tech Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute text-3xl ${item.color} animate-float-3d`}
          style={{
            left: `${20 + index * 15}%`,
            top: `${30 + (index % 2) * 40}%`,
            animationDelay: `${item.delay}s`,
          }}
          whileHover={{ scale: 1.5, rotate: 360 }}
          transition={{ duration: 0.3 }}
        >
          <item.icon />
        </motion.div>
      ))}

      {/* Main Content */}
      <motion.div 
        ref={textRef}
        className="container mx-auto px-6 text-center relative z-10"
        style={{ y, opacity }}
      >
        {/* Profile Image with 3D Effect */}
        <motion.div 
          className="mb-12 relative"
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
        >
          <div className="relative w-64 h-80 mx-auto">
            {/* 3D Rotating Frame */}
            <div className="absolute inset-0 rounded-2xl border-2 border-portfolio-primary/30 animate-rotate-3d" style={{ animationDuration: '20s' }} />
            <div className="absolute inset-2 rounded-2xl border-2 border-portfolio-secondary/30 animate-rotate-3d" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
            <div className="absolute inset-4 rounded-2xl border-2 border-portfolio-accent/30 animate-rotate-3d" style={{ animationDuration: '25s' }} />
            
            {/* Profile Image */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden elegant-border hover-lift">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face" 
                alt="Chakradhar Somisetty"
                className="w-full h-full object-cover"
              />
              {/* Elegant Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-portfolio-primary/20 via-transparent to-portfolio-secondary/20" />
            </div>
            
            {/* Pulse Effect */}
            <div className="absolute inset-0 rounded-2xl bg-portfolio-primary/20 animate-pulse" />
          </div>
        </motion.div>

        {/* Main Title with Elegant Typography */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-white font-playfair">Hello, I'm</span>
            <br />
            <span className="gradient-text font-playfair">
              Chakradhar Somisetty
            </span>
          </h1>
        </motion.div>

        {/* Animated Subtitle */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6"
        >
          <p className="text-2xl md:text-3xl text-portfolio-primary font-semibold mb-4 flex items-center justify-center gap-2">
            <Sparkles className="w-8 h-8" />
            Full-Stack Web Developer
            <Sparkles className="w-8 h-8" />
          </p>
          <p className="text-xl text-portfolio-secondary font-medium">
            Crafting Digital Experiences with Precision & Innovation
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Passionate about creating elegant, high-performance web applications that deliver 
          exceptional user experiences. Specializing in modern technologies and innovative solutions.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              onClick={() => scrollToSection('portfolio')}
              className="primary-button text-lg px-10 py-4 group"
            >
              <span className="relative z-10">View Portfolio</span>
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="elegant-border text-lg px-10 py-4 bg-transparent text-portfolio-primary border-portfolio-primary hover:bg-portfolio-primary hover:text-white transition-all duration-300 group"
            >
              <span>Get In Touch</span>
            </Button>
          </motion.div>
        </motion.div>

        {/* Tech Stack Preview */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {['React', 'TypeScript', 'Node.js', 'Three.js', 'GSAP', 'Framer Motion'].map((tech, index) => (
            <motion.span
              key={tech}
              className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white text-sm font-medium hover-lift"
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(99, 102, 241, 0.1)' }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2 + index * 0.1, type: "spring" }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-8 h-8 text-portfolio-primary animate-pulse" />
      </motion.div>

      {/* Mouse Follower Effect */}
      <motion.div
        className="fixed w-4 h-4 bg-portfolio-primary rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
    </section>
  );
};

export default Hero;
