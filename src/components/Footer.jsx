import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer({ onNavClick }) {
  return (
    <footer className="site-footer">
      <div className="footer-top-strip">
        <div className="footer-container">
          <div className="footer-brand-col">
            <div className="footer-brand-logo-wrap">
              <img 
                src="/logo/logo.svg" 
                alt="Khaan Stone" 
                className="footer-brand-logo-img" 
              />
              <div className="footer-brand-text">
                <span className="footer-brand-name">KHAAN STONE</span>
                <span className="footer-brand-tagline">Hardscape &amp; Stone Construction • Vancouver, Abbotsford, Chilliwack &amp; Fraser Valley</span>
              </div>
            </div>
          </div>

          <div className="footer-contact-items">
            <a href="tel:2368632328" className="footer-contact-link">
              <Phone size={14} />
              <span>(236) 863-2328</span>
            </a>
            <span className="footer-bullet">•</span>
            <a href="mailto:khaanstone@gmail.com" className="footer-contact-link">
              <Mail size={14} />
              <span>khaanstone@gmail.com</span>
            </a>
            <span className="footer-bullet">•</span>
            <span className="footer-location-text">
              <MapPin size={14} />
              <span>Vancouver &amp; Fraser Valley, BC</span>
            </span>
          </div>
        </div>
      </div>

      <div className="footer-bottom-row">
        <div className="footer-container">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Khaan Stone Ltd. All Rights Reserved.
          </p>

          <div className="footer-social-links">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect width="4" height="12" x="2" y="9"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
