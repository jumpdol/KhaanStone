import React from 'react';

export default function Footer() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {/* LeBron James minimal style crown with K and S pillars & 3 colored stones */}
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 12L10 6L14 12H6Z" fill="#e74c3c" />
            <path d="M13 9L16 3L19 9H13Z" fill="#3498db" />
            <path d="M18 12L22 6L26 12H18Z" fill="#f1c40f" />
            <path d="M8 14V26M8 20L13 14M8 20L13 26" stroke="var(--text-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19 14H24V20H19V26H24" stroke="var(--text-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          KHAAN<span>STONE</span>
        </div>

        <div className="footer-links">
          <a href="#home" className="footer-link" onClick={(e) => { e.preventDefault(); handleScrollTo('home'); }}>Home</a>
          <a href="#services" className="footer-link" onClick={(e) => { e.preventDefault(); handleScrollTo('services'); }}>Services</a>
          <a href="#about" className="footer-link" onClick={(e) => { e.preventDefault(); handleScrollTo('about'); }}>About</a>
          <a href="#portfolio" className="footer-link" onClick={(e) => { e.preventDefault(); handleScrollTo('portfolio'); }}>Portfolio</a>
          <a href="#estimator" className="footer-link" onClick={(e) => { e.preventDefault(); handleScrollTo('estimator'); }}>Estimator</a>
          <a href="#contact" className="footer-link" onClick={(e) => { e.preventDefault(); handleScrollTo('contact'); }}>Contact</a>
        </div>

        <p style={{ maxWidth: '600px', fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
          <strong>Service Areas:</strong> Metro Vancouver, North Vancouver, West Vancouver, Burnaby, Richmond, Coquitlam, Port Coquitlam, Surrey, Langley, Delta, New Westminster.
        </p>

        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} Khaan Stone. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <span>BC Licensed & Bonded</span>
            <span>•</span>
            <span>$5M Commercial General Liability Insured</span>
            <span>•</span>
            <span>WorkSafeBC Registered</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
