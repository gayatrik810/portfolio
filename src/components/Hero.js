 // client/src/components/Hero.js

import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

// Import your photo (this was already correct)
import profilePhoto from '../assets/images/profile-photo.jpg';

// STEP 1: Import the resume file from the assets folder
import resumePdf from '../assets/Gayatri_Resume.pdf';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-content">
                {/* Column 1: The Text Content */}
                <div className="hero-text">
                    <p className="hero-greeting">Hey , I'm Gayatri</p>

                    <TypeAnimation
                        sequence={[
                            'A Full-Stack Developer', 2000,
                            'A MERN Stack Specialist', 2000,
                            'A Problem Solver', 2000,
                            'An Innovator', 2000,
                        ]}
                        wrapper="h1"
                        speed={50}
                        className="hero-headline"
                        repeat={Infinity}
                    />

                    {/* Social Media & Contact Links */}
                    <div className="social-links">
                        <a href="https://github.com/gayatrik810" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href="mailto:kadamgayatri.dyp@gmail.com">
                            <FaEnvelope />
                        </a>
                    </div>

                    {/* Action Buttons */}
                    <div className="hero-buttons">
                        {/* STEP 2: Update the link to use the imported file */}
                        <a href={resumePdf} download="Gayatri_Resume.pdf" className="hero-button primary">
                            Download CV
                        </a>
                        <a href="#contact" className="hero-button secondary">
                            Contact Info
                        </a>
                    </div>
                </div>

                {/* Column 2: The Profile Photo with Blob */}
                <div className="hero-image-container">
                    <img
                        src={profilePhoto}
                        alt="A portrait of Gayatri"
                        className="profile-photo"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;