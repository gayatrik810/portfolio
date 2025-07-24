 // client/src/components/About.js

import React from 'react';
import './About.css';

// Import your new illustration
import aboutIllustration from '../assets/images/about-illustration.svg';

// Import icons for your highlights
import { FaGraduationCap, FaCode, FaHeart } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <h2 className="section-title">About Me</h2>
      
      <div className="about-content">
        {/* Column 1: The Illustration */}
        <div className="about-image-container">
          <img 
            src={aboutIllustration} 
            alt="An illustration of a developer working on a project" 
            className="about-illustration"
          />
        </div>

        {/* Column 2: The Text Content */}
        <div className="about-text-container">
          <p className="about-paragraph">
            Hello ! I'm Gayatri, a passionate full-stack developer with a love for turning ideas into beautiful, functional web applications along with highly proficient in JAVA . My journey into tech was driven by a desire to solve real-world problems and a fascination with how clean code can create seamless user experiences. I thrive in environments where I can continuously learn and collaborate with others to build amazing things.
          </p>

          {/* Scannable Highlights with Icons */}
          <div className="about-highlights">
            <div className="highlight-item">
              <FaGraduationCap className="highlight-icon" />
              <p>Graduating in 2026 from DYPCOE, Pune</p>
            </div>
            <div className="highlight-item">
              <FaCode className="highlight-icon" />
              <p>Specializing in the MERN (MongoDB, Express, React, Node.js) Stack</p>
            </div>
            <div className="highlight-item">
              <FaHeart className="highlight-icon" />
              <p>Passionate about web- development , team collaboration, and continuous learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;