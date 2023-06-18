import "../css/Header.css";
import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header id="header">
      <nav>
        <h1>Karlo <span>Marasović</span></h1>

        <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="#Aboutme">About me</a></li>
          <li><a href="#Education">Education</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#volunteering">Volunteering</a></li>
          <li><a href="#Hire-me">Hire me</a></li>
        </ul>
      </nav>
      <div className="krug">
        <h1><a href="https://en.split-techcity.com/next-youth-conference-2023-announcement/" target="_blank">NEXT conference</a></h1>
      </div>
    </header>
  );
}

export default Header;