// src/sections/Projects.js (Enhanced Version)
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaLock, FaCode, FaShieldAlt } from 'react-icons/fa';
import '../styles/Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "AI Threat Detection System",
      description: "Machine learning platform that detects anomalous network behavior and potential threats in real-time using deep learning algorithms.",
      technologies: ["Python", "TensorFlow", "React", "WebSocket"],
      githubUrl: "#",
      liveUrl: "#",
      category: "ai-ml",
      status: "Completed",
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Vulnerability Scanner",
      description: "Advanced network scanner that identifies security vulnerabilities and misconfigurations across enterprise infrastructure.",
      technologies: ["Python", "Nmap", "SQLite", "Multithreading"],
      githubUrl: "#",
      liveUrl: "#",
      category: "tools",
      status: "Active",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Blockchain Security Audit",
      description: "Comprehensive security assessment tool for smart contracts and blockchain applications with automated vulnerability detection.",
      technologies: ["Solidity", "JavaScript", "Web3", "Mocha"],
      githubUrl: "#",
      liveUrl: "#",
      category: "blockchain",
      status: "In Progress",
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "Phishing Detection API",
      description: "REST API that analyzes URLs and emails to detect phishing attempts with 98% accuracy using ensemble learning.",
      technologies: ["Node.js", "Express", "MongoDB", "Scikit-learn"],
      githubUrl: "#",
      liveUrl: "#",
      category: "web-security",
      status: "Completed",
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "Incident Response Dashboard",
      description: "Real-time security operations center dashboard for monitoring and responding to security incidents across the organization.",
      technologies: ["React", "D3.js", "WebSocket", "Node.js"],
      githubUrl: "#",
      liveUrl: "#",
      category: "dashboard",
      status: "Active",
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "Cryptographic Toolkit",
      description: "Comprehensive library of cryptographic algorithms and security protocols for educational and research purposes.",
      technologies: ["C++", "Python", "OpenSSL", "Cryptography"],
      githubUrl: "#",
      liveUrl: "#",
      category: "cryptography",
      status: "Completed",
      image: "/api/placeholder/400/250"
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects', icon: <FaCode /> },
    { key: 'ai-ml', label: 'AI/ML Security', icon: <FaLock /> },
    { key: 'tools', label: 'Security Tools', icon: <FaShieldAlt /> },
    { key: 'web-security', label: 'Web Security', icon: <FaLock /> },
    { key: 'blockchain', label: 'Blockchain', icon: <FaCode /> }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Security Projects
        </motion.h2>

        <motion.div 
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.icon}
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          className="projects-grid"
          ref={ref}
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="project-image">
                  <div className="project-status">{project.status}</div>
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <motion.a 
                        href={project.githubUrl}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaGithub />
                      </motion.a>
                      <motion.a 
                        href={project.liveUrl}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaExternalLinkAlt />
                      </motion.a>
                    </div>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div 
            className="no-projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h3>No projects found for this category</h3>
            <p>Check back soon for new projects!</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;