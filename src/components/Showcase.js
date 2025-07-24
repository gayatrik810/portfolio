 // client/src/components/Showcase.js

import React from 'react';
import './Showcase.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

import { FaUserTie, FaHandsHelping, FaBasketballBall, FaCode, FaLightbulb } from 'react-icons/fa';

// --- IMAGE IMPORTS ---
// Please double-check that every file listed here exists in `client/src/assets/images`
import leadershipImg1 from '../assets/images/leadership1.jpg';
import leadershipImg2 from '../assets/images/leadership2.jpg';
import volunteeringImg1 from '../assets/images/nss1.jpg';
import volunteeringImg2 from '../assets/images/nss2.jpg';
import sportsImg1 from '../assets/images/basketball1.jpg';
import sportsImg2 from '../assets/images/basketball2.jpg';
import hackathonImg1 from '../assets/images/hackathon1.jpg';
import posterImg from '../assets/images/poster.jpg';
//import leetcodeProfileImg from '../assets/images/leetcode-profile.png';
//import hackerrankProfileImg from '../assets/images/hackerrank-profile.png';


// --- THE FINAL DATA STRUCTURE ---
// Every object has 'images' and 'points'.
const showcaseData = [
  {
    icon: <FaUserTie />,
    title: "Leadership & Management",
    images: [leadershipImg1, leadershipImg2],
    points: [
        "Served as Management Lead (2024–25), spearheading departmental events.",
        "Successfully fostered unity and improved overall event coordination and participation."
    ]
  },
  {
    icon: <FaHandsHelping />,
    title: "Community Volunteering",
    images: [volunteeringImg1, volunteeringImg2],
    points: [
        "Active NSS Volunteer (2024-26), contributing to numerous awareness campaigns.",
        "Engaged in community-building initiatives to drive positive social impact."
    ]
  },
  {
    icon: <FaBasketballBall />,
    title: "Sports Champion",
    images: [sportsImg1, sportsImg2],
    points: [
        "Secured 1st position in the General Championship in Basketball for two consecutive years.",
        "Demonstrated exceptional teamwork, dedication, and sportsmanship."
    ]
  },
  {
    icon: <FaCode />,
    title: "Technical Excellence",
   // images: [leetcodeProfileImg, hackerrankProfileImg],
    points: [
        "Solved over 100+ Data Structures & Algorithms problems on LeetCode.",
        "Achieved a 5-star rating in Java on HackerRank for strong problem-solving skills."
    ]
  },
  {
    icon: <FaLightbulb />,
    title: "Innovation & Academic Excellence",
    images: [hackathonImg1, posterImg],
    points: [
        "Recognized on the waiting list for SIH 2024 for an innovative fertilizer optimization project.",
        "Actively participated in technical poster presentations and various coding competitions."
    ]
  },
];


const Showcase = () => {
  return (
    <section id="showcase" className="section showcase-section">
      <h2 className="section-title">My Showcase</h2>
      
      <div className="showcase-grid">
        {showcaseData.map((item, index) => (
          <div className="showcase-card" key={index}>
            {/* --- SAFETY CHECK #1 --- */}
            {item.images && item.images.length > 0 && (
                <Carousel
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop
                    autoPlay
                    interval={5000}
                    transitionTime={500}
                    className="card-carousel"
                >
                    {item.images.map((imageSrc, i) => (
                        <div key={i}>
                            <img src={imageSrc} alt={`${item.title} visual ${i + 1}`} />
                        </div>
                    ))}
                </Carousel>
            )}
            
            <div className="card-content">
              <h3 className="card-title">
                <span className="card-title-icon">{item.icon}</span>
                {item.title}
              </h3>
              
              <ul className="card-description-list">
                {/* --- SAFETY CHECK #2 --- */}
                {item.points && item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Showcase;