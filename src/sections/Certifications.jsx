// src/sections/Certifications.js
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaAward, FaCalendar, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/Certifications.css';

const Certifications = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const certifications = [
    {
      title: "CompTIA Security+",
      issuer: "CompTIA",
      date: "2023",
      credential: "SY0-601",
      status: "Active",
      icon: "🔒",
      color: "#00ff88",
      description: "Foundational cybersecurity skills covering threats, attacks, and vulnerabilities"
    },
    {
      title: "CEH v12",
      issuer: "EC-Council",
      date: "2024",
      credential: "012-123-456",
      status: "In Progress",
      icon: "⚡",
      color: "#ff0088",
      description: "Ethical hacking and penetration testing methodologies"
    },
    {
      title: "Cisco CCNA Security",
      issuer: "Cisco",
      date: "2023",
      credential: "CCNA-210-260",
      status: "Active",
      icon: "🌐",
      color: "#00ccff",
      description: "Network security and infrastructure protection"
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      credential: "AWS-CP-123",
      status: "Planned",
      icon: "☁️",
      color: "#ff9900",
      description: "Cloud security fundamentals and AWS services"
    },
    {
      title: "eJPT",
      issuer: "eLearnSecurity",
      date: "2024",
      credential: "eJPT-001",
      status: "In Progress",
      icon: "🎯",
      color: "#9966cc",
      description: "Junior penetration testing certification"
    },
    {
      title: "Google Cyber Security Certificate",
      issuer: "Google",
      date: "2023",
      credential: "GCC-2023",
      status: "Completed",
      icon: "🔍",
      color: "#4285f4",
      description: "Comprehensive cybersecurity fundamentals program"
    }
  ];

  const statusColors = {
    "Active": "#00ff88",
    "Completed": "#00ff88", 
    "In Progress": "#ffcc00",
    "Planned": "#00ccff"
  };

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Certifications & Training
        </motion.h2>
        
        <motion.div 
          className="certifications-grid"
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="certification-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                boxShadow: `0 20px 40px ${cert.color}30`
              }}
            >
              <div className="cert-header">
                <div className="cert-icon" style={{ color: cert.color }}>
                  {cert.icon}
                </div>
                <div className="cert-badge">
                  <FaAward />
                </div>
              </div>
              
              <h3>{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <p className="cert-description">{cert.description}</p>
              
              <div className="cert-meta">
                <div className="meta-item">
                  <FaCalendar />
                  <span>{cert.date}</span>
                </div>
                <div 
                  className="status-badge"
                  style={{ backgroundColor: statusColors[cert.status] }}
                >
                  {cert.status}
                </div>
              </div>
              
              <div className="cert-credential">
                <span>ID: {cert.credential}</span>
                <button className="verify-btn">
                  <FaExternalLinkAlt />
                  Verify
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="certifications-roadmap"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3>Certification Roadmap</h3>
          <div className="roadmap-timeline">
            {[
              { year: "2023", certs: ["Security+", "CCNA Security"] },
              { year: "2024", certs: ["CEH", "eJPT", "AWS CP"] },
              { year: "2025", certs: ["CISSP", "OSCP", "CISM"] }
            ].map((period, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">{period.year}</div>
                <div className="timeline-certs">
                  {period.certs.map((cert, certIndex) => (
                    <span key={certIndex} className="timeline-cert">{cert}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;