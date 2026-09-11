import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const RESIDENTIAL_SERVICES = [
  'Manufactured Stones',
  'Bricks',
  'Natural Stones',
  'Exterior Tiles',
  'Concrete Blocks',
  'Precast Concrete',
  'Paving Stones',
  'Building Facings & Storefronts',
  'Driveways',
  'Retaining Walls',
  'Custom Rock Work and Walls',
  'Pillars'
];

const COMMERCIAL_SERVICES = [
  'Manufactured Stones',
  'Bricks',
  'Natural Stones',
  'Exterior Tiles',
  'Concrete Blocks',
  'Precast Concrete',
  'Paving Stones & Plazas',
  'Building Facings & Storefronts',
  'Driveways & Heavy Access',
  'Retaining & Structural Walls',
  'Custom Rock Work and Walls',
  'Pillars & Columns'
];

export default function Services({ onContactClick }) {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="subpage-view hardscape-services-page animate-fade-in">
      {/* Page Header */}
      <div className="subpage-hero">
        <div className="subpage-hero-inner">
          <div className="brand-tri-bar" style={{ justifyContent: 'center' }}>
            <span className="bar-sand"></span>
            <span className="bar-terracotta"></span>
            <span className="bar-slate"></span>
          </div>
          <span className="subpage-kicker">SERVICES &amp; SCOPE OF WORK</span>
          <h1 className="subpage-title">Hardscape &amp; Stone Work</h1>
        </div>
      </div>

      <div className="subpage-content-container">
        {/* Filter / Toggle Tabs */}
        <div className="hardscape-tab-bar">
          <button 
            className={`hardscape-tab-btn tab-btn-all ${activeTab === 'all' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Services
          </button>
          <button 
            className={`hardscape-tab-btn tab-btn-res ${activeTab === 'residential' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('residential')}
          >
            <span className="tab-pill-dot dot-sand"></span>
            <span>Residential</span>
          </button>
          <button 
            className={`hardscape-tab-btn tab-btn-com ${activeTab === 'commercial' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('commercial')}
          >
            <span className="tab-pill-dot dot-terracotta"></span>
            <span>Commercial</span>
          </button>
        </div>

        <div className="hardscape-sectors-grid">
          {/* Residential Section */}
          {(activeTab === 'all' || activeTab === 'residential') && (
            <div className="hardscape-sector-card sector-card-residential">
              <div className="sector-image-frame">
                <img 
                  src="/houston1.jpg" 
                  alt="Residential Hardscape and Stone Work" 
                  className="sector-img"
                  loading="lazy"
                />
                <div className="sector-image-badge badge-sand">Residential</div>
              </div>

              <div className="sector-body">
                <div className="sector-header-row">
                  <h2 className="sector-title title-sand">RESIDENTIAL</h2>
                  <div className="sector-color-strip strip-sand"></div>
                </div>
                <p className="sector-desc">
                  Custom residential masonry, estate stone entryways, driveway paving, and private landscape structures.
                </p>

                <ul className="sector-bullet-list">
                  {RESIDENTIAL_SERVICES.map((item, idx) => {
                    const dotColor = idx % 3 === 0 ? 'bullet-sand' : idx % 3 === 1 ? 'bullet-terracotta' : 'bullet-slate';
                    return (
                      <li key={idx} className="sector-bullet-item">
                        <span className={`bullet-dot ${dotColor}`}>•</span>
                        <span className="bullet-text">{item}</span>
                      </li>
                    );
                  })}
                </ul>

                <button 
                  className="btn-luxury-primary sector-inquire-btn"
                  onClick={onContactClick}
                >
                  <span>Request Residential Estimate</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          )}

          {/* Commercial Section */}
          {(activeTab === 'all' || activeTab === 'commercial') && (
            <div className="hardscape-sector-card sector-card-commercial">
              <div className="sector-image-frame">
                <img 
                  src="/houston6.jpg" 
                  alt="Commercial Hardscape and Stone Work" 
                  className="sector-img"
                  loading="lazy"
                />
                <div className="sector-image-badge badge-slate">Commercial</div>
              </div>

              <div className="sector-body">
                <div className="sector-header-row">
                  <h2 className="sector-title title-terracotta">COMMERCIAL</h2>
                  <div className="sector-color-strip strip-slate"></div>
                </div>
                <p className="sector-desc">
                  Large-scale structural masonry, commercial plaza pavers, building facings, and engineered retaining systems.
                </p>

                <ul className="sector-bullet-list">
                  {COMMERCIAL_SERVICES.map((item, idx) => {
                    const dotColor = idx % 3 === 0 ? 'bullet-terracotta' : idx % 3 === 1 ? 'bullet-slate' : 'bullet-sand';
                    return (
                      <li key={idx} className="sector-bullet-item">
                        <span className={`bullet-dot ${dotColor}`}>•</span>
                        <span className="bullet-text">{item}</span>
                      </li>
                    );
                  })}
                </ul>

                <button 
                  className="btn-luxury-primary sector-inquire-btn"
                  onClick={onContactClick}
                >
                  <span>Request Commercial Tender</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Action Callout */}
        <div className="subpage-action-banner">
          <h3>Need customized hardscape or architectural stone masonry?</h3>
          <button 
            className="btn-luxury-primary"
            onClick={onContactClick}
          >
            <span>Get a Free Site Consultation</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
