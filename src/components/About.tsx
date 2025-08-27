
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Rocket, Target, Zap, Award, GraduationCap, Sparkles } from 'lucide-react';

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      degree: "B.E. in Computer Science Engineering",
      institution: "Sathyabama Institute of Science and Technology, Chennai",
      period: "2022–2026",
      score: "CGPA: 8.24",
      status: "current",
      icon: GraduationCap,
      color: "text-portfolio-primary"
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Narayana Junior College, Kadapa",
      period: "2020–2022",
      score: "93.7%",
      status: "completed",
      icon: Award,
      color: "text-portfolio-secondary"
    },
    {
      degree: "SSC",
      institution: "Sri Chaitanya School, Kadapa",
      period: "2019–2020",
      score: "100%",
      status: "completed",
      icon: Award,
      color: "text-portfolio-gold"
    }
  ];

  const strengths = [
    {
      title: "Problem Solving",
      description: "Advanced algorithmic thinking with creative solutions",
      icon: Brain,
      color: "text-portfolio-primary"
    },
    {
      title: "Innovation",
      description: "Creating cutting-edge solutions with modern technologies",
      icon: Rocket,
      color: "text-portfolio-secondary"
    },
    {
      title: "Precision",
      description: "Meticulous attention to detail in every project",
      icon: Target,
      color: "text-portfolio-gold"
    },
    {
      title: "Performance",
      description: "Optimized solutions that deliver exceptional results",
      icon: Zap,
      color: "text-portfolio-emerald"
    }
  ];

  return (
    <section id="about" className="relative py-20 bg-gradient-to-br from-portfolio-dark via-portfolio-dark-light to-portfolio-dark overflow-hidden">
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
            <span className="text-white font-playfair">About </span>
            <span className="gradient-text font-playfair">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A passionate developer dedicated to creating exceptional digital experiences 
            through innovative solutions and cutting-edge technologies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Side - 3D Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative z-10">
              <div className="relative w-full max-w-md mx-auto">
                {/* 3D Frame */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-portfolio-primary/30 via-portfolio-secondary/30 to-portfolio-accent/30 p-1 animate-rotate-3d">
                  <div className="w-full h-full rounded-2xl overflow-hidden bg-portfolio-dark">
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=600&fit=crop&crop=face" 
                      alt="Chakradhar Somisetty"
                      className="w-full h-full object-cover"
                    />
                    {/* Elegant Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-portfolio-primary/20 via-transparent to-portfolio-secondary/20" />
                  </div>
                </div>
                
                {/* 3D Rings */}
                <div className="absolute -inset-4 rounded-2xl border-2 border-portfolio-primary/30 animate-rotate-3d" style={{ animationDuration: '20s' }} />
                <div className="absolute -inset-6 rounded-2xl border-2 border-portfolio-secondary/30 animate-rotate-3d" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
                <div className="absolute -inset-8 rounded-2xl border-2 border-portfolio-accent/30 animate-rotate-3d" style={{ animationDuration: '25s' }} />
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-10 -right-10 w-16 h-16 bg-portfolio-primary/20 rounded-full animate-float" />
            <div className="absolute bottom-10 -left-10 w-12 h-12 bg-portfolio-secondary/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6 font-playfair">
              Passionate Developer & Creative Problem Solver
            </h3>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Motivated and detail-oriented Web Developer with a strong foundation in Computer Science 
              and hands-on skills in creating scalable and user-focused applications. Known for a 
              problem-solving mindset and a passion for learning and collaboration.
            </p>

            <p className="text-lg text-gray-300 mb-12 leading-relaxed">
              I specialize in crafting modern, responsive web applications using cutting-edge technologies. 
              My approach combines technical expertise with creative design thinking to deliver exceptional 
              user experiences that make a difference.
            </p>

            {/* Core Strengths */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {strengths.map((strength, index) => (
                <motion.div
                  key={strength.title}
                  className="p-4 rounded-lg elegant-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className={`text-2xl mb-2 ${strength.color}`}>
                    <strength.icon />
                  </div>
                  <h4 className="font-semibold text-white mb-1 font-medium">{strength.title}</h4>
                  <p className="text-sm text-gray-400">{strength.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center font-playfair">
            <span className="gradient-text">Education</span> Journey
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <Card className="elegant-card h-full group">
                  <CardContent className="p-6 relative">
                    {/* Status Indicator */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        edu.status === 'current' 
                          ? 'bg-portfolio-emerald/20 text-portfolio-emerald border border-portfolio-emerald/30' 
                          : 'bg-portfolio-primary/20 text-portfolio-primary border border-portfolio-primary/30'
                      }`}>
                        {edu.status === 'current' ? 'Active' : 'Completed'}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className={`text-4xl mb-4 ${edu.color}`}>
                      <edu.icon />
                    </div>

                    <h4 className="font-bold text-white mb-2 font-medium group-hover:text-portfolio-primary transition-colors">
                      {edu.degree}
                    </h4>
                    
                    <p className="text-gray-400 mb-3 text-sm">{edu.institution}</p>
                    
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">{edu.period}</span>
                      <span className={`font-bold ${edu.color}`}>{edu.score}</span>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-portfolio-primary/10 to-portfolio-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
