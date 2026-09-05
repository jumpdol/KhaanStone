import React from 'react';
import { Shield, Award, CheckCircle2, MapPin } from 'lucide-react';

export default function About({ onContactClick }) {
  return (
    <div className="subpage-view about-page animate-fade-in">
      {/* Page Header */}
      <div className="subpage-hero">
        <div className="subpage-hero-inner">
          <span className="subpage-kicker">OUR HERITAGE &amp; VALUES</span>
          <h1 className="subpage-title">About Khaan Stone</h1>
        </div>
      </div>

      <div className="subpage-content-container">
        {/* Split Section: Integrity */}
        <div className="about-split-grid">
          <div className="about-text-column">
            <h2 className="about-heading-accent">INTEGRITY &amp; MASTERY</h2>
            <div className="about-narrative">
              <p>
                Since our inception, Khaan Stone has progressively become one of British Columbia’s premier leaders in high-end architectural stone masonry and engineered landscape structures.
              </p>
              <p>
                From private estate courtyards in West Vancouver and Shaughnessy to large-scale multi-family residential and landmark commercial developments, our performance speaks for itself. We collaborate seamlessly with leading architects, geotechnical engineers, and premier general contractors.
              </p>
              <p>
                Each project brings unique terrain and architectural requirements. Our goal is to translate the vision into timeless stone structures built to endure Pacific Northwest weather for generations.
              </p>
            </div>

            <div className="about-metrics-row">
              <div className="about-metric-item">
                <span className="about-metric-val">15+</span>
                <span className="about-metric-lbl">Years in Metro Vancouver</span>
              </div>
              <div className="about-metric-item">
                <span className="about-metric-val">500+</span>
                <span className="about-metric-lbl">Completed Projects</span>
              </div>
              <div className="about-metric-item">
                <span className="about-metric-val">$5M</span>
                <span className="about-metric-lbl">Commercial Liability</span>
              </div>
            </div>
          </div>

          <div className="about-image-column">
            <div className="about-image-frame">
              <img 
                src="/houston7.jpg" 
                alt="Khaan Stone Craftsmanship" 
                className="about-feature-img"
              />
              <div className="about-image-caption">
                <span>Hand-chiseled architectural stone masonry</span>
              </div>
            </div>
          </div>
        </div>

        {/* Safety & Standards Section */}
        <div className="about-safety-card">
          <div className="safety-card-inner">
            <div className="safety-header">
              <Shield className="safety-icon" size={32} />
              <div>
                <h3 className="safety-title">Safety &amp; Engineering Standards</h3>
                <p className="safety-subtitle">Uncompromising commitment to site safety, structural codes, and Red Seal craftsmanship.</p>
              </div>
            </div>

            <div className="safety-points-grid">
              <div className="safety-point">
                <CheckCircle2 size={18} className="safety-check" />
                <span>WorkSafeBC compliant with zero-compromise site protocols.</span>
              </div>
              <div className="safety-point">
                <CheckCircle2 size={18} className="safety-check" />
                <span>Engineered sub-base drainage and seismic anchoring on all walls.</span>
              </div>
              <div className="safety-point">
                <CheckCircle2 size={18} className="safety-check" />
                <span>Direct collaboration with municipal building inspectors and structural engineers.</span>
              </div>
              <div className="safety-point">
                <CheckCircle2 size={18} className="safety-check" />
                <span>All materials locally sourced from sustainable BC and North American quarries.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Callout */}
        <div className="subpage-action-banner">
          <h3>Ready to discuss your architectural stone project?</h3>
          <button 
            className="btn-luxury-primary"
            onClick={onContactClick}
          >
            <span>Request Site Consultation</span>
          </button>
        </div>
      </div>
    </div>
  );
}
