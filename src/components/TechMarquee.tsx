import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, Code2, Database, 
  ServerCrash, Container, Cpu, Cloud, Terminal, 
  Paintbrush, Layers, Users, MessageSquare, Lightbulb, 
  TrendingUp, FileText, Handshake, Award
} from 'lucide-react';

const SkillsSection: React.FC = () => {
  const technicalSkills = [
    { name: "Java", icon: <Code2 className="w-5 h-5 mr-2" />, category: "Programming" },
    { name: "C++", icon: <Code2 className="w-5 h-5 mr-2" />, category: "Programming" },
    { name: "Python", icon: <Terminal className="w-5 h-5 mr-2" />, category: "Programming" },
    { name: "Android", icon: <Cpu className="w-5 h-5 mr-2" />, category: "Mobile" },
    { name: "Flutter", icon: <Layers className="w-5 h-5 mr-2" />, category: "Mobile" },
    { name: "Spring Boot", icon: <ServerCrash className="w-5 h-5 mr-2" />, category: "Backend" },
    { name: "Node.js", icon: <ServerCrash className="w-5 h-5 mr-2" />, category: "Backend" },
    { name: "REST APIs", icon: <ServerCrash className="w-5 h-5 mr-2" />, category: "Backend" },
    { name: "MySQL", icon: <Database className="w-5 h-5 mr-2" />, category: "Database" },
    { name: "MongoDB", icon: <Database className="w-5 h-5 mr-2" />, category: "Database" },
    { name: "Power BI", icon: <Database className="w-5 h-5 mr-2" />, category: "Analytics" },
    { name: "UI/UX Design", icon: <Paintbrush className="w-5 h-5 mr-2" />, category: "Design" },
    { name: "Data Analysis", icon: <Terminal className="w-5 h-5 mr-2" />, category: "Analytics" },
    { name: "Pandas", icon: <Terminal className="w-5 h-5 mr-2" />, category: "Analytics" },
    { name: "GitHub", icon: <Github className="w-5 h-5 mr-2" />, category: "Tools" },
    { name: "MS Office", icon: <Cpu className="w-5 h-5 mr-2" />, category: "Tools" }
  ];

  const softSkills = [
    { name: "Team Collaboration", icon: <Users className="w-5 h-5 mr-2" /> },
    { name: "Communication", icon: <MessageSquare className="w-5 h-5 mr-2" /> },
    { name: "Client Handling", icon: <Handshake className="w-5 h-5 mr-2" /> },
    { name: "Problem-Solving", icon: <Lightbulb className="w-5 h-5 mr-2" /> },
    { name: "Agile Workflow", icon: <TrendingUp className="w-5 h-5 mr-2" /> },
    { name: "Project Documentation", icon: <FileText className="w-5 h-5 mr-2" /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-5xl font-extrabold text-white mb-4 italic">
            Skills
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-white/70 max-w-3xl mx-auto">
            Technologies and tools I work with to build amazing applications.
          </motion.p>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16"
        >
          <motion.h3 variants={itemVariants} className="text-3xl font-bold text-white mb-8 text-center">
            Technical Skills
          </motion.h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center bg-dark-700/50 backdrop-blur-sm rounded-lg p-4 border border-white/10 shadow-md hover:border-blue-400 transition-all duration-300 group"
              >
                {skill.icon}
                <div className="flex flex-col">
                  <span className="text-white text-sm font-medium group-hover:text-white transition-colors">{skill.name}</span>
                  <span className="text-white/50 text-xs">{skill.category}</span>
        </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-dark-800/50 rounded-xl p-8 border border-white/10"
        >
          <motion.h3 variants={itemVariants} className="text-3xl font-bold text-white mb-8 text-center">
            Soft Skills
          </motion.h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center bg-white/5 rounded-lg p-4 border border-white/10 shadow-md hover:border-purple-400 transition-all duration-300 group"
              >
                {skill.icon}
                <span className="text-white text-sm font-medium group-hover:text-white transition-colors">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
