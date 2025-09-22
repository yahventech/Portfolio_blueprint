// src/components/Footer.js
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHeart, FaShieldAlt, FaArrowUp, FaGithub, 
  FaLinkedin, FaEnvelope, FaCode 
} from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <motion.div 
          className="footer-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="footer-main">
            <div className="footer-brand">
              <motion.div 
                className="logo"
                whileHover={{ scale: 1.05 }}
              >
                <FaShieldAlt className="logo-icon" />
                <span>CyberGuard</span>
              </motion.div>
              <p>
                Passionate cybersecurity student dedicated to making 
                the digital world a safer place through innovative 
                security solutions and continuous learning.
              </p>
            </div>

            <div className="footer-links">
              <div className="link-group">
                <h4>Quick Links</h4>
                <ul>
                  {['Home', 'About', 'Skills', 'Projects', 'Certifications', 'Contact'].map((link) => (
                    <li key={link}>
                      <a href={`#${link.toLowerCase()}`}>{link}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="link-group">
                <h4>Resources</h4>
                <ul>
                  {['Blog', 'Resume', 'Projects', 'Research', 'Tools'].map((link) => (
                    <li key={link}>
                      <a href={`#${link.toLowerCase()}`}>{link}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="link-group">
                <h4>Connect</h4>
                <ul>
                  <li><a href="https://github.com">GitHub</a></li>
                  <li><a href="https://linkedin.com">LinkedIn</a></li>
                  <li><a href="mailto:contact@example.com">Email</a></li>
                  <li><a href="#contact">Contact Form</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-social">
              {[
                { icon: FaGithub, href: "https://github.com", label: "GitHub" },
                { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: FaEnvelope, href: "mailto:contact@example.com", label: "Email" },
                { icon: FaCode, href: "#projects", label: "Projects" }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>

            <div className="footer-copyright">
              <p>
                © {currentYear} CyberGuard. Made with <FaHeart className="heart" /> by a cybersecurity student
              </p>
            </div>

            <motion.button 
              className="scroll-to-top"
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaArrowUp />
            </motion.button>
          </div>
        </motion.div>

        <div className="security-notice">
          <p>
            <FaShieldAlt /> This portfolio is secured with modern web standards. 
            No tracking cookies are used. Your privacy is respected.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;