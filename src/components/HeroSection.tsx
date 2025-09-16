
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Mail, X } from 'lucide-react';
import AvailableSection from './AvailableSection';

const HeroSection: React.FC = () => {
  const [isAvailableModalOpen, setIsAvailableModalOpen] = useState(false);

  const textVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 py-20 relative overflow-hidden">
      {/* Premium corner light effects */}
      <div className="corner-light-premium"></div>
      <div className="corner-light-premium" style={{ right: 0, left: 'auto', transform: 'rotate(90deg)' }}></div>
      
      {/* Light rays */}
      <div className="light-ray-premium opacity-30" style={{ top: '10%', left: '-10%', width: '80%', transform: 'rotate(25deg)' }}></div>
      <div className="light-ray-premium opacity-20" style={{ top: '30%', left: '-5%', width: '60%', transform: 'rotate(15deg)' }}></div>
      <div className="light-ray-premium opacity-10" style={{ top: '60%', left: '-15%', width: '70%', transform: 'rotate(-10deg)' }}></div>
      
      {/* Central premium glow effect */}
      <div className="absolute w-[800px] h-[800px] rounded-full bg-radial-glow-premium opacity-60 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 animate-glow-pulse"></div>
      
      {/* Hero Card */}
      <motion.div 
        className="max-w-6xl mx-auto relative z-10 bg-dark-700/30 backdrop-blur-lg rounded-3xl border border-white/10 shadow-2xl p-8 md:p-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Profile Picture */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative">
              <img 
                src="/profile.jpg" 
                alt="Adrash Bhatia" 
                className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full object-cover shadow-xl border-2 border-white/20"
              />
            </div>
          </motion.div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.h1 
              className="hero-heading relative text-2xl md:text-3xl lg:text-4xl font-bold italic mb-3 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <span className="absolute -inset-x-10 -inset-y-6 bg-white/5 rounded-3xl blur-3xl -z-10"></span>
              <motion.span 
                className="inline-block"
                initial="hidden"
                animate="visible"
                custom={0}
                variants={textVariants}
              >
                Hey there! 👋 I'm 
              </motion.span>{" "}
      <motion.span 
        className="inline-block hero-text-gradient gradient-text"
        initial="hidden"
        animate="visible"
        custom={1}
        variants={textVariants}
      >
        Adrash Bhatia
      </motion.span>
              <br />
              <motion.span 
                className="inline-block text-lg md:text-xl text-blue-300 font-medium"
                initial="hidden"
                animate="visible"
                custom={2}
                variants={textVariants}
              >
                🚀 Android Developer • 📱 Mobile App Specialist • 🎓 CS Student
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-sm md:text-base font-light text-white/70 mb-5 leading-relaxed max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
              💡 Passionate CS student crafting innovative Android apps & backend solutions. 
              <br />
              🎯 Building the future, one app at a time!
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-center"
            >
              <motion.a 
                href="#projects" 
                className="cta-button-premium group inline-flex items-center gap-2 hover-lift"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a 
                href="#contact" 
                className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg transition-colors border border-white/20 group inline-flex items-center gap-2 hover-lift"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-4 h-4" />
                <span>Get In Touch</span>
              </motion.a>
              <motion.button 
                onClick={() => setIsAvailableModalOpen(true)}
                className="bg-transparent text-green-400 px-6 py-3 rounded-lg transition-colors border-2 border-green-500 shadow-[0_0_12px_2px_rgba(34,197,94,0.5)] group inline-flex items-center gap-2 hover-lift focus:outline-none focus:ring-2 focus:ring-green-400"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                style={{ boxShadow: '0 0 12px 2px rgba(34,197,94,0.5)' }}
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-white">Available for Opportunities</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Available Modal */}
      <AnimatePresence>
        {isAvailableModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsAvailableModalOpen(false)}
          >
            <motion.div
              className="bg-dark-700/95 backdrop-blur-lg rounded-2xl border border-white/10 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-white">Available for Opportunities</h2>
                  <button
                    onClick={() => setIsAvailableModalOpen(false)}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <AvailableSection />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;
