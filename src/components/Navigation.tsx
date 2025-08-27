
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, Sparkles } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'services', 'portfolio', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👤' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'services', label: 'Services', icon: '🔧' },
    { id: 'portfolio', label: 'Portfolio', icon: '💼' },
    { id: 'contact', label: 'Contact', icon: '📧' },
  ];

  return (
    <motion.nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-2xl border-b border-portfolio-primary/20' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, type: "spring" }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="text-2xl font-bold gradient-text font-playfair"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-2">
              <Sparkles className="w-8 h-8 text-portfolio-primary" />
              <span>Chakradhar</span>
            </span>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'text-portfolio-primary bg-portfolio-primary/10 border border-portfolio-primary/30' 
                    : 'text-gray-600 hover:text-portfolio-primary hover:bg-portfolio-primary/5'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </span>
                
                {/* Active indicator */}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute inset-0 rounded-lg border-2 border-portfolio-primary/50"
                    layoutId="activeSection"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                
                {/* Hover effect */}
                <motion.div
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-portfolio-primary/10 to-portfolio-secondary/10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div className="hidden md:block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={() => scrollToSection('contact')}
                className="primary-button relative overflow-hidden group"
              >
                <span className="relative z-10 font-medium">Let's Talk</span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg border border-portfolio-primary/30 text-portfolio-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden mt-4 py-4 border-t border-portfolio-primary/20"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activeSection === item.id 
                        ? 'text-portfolio-primary bg-portfolio-primary/10 border border-portfolio-primary/30' 
                        : 'text-gray-600 hover:text-portfolio-primary hover:bg-portfolio-primary/5'
                    }`}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-xl">{item.icon}</span>
                      <span>{item.label}</span>
                    </span>
                  </motion.button>
                ))}
                
                <motion.div
                  className="pt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      onClick={() => scrollToSection('contact')}
                      className="w-full primary-button"
                    >
                      <span className="font-medium">Get In Touch</span>
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary"
        style={{
          width: `${(navItems.findIndex(item => item.id === activeSection) + 1) / navItems.length * 100}%`
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </motion.nav>
  );
};

export default Navigation;
