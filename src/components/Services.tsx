
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, Smartphone, Palette, Database, Globe, Zap, Sparkles, ArrowRight } from 'lucide-react';

const Services = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Full-stack web applications built with modern technologies like React, Node.js, and TypeScript. From simple landing pages to complex enterprise solutions.",
      features: ["Responsive Design", "Performance Optimization", "SEO Best Practices", "Cross-browser Compatibility"],
      color: "text-portfolio-primary",
      bgColor: "from-portfolio-primary/20 to-portfolio-primary-dark/20",
      borderColor: "border-portfolio-primary/30"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform mobile applications using React Native and Flutter. Native performance with shared codebase for iOS and Android.",
      features: ["Cross-platform Development", "Native Performance", "App Store Deployment", "Push Notifications"],
      color: "text-portfolio-secondary",
      bgColor: "from-portfolio-secondary/20 to-portfolio-secondary-dark/20",
      borderColor: "border-portfolio-secondary/30"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces designed with user experience in mind. From wireframes to pixel-perfect implementations.",
      features: ["User Research", "Wireframing & Prototyping", "Visual Design", "User Testing"],
      color: "text-portfolio-accent",
      bgColor: "from-portfolio-accent/20 to-portfolio-accent-dark/20",
      borderColor: "border-portfolio-accent/30"
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Robust server-side applications and APIs built with Node.js, Python, and various databases. Scalable and secure solutions.",
      features: ["RESTful APIs", "Database Design", "Authentication & Security", "Cloud Deployment"],
      color: "text-portfolio-emerald",
      bgColor: "from-portfolio-emerald/20 to-portfolio-emerald-light/20",
      borderColor: "border-portfolio-emerald/30"
    },
    {
      icon: Globe,
      title: "E-commerce Solutions",
      description: "Complete e-commerce platforms with payment processing, inventory management, and admin dashboards.",
      features: ["Payment Integration", "Inventory Management", "Order Processing", "Analytics Dashboard"],
      color: "text-portfolio-gold",
      bgColor: "from-portfolio-gold/20 to-portfolio-gold-light/20",
      borderColor: "border-portfolio-gold/30"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed up your applications with advanced optimization techniques, caching strategies, and performance monitoring.",
      features: ["Code Optimization", "Caching Strategies", "CDN Integration", "Performance Monitoring"],
      color: "text-portfolio-rose",
      bgColor: "from-portfolio-rose/20 to-portfolio-rose-light/20",
      borderColor: "border-portfolio-rose/30"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Understanding your requirements and creating a detailed project roadmap",
      icon: Sparkles
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Creating wireframes, mockups, and interactive prototypes",
      icon: Palette
    },
    {
      step: "03",
      title: "Development",
      description: "Building your application with clean, maintainable code",
      icon: Code
    },
    {
      step: "04",
      title: "Testing & Launch",
      description: "Thorough testing and deployment to production",
      icon: Zap
    }
  ];

  return (
    <section id="services" className="relative py-20 bg-gradient-to-br from-portfolio-dark via-portfolio-dark-light to-portfolio-dark overflow-hidden">
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
            <span className="gradient-text font-playfair">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive web development services tailored to your needs, from concept to deployment. 
            Let's turn your ideas into reality with cutting-edge technology and innovative solutions.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className={`elegant-card h-full overflow-hidden cursor-pointer group-hover:${service.borderColor} transition-all duration-300`}>
                <CardContent className="p-6 relative">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className={`w-8 h-8 ${service.color}`} />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-4 font-playfair group-hover:text-portfolio-primary transition-colors">
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.5, delay: 0.4 + index * 0.1 + featureIndex * 0.1 }}
                          className="flex items-center gap-2"
                        >
                          <div className={`w-2 h-2 rounded-full ${service.color.replace('text-', 'bg-')}`} />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Arrow */}
                    <div className={`${service.color} group-hover:translate-x-2 transition-transform duration-300`}>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Development Process */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-12 text-center font-playfair">
            <span className="gradient-text">Development</span> Process
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="text-center group"
              >
                <Card className="elegant-card p-6">
                  <CardContent className="p-0">
                    {/* Step Number */}
                    <div className="w-16 h-16 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>
                    
                    {/* Icon */}
                    <div className="text-3xl text-portfolio-primary mb-4">
                      <step.icon />
                    </div>
                    
                    {/* Title */}
                    <h4 className="text-lg font-bold text-white mb-3 font-playfair group-hover:text-portfolio-primary transition-colors">
                      {step.title}
                    </h4>
                    
                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <Card className="elegant-card max-w-3xl mx-auto p-8">
            <CardContent className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4 font-playfair">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-300 mb-6">
                Let's discuss your requirements and create something amazing together. 
                I'm here to help bring your vision to life with the best technology and design practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="primary-button text-lg px-8 py-4"
                  >
                    <span className="font-medium">Get Started</span>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                    variant="outline"
                    className="elegant-border text-lg px-8 py-4 bg-transparent text-portfolio-primary border-portfolio-primary hover:bg-portfolio-primary hover:text-white transition-all duration-300"
                  >
                    <span>View Portfolio</span>
                  </Button>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
