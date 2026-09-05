import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

const SYSTEMS = [
  {
    id: 'cladding',
    title: 'Exterior Architectural Cladding',
    tagline: 'Dimensional & Ledgerock Systems',
    description: 'Precision mechanical anchored and adhered stone veneer for modern luxury residences, commercial towers, and estate facades.',
    points: ['Stainless steel anchoring', 'Weather-resistant rainscreen integration', 'Natural basalt, limestone, and granite'],
    image: '/houston1.jpg'
  },
  {
    id: 'retaining',
    title: 'Engineered Retaining Walls',
    tagline: 'Structural Slope Stabilization',
    description: 'Heavy-duty block, granite boulder, and gravity wall systems designed to stabilize West Coast hillsides and create terraced usable land.',
    points: ['Engineered backfill & French drainage', 'Integrated geogrid reinforcement', 'Commercial & estate scale'],
    image: '/houston2.jpg'
  },
  {
    id: 'paving',
    title: 'Natural Stone Paving & Entryways',
    tagline: 'Monolithic Steps & Courtyards',
    description: 'Hand-cut Bluestone, granite flagstone, and precision permeable pavers designed for luxury driveways, grand entrances, and outdoor living.',
    points: ['Heavy load vehicular rating', 'Thermal anti-slip surface treatments', 'Custom radial cuts and bullnose borders'],
    image: '/houston3.jpg'
  },
  {
    id: 'interior',
    title: 'Interior Architectural Stone',
    tagline: 'Fireplaces & Feature Walls',
    description: 'Floor-to-ceiling stone hearths, wine cellar masonry, and bookmatched stone accent installations for high-end interior architecture.',
    points: ['Seamless mitred corners', 'Non-combustible hearth masonry', 'Custom lighting integration'],
    image: '/houston7.jpg'
  }
];

export default function Services({ onContactClick }) {
  return (
    <div className="subpage-view systems-page animate-fade-in">
      <div className="subpage-hero">
        <div className="subpage-hero-inner">
          <span className="subpage-kicker">MASONRY CAPABILITIES</span>
          <h1 className="subpage-title">Masonry Systems</h1>
        </div>
      </div>

      <div className="subpage-content-container">
        <div className="systems-intro-text">
          <p>
            Khaan Stone engineers and installs specialized stone assemblies designed to exceed BC building codes and deliver unmatched architectural distinction.
          </p>
        </div>

        <div className="systems-list">
          {SYSTEMS.map((system, index) => (
            <div 
              key={system.id} 
              className={`system-row-card ${index % 2 === 1 ? 'system-row-reverse' : ''}`}
            >
              <div className="system-image-col">
                <img 
                  src={system.image} 
                  alt={system.title} 
                  className="system-card-img"
                  loading="lazy"
                />
              </div>

              <div className="system-content-col">
                <span className="system-tagline">{system.tagline}</span>
                <h3 className="system-title">{system.title}</h3>
                <p className="system-desc">{system.description}</p>
                
                <ul className="system-features-list">
                  {system.points.map((pt, i) => (
                    <li key={i} className="system-feature-item">
                      <Check size={16} className="system-check-icon" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  className="btn-system-inquire"
                  onClick={onContactClick}
                >
                  <span>Inquire for Specifications</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
