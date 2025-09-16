import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Briefcase, Code, CheckCircle, Calendar, Building } from 'lucide-react';

const AvailableSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
    <section id="available" className="py-6 px-4 relative overflow-hidden">
      <div className="w-full relative z-10">

        {/* Single Card Layout */}
        <motion.div
          variants={containerVariants}
          className="glow-card p-8 md:p-12"
        >
          {/* Header with Profile Pic, Name, and Status */}
          <div className="flex items-center gap-6 mb-8">
            {/* Profile Picture */}
            <img 
              src="/profile.jpg" 
              alt="Adrash Bhatia" 
              className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
            />
            
            {/* Name and Status */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-1">Adrash Bhatia</h3>
            </div>
            
            {/* Right side - Available Now Status */}
            <div className="flex items-center">
              <span className="text-green-400 font-semibold text-sm border border-green-400/50 px-3 py-1 rounded-full flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                Available Now
              </span>
            </div>
          </div>

          {/* Current Availability Status */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <h4 className="text-xl font-bold text-white">Current Availability Status</h4>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Status */}
              <div>
                <h5 className="text-lg font-semibold text-white mb-3">Status</h5>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-400 font-medium">Available for immediate start</span>
                </div>
              </div>
              
              {/* Looking for */}
              <div>
                <h5 className="text-lg font-semibold text-white mb-3">Looking for</h5>
                <span className="text-blue-400 font-medium">Full-time roles, Internships & Contract work</span>
              </div>
            </div>
          </div>

          {/* Other Sections */}
          <div className="space-y-6">
            {/* Duration */}
            <div className="flex items-start gap-4">
              <Building className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Duration</h4>
                <p className="text-white/70">Full-time, Part-time</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Location</h4>
                <p className="text-white/70">Karachi • Remote</p>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="flex items-start gap-4">
              <Code className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Tech Stack</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-white/70">
                  <div>Java, Android, Python</div>
                  <div>C++, SQL, Spring Boot</div>
                  <div>Flutter, MySQL, MongoDB</div>
                  <div>Power BI, Node.js, REST APIs</div>
                  <div>GitHub, Firebase, UI/UX Design</div>
                  <div>Machine Learning, Data Analysis</div>
                </div>
              </div>
            </div>

            {/* What I bring */}
            <div className="flex items-start gap-4">
              <Briefcase className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">What I bring</h4>
                <p className="text-white/70">
                  Real world Android development experience from Xgen Technologies internship. 
                  Developed 12+ Android applications including LMS, StoryTales, and SmartAssign. 
                  Delivered 15+ freelance projects on Fiverr & Upwork in Android, Power BI, and data entry. 
                  Authored PropLex-AI research paper on explainable AI framework.
                </p>
              </div>
            </div>

            {/* Goal */}
            <div className="flex items-start gap-4">
              <Calendar className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Goal</h4>
                <p className="text-white/70">
                  Looking for roles that offer learning and advancement opportunities with experienced teams. 
                  I want to work on cutting-edge technologies that solve real world problems and make a meaningful impact. 
                  I'm passionate, adaptable, and ready to contribute to collaborative, innovative environments! 🚀
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AvailableSection;
