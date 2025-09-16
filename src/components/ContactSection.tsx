import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import ContactForm from './ContactForm';

const ContactSection: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/adrashbhatia',
      icon: <Github className="w-6 h-6" />,
      color: 'hover:text-gray-300'
    },
    {
      name: 'Twitter',
      url: 'https://x.com/aadarshbhatia',
      icon: <Twitter className="w-6 h-6" />,
      color: 'hover:text-blue-400'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/adrash-bhatia-9668952b5',
      icon: <Linkedin className="w-6 h-6" />,
      color: 'hover:text-blue-500'
    }
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'bhatiaadrash@gmail.com',
      href: 'mailto:bhatiaadrash@gmail.com'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'Karachi, Pakistan',
      href: '#'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: 'Available on request',
      href: '#'
    }
  ];

  return (
  <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Removed purple/blue gradient background, now matches project card style */}
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">Get In Touch</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can work together!
          </p>
          </motion.div>
          
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-white/70 mb-8 leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Drop me a message and I'll get back to you as soon as possible.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-white/60">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                  target="_blank" 
                  rel="noopener noreferrer" 
                    className={`p-3 bg-white/5 rounded-lg text-white/60 ${social.color} transition-colors group`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glow-card p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;