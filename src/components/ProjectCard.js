import './ProjectCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function ProjectCard({ image, name, paraText, language, date }) {
    return (
      <div className="card">
        <div className="card-title">
          <img className="card-img" src={image} alt={name} loading="lazy" />
        </div>
        <div className="card-text">
          <span className="card-cat">
            <span className="lang"></span>
            <span>{language}</span>
          </span>
          <a href="#">
            <h4>{name}</h4>
          </a>
          <p>{paraText}</p>
          <a href="#" className="card-button">
          <FontAwesomeIcon className="icon-github" icon={faGithub} />          </a>
        </div>
        <div className="card-actions">
          <span className="card-date">{date}</span>
        </div>
      </div>
    );
  }
  
  export default ProjectCard;