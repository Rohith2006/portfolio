import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import img from './R.jpg'

function About() {
  return (
    <div className='about'>
      <div className='left'>
        <div className = 'image-harry'>
          <img src = {img} alt='Rohit Tirunagari' />
        </div>
        <ul className = "social">
          <li><FontAwesomeIcon icon={faFacebook} /></li>
          <li><FontAwesomeIcon icon={faGithub} /></li>
          <li><FontAwesomeIcon icon={faLinkedin} /></li>
          <li><FontAwesomeIcon icon={faInstagram} /></li>
          <li><FontAwesomeIcon icon={faTwitter} /></li>
        </ul>
      </div>
      <div className='right'>
        <div className='top'>
          <h1>Rohith Tirunagari</h1>
          <p>React  •  Java  •  C++  •  Python </p>
          <div>
            <button className = 'resume'>Downdload resume</button>
            <button className = 'contact-btn'>Contact</button>
          </div>
        </div>
        <div className='bottom'>
        <ul>
          <li>Experience Level <span >: 0+ years</span></li>
          <li>Currently Learning <span >: Web3</span></li>
          <li>Interested In <span >: Technology, AI, ML, Web</span></li>
          <li>Equipments <span > : Python, C, Node.js </span></li>
        </ul>

        </div>
      </div>
    </div>
  );
}

export default About;