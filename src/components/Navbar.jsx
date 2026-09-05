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
    { id: 'hardscape', label: 'Hardscape' },
    { id: 'process', label: 'Process' },
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className={`site-header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-inner">
        {/* Brand Logo with Official SVG / PNG */}
        <button 
          className="brand-logo-btn" 
          onClick={() => handleNavClick('home')}
          aria-label="Khaan Stone Home"
        >
          <img 
            src="/logo/logo.svg" 
            alt="Khaan Stone Logo" 
            className="brand-logo-img"
          />
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
          <a href="tel:2368632328" className="header-phone">
            <Phone size={14} />
            <span>(236) 863-2328</span>
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
          <div className="mobile-drawer-brand">
            <img 
              src="/logo/logo.svg" 
              alt="Khaan Stone Logo" 
              className="mobile-drawer-logo-img"
            />
            <div className="logo-text">
              <span className="logo-main">KHAAN STONE</span>
              <span className="logo-tagline">HARDSCAPE</span>
            </div>
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
          <a href="tel:2368632328" className="mobile-phone-link">
            <Phone size={16} /> (236) 863-2328
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
