// src/sections/Skills.js (Enhanced Version)
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaNetworkWired, 
  FaShieldAlt, 
  FaCode, 
  FaLinux, 
  FaDatabase,
  FaCloud,
  FaLock,
  FaBug,
  FaSearch,
  FaUserSecret
} from 'react-icons/fa';
import '../styles/Skills.css';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1, once: true });

  const skillCategories = [
    {
      title: "Threat Analysis",
      icon: <FaSearch />,
      skills: ["Malware Analysis", "Vulnerability Assessment", "Risk Management", "SIEM", "Threat Intelligence"],
      level: 85
    },
    {
      title: "Network Security",
      icon: <FaNetworkWired />,
      skills: ["Firewalls", "IDS/IPS", "VPN", "Network Monitoring", "Packet Analysis"],
      level: 80
    },
    {
      title: "Penetration Testing",
      icon: <FaLock />,
      skills: ["Web App Testing", "Network Pentesting", "Social Engineering", "Red Teaming"],
      level: 75
    },
    {
      title: "Digital Forensics",
      icon: <FaDatabase />,
      skills: ["Incident Response", "Memory Analysis", "Disk Imaging", "Legal Procedures"],
      level: 70
    },
    {
      title: "Cloud Security",
      icon: <FaCloud />,
      skills: ["AWS Security", "Azure AD", "Container Security", "Cloud Compliance"],
      level: 75
    },
    {
      title: "Secure Development",
      icon: <FaCode />,
      skills: ["Python", "Bash", "Secure SDLC", "Code Review", "DevSecOps"],
      level: 85
    }
  ];

  const technicalSkills = [
    { name: "Python", percentage: 90 },
    { name: "Linux/Unix", percentage: 85 },
    { name: "Network Protocols", percentage: 80 },
    { name: "Cryptography", percentage: 75 },
    { name: "Web Security", percentage: 85 },
    { name: "Cloud Security", percentage: 70 }
  ];

  const SkillCard = ({ category, index }) => (
    <motion.div
      className="skill-card"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      <div className="skill-icon">{category.icon}</div>
      <h3>{category.title}</h3>
      <div className="skill-tags">
        {category.skills.map((skill, skillIndex) => (
          <span key={skillIndex} className="skill-tag">{skill}</span>
        ))}
      </div>
      <div className="skill-level">
        <div className="skill-info">
          <span className="skill-name">Proficiency</span>
          <span className="skill-percentage">{category.level}%</span>
        </div>
        <div className="skill-bar">
          <motion.div 
            className="skill-progress"
            initial={{ width: 0 }}
            animate={isInView ? { width: `${category.level}%` } : {}}
            transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
          />
        </div>
      </div>
    </motion.div>
  );

  const SkillBar = ({ skill, index }) => (
    <div className="skill-level">
      <div className="skill-info">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-percentage">{skill.percentage}%</span>
      </div>
      <div className="skill-bar">
        <motion.div 
          className="skill-progress"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.percentage}%` } : {}}
          transition={{ duration: 1.5, delay: index * 0.1 + 1 }}
        />
      </div>
    </div>
  );

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Technical Arsenal
        </motion.h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} index={index} />
          ))}
        </div>

        <motion.div 
          className="tools-section"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3>Technical Proficiency</h3>
          <div className="skill-levels">
            {technicalSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="tools-section"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <h3>Mastered Tools & Technologies</h3>
          <div className="tools-cloud">
            {[
              "Kali Linux", "Wireshark", "Metasploit", "Burp Suite", "Nmap",
              "Splunk", "Nessus", "OSSEC", "Snort", "Volatility",
              "Aircrack-ng", "John the Ripper", "Hashcat", "Autopsy",
              "OWASP ZAP", "SQLMap", "Empire", "Cobalt Strike"
            ].map((tool, index) => (
              <motion.span 
                key={index} 
                className="tool-tag"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: index * 0.05 + 0.8 }}
                whileHover={{ scale: 1.1, color: "#00ff88" }}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="cyber-badges"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {[
            <FaShieldAlt />,
            <FaLock />,
            <FaBug />,
            <FaUserSecret />,
            <FaNetworkWired />
          ].map((badge, index) => (
            <motion.div
              key={index}
              className="cyber-badge"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {badge}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;