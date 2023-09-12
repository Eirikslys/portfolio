import React from 'react';
// import React, { useState } from 'react';
import './ProjectCard.css';

const ProjectCard = (project) => {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="project-card">
      <div className="project-card-text">
        <h1>{project.name}</h1>
        <p>{project.description}</p>
        <p>{project.technologyUsed}</p>
        <div className="buttons-container">
          {project.url ? (
            <a className="card-button" href={project.url}>
              <i className="card-link-icon fas fa-play-circle"></i>
              <span className="project-link-text">Website</span>
            </a>
          ) : null}
          {project.gitHubLink ? (
            <a className="card-button" href={project.gitHubLink}>
              <i className="card-link-icon fab fa-github"></i>
              <span className="project-link-text">Github Link</span>
            </a>
          ) : null}
        </div>
      </div>
      <div className="media-container">
        <a href="#" >
          <img className="project-media" src={project.media} alt="" />
        </a>
      </div>

    </div>
  );
};

export default ProjectCard;
