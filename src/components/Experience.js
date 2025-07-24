import React from 'react';
import './Experience.css';

const experienceData = [
  {
    role: "Full Stack Intern",
    company: "Scalefull Technologies",
    period: "Internship",
    description: [
      "Completed comprehensive MERN stack web development training, gaining hands-on experience in building scalable full-stack applications.",
      "Specialized in using MongoDB, Express.js, React.js, and Node.js to develop dynamic, responsive, and database-driven web solutions."
    ]
  },
  {
    role: "Java Android Developer Intern",
    company: "Academor",
    period: "Internship",
    description: [
      "Developed robust Android apps using Java, with seamless integration of backend APIs for real-time data exchange.",
      "Enhanced application performance and improved UI consistency by optimizing layouts and implementing best practices in Android development."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section experience">
      <h2 className="section-title">Professional Experience</h2>
      <div className="experience-list">
        {experienceData.map((exp, index) => (
          <div className="experience-card" key={index}>
            <h3>{exp.role}</h3>
            <p className="experience-company">{exp.company} | {exp.period}</p>
            <ul>
              {exp.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;