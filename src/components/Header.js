import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

function Header({ aboutRef, portfolioRef, interestsRef, projectsRef, contactRef }) {
  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className='header'>
      <FontAwesomeIcon icon={faBars} className="hamburg" />
      <p>Rohith Tirunagari</p>
      <div id='spacer'></div>
      <nav>
        <ul>
          <li><div onClick={() => handleScroll(aboutRef)}><a href="#about">About</a></div></li>
          <li><div onClick={() => handleScroll(portfolioRef)}><a href="#portfolio">Portfolio</a></div></li>
          <li><div onClick={() => handleScroll(interestsRef)}><a href="#interests">Interests</a></div></li>
          <li><div onClick={() => handleScroll(projectsRef)}><a href="#projects">Projects</a></div></li>
          <li><div onClick={() => handleScroll(contactRef)}><a href="#contact">Contact</a></div></li>
        </ul>
      </nav>
      <div className='dots'><FontAwesomeIcon icon={faEllipsisV} /></div>
    </header>
  );
}

export default Header;
