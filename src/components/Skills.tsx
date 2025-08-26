
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Cpu, Database, Brain, Sparkles } from 'lucide-react';

const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      color: "text-portfolio-primary",
      skills: [
        { name: "React.js", level: 90, color: "from-portfolio-primary to-portfolio-primary-dark" },
        { name: "TypeScript", level: 85, color: "from-portfolio-secondary to-portfolio-secondary-dark" },
        { name: "Next.js", level: 80, color: "from-portfolio-accent to-portfolio-accent-dark" },
        { name: "Tailwind CSS", level: 95, color: "from-portfolio-emerald to-portfolio-emerald-light" },
        { name: "HTML/CSS", level: 95, color: "from-portfolio-gold to-portfolio-gold-light" }
      ]
    },
    {
      title: "Backend Development",
      icon: Cpu,
      color: "text-portfolio-secondary",
      skills: [
        { name: "Node.js", level: 85, color: "from-portfolio-secondary to-portfolio-secondary-dark" },
        { name: "Express.js", level: 80, color: "from-portfolio-primary to-portfolio-primary-dark" },
        { name: "MongoDB", level: 75, color: "from-portfolio-emerald to-portfolio-emerald-light" },
        { name: "PostgreSQL", level: 70, color: "from-portfolio-accent to-portfolio-accent-dark" },
        { name: "REST APIs", level: 90, color: "from-portfolio-gold to-portfolio-gold-light" }
      ]
    },
    {
      title: "Database & Tools",
      icon: Database,
      color: "text-portfolio-accent",
      skills: [
        { name: "MongoDB", level: 85, color: "from-portfolio-emerald to-portfolio-emerald-light" },
        { name: "PostgreSQL", level: 75, color: "from-portfolio-accent to-portfolio-accent-dark" },
        { name: "Redis", level: 70, color: "from-portfolio-rose to-portfolio-rose-light" },
        { name: "Git/GitHub", level: 90, color: "from-portfolio-primary to-portfolio-primary-dark" },
        { name: "Docker", level: 65, color: "from-portfolio-secondary to-portfolio-secondary-dark" }
      ]
    },
    {
      title: "Advanced Technologies",
      icon: Brain,
      color: "text-portfolio-emerald",
      skills: [
        { name: "Three.js", level: 75, color: "from-portfolio-primary to-portfolio-primary-dark" },
        { name: "GSAP", level: 80, color: "from-portfolio-secondary to-portfolio-secondary-dark" },
        { name: "Framer Motion", level: 85, color: "from-portfolio-accent to-portfolio-accent-dark" },
        { name: "WebGL", level: 60, color: "from-portfolio-emerald to-portfolio-emerald-light" },
        { name: "PWA", level: 70, color: "from-portfolio-gold to-portfolio-gold-light" }
      ]
    }
  ];

  const additionalTechs = [
    { name: "JavaScript", icon: "⚡", color: "text-portfolio-gold" },
    { name: "Python", icon: "🐍", color: "text-portfolio-emerald" },
    { name: "GraphQL", icon: "🔗", color: "text-portfolio-rose" },
    { name: "AWS", icon: "☁️", color: "text-portfolio-accent" },
    { name: "Firebase", icon: "🔥", color: "text-portfolio-gold" },
    { name: "Vercel", icon: "🚀", color: "text-portfolio-primary" },
    { name: "Netlify", icon: "🌐", color: "text-portfolio-secondary" },
    { name: "Jest", icon: "🧪", color: "text-portfolio-emerald" },
    { name: "Cypress", icon: "🛡️", color: "text-portfolio-accent" },
    { name: "Webpack", icon: "📦", color: "text-portfolio-gold" },
    { name: "Vite", icon: "⚡", color: "text-portfolio-primary" },
    { name: "Redux", icon: "🔄", color: "text-portfolio-rose" }
  ];

  return (
    <section id="skills" className="relative py-20 bg-gradient-to-br from-portfolio-dark via-portfolio-dark-light to-portfolio-dark overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-portfolio-primary/5 via-transparent to-transparent" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-portfolio-primary/20 to-portfolio-secondary/20 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-portfolio-accent/20 to-portfolio-emerald/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white font-playfair">Technical </span>
            <span className="gradient-text font-playfair">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive skill set built through continuous learning and hands-on experience 
            with modern web technologies and development practices.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.8, delay: 0.2 + categoryIndex * 0.1 }}
            >
              <Card className="elegant-card h-full group">
                <CardContent className="p-6">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`text-3xl ${category.color}`}>
                      <category.icon />
                    </div>
                    <h3 className="text-2xl font-bold text-white font-playfair">{category.title}</h3>
                  </div>

                  {/* Skills */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.1 }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-portfolio-primary font-bold text-lg">{skill.name}</span>
                          <span className="text-sm text-portfolio-secondary font-bold">{skill.level}%</span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden border border-gray-600">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1, delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.1 }}
                          >
                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center font-playfair">
            <span className="gradient-text">Additional</span> Technologies
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {additionalTechs.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group"
              >
                <Card className="elegant-card text-center p-4 cursor-pointer group-hover:border-portfolio-primary/50 transition-all duration-300 bg-white/10 backdrop-blur-md">
                  <CardContent className="p-2">
                    <div className="text-3xl mb-2">{tech.icon}</div>
                    <p className="text-sm font-semibold text-white group-hover:text-portfolio-primary transition-colors">
                      {tech.name}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skill Level Legend */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-6 py-4">
            <span className="text-sm text-white font-semibold">Skill Levels:</span>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-portfolio-emerald rounded-full"></div>
                <span className="text-xs text-white font-medium">Expert (90-100%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-portfolio-primary rounded-full"></div>
                <span className="text-xs text-white font-medium">Advanced (80-89%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-portfolio-secondary rounded-full"></div>
                <span className="text-xs text-white font-medium">Intermediate (70-79%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-portfolio-accent rounded-full"></div>
                <span className="text-xs text-white font-medium">Learning (60-69%)</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
