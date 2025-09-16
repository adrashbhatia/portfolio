
import React from 'react';
import { motion } from 'framer-motion';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  hoverScale?: number;
  delayIndex?: number;
  intensity?: 'low' | 'medium' | 'high';
}

const GlowCard: React.FC<GlowCardProps> = ({ 
  children, 
  className = '', 
  hoverScale = 1.02,
  delayIndex = 0,
  intensity = 'medium'
}) => {
  // Define glow intensity levels
  const glowIntensity = {
    low: {
      initial: "0 0 10px rgba(255, 255, 255, 0.12), 0 0 20px rgba(255, 255, 255, 0.08)",
      hover: "0 0 25px rgba(255, 255, 255, 0.2), 0 0 50px rgba(255, 255, 255, 0.15)"
    },
    medium: {
      initial: "0 0 15px rgba(255, 255, 255, 0.15), 0 0 25px rgba(255, 255, 255, 0.1)",
      hover: "0 0 35px rgba(255, 255, 255, 0.25), 0 0 60px rgba(255, 255, 255, 0.15)"
    },
    high: {
      initial: "0 0 20px rgba(255, 255, 255, 0.2), 0 0 30px rgba(255, 255, 255, 0.12)",
      hover: "0 0 45px rgba(255, 255, 255, 0.3), 0 0 70px rgba(255, 255, 255, 0.2)"
    }
  };

  return (
    <motion.div
      className={`glow-card ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay: delayIndex * 0.1,
        ease: "easeOut" 
      }}
      whileHover={{ 
        scale: hoverScale,
        boxShadow: glowIntensity[intensity].hover,
        borderColor: "rgba(255, 255, 255, 0.4)",
      }}
      style={{
        boxShadow: glowIntensity[intensity].initial
      }}
    >
      <div className="relative z-10 h-full backdrop-blur-sm">
        {children}
      </div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-white/10 to-transparent transition-opacity duration-300 pointer-events-none"></div>
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
    </motion.div>
  );
};

export default GlowCard;
