import React, { useState, useEffect } from 'react';
import { Menu, X, Hammer } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple active link spy
      const sections = ['home', 'services', 'about', 'portfolio', 'estimator', 'contact'];
      const scrollPosition = window.scrollY + 120; // offset

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className="logo" onClick={(e) => handleNavClick(e, 'home')}>
          {/* Symmetrical K/S Monogram Crown with 3 Diamond Cut Stone Jewels */}
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '8px' }}>
            <path d="M12 4L15 7L12 10L9 7Z" fill="#e74c3c" />
            <path d="M17 4L20 7L17 10L14 7Z" fill="#3498db" />
            <path d="M22 4L25 7L22 10L19 7Z" fill="#f1c40f" />
            <path d="M12 12V9M17 12V9M22 12V9" stroke="var(--text-primary)" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M12 12V24" stroke="var(--text-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 18L17 12H22V18H17V24H22" stroke="var(--text-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 18L17 24" stroke="var(--text-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 26H25" stroke="var(--text-primary)" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          KHAAN<span>STONE</span>
        </a>

        {/* Desktop Links */}
        <div className="nav-links-desktop">
          <a
            href="#home"
            className={`nav-item ${activeSection === 'home' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'home')}
          >
            Home
          </a>
          <a
            href="#services"
            className={`nav-item ${activeSection === 'services' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'services')}
          >
            Services
          </a>
          <a
            href="#about"
            className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'about')}
          >
            About
          </a>
          <a
            href="#portfolio"
            className={`nav-item ${activeSection === 'portfolio' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'portfolio')}
          >
            Portfolio
          </a>
          <a
            href="#estimator"
            className={`nav-item ${activeSection === 'estimator' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'estimator')}
          >
            Estimator
          </a>
          <a
            href="#contact"
            className="btn-outline"
            style={{ marginLeft: '12px' }}
            onClick={(e) => handleNavClick(e, 'contact')}
          >
            Free Estimate
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>

        {/* Mobile menu drawer */}
        <div className={`nav-links-mobile ${isMenuOpen ? 'open' : ''}`}>
          <a
            href="#home"
            className={`nav-item ${activeSection === 'home' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'home')}
          >
            Home
          </a>
          <a
            href="#services"
            className={`nav-item ${activeSection === 'services' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'services')}
          >
            Services
          </a>
          <a
            href="#about"
            className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'about')}
          >
            About
          </a>
          <a
            href="#portfolio"
            className={`nav-item ${activeSection === 'portfolio' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'portfolio')}
          >
            Portfolio
          </a>
          <a
            href="#estimator"
            className={`nav-item ${activeSection === 'estimator' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'estimator')}
          >
            Estimator
          </a>
          <a
            href="#contact"
            className="btn-cta"
            onClick={(e) => handleNavClick(e, 'contact')}
          >
            Free Estimate
          </a>
        </div>
      </div>
    </nav>
  );
}
