// src/sections/Hero.js
import React from 'react';
import { motion } from 'framer-motion';
import Typed from 'react-typed';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import '../styles/Hero.css';

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      {/* Background glow + shapes */}
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          {/* Text section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <motion.h1 className="hero-title">
              <span className="gradient-text">Securing</span>
              <br />
              <Typed
                strings={['Digital Futures', 'Cyber Space', 'Your Data']}
                typeSpeed={50}
                backSpeed={30}
                loop
                className="typed-text"
              />
            </motion.h1>

            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Cybersecurity Student &amp; Ethical Hacker passionate about 
              <span className="highlight"> threat intelligence</span> and 
              <span className="highlight"> penetration testing</span>
            </motion.p>

            {/* Buttons */}
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.a 
                href="#projects" 
                className="btn btn-primary"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 255, 136, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                Explore My Work
              </motion.a>
              <motion.a 
                href="#contact" 
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Connect
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="social-links"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              {[
                { icon: FaGithub, href: "https://github.com", label: "GitHub" },
                { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: FaEnvelope, href: "mailto:contact@example.com", label: "Email" }
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <social.icon />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Section with Glow + Image */}
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="cyber-card">
              <div className="card-glow"></div>
              
              {/* Profile Image inside Glow */}
              <motion.img 
                src="/assets/profile.png"   // put image in public/assets
                alt="Profile"
                className="hero-image"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              />

              {/* Optional holographic animation behind */}
              <div className="holographic-display">
                <div className="data-stream">
                  <div className="data-point"></div>
                  <div className="data-point"></div>
                  <div className="data-point"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          onClick={scrollToNext}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FaArrowDown />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
