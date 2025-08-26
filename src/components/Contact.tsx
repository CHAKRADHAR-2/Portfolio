
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MapPin, Linkedin, Github, Brain, Rocket, Zap, Clock, Send, Loader2 } from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "chakradhar.somisetty@gmail.com",
      color: "text-portfolio-primary"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Chennai, Tamil Nadu, India",
      color: "text-portfolio-secondary"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/chakradhar-somisetty",
      color: "text-portfolio-accent"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/chakradhar-somisetty",
      color: "text-portfolio-emerald"
    }
  ];

  const services = [
    {
      icon: Brain,
      title: "Web Development",
      description: "Full-stack web applications with modern technologies",
      color: "text-portfolio-primary"
    },
    {
      icon: Rocket,
      title: "Mobile Development",
      description: "Cross-platform mobile applications",
      color: "text-portfolio-secondary"
    },
    {
      icon: Zap,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces",
      color: "text-portfolio-accent"
    }
  ];

  const workingHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Available for urgent projects" }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Show success message (you can implement a toast notification here)
    alert('Thank you for your message! I will get back to you soon.');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-portfolio-dark via-portfolio-dark-light to-portfolio-dark overflow-hidden">
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
            <span className="text-white font-playfair">Get In </span>
            <span className="gradient-text font-playfair">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project? Let's discuss how I can help bring your ideas to life 
            with innovative solutions and cutting-edge technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="elegant-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-portfolio-primary mb-6 font-playfair">Send Message</h3>
                
                                  <form onSubmit={handleSubmit} className="space-y-6">
                   <div className="grid md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                       <Label htmlFor="name" className="text-portfolio-primary font-semibold text-base">Name</Label>
                       <Input
                         id="name"
                         name="name"
                         type="text"
                         value={formData.name}
                         onChange={handleInputChange}
                         required
                         className="w-full px-4 py-3 bg-white/10 text-white border border-white/30 rounded-lg focus:border-portfolio-primary/50 focus:ring-2 focus:ring-portfolio-primary/20 focus:outline-none placeholder-gray-400 focus:bg-white/15 transition-all duration-300 hover:bg-white/15"
                         placeholder="Your name"
                       />
                     </div>
                     
                     <div className="space-y-2">
                       <Label htmlFor="email" className="text-portfolio-primary font-semibold text-base">Email</Label>
                       <Input
                         id="email"
                         name="email"
                         type="email"
                         value={formData.email}
                         onChange={handleInputChange}
                         required
                         className="w-full px-4 py-3 bg-white/10 text-white border border-white/30 rounded-lg focus:border-portfolio-primary/50 focus:ring-2 focus:ring-portfolio-primary/20 focus:outline-none placeholder-gray-400 focus:bg-white/15 transition-all duration-300 hover:bg-white/15"
                         placeholder="your.email@example.com"
                       />
                     </div>
                   </div>
                   
                   <div className="space-y-2">
                     <Label htmlFor="subject" className="text-portfolio-primary font-semibold text-base">Subject</Label>
                     <Input
                       id="subject"
                       name="subject"
                       type="text"
                       value={formData.subject}
                       onChange={handleInputChange}
                       required
                       className="w-full px-4 py-3 bg-white/10 text-white border border-white/30 rounded-lg focus:border-portfolio-primary/50 focus:ring-2 focus:ring-portfolio-primary/20 focus:outline-none placeholder-gray-400 focus:bg-white/15 transition-all duration-300 hover:bg-white/15"
                       placeholder="Project inquiry"
                     />
                   </div>
                   
                   <div className="space-y-2">
                     <Label htmlFor="message" className="text-portfolio-primary font-semibold text-base">Message</Label>
                     <Textarea
                       id="message"
                       name="message"
                       value={formData.message}
                       onChange={handleInputChange}
                       required
                       rows={6}
                       className="w-full px-4 py-3 bg-white/10 text-white border border-white/30 rounded-lg focus:border-portfolio-primary/50 focus:ring-2 focus:ring-portfolio-primary/20 focus:outline-none placeholder-gray-400 focus:bg-white/15 transition-all duration-300 resize-none hover:bg-white/15"
                       placeholder="Tell me about your project..."
                     />
                   </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="primary-button w-full text-lg py-4"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Contact Details */}
            <Card className="elegant-card bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-6 font-playfair flex items-center gap-2">
                  <Mail className="w-5 h-5 text-portfolio-primary" />
                  Contact Info
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="flex items-center gap-3 group p-3 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${info.color.replace('text-', 'from-')}/20 to-${info.color.replace('text-', '')}/10 ${info.color} group-hover:scale-110 transition-transform`}>
                        <info.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 font-medium">{info.title}</p>
                        <p className="text-white font-semibold">{info.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Services */}
            <Card className="elegant-card bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-6 font-playfair flex items-center gap-2">
                  <Zap className="w-5 h-5 text-portfolio-secondary" />
                  Services I Offer
                </h3>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      className="group p-3 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${service.color.replace('text-', 'from-')}/20 to-${service.color.replace('text-', '')}/10 ${service.color} group-hover:scale-110 transition-transform`}>
                          <service.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold group-hover:text-portfolio-primary transition-colors mb-1">
                            {service.title}
                          </h4>
                          <p className="text-sm text-gray-400 leading-relaxed">{service.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Working Hours */}
            <Card className="elegant-card bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-portfolio-gold/20 to-portfolio-gold-light/10 text-portfolio-gold">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-playfair">Working Hours</h3>
                </div>
                <div className="space-y-4">
                  {workingHours.map((schedule, index) => (
                    <motion.div
                      key={schedule.day}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                      className="flex justify-between items-center py-3 px-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <span className="text-white font-semibold">{schedule.day}</span>
                      <span className="text-gray-300 text-sm font-medium">{schedule.hours}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
