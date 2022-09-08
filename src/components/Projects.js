import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../projectsArray';
import './Projects.css';

const Projects = () => (
  <div className="project-section">
    <div className="project-heading-container">
      <h1 className="project-heading">My projects</h1>
    </div>
    {projects.map((project, i) => (
      <ProjectCard
        key={i}
        name={project.name}
        description={project.description}
        technologyUsed={project.technologyUsed}
        gitHubLink={project.gitHubLink}
        url={project.url}
        media={project.media}
      />
    ))}
  </div>
);

export default Projects;
