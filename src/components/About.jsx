import React from 'react';
import { Shield, Award, CheckCircle2, MapPin, Sparkles, Layers, ShieldCheck, ArrowRight } from 'lucide-react';

export default function About({ onContactClick }) {
  return (
    <div className="subpage-view about-page animate-fade-in">
      {/* Page Header */}
      <div className="subpage-hero">
        <div className="subpage-hero-inner">
          <div className="brand-tri-bar" style={{ justifyContent: 'center' }}>
            <span className="bar-sand"></span>
            <span className="bar-terracotta"></span>
            <span className="bar-slate"></span>
          </div>
          <span className="subpage-kicker">THE PEOPLE BEHIND THE STONE</span>
          <h1 className="subpage-title">About Khaan Stone</h1>
        </div>
      </div>

      <div className="subpage-content-container">
        {/* Split Section: Integrity */}
        <div className="about-split-grid">
          <div className="about-text-column">
            <h2 className="about-heading-accent">Care in every detail.</h2>
            <div className="about-narrative">
              <p>
                Khaan Stone is a Vancouver-based masonry and hardscaping company working with homeowners and builders from Whistler to Chilliwack.
              </p>
              <p>
                From private residential courtyards in West Vancouver, Vancouver, Abbotsford, and Chilliwack to large-scale commercial developments across the Lower Mainland and Fraser Valley, our performance speaks for itself. We collaborate seamlessly with leading architects, builders, and general contractors.
              </p>
              <p>
                Each project brings unique terrain and architectural requirements. We consider how your space will be used, how water moves through the site, and how the materials fit your home and landscape.
              </p>
            </div>

            {/* 3 Brand Pillars */}
            <div className="about-pillars-grid">
              <div className="about-pillar-card pillar-sand">
                <div className="pillar-top-row">
                  <span className="pillar-dot dot-sand">◆</span>
                  <span className="pillar-code">PILLAR 01</span>
                </div>
                <h3 className="pillar-title title-sand">Precision Artistry</h3>
                <p className="pillar-desc">Hand-chiseled architectural flagstone, natural granite steps, and bespoke garden features.</p>
              </div>

              <div className="about-pillar-card pillar-terracotta">
                <div className="pillar-top-row">
                  <span className="pillar-dot dot-terracotta">◆</span>
                  <span className="pillar-code">PILLAR 02</span>
                </div>
                <h3 className="pillar-title title-terracotta">Engineered Strength</h3>
                <p className="pillar-desc">Dimensioned stone veneer, commercial facades, storefronts, and structural columns.</p>
              </div>

              <div className="about-pillar-card pillar-slate">
                <div className="pillar-top-row">
                  <span className="pillar-dot dot-slate">◆</span>
                  <span className="pillar-code">PILLAR 03</span>
                </div>
                <h3 className="pillar-title title-slate">Enduring Legacy</h3>
                <p className="pillar-desc">Heavy structural retaining walls, seismic anchored boulders, and sub-base drainage.</p>
              </div>
            </div>

            {/* Metrics Row with 3 Colors */}
            <div className="about-metrics-row">
              <div className="about-metric-item metric-sand">
                <span className="about-metric-val val-sand">3+</span>
                <span className="about-metric-lbl">Years Field Experience</span>
              </div>
              <div className="about-metric-item metric-terracotta">
                <span className="about-metric-val val-terracotta">50+</span>
                <span className="about-metric-lbl">Delivered Projects</span>
              </div>
              <div className="about-metric-item metric-slate">
                <span className="about-metric-val val-slate">100%</span>
                <span className="about-metric-lbl">Building Code Compliance</span>
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
                <span>Hand-chiseled architectural stone &amp; hardscape masonry</span>
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
                <CheckCircle2 size={18} className="safety-check check-terracotta" />
                <span>WorkSafeBC compliant with zero-compromise site protocols.</span>
              </div>
              <div className="safety-point">
                <CheckCircle2 size={18} className="safety-check check-sand" />
                <span>Engineered sub-base drainage and seismic anchoring on all walls.</span>
              </div>
              <div className="safety-point">
                <CheckCircle2 size={18} className="safety-check check-slate" />
                <span>Direct collaboration with municipal building inspectors and structural engineers.</span>
              </div>
              <div className="safety-point">
                <CheckCircle2 size={18} className="safety-check check-terracotta" />
                <span>All materials locally sourced from sustainable BC and North American quarries.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Callout */}
        <div className="subpage-action-banner">
          <h3>Ready to discuss your hardscape or stone project?</h3>
          <button
            className="btn-luxury-primary"
            onClick={onContactClick}
          >
            <span>Request Site Consultation</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
