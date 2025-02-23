import React from 'react';
import './../styles/Projects.css';

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <ul className="projects-list">
        <li className="project-item">
          <h2>Project Title</h2>
          <p>Description of the project</p>
        </li>
        <li className="project-item">
          <h2>Project Title</h2>
          <p>Description of the project</p>
        </li>
        {/* Add more project items as needed */}
      </ul>
    </div>
  );
};

export default Projects;