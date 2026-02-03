import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-content">
        <a href="#" className="logo">
          <span className="logo-initials">M</span>
          <span className="logo-text">Abotargah</span>
        </a>
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#expertise">Expertise</a></li>
          <li><a href="#portfolio">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact" className="btn btn-primary btn-sm">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
