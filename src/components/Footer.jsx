import React from 'react';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="footer-top-cta">
        <div className="footer-cta-container">
          <div className="footer-cta-text">
            <h2>Ready to Elevate Your Landscape with Enduring Stone?</h2>
            <p>From initial design consultations to completed architectural stone installations across British Columbia.</p>
          </div>
          <div className="footer-cta-button-wrap">
            <a 
              href="#contact" 
              className="btn-luxury-primary btn-large"
              onClick={(e) => { e.preventDefault(); handleScrollTo('contact'); }}
            >
              <span>Schedule Site Consultation</span>
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Brand Column */}
            <div className="footer-brand-col">
              <div className="brand-logo footer-logo">
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
              </div>

              <p className="footer-brand-desc">
                Vancouver’s premier architectural stone masonry contractor. Dedicated to structural precision, European craft traditions, and West Coast landscape design.
              </p>

              <div className="footer-contact-mini">
                <a href="tel:6045550190" className="footer-contact-item">
                  <Phone size={15} /> (604) 555-0190
                </a>
                <a href="mailto:info@khaanstone.ca" className="footer-contact-item">
                  <Mail size={15} /> info@khaanstone.ca
                </a>
              </div>
            </div>

            {/* Quick Navigation */}
            <div className="footer-nav-col">
              <h4 className="footer-heading">Navigation</h4>
              <ul className="footer-links-list">
                <li><a href="#home" onClick={(e) => { e.preventDefault(); handleScrollTo('home'); }}>Home</a></li>
                <li><a href="#services" onClick={(e) => { e.preventDefault(); handleScrollTo('services'); }}>Services & Capabilities</a></li>
                <li><a href="#portfolio" onClick={(e) => { e.preventDefault(); handleScrollTo('portfolio'); }}>Project Portfolio</a></li>
                <li><a href="#process" onClick={(e) => { e.preventDefault(); handleScrollTo('process'); }}>Craftsmanship Process</a></li>
                <li><a href="#about" onClick={(e) => { e.preventDefault(); handleScrollTo('about'); }}>About Khaan Stone</a></li>
                <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleScrollTo('contact'); }}>Contact & Consultation</a></li>
              </ul>
            </div>

            {/* Capabilities */}
            <div className="footer-nav-col">
              <h4 className="footer-heading">Core Capabilities</h4>
              <ul className="footer-links-list">
                <li><a href="#services" onClick={(e) => { e.preventDefault(); handleScrollTo('services'); }}>Engineered Retaining Walls</a></li>
                <li><a href="#services" onClick={(e) => { e.preventDefault(); handleScrollTo('services'); }}>Architectural Stone Stairs</a></li>
                <li><a href="#services" onClick={(e) => { e.preventDefault(); handleScrollTo('services'); }}>Granite & Slate Entryways</a></li>
                <li><a href="#services" onClick={(e) => { e.preventDefault(); handleScrollTo('services'); }}>Flagstone Patios & Courtyards</a></li>
                <li><a href="#services" onClick={(e) => { e.preventDefault(); handleScrollTo('services'); }}>Natural Stone Veneer Siding</a></li>
                <li><a href="#services" onClick={(e) => { e.preventDefault(); handleScrollTo('services'); }}>Outdoor Living Fireplaces</a></li>
              </ul>
            </div>

            {/* Service Areas */}
            <div className="footer-nav-col">
              <h4 className="footer-heading">Service Coverage</h4>
              <p className="footer-coverage-text">
                Metro Vancouver • West Vancouver • North Vancouver • Whistler • Squamish • Lion’s Bay • Burnaby • Richmond • Coquitlam • Port Moody • Surrey • White Rock • Langley • Delta
              </p>
              <div className="footer-cert-badges">
                <span className="cert-pill">BC Licensed & Bonded</span>
                <span className="cert-pill">$5M Liability Insured</span>
                <span className="cert-pill">WorkSafeBC Registered</span>
              </div>
            </div>
          </div>

          <div className="footer-bottom-row">
            <p className="copyright-text">
              &copy; {new Date().getFullYear()} Khaan Stone Masonry & Landscape Construction Ltd. All rights reserved.
            </p>
            <p className="footer-legal-links">
              <span>Red Seal Craftsmanship</span>
              <span>•</span>
              <span>Built for the Pacific Northwest</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
