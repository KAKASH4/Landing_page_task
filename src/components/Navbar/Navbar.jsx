// src/components/Navbar/Navbar.js
import React from 'react';
import './Navbar.css';

function Navbar({ activeSection }) {
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="navbar">
      <ul>
        <li
          className={activeSection === 'hero' ? 'active' : ''}
          onClick={() => handleScrollToSection('hero')}
        >
          Home
        </li>
        <li
          className={activeSection === 'about' ? 'active' : ''}
          onClick={() => handleScrollToSection('about')}
        >
          About
        </li>
        <li
          className={activeSection === 'sponsors' ? 'active' : ''}
          onClick={() => handleScrollToSection('sponsors')}
        >
          Sponsors
        </li>
        <li
          className={activeSection === 'contact' ? 'active' : ''}
          onClick={() => handleScrollToSection('contact')}
        >
          Contact
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
