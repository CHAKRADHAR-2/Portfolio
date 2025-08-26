import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Sparkles, Code, Globe, Smartphone, Database } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = [
    { id: 'all', label: 'All Projects', icon: Sparkles },
    { id: 'frontend', label: 'Frontend', icon: Code },
    { id: 'backend', label: 'Backend', icon: Database },
    { id: 'mobile', label: 'Mobile', icon: Smartphone }
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with advanced features including real-time inventory, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      category: "fullstack",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      featured: true,
      liveUrl: "#",
      githubUrl: "#",
      icon: Globe
    },
    {
      id: 2,
      title: "AI-Powered Chat Application",
      description: "Real-time chat application with AI integration, user authentication, and advanced messaging features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      category: "fullstack",
      tags: ["Next.js", "OpenAI", "Socket.io", "PostgreSQL"],
      featured: true,
      liveUrl: "#",
      githubUrl: "#",
      icon: Code
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website with 3D animations and interactive elements.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      category: "frontend",
      tags: ["React", "Three.js", "GSAP", "Framer Motion"],
      featured: false,
      liveUrl: "#",
      githubUrl: "#",
      icon: Globe
    },
    {
      id: 4,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates and team features.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      category: "fullstack",
      tags: ["React", "Express", "MongoDB", "Socket.io"],
      featured: false,
      liveUrl: "#",
      githubUrl: "#",
      icon: Database
    },
    {
      id: 5,
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with real-time data visualization and location-based forecasts.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop",
      category: "frontend",
      tags: ["React", "Chart.js", "Weather API", "Geolocation"],
      featured: false,
      liveUrl: "#",
      githubUrl: "#",
      icon: Globe
    },
    {
      id: 6,
      title: "Mobile Fitness Tracker",
      description: "Cross-platform mobile application for tracking fitness activities and health metrics.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      category: "mobile",
      tags: ["React Native", "Firebase", "Health APIs", "Redux"],
      featured: false,
      liveUrl: "#",
      githubUrl: "#",
      icon: Smartphone
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="relative py-20 bg-gradient-to-br from-portfolio-dark via-portfolio-dark-light to-portfolio-dark overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-portfolio-primary/5 via-transparent to-transparent" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-portfolio-primary/20 to-portfolio-secondary/20 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-r from-portfolio-accent/20 to-portfolio-emerald/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white font-playfair">My </span>
            <span className="gradient-text font-playfair">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A collection of innovative projects showcasing my expertise in modern web development, 
            from elegant frontend solutions to robust backend systems.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-portfolio-primary text-white shadow-lg shadow-portfolio-primary/25'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon className="w-4 h-4" />
              <span>{category.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="elegant-card h-full overflow-hidden cursor-pointer">
                  <CardContent className="p-0">
                    {/* Project Image */}
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-gradient-to-r from-portfolio-gold to-portfolio-gold-light text-black text-xs font-bold rounded-full">
                            FEATURED
                          </span>
                        </div>
                      )}
                      
                      {/* Project Icon */}
                      <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <project.icon className="w-5 h-5 text-white" />
                      </div>
                      
                      {/* Hover Actions */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex gap-3">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Button 
                              size="sm" 
                              className="primary-button"
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(project.liveUrl, '_blank');
                              }}
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </Button>
                          </motion.div>
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Button 
                              size="sm" 
                              variant="outline"
                              className="elegant-border bg-white/10 text-white border-white/20 hover:bg-white/20"
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(project.githubUrl, '_blank');
                              }}
                            >
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </Button>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Project Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 font-playfair group-hover:text-portfolio-primary transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-400 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="px-3 py-1 bg-portfolio-primary/10 text-portfolio-primary text-xs font-medium rounded-full border border-portfolio-primary/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Card className="elegant-card max-w-2xl mx-auto p-8">
            <CardContent className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4 font-playfair">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-300 mb-6">
                Let's collaborate to bring your ideas to life with cutting-edge technology and innovative solutions.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="primary-button text-lg px-8 py-4"
                >
                  <span className="font-medium">Let's Work Together</span>
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
