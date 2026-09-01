import React from 'react';
import { ArrowRight, ArrowUpRight, ShieldCheck, Award, MapPin } from 'lucide-react';

export default function Hero() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Background Image Layer with Luxury Dark Gradient Overlay */}
      <div className="hero-bg-layer">
        <img 
          src="/houston1.jpg" 
          alt="Khaan Stone Luxury Architectural Stone and Landscape Masonry in Vancouver" 
          className="hero-bg-image"
        />
        <div className="hero-gradient-overlay"></div>
      </div>

      <div className="hero-container">
        {/* Editorial Subtitle Pill */}
        <div className="hero-badge-pill animate-fade-in-up">
          <span className="badge-dot"></span>
          <span className="badge-text">Vancouver’s Master Stone & Landscape Masonry</span>
        </div>

        {/* Hero Main Headline */}
        <h1 className="hero-heading animate-fade-in-up">
          Shaping Earth & Stone <br />
          <span className="hero-heading-italic">Into Architectural Legacy.</span>
        </h1>

        {/* Hero Narrative Paragraph */}
        <p className="hero-subtext animate-fade-in-up">
          Specializing in structural retaining walls, bespoke granite & slate entryways, natural flagstone courtyards, and architectural masonry across Metro Vancouver & the Sea-to-Sky corridor.
        </p>

        {/* Hero Action CTAs */}
        <div className="hero-cta-group animate-fade-in-up">
          <button 
            className="btn-luxury-primary btn-large" 
            onClick={() => handleScrollTo('portfolio')}
          >
            <span>Explore Portfolio</span>
            <ArrowRight size={18} />
          </button>
          
          <button 
            className="btn-luxury-ghost btn-large" 
            onClick={() => handleScrollTo('contact')}
          >
            <span>Request Site Consultation</span>
            <ArrowUpRight size={18} />
          </button>
        </div>

        {/* Hero Trust Ticker / Fast Credibility Metrics */}
        <div className="hero-metrics-grid animate-fade-in-up">
          <div className="hero-metric-card">
            <div className="metric-number">20+</div>
            <div className="metric-label">Years of Craftsmanship</div>
          </div>
          <div className="hero-metric-divider"></div>
          <div className="hero-metric-card">
            <div className="metric-number">500+</div>
            <div className="metric-label">Completed BC Projects</div>
          </div>
          <div className="hero-metric-divider"></div>
          <div className="hero-metric-card">
            <div className="metric-number">$5M</div>
            <div className="metric-label">Commercial Liability Insured</div>
          </div>
          <div className="hero-metric-divider"></div>
          <div className="hero-metric-card">
            <div className="metric-number">100%</div>
            <div className="metric-label">Red Seal Mason Standard</div>
          </div>
        </div>
      </div>

      {/* Floating West Coast Location Badge */}
      <div className="hero-location-badge">
        <MapPin size={14} className="location-icon" />
        <span>Vancouver • West Vancouver • Whistler • Sea-to-Sky</span>
      </div>
    </section>
  );
}
