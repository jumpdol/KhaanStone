import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';

export default function Navbar({ activeView, setActiveView }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (viewId) => {
    setActiveView(viewId);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Hardscape' },
    { id: 'process', label: 'Process' },
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className={`site-header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-inner">
        {/* Brand Logo */}
        <button 
          className="brand-logo-btn" 
          onClick={() => handleNavClick('home')}
          aria-label="Khaan Stone Home"
        >
          <div className="logo-symbol">
            <svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 3L28 10V22L16 29L4 22V10L16 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
              <path d="M16 3V29" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
              <path d="M4 10L16 16L28 10" stroke="currentColor" strokeWidth="1.75" />
              <path d="M4 22L16 16L28 22" stroke="currentColor" strokeWidth="1.75" />
            </svg>
          </div>
          <div className="logo-text">
            <span className="logo-main">KHAAN STONE</span>
            <span className="logo-tagline">HARDSCAPE</span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${activeView === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Header Actions */}
        <div className="header-actions">
          <a href="tel:6045550190" className="header-phone">
            <Phone size={14} />
            <span>(604) 555-0190</span>
          </a>
          
          <button
            className="btn-header-cta"
            onClick={() => handleNavClick('contact')}
          >
            <span>Inquire</span>
            <ArrowUpRight size={14} />
          </button>

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
        <div className="mobile-drawer-header">
          <div className="logo-text">
            <span className="logo-main">KHAAN STONE</span>
            <span className="logo-tagline">HARDSCAPE</span>
          </div>
          <button 
            className="mobile-drawer-close"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <div className="mobile-nav-links">
          {navItems.map((item, idx) => (
            <button
              key={item.id}
              className={`mobile-nav-link ${activeView === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              <span className="mobile-nav-index">0{idx + 1}</span>
              <span className="mobile-nav-title">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="mobile-nav-footer">
          <a href="tel:6045550190" className="mobile-phone-link">
            <Phone size={16} /> (604) 555-0190
          </a>
          <button
            className="btn-luxury-primary"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={() => handleNavClick('contact')}
          >
            <span>Request Site Consultation</span>
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </header>
  );
}
