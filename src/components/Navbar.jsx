import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'services', 'portfolio', 'process', 'about', 'contact'];
      const scrollPosition = window.scrollY + 140;

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
    <header className={`site-header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-inner">
        {/* Brand Logo */}
        <a href="#home" className="brand-logo" onClick={(e) => handleNavClick(e, 'home')}>
          <div className="logo-symbol">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 3L28 10V22L16 29L4 22V10L16 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
              <path d="M16 3V29" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
              <path d="M4 10L16 16L28 10" stroke="currentColor" strokeWidth="1.75" />
              <path d="M4 22L16 16L28 22" stroke="currentColor" strokeWidth="1.75" />
            </svg>
          </div>
          <div className="logo-text">
            <span className="logo-main">KHAAN STONE</span>
            <span className="logo-tagline">MASONRY & LANDSCAPE</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <a
            href="#home"
            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'home')}
          >
            Home
          </a>
          <a
            href="#services"
            className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'services')}
          >
            Services
          </a>
          <a
            href="#portfolio"
            className={`nav-link ${activeSection === 'portfolio' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'portfolio')}
          >
            Portfolio
          </a>
          <a
            href="#process"
            className={`nav-link ${activeSection === 'process' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'process')}
          >
            Craftsmanship
          </a>
          <a
            href="#about"
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'about')}
          >
            About
          </a>
          <a
            href="#contact"
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'contact')}
          >
            Contact
          </a>
        </nav>

        {/* Header Actions */}
        <div className="header-actions">
          <a href="tel:6045550190" className="header-phone">
            <Phone size={15} />
            <span>(604) 555-0190</span>
          </a>
          <a
            href="#contact"
            className="btn-luxury-primary"
            onClick={(e) => handleNavClick(e, 'contact')}
          >
            <span>Consultation</span>
            <ArrowUpRight size={15} />
          </a>

          {/* Mobile Menu Trigger */}
          <button
            className="mobile-menu-trigger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${isMenuOpen ? 'drawer-open' : ''}`}>
        <div className="mobile-nav-links">
          <a
            href="#home"
            className={`mobile-nav-link ${activeSection === 'home' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'home')}
          >
            01. Home
          </a>
          <a
            href="#services"
            className={`mobile-nav-link ${activeSection === 'services' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'services')}
          >
            02. Services
          </a>
          <a
            href="#portfolio"
            className={`mobile-nav-link ${activeSection === 'portfolio' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'portfolio')}
          >
            03. Portfolio
          </a>
          <a
            href="#process"
            className={`mobile-nav-link ${activeSection === 'process' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'process')}
          >
            04. Craftsmanship & Process
          </a>
          <a
            href="#about"
            className={`mobile-nav-link ${activeSection === 'about' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'about')}
          >
            05. About Khaan Stone
          </a>
          <a
            href="#contact"
            className={`mobile-nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, 'contact')}
          >
            06. Contact & Consultation
          </a>
        </div>

        <div className="mobile-nav-footer">
          <a href="tel:6045550190" className="mobile-phone-link">
            <Phone size={16} /> (604) 555-0190
          </a>
          <a
            href="#contact"
            className="btn-luxury-primary"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={(e) => handleNavClick(e, 'contact')}
          >
            <span>Request Site Consultation</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </header>
  );
}
