import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const { theme, toggleTheme, lang, toggleLang, t } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextTheme = () => {
    if (theme === 'light') toggleTheme('dark');
    else if (theme === 'dark') toggleTheme('vibrant');
    else toggleTheme('light');
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-content">
        <a href="#" className="logo">
          <span className="logo-initials">M</span>
          <span className="logo-text">Abotargah</span>
        </a>

        {/* Desktop Links */}
        <div className={`nav-links-container ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li><a href="#hero" onClick={() => setMenuOpen(false)}>{t('nav.home')}</a></li>
            <li><a href="#expertise" onClick={() => setMenuOpen(false)}>{t('nav.expertise')}</a></li>
            <li><a href="#portfolio" onClick={() => setMenuOpen(false)}>{t('nav.projects')}</a></li>
            <li><a href="#certifications" onClick={() => setMenuOpen(false)}>{t('nav.training')}</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>{t('nav.about')}</a></li>
            <li><a href="#contact" className="btn btn-primary btn-sm" onClick={() => setMenuOpen(false)}>{t('nav.contact')}</a></li>
          </ul>
        </div>

        <div className="nav-actions">
          {/* Phone Display (Desktop) */}
          <a href="tel:+966530656998" className="nav-phone-link">
            <span className="phone-icon">📞</span>
            <span className="phone-number">+966 530 656 998</span>
          </a>

          {/* Theme Toggle */}
          <button onClick={nextTheme} className="icon-btn" title="Switch Theme">
            {theme === 'light' ? '☀️' : theme === 'dark' ? '🌑' : '⚡'}
          </button>

          {/* Lang Toggle */}
          <button onClick={toggleLang} className="lang-btn" title="Switch Language">
            {lang === 'en' ? 'عربي' : 'ENG'}
          </button>

          {/* Mobile Menu Toggle */}
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
