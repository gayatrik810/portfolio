 import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Step 1: Import the icons
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-social-links">
          {/* Step 2: Replace text with Icon Components and add titles */}
          <a href="https://linkedin.com/in/gayatri-kadam" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/gayatrik810" target="_blank" rel="noopener noreferrer" title="GitHub">
            <FaGithub />
          </a>
          {/* Step 3: Add the new email link with its icon */}
          <a href="mailto:kadamgayatri.dyp@gmail.com" title="Email Me">
            <FaEnvelope />
          </a>
        </div>
        <p className="footer-copyright">
          © {currentYear} Gayatri Kadam. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;