// src/App.js
import React from 'react';
import { MotionConfig } from 'framer-motion';
import './styles/App.css';
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import CursorEffect from './components/CursorEffect';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="App">
        <CursorEffect />
        <ParticleBackground />
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;