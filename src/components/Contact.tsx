
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MapPin, Linkedin, Github, Brain, Rocket, Zap, Clock, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

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
      value: "luckysomisetty17427@gmail.com",
      link: "mailto:luckysomisetty17427@gmail.com",
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
      value: "linkedin.com/in/chakradhar-somisetty-7c6h4a8k7r1i",
      link: "https://www.linkedin.com/in/chakradhar-somisetty-7c6h4a8k7r1i",
      color: "text-portfolio-accent"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/CHAKRADHAR-2",
      link: "https://github.com/CHAKRADHAR-2",
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
      title: "API Integration & Data Management",
      description: "Seamless API integrations and efficient data handling",
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
    
    try {
      // EmailJS configuration
      const result = await emailjs.send(
        'service_xs9xntc',
        'template_btp24ap',
        {
          user_name: formData.name,
          user_email: formData.email,
          user_subject: formData.subject,
          user_message: formData.message,
          to_name: 'Chakradhar Somisetty'
        },
        'LWZcQ9ki9t9iOZAns'
      );
      
      console.log('Email sent successfully:', result.text);
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Thank you for your message! I will get back to you soon.');
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send message. Please try again or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
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
          <div className="lg:col-span-2">
            <div className="bg-gray-900/80 backdrop-blur-md border border-gray-700 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-blue-400 font-semibold mb-2">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      style={{ 
                        backgroundColor: '#374151', 
                        color: 'white', 
                        border: '2px solid #9CA3AF',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        width: '100%',
                        fontSize: '16px'
                      }}
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-blue-400 font-semibold mb-2">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      style={{ 
                        backgroundColor: '#374151', 
                        color: 'white', 
                        border: '2px solid #9CA3AF',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        width: '100%',
                        fontSize: '16px'
                      }}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-blue-400 font-semibold mb-2">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    style={{ 
                      backgroundColor: '#374151', 
                      color: 'white', 
                      border: '2px solid #9CA3AF',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      width: '100%',
                      fontSize: '16px'
                    }}
                    placeholder="Project inquiry"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-blue-400 font-semibold mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    style={{ 
                      backgroundColor: '#374151', 
                      color: 'white', 
                      border: '2px solid #9CA3AF',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      width: '100%',
                      fontSize: '16px',
                      resize: 'none'
                    }}
                    placeholder="Tell me about your project..."
                  />
                </div>
               
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  style={{
                    backgroundColor: '#3B82F6',
                    color: 'white',
                    padding: '16px 24px',
                    borderRadius: '8px',
                    width: '100%',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    border: 'none',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

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
                        {info.link ? (
                          <a 
                            href={info.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{
                              color: 'white',
                              fontWeight: 'bold',
                              textDecoration: 'underline',
                              cursor: 'pointer',
                              pointerEvents: 'auto',
                              position: 'relative',
                              zIndex: 100
                            }}
                            onMouseEnter={(e) => e.target.style.color = '#60A5FA'}
                            onMouseLeave={(e) => e.target.style.color = 'white'}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p style={{ color: 'white', fontWeight: 'bold' }}>{info.value}</p>
                        )}
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
