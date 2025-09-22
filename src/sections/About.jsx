// src/sections/About.js
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUserShield, FaGraduationCap, FaRocket, FaHeart } from 'react-icons/fa';
import '../styles/About.css';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const stats = [
    { number: "2+", label: "Years Experience", icon: <FaUserShield /> },
    { number: "15+", label: "Projects Completed", icon: <FaRocket /> },
    { number: "5", label: "Certifications", icon: <FaGraduationCap /> },
    { number: "100%", label: "Passionate", icon: <FaHeart /> }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div 
          className="about-content"
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="about-text">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              About Me
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              I'm a passionate cybersecurity student with a relentless curiosity for 
              understanding how systems work and how they can be protected. My journey 
              began when I discovered the fascinating world of ethical hacking during 
              my first year of college.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Currently pursuing my degree in Cybersecurity, I spend my time exploring 
              vulnerability research, penetration testing, and developing security tools. 
              I believe in using my skills to make the digital world a safer place for everyone.
            </motion.p>

            <motion.div 
              className="stats-grid"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="stat-card"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div 
            className="about-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="floating-card">
              <div className="card-content">
                <div className="code-window">
                  <div className="window-header">
                    <div className="window-buttons">
                      <span className="red"></span>
                      <span className="yellow"></span>
                      <span className="green"></span>
                    </div>
                    <span className="window-title">security_profile.py</span>
                  </div>
                  <div className="code-content">
                    <pre>{`class CybersecurityStudent:
    def __init__(self):
        self.name = "Tony Polycap Makokha"
        self.role = "Security Researcher"
        self.skills = [
            "Penetration Testing",
            "Threat Analysis", 
            "Network Security",
            "Digital Forensics"
        ]
        self.passion = "Making digital world safer"
    
    def current_focus(self):
        return "Vulnerability Research & ML Security"`}</pre>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;