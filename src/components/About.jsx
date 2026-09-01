import React from 'react';
import { Award, Shield, CheckCircle, ArrowRight } from 'lucide-react';

export default function About() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="about-section reveal">
      <div className="about-container">
        <div className="about-layout-grid">
          {/* Left Column: Rich Imagery Collage */}
          <div className="about-visual-column">
            <div className="about-image-primary-wrap">
              <img 
                src="/houston7.jpg" 
                alt="Khaan Stone Craftsmanship & Stonework Heritage" 
                className="about-image-primary"
                loading="lazy"
              />
              <div className="about-experience-badge">
                <span className="badge-num">20+</span>
                <span className="badge-txt">Years of Architectural Stonework</span>
              </div>
            </div>

            <div className="about-image-secondary-wrap">
              <img 
                src="/houston8.jpg" 
                alt="Natural stone steps installation Vancouver" 
                className="about-image-secondary"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Narrative & Credentials */}
          <div className="about-content-column">
            <span className="section-eyebrow">ABOUT KHAAN STONE</span>
            <h2 className="section-title-large">
              West Coast Heritage, <br />
              <span className="text-serif-italic">Uncompromising Stonework.</span>
            </h2>

            <p className="about-lead-text">
              Based in Metro Vancouver, <strong>Khaan Stone</strong> is a specialized architectural stone masonry and landscape construction contractor dedicated to crafting permanent, inspiring outdoor spaces.
            </p>

            <p className="about-body-text">
              From steep West Vancouver hillsides requiring heavy-duty engineered block retaining walls to historic Point Grey residences desiring hand-dressed slate steps, we bridge the gap between structural civil engineering and artisanal masonry craftsmanship.
            </p>

            <div className="about-pillars-list">
              <div className="about-pillar-item">
                <div className="pillar-check"><CheckCircle size={18} /></div>
                <div>
                  <h4 className="pillar-heading">Red Seal Masonry Craftsmanship</h4>
                  <p className="pillar-sub">Every stone is chiseled, leveled, and bonded with time-tested European and West Coast techniques.</p>
                </div>
              </div>

              <div className="about-pillar-item">
                <div className="pillar-check"><CheckCircle size={18} /></div>
                <div>
                  <h4 className="pillar-heading">Engineered for BC Seismic & Rain Loads</h4>
                  <p className="pillar-sub">Deep drainage gravel trenches, frost-depth foundations, and geogrid stabilization prevent shifting or cracking.</p>
                </div>
              </div>

              <div className="about-pillar-item">
                <div className="pillar-check"><CheckCircle size={18} /></div>
                <div>
                  <h4 className="pillar-heading">Complete Commercial & Residential Licensure</h4>
                  <p className="pillar-sub">$5,000,000 commercial general liability insurance, full WorkSafeBC coverage, and bonded status.</p>
                </div>
              </div>
            </div>

            <div className="about-cta-row">
              <button className="btn-luxury-primary" onClick={() => handleScrollTo('contact')}>
                <span>Schedule a Site Meeting</span>
                <ArrowRight size={16} />
              </button>
              <div className="about-location-tag">
                Serving Metro Vancouver & Sea-to-Sky
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
