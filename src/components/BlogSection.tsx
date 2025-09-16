import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Award, Briefcase, ExternalLink } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  url: string;
  date: string;
  type: 'research' | 'certification' | 'experience' | 'blog';
  icon: React.ReactNode;
  description?: string;
}

const BlogSection: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "PropLex-AI: A Hybrid Explainable Framework for Propaganda Detection and Ethical Rewriting",
      url: "/projects/Proplex-AI_Final_research_paper.pdf.pdf",
      date: "2024",
      type: 'research',
      icon: <FileText className="w-5 h-5 text-blue-400" />,
      description: "Research paper analyzing 30+ academic sources; proposed DFA + AI based propaganda detection and rewriting framework"
    },
    {
      id: 2,
      title: "Spring Boot Foundations Certification",
      url: "/certificates/Spring Boot Foundations.pdf",
      date: "2025",
      type: 'certification',
      icon: <Award className="w-5 h-5 text-yellow-400" />,
      description: "Packt Publishing - Comprehensive Spring Boot development certification"
    },
    {
      id: 3,
      title: "NAVTTC Android & Database Development Certificate",
      url: "/certificates/NAVTTC Android & database development certificate .pdf",
      date: "2024",
      type: 'certification',
      icon: <Award className="w-5 h-5 text-green-400" />,
      description: "NAVTTC - Professional Android development and database management certification"
    },
    {
      id: 4,
      title: "Building a Strong Professional Foundation",
      url: "/certificates/Building a Strong Professional Foundation.png",
      date: "2024",
      type: 'certification',
      icon: <Award className="w-5 h-5 text-purple-400" />,
      description: "Xgen Technologies - Professional development and workplace skills certification"
    },
    {
      id: 5,
      title: "Introduction to Databases",
      url: "/certificates/Introduction to Databases.pdf",
      date: "2024",
      type: 'certification',
      icon: <Award className="w-5 h-5 text-red-400" />,
      description: "Meta - Database fundamentals and SQL certification"
    },
    {
      id: 6,
      title: "Introduction to Cybersecurity Careers",
      url: "/certificates/Introduction to Cybersecurity Careers.pdf",
      date: "2024",
      type: 'certification',
      icon: <Award className="w-5 h-5 text-orange-400" />,
      description: "IBM - Cybersecurity career pathways and fundamentals"
    },
    {
      id: 7,
      title: "Ethical Hacking Essentials (EHE)",
      url: "/certificates/Ethical Hacking Essentials (EHE).pdf",
      date: "2024",
      type: 'certification',
      icon: <Award className="w-5 h-5 text-pink-400" />,
      description: "EC-Council - Ethical hacking and penetration testing fundamentals"
    },
    {
      id: 8,
      title: "How to Write a Research Paper",
      url: "/certificates/How to write a research paper.pdf",
      date: "2024",
      type: 'certification',
      icon: <Award className="w-5 h-5 text-indigo-400" />,
      description: "HEC Pakistan & University of Faisalabad - Academic writing and research methodology"
    },
    {
      id: 9,
      title: "Adarsh Experience Letter - Xgen Technologies",
      url: "/certificates/Adarsh Experience Letter - Revised (1).pdf",
      date: "Aug 2024 - Dec 2024",
      type: 'experience',
      icon: <Briefcase className="w-5 h-5 text-cyan-400" />,
      description: "Xgen Technologies - 4-month internship in native Android development with MVVM architecture"
    },
    {
      id: 10,
      title: "Youth Exchange and Study (YES) Program Certificate",
      url: "/certificates/Yes Program certificate .pdf",
      date: "2023",
      type: 'experience',
      icon: <Award className="w-5 h-5 text-emerald-400" />,
      description: "iEARN Pakistan - International exchange program certificate"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Certifications & Achievements
        </motion.h2>
        
        <div className="space-y-6">
          {blogPosts.map((post, index) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a 
                href={post.url}
                target={post.url.startsWith('http') ? '_blank' : '_self'}
                rel={post.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block glow-card p-6 hover:border-white/40 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    {post.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                      <div className="flex-1">
                        <h3 className="text-lg font-medium group-hover:underline decoration-white/30 underline-offset-4 mb-2">
                    {post.title}
                  </h3>
                        {post.description && (
                          <p className="text-sm text-white/70 leading-relaxed">
                            {post.description}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center gap-4 flex-shrink-0">
                    <span className="text-sm text-white/60">{post.date}</span>
                        {post.url.startsWith('http') ? (
                          <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        ) : (
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
