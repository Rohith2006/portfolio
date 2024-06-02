import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faYoutube, faReddit, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <div className='contact'>
      <h3>Find me on</h3>
      <div className='contact-links'>
        <a class = 'facebook'href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a class = 'twitter'href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a class = 'linkedin' href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a class = 'youtube' href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a class = 'reddit' href="https://www.reddit.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faReddit} size="2x" />
        </a>
        <a class = 'insta' href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a class = 'github' href="https://www.github.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
