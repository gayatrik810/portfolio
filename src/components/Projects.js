import React from 'react';
import './Projects.css';

const projectData = [
  {
    title: "Gourmet Haven",
    description: "Developed a responsive Restaurant Management website using the MERN stack to facilitate seamless menu browsing and online ordering. Enabled users to explore menus, view detailed descriptions of dishes and place orders online.",
    tech: ["MERN Full Stack", "React", "Node.js", "Express", "MongoDB"],
    liveLink: "#", // IMPORTANT: Add your live demo link here
    repoLink: "https://github.com/gayatrik810/Gourmet-Haven", // IMPORTANT: Add your GitHub repo link here
  },
    {
    title: "Portfolio",
    description: "A fully responsive personal portfolio website built using the MERN (MongoDB, Express.js, React.js, Node.js) stack, featuring a modern UI with dynamic components and animations. The backend handles contact form submissions with email integration, stores portfolio content in MongoDB, and provides secure APIs to manage projects, skills, and achievements.",
    tech: ["MongoDB", "React", "Node","Angular"],
    liveLink: "https://gayatrikadam-portfolio.netlify.app/", // Link to Google Play or a demo video
    repoLink: "#", // IMPORTANT: Add your GitHub repo link here
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, i) => (<span key={i}>{tech}</span>))}
            </div>
            <div className="project-links">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer">Source Code</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;