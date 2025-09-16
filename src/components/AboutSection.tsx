import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Briefcase, Star } from 'lucide-react';

const AboutSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left side - Profile info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="hero-text-gradient">Me</span>
              </h2>
              <p className="text-xl text-white/80 leading-relaxed mb-6">
                Hey 👋 I'm Adrash Bhatia, a Computer Science student and Android & Database Developer. 
                Currently pursuing BSCS at Iqra University (7th Semester) with hands-on experience in 
                Android app development, database management, and data visualization. I've built real-world 
                projects and worked as an Android Developer Intern at Xgen Technologies.
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <Briefcase className="w-5 h-5 text-blue-400" />
                  <span className="text-sm text-white/60">Experience</span>
                </div>
                <p className="text-2xl font-bold">1+ Years</p>
              </div>
              
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm text-white/60">Projects</span>
                </div>
                <p className="text-2xl font-bold">12+</p>
              </div>
            </div>

            {/* Availability status */}
            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-semibold">Available for Work</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Remote / On-site</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Full-time / Part-time</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Expertise & Keywords */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Core Expertise</h3>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <h4 className="font-semibold text-blue-400 mb-2">Mobile Development</h4>
                  <p className="text-white/70 text-sm">
                    Java, Android, Flutter, UI/UX Design, API Integration
                  </p>
                </div>
                
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <h4 className="font-semibold text-green-400 mb-2">Backend Development</h4>
                  <p className="text-white/70 text-sm">
                    Spring Boot, Node.js, MongoDB, MySQL, REST APIs
                  </p>
                </div>
                
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <h4 className="font-semibold text-purple-400 mb-2">Data & Analytics</h4>
                  <p className="text-white/70 text-sm">
                    Power BI, Python, Pandas, NumPy, Data Visualization
                  </p>
                </div>
              </div>
            </div>

            {/* Keywords */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Keywords</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Android Developer', 'Java Expert', 'Python', 'Spring Boot',
                  'UI/UX Design', 'Power BI', 'Data Visualization', 'API Development',
                  'Research & AI', 'Agile Development', 'Problem Solver', 'Client Focused'
                ].map((keyword, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80 border border-white/20 hover:bg-white/20 transition-colors"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
