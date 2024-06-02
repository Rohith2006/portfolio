import React from 'react';
// import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="profile">
        <img src="your-profile-pic-url" alt="Profile" />
        <h2>Pt. Prashant Tripathi</h2>
        <p>Developer • Otaku • Learner</p>
      </div>
      <nav className="sidebar-nav">
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#interest">Interest</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <footer>
        <p>© 2024 Pt. Prashant Tripathi</p>
      </footer>
    </aside>
  );
}

export default Sidebar;
