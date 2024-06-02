import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Projects.css';
function Projects({ icon, paragraph }) {
  return (
    <section className="projects">
      <div className = 'icon'>
        <FontAwesomeIcon icon={icon} />
      </div>
      <p>{paragraph}</p>
    </section>
  );
}

export default Projects;