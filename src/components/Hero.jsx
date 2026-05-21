import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content animate-fade-in-up">
        <span className="hero-subtitle">Premium Masonry Contracting</span>
        <h1 className="hero-title">
          Architectural <span>Stone & Block</span> Craftsmanship
        </h1>
        <p className="hero-desc">
          Professional stone masonry and concrete block construction in Vancouver, BC. Specializing in high-end structural retaining walls, elegant entryways, and custom flagstone features.
        </p>
        <div className="hero-actions">
          <button className="btn-cta" onClick={() => handleScrollTo('estimator')}>
            Estimate Project <ArrowRight size={16} />
          </button>
          <button className="btn-outline" onClick={() => handleScrollTo('portfolio')}>
            Explore Portfolio
          </button>
        </div>
      </div>

      <div className="scroll-indicator" onClick={() => handleScrollTo('services')}>
        <span>Scroll to Explore</span>
        <div className="mouse-icon">
          <div className="mouse-wheel"></div>
        </div>
      </div>
    </section>
  );
}
