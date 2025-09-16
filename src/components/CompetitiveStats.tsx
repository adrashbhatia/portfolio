
import React from 'react';
import { motion } from 'framer-motion';
import GlowCard from './GlowCard';
import { Code2, Cpu, Database, Paintbrush, Terminal, ServerCrash } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const CompetitiveStats: React.FC = () => {
  // Programming language proficiency data
  const languageData = [
    { language: 'Java', proficiency: 95, projects: 8, experience: '2+ years' },
    { language: 'Android', proficiency: 90, projects: 10, experience: '2+ years' },
    { language: 'Python', proficiency: 85, projects: 4, experience: '1+ years' },
    { language: 'C++', proficiency: 80, projects: 3, experience: '1+ years' },
    { language: 'SQL', proficiency: 85, projects: 6, experience: '1+ years' },
    { language: 'Spring Boot', proficiency: 80, projects: 3, experience: '1+ years' }
  ];

  const skillCategories = [
    {
      name: "Programming Languages",
      icon: <Code2 className="w-6 h-6 text-[#FF6B6B]" />,
      color: '#FF6B6B',
      data: [languageData[0], languageData[2], languageData[3]], // Java, Python, C++
      description: "Core programming expertise"
    },
    {
      name: "Mobile Development",
      icon: <Cpu className="w-6 h-6 text-[#4ECDC4]" />,
      color: '#4ECDC4',
      data: [languageData[1]], // Android only
      description: "Android development"
    },
    {
      name: "Backend & Database",
      icon: <Database className="w-6 h-6 text-[#45B7D1]" />,
      color: '#45B7D1',
      data: [languageData[4], languageData[5]], // SQL, Spring Boot
      description: "Server & database management"
    }
  ];

  const renderChart = (data: any[], color: string) => {
    return (
      <ResponsiveContainer width="100%" height={150}>
        <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333333" vertical={false} />
          <XAxis dataKey="language" stroke="#666666" tick={{ fill: '#666666', fontSize: 10 }} />
          <YAxis stroke="#666666" tick={{ fill: '#666666', fontSize: 10 }} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#1A1A1A', border: '1px solid #333333', borderRadius: '4px', boxShadow: '0 0 20px rgba(255, 255, 255, 0.15)' }} 
            labelStyle={{ color: 'white' }} 
            formatter={(value: any, name: string) => [`${value}%`, 'Proficiency']}
          />
          <Bar 
            dataKey="proficiency" 
            fill={color}
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    );
  };

  return (
    <section className="py-20 px-4 relative">
      {/* Premium lighting effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-corner-light-premium opacity-30 z-0"></div>
      
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="section-heading-premium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Programming Language Proficiency
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <GlowCard 
              key={category.name} 
              delayIndex={index} 
              intensity="high"
              className="comp-card"
            >
              <div className="p-6">
                <div className="flex items-center mb-3">
                  {category.icon}
                  <h3 className="text-xl font-bold italic ml-2">{category.name}</h3>
                </div>
                <p className="text-white/70 text-sm mb-4">{category.description}</p>
                <div className="mb-3 h-[150px]">
                  {renderChart(category.data, category.color)}
                </div>
                <div className="space-y-2 mt-4">
                  {category.data.map((skill, i) => (
                    <div key={i} className="flex justify-between items-center text-sm">
                      <span className="text-white/80">{skill.language}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-white/60">{skill.projects} projects</span>
                        <span className="text-xs px-2 py-1 bg-white/10 rounded-full" style={{color: category.color}}>
                          {skill.proficiency}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitiveStats;
