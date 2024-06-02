import React, { useRef } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Textbox from './components/Textbox';
import Projects from './components/Projects';
import ProjectCard from './components/ProjectCard';
import Contact from './components/Contact';
import { faLaptop, faGamepad, faMobile } from '@fortawesome/free-solid-svg-icons';
import { faFilm, faMusic, faCameraRetro, faBookOpen, faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';

import './App.css';
import './index.css';

function App() {
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const interestsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="App">
      <div className='image'></div>
      <div className='header-container'>
        <Header
          aboutRef={aboutRef}
          portfolioRef={portfolioRef}
          interestsRef={interestsRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
      </div>
      <div ref={aboutRef} className='about-container'><About /></div>
      <div ref={portfolioRef} className='interest'>
        <div className='interest-container'>
          <h1>What do I Do</h1>
          <div className='row'>
            <Textbox icon={faLaptop} color='blue' heading='Web Development' paragraph='Web development is the process of creating and maintaining websites. It involves a combination of programming, design, and content creation to build a functional and visually appealing online presence. Web development can be divided into three main categories: front-end development, back-end development, and full-stack development.Front-end development focuses on the client side of a website. It involves creating the visual layout, design, and interactivity that users see and interact with in their web browsers. Technologies commonly used in front-end development include HTML, CSS, and JavaScript, along with frameworks and libraries such as React, Angular, and Vue.js.' />
            <Textbox icon={faGamepad} color='green' heading='Game Development' paragraph='Game development is the process of creating video games, involving a combination of creativity, technical skills, and storytelling. It encompasses various stages, including concept development, design, coding, testing, and deployment. Game development can be pursued by individuals, small teams, or large studios, and it spans a wide range of platforms such as consoles, PCs, mobile devices, and virtual reality systems.In summary, game development is a complex and multidisciplinary field that combines artistry, technology, and storytelling. It requires collaboration across various disciplines to create engaging and immersive experiences for players. Whether working on indie games or blockbuster titles, game developers push the boundaries of creativity and innovation to bring their visions to life.' />
            <Textbox icon={faMobile} color='yellow' heading='App Development' paragraph='App development involves creating software applications for mobile devices, such as smartphones and tablets, as well as for desktops and other platforms. This process encompasses several stages, including ideation, design, coding, testing, and deployment. Developers use programming languages and frameworks like Swift for iOS, Kotlin for Android, and cross-platform tools like Flutter and React Native to build apps that offer a seamless user experience. Key considerations in app development include user interface (UI) and user experience (UX) design, performance optimization, security, and compatibility with various devices and operating systems. The goal is to deliver functional, user-friendly, and engaging applications that meet.' />
          </div>
        </div>
      </div>
      <div ref={interestsRef} className='interest-2-main'>
        <div className='interest-2-box'>
          <div className='interest-2-heading'>
            <h1>Interests</h1>
          </div>
          <div className='interest-2-container'>
            <Projects icon={faFilm} paragraph="Movie" />
            <Projects icon={faMusic} paragraph="Music" />
            <Projects icon={faGamepad} paragraph="Gaming" />
            <Projects icon={faCameraRetro} paragraph="Photography" />
            <Projects icon={faBookOpen} paragraph="Reading" />
            <Projects icon={faPlaneDeparture} paragraph="Traveling" />
          </div>
        </div>
      </div>
      <div ref={projectsRef} className='projects-main'>
        <div className='projects-box'>
          <div className='projects-heading'>
            <h1>Projects And Work</h1>
          </div>
          <div className='projects-container'>
            <ProjectCard
              image="https://opengraph.githubassets.com/111bc667f0f80f733f7d7648f1f057b16c454b1f29bf86c9a6e19a07f4675fe3/vedic-lang/vedic"
              name="vedic"
              paraText="vedic is the world's first working Sanskrit programming language"
              language="Rust"
              date="2022-04-11"
            />
            <ProjectCard
              image="https://opengraph.githubassets.com/111bc667f0f80f733f7d7648f1f057b16c454b1f29bf86c9a6e19a07f4675fe3/vedic-lang/vedic"
              name="vedic"
              paraText="vedic is the world's first working Sanskrit programming language"
              language="Rust"
              date="2022-04-11"
            />
            <ProjectCard
              image="https://opengraph.githubassets.com/111bc667f0f80f733f7d7648f1f057b16c454b1f29bf86c9a6e19a07f4675fe3/vedic-lang/vedic"
              name="vedic"
              paraText="vedic is the world's first working Sanskrit programming language"
              language="Rust"
              date="2022-04-11"
            />
            <ProjectCard
              image="https://opengraph.githubassets.com/111bc667f0f80f733f7d7648f1f057b16c454b1f29bf86c9a6e19a07f4675fe3/vedic-lang/vedic"
              name="vedic"
              paraText="vedic is the world's first working Sanskrit programming language"
              language="Rust"
              date="2022-04-11"
            />
            <ProjectCard
              image="https://opengraph.githubassets.com/111bc667f0f80f733f7d7648f1f057b16c454b1f29bf86c9a6e19a07f4675fe3/vedic-lang/vedic"
              name="vedic"
              paraText="vedic is the world's first working Sanskrit programming language"
              language="Rust"
              date="2022-04-11"
            />
            <ProjectCard
              image="https://opengraph.githubassets.com/111bc667f0f80f733f7d7648f1f057b16c454b1f29bf86c9a6e19a07f4675fe3/vedic-lang/vedic"
              name="vedic"
              paraText="vedic is the world's first working Sanskrit programming language"
              language="Rust"
              date="2022-04-11"
            />
            <ProjectCard
              image="https://opengraph.githubassets.com/111bc667f0f80f733f7d7648f1f057b16c454b1f29bf86c9a6e19a07f4675fe3/vedic-lang/vedic"
              name="vedic"
              paraText="vedic is the world's first working Sanskrit programming language"
              language="Rust"
              date="2022-04-11"
            />
            <ProjectCard
              image="https://opengraph.githubassets.com/111bc667f0f80f733f7d7648f1f057b16c454b1f29bf86c9a6e19a07f4675fe3/vedic-lang/vedic"
              name="vedic"
              paraText="vedic is the world's first working Sanskrit programming language"
              language="Rust"
              date="2022-04-11"
            />
            <ProjectCard
              image="https://opengraph.githubassets.com/111bc667f0f80f733f7d7648f1f057b16c454b1f29bf86c9a6e19a07f4675fe3/vedic-lang/vedic"
              name="vedic"
              paraText="vedic is the world's first working Sanskrit programming language"
              language="Rust"
              date="2022-04-11"
            />
          </div>
        </div>
      </div>
      <div ref={contactRef} className='contact-main'>
        <div className='contact-container'>
          <h1>Contact</h1>
          <Contact />
        </div>
      </div>
      <div className='thanks'>
        <h3>Thanks for visiting!</h3>
        <p>© 2024 Rohit Tirunagari. All rights reserved.</p>
      </div>
    </div>
  );
}

export default App;
