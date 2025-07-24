 import React from 'react';
import './Education.css';

const educationData = [
  {
    degree: "BE in Information Technology",
    institution: "Dr. D. Y. Patil College of Engineering, Akurdi",
    period: "2023 – Present",
    details: "Current CGPA: 8.89"
  },
  {
    degree: "Diploma in Computer Technology",
    institution: "Sanjivani K. B. P. Polytechnic, Kopargaon",
    period: "2020 – 2023",
    details: "Final Percentage: 90.58%"
  },
  {
    degree: "SSC",
    institution: "Shri Sharda English Medium School, Kopargaon",
    period: "Completed 2020",
    details: "Final Percentage: 92.40%"
  }
];

const Education = () => {
  return (
    <section id="education" className="section education">
      <h2 className="section-title">Education</h2>
      <div className="education-timeline">
        {educationData.map((edu, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-content">
              <h3>{edu.degree}</h3>
              <p className="institution">{edu.institution}</p>
              <span className="period">{edu.period}</span>
              <p className="details">{edu.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;