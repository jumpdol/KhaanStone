import React from 'react';
import entrywayStairs from '../assets/entryway_stairs.png';

export default function About() {
  return (
    <section id="about" className="section reveal">
      <div className="section-header">
        <span className="section-subtitle">Our Heritage</span>
        <h2 className="section-title">Built to Last, Designed to Inspire</h2>
      </div>

      <div className="grid-2">
        <div className="about-text">
          <p className="about-p">
            Based in Vancouver, <strong>Khaan Stone</strong> is a professional masonry contracting firm dedicated to executing high-end stone and concrete block architectural features. We specialize in exterior stonework that stands up to the unique wet, temperate climate of the Pacific Northwest.
          </p>
          <p className="about-p">
            We partner closely with homeowners, landscape architects, and general contractors to deliver structural integrity combined with clean, minimalist aesthetics. Every block line, joint, and natural stone cleft is carefully inspected and placed by certified craftsmen who take pride in detail-oriented, long-lasting stonework.
          </p>
          <p className="about-p">
            Whether it is securing a hillside with a massive structural block retaining wall or welcoming guests with a beautifully custom-cut slate entryway, Khaan Stone delivers premium masonry on time, on budget, and to the highest Canadian construction standards.
          </p>

          <div className="stats-grid">
            <div className="stat-item glass-panel">
              <span className="stat-num">10+</span>
              <span className="stat-label">Years of Craft</span>
            </div>
            <div className="stat-item glass-panel">
              <span className="stat-num">150+</span>
              <span className="stat-label">Vancouver Sites</span>
            </div>
            <div className="stat-item glass-panel">
              <span className="stat-num">5/5</span>
              <span className="stat-label">Client Rating</span>
            </div>
          </div>
        </div>

        <div className="about-image-container">
          <img 
            src={entrywayStairs} 
            alt="Khaan Stone modern entryway installation in Vancouver" 
            className="about-image"
          />
        </div>
      </div>
    </section>
  );
}
