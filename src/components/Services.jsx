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
          <span className="subpage-kicker">SERVICES &amp; SCOPE OF WORK</span>
          <h1 className="subpage-title">Hardscape &amp; Stone Work</h1>
        </div>
      </div>

      <div className="subpage-content-container">
        {/* Filter / Toggle Tabs */}
        <div className="hardscape-tab-bar">
          <button 
            className={`hardscape-tab-btn ${activeTab === 'all' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Services
          </button>
          <button 
            className={`hardscape-tab-btn ${activeTab === 'residential' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('residential')}
          >
            Residential
          </button>
          <button 
            className={`hardscape-tab-btn ${activeTab === 'commercial' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('commercial')}
          >
            Commercial
          </button>
        </div>

        <div className="hardscape-sectors-grid">
          {/* Residential Section */}
          {(activeTab === 'all' || activeTab === 'residential') && (
            <div className="hardscape-sector-card">
              <div className="sector-image-frame">
                <img 
                  src="/houston1.jpg" 
                  alt="Residential Hardscape and Stone Work" 
                  className="sector-img"
                  loading="lazy"
                />
                <div className="sector-image-badge">Residential</div>
              </div>

              <div className="sector-body">
                <h2 className="sector-title">RESIDENTIAL</h2>
                <p className="sector-desc">
                  Custom residential masonry, estate stone entryways, driveway paving, and private landscape structures.
                </p>

                <ul className="sector-bullet-list">
                  {RESIDENTIAL_SERVICES.map((item, idx) => (
                    <li key={idx} className="sector-bullet-item">
                      <span className="bullet-dot">•</span>
                      <span className="bullet-text">{item}</span>
                    </li>
                  ))}
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
            <div className="hardscape-sector-card">
              <div className="sector-image-frame">
                <img 
                  src="/houston6.jpg" 
                  alt="Commercial Hardscape and Stone Work" 
                  className="sector-img"
                  loading="lazy"
                />
                <div className="sector-image-badge">Commercial</div>
              </div>

              <div className="sector-body">
                <h2 className="sector-title">COMMERCIAL</h2>
                <p className="sector-desc">
                  Large-scale structural masonry, commercial plaza pavers, building facings, and engineered retaining systems.
                </p>

                <ul className="sector-bullet-list">
                  {COMMERCIAL_SERVICES.map((item, idx) => (
                    <li key={idx} className="sector-bullet-item">
                      <span className="bullet-dot">•</span>
                      <span className="bullet-text">{item}</span>
                    </li>
                  ))}
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
