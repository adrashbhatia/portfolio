
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GlowCard from './GlowCard';
import { ArrowRight, X, Github, ExternalLink, FileText, Link } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  date: string;
  status: string;
  featured: boolean;
  links: Array<{
    name: string;
  url: string;
  }>;
  images: Array<{
    src: string;
    alt: string;
  }>;
}

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };
  const projects: Project[] = [
    {
      id: 1,
      title: "PropLex-AI",
      category: "AI / Research",
      description: "A Java-based explainable AI framework for propaganda detection and ethical rewriting. Combines Deterministic Finite Automata (DFA) for transparent detection with generative AI rewriting. Emphasizes transparency, accessibility, and lighter alternatives to deep learning.",
      techStack: ["Java", "DFA", "Generative AI", "Explainable AI"],
      date: "2024",
      status: "Completed",
      featured: true,
      links: [
        {
          name: "View Research Paper",
          url: "/projects/Proplex-AI_Final_research_paper.pdf.pdf"
        }
      ],
      images: [
        {
          src: "/projects/PropLex-AI.png",
          alt: "PropLex-AI Research Project Screenshot"
        }
      ]
    },
    {
      id: 2,
      title: "Learning Management System (LMS)",
      category: "Android Development",
      description: "A role-based Android LMS app built for a training center, supporting three user types: Student, Teacher, and Admin. Features secure login & authentication, interactive dashboard with announcements, notification management with unread badges, and query submission panel with swipe-to-delete. Implemented clean MVVM architecture with persistent sessions and real-time backend connectivity.",
      techStack: ["Java", "Android Studio", "Node.js", "MongoDB", "MVVM", "REST API"],
      date: "2024",
      status: "Completed",
      featured: true,
      links: [
        {
          name: "GitHub",
          url: "https://github.com/adrashbhatia/LMS-App.git"
        }
      ],
      images: [
        {
          src: "/projects/lms.jpg",
          alt: "LMS App Login Screen"
        }
      ]
    },
    {
      id: 3,
      title: "StoryTales – Subscription-Based Storytelling App",
      category: "Client Project | Android Development",
      description: "Built a visually engaging and scalable Android app for a storytelling platform offering premium audio and video content on a subscription model. Developed using Java, Android Studio, Spring Boot (backend), and MongoDB. The app includes user registration and authentication, preview access to content, and subscription-based unlocking of premium stories. Enhanced user experience through offline playback, category-based content filtering, smooth animated transitions, and efficient caching. Ensured seamless integration between frontend and backend with RESTful APIs and maintained secure session and user data handling.",
      techStack: ["Java", "Android Studio", "Spring Boot", "MongoDB", "RESTful APIs", "UI/UX Design", "GitHub", "Agile Development"],
      date: "2024",
      status: "Completed",
      featured: true,
      links: [],
      images: [
        {
          src: "/projects/teltide%20pics/teltide%201.jpg",
          alt: "StoryTales Project Screenshot"
        }
      ]
    },
    {
      id: 4,
      title: "SmartAssign – Optimal Job Worker Matching App",
      category: "Android Development | Algorithm-Based",
      description: "Developed an Android application for optimal job-worker matching using the Hopcroft-Karp algorithm with graph visualization. Integrated Room Database for persistent storage, PDF reporting for result documentation, and clean UI for enhanced usability. The project demonstrates practical HRTech use-case by efficiently allocating workforce and visualizing assignments. Designed with scalability in mind to evolve into a real-world HR optimization tool.",
      techStack: ["Java", "Android Studio", "Room Database", "Graph Algorithms (Hopcroft-Karp)", "PDF Reporting", "UI/UX Design", "Agile Development"],
      date: "2024",
      status: "Completed",
      featured: true,
      links: [
        {
          name: "LinkedIn Post",
          url: "https://www.linkedin.com/posts/adrash-bhatia-9668952b5_hrtech-androiddevelopment-graphalgorithms-activity-7341354562903015424-I--k?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEvFcB4Bls8_fMV5gzWCr6KGJcJ9qpYqVRQ"
        }
      ],
      images: [
        {
          src: "/projects/smartasign 1.jpg",
          alt: "SmartAssign Job Worker Matching App Screenshot"
        }
      ]
    },
    {
      id: 5,
      title: "Packet Simulator – Networking Visualization",
      category: "Python GUI Project | Networking",
      description: "Developed a GUI-based Packet Simulator in Python using Tkinter to visualize real-time data transmission, routing behavior, and network packet flow. The project helps demonstrate concepts of packet switching, routing decisions, and error detection in an interactive manner. Designed for educational purposes to aid students in understanding core Data Communication and Computer Network concepts.",
      techStack: ["Python", "Tkinter", "Socket Programming", "Networking Concepts", "Visualization"],
      date: "2024",
      status: "Completed",
      featured: true,
      links: [],
      images: [
        {
          src: "/projects/Packet%20Simulator%20(Networking%20Visualization)/Packet%20Simulator%20(Networking%20Visualization)%201.jpg",
          alt: "Packet Simulator GUI Screenshot"
        }
      ]
    },
    {
      id: 6,
      title: "Time Capsule Web App",
      category: "Full-Stack Web Application",
      description: "The Time Capsule Web App is a full-stack platform that allows users to securely store digital content and set a future unlock date, creating a 'digital time capsule'. Built with a Spring Boot backend for secure API services, a MySQL database for structured storage, and a responsive frontend using HTML, CSS, and JavaScript. The app implements authentication, session handling, and timed logic to ensure content remains locked until the chosen date. Designed with scalability and real-world usability in mind, this project demonstrates expertise in backend development, database integration, and frontend user experience.",
      techStack: ["Spring Boot", "Java", "MySQL", "HTML", "CSS", "JavaScript", "REST APIs"],
      date: "2025",
      status: "Completed",
      featured: true,
      links: [
        {
          name: "Project Drive",
          url: "https://drive.google.com/drive/folders/1uq9YhRCk8SMMUcnS4ZIe3fWHINghTbfU?usp=drive_link"
        }
      ],
      images: [
        {
          src: "/projects/timecapsule/flowchart.png",
          alt: "Time Capsule Web App Screenshot"
        }
      ]
    },
    {
      id: 7,
      title: "Plagiarism Checker & File Comparison Tool",
      category: "Android Application",
      description: "An Android application built with Java that detects plagiarism and compares multiple text files directly on mobile. The app uses efficient string-matching algorithms like Rabin-Karp, Knuth-Morris-Pratt (KMP), and Longest Common Subsequence (LCS) for similarity detection. Users can upload or paste text, and the app generates percentage similarity reports along with highlighted matching content. Designed with clean modular code and DSA-based logic, the project ensures fast and accurate results. The app provides a simple mobile-friendly UI, making plagiarism detection accessible anytime, anywhere.",
      techStack: ["Java (Android)", "Android SDK", "XML (UI Design)", "File Handling", "DSA", "KMP Algorithm", "Rabin-Karp", "LCS"],
      date: "2024",
      status: "Completed",
      featured: true,
      links: [
        {
          name: "Project Drive",
          url: "https://drive.google.com/drive/folders/18dtmJxSK1v7wQ6kP2hgEy2b0F6nvejnO?usp=drive_link"
        }
      ],
      images: [
        {
          src: "/projects/Plagiarism%20Checker%201.jpg",
          alt: "Plagiarism Checker Android App Screenshot"
        }
      ]
    },
    {
      id: 8,
      title: "Weather Forecast App",
      category: "Android App",
      description: "A real-time weather forecasting Android application built with Java and Android Studio. The app integrates weather APIs to fetch live data and display accurate temperature, humidity, wind speed, and condition updates for any city. Features include a clean and responsive UI, search functionality, and dynamic weather icons for an enhanced user experience.",
      techStack: ["Java", "Android Studio", "XML", "RESTful APIs", "JSON Parsing"],
      date: "2024",
      status: "Completed",
      featured: true,
      links: [],
      images: [
        {
          src: "/projects/wether%20app%201.jpg",
          alt: "Weather Forecast App Screenshot"
        }
      ]
    },
    {
      id: 9,
      title: "Mom's Magic – Food Delivery App",
      category: "Android App",
      description: "An Android-based food delivery application developed with Java and Android Studio. The app allows users to browse menus, add items to the cart, place orders, and track their status in real time. Designed with a clean and responsive UI for smooth user experience. Includes essential features like order history, notifications, and secure data handling.",
      techStack: ["Java", "Android Studio", "XML", "Firebase/SQLite", "RESTful APIs"],
      date: "2024",
      status: "Completed",
      featured: true,
      links: [],
      images: [
        {
          src: "/projects/moms%20magic%201.jpg",
          alt: "Mom's Magic Food Delivery App Screenshot"
        }
      ]
    },
    {
      id: 10,
      title: "Currency Converter App",
      category: "Python Desktop App",
      description: "A desktop-based currency converter application built with Python and Tkinter. The app allows users to convert real-time exchange rates between multiple currencies using API integration. It features a simple and interactive GUI with dropdowns for currency selection, input validation, and accurate conversion results. Designed for ease of use and lightweight deployment.",
      techStack: ["Python", "Tkinter", "API Integration", "JSON Parsing"],
      date: "2024",
      status: "Completed",
      featured: true,
      links: [],
      images: [
        {
          src: "/projects/currency%20converter%201.jpg",
          alt: "Currency Converter App Screenshot"
        }
      ]
    },
    {
      id: 11,
      title: "Mobile Accessories eCommerce Website",
      category: "Web Development",
      description: "Developed a fully responsive eCommerce website for a mobile accessories business using WordPress and WooCommerce. The platform supports seamless product browsing, shopping cart, and secure checkout workflows. Integrated Yoast SEO for better search engine visibility and Elementor for flexible design customization. Also provided backend training to the client for managing inventory, orders, and content updates.",
      techStack: ["WordPress", "WooCommerce", "Elementor", "Yoast SEO", "PHP", "MySQL"],
      date: "2024",
      status: "Completed",
      featured: true,
      links: [],
      images: [
        {
          src: "/projects/mobile accessories ecommerce.png",
          alt: "Mobile Accessories eCommerce Website"
        }
      ]
    },
    {
      id: 12,
      title: "ZIP File Converter App with AdSense",
      category: "Android App",
      description: "An efficient Android application for compressing and extracting ZIP files, built with Java and Android Studio. The app features ZIP/Unzip functionality, an integrated file browser, and proper runtime permission handling for file access. Designed with a lightweight and clean user interface optimized for smooth performance. Integrated Google AdSense (AdMob SDK) for in-app ads to generate revenue, ensuring compliance with ad policies and user privacy.",
      techStack: ["Java", "Android Studio", "AdMob SDK", "XML", "File I/O"],
      date: "2024",
      status: "Completed",
      featured: true,
      links: [],
      images: [
        {
          src: "/projects/zip-converter.jpg.jpg",
          alt: "ZIP File Converter App with AdSense"
        }
      ]
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Premium light effect for top corner */}
      <div className="corner-light-premium top-0 right-0 opacity-50"></div>
      
      {/* Light rays */}
      <div className="light-ray-premium opacity-20" style={{ top: '30%', right: '-20%', width: '70%', transform: 'rotate(165deg)' }}></div>
      <div className="light-ray-premium opacity-15" style={{ top: '60%', right: '-10%', width: '50%', transform: 'rotate(150deg)' }}></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          className="section-heading-premium relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="cursor-pointer"
              onClick={() => openProjectModal(project)}
            >
              <GlowCard 
                intensity={index % 3 === 0 ? 'high' : index % 2 === 0 ? 'medium' : 'low'}
                className="group h-full"
                hoverScale={1.03}
              >
                <div className="p-6 h-full flex flex-col relative z-10">
                  {/* Premium highlight effect on hover */}
                  <div className="absolute -inset-x-4 -inset-y-4 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 -z-10 blur-2xl transition-opacity"></div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-white via-white/20 to-transparent transition-all duration-500"></div>
                  
                  {/* Project Image */}
                  {project.images.length > 0 && (
                    <div className="mb-4 rounded-lg overflow-hidden">
                      <img 
                        src={project.images[0].src} 
                        alt={project.images[0].alt}
                        className="w-full h-32 object-contain bg-gray-800/50 group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  
                  {/* Category and Status */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">
                      {project.category}
                    </span>
                    <span className="text-xs text-white/60">{project.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold italic mb-3 group-hover:text-white transition-colors">{project.title}</h3>
                  <p className="text-white/70 mb-4 group-hover:text-white/90 transition-colors text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4 mt-auto">
                    {project.techStack.slice(0, 4).map((tech, i) => (
                      <span 
                        key={i} 
                        className="text-xs px-2 py-1 bg-dark-200/50 backdrop-blur-sm border border-white/5 rounded-full text-white/60 group-hover:text-white/90 group-hover:border-white/20 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="text-xs px-2 py-1 bg-dark-200/50 backdrop-blur-sm border border-white/5 rounded-full text-white/60">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>
                  
                  {/* Project Links */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.links.map((link, i) => (
                      <a 
                        key={i}
                        href={link.url} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-white/70 hover:text-white group-hover:text-white/90 transition-colors relative"
                      >
                        <span>{link.name}</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/30 group-hover:w-full transition-all duration-300"></span>
                  </a>
                    ))}
                    {project.links.length === 0 && (
                      <span className="text-xs text-white/50">Click to view details</span>
                    )}
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeProjectModal}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="relative bg-dark-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeProjectModal} 
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-20"
            >
              <X className="w-6 h-6" />
            </button>

            {selectedProject.images && selectedProject.images.length > 0 && (
              <div className="relative h-64 sm:h-80 overflow-hidden rounded-t-xl bg-gray-800/50">
                <img 
                  src={selectedProject.images[0].src} 
                  alt={selectedProject.images[0].alt} 
                  className="w-full h-full object-contain" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent"></div>
                <span className="absolute bottom-4 left-4 bg-blue-600/80 text-white text-sm px-4 py-1 rounded-full font-medium">
                  {selectedProject.category}
                </span>
              </div>
            )}

            <div className="p-6 sm:p-8">
              <h3 className="text-3xl sm:text-4xl font-bold italic text-white mb-3">{selectedProject.title}</h3>
              <p className="text-white/70 text-base sm:text-lg mb-6">{selectedProject.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2 text-white/80">
                  <span className="text-blue-400 font-semibold">Date:</span>
                  <span>{selectedProject.date}</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <span className="text-purple-400 font-semibold">Status:</span>
                  <span>{selectedProject.status}</span>
                </div>
              </div>

              <h4 className="text-xl font-semibold text-white mb-3">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.techStack.map((tech, i) => (
                  <span key={i} className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium border border-blue-500/30">
                    {tech}
                  </span>
                ))}
              </div>

              {selectedProject.links && selectedProject.links.length > 0 && (
                <>
                  <h4 className="text-xl font-semibold text-white mb-3">Links:</h4>
                  <div className="flex flex-wrap gap-4 mb-6">
                    {selectedProject.links.map((link, i) => (
                      <a 
                        key={i} 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-2 text-blue-400 hover:underline transition-colors"
                      >
                        {link.name === "GitHub" && <Github className="w-5 h-5" />}
                        {link.name === "View Research Paper" && <FileText className="w-5 h-5" />}
                        {link.name === "LinkedIn Post" && <Link className="w-5 h-5" />}
                        {link.name === "Project Drive" && <ExternalLink className="w-5 h-5" />}
                        {link.name !== "GitHub" && link.name !== "View Research Paper" && link.name !== "LinkedIn Post" && link.name !== "Project Drive" && <ExternalLink className="w-5 h-5" />}
                        <span>{link.name}</span>
                      </a>
                    ))}
                  </div>
                </>
              )}

              {selectedProject.images && selectedProject.images.length > 1 && (
                <>
                  <h4 className="text-xl font-semibold text-white mb-3">More Images:</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {selectedProject.images.slice(1).map((image, i) => (
                      <img 
                        key={i} 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-auto rounded-lg object-cover border border-white/10" 
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default ProjectsSection;
