import React from 'react';
import { Compass, Layers, Hammer, CheckSquare, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    num: '01',
    title: 'Consultation & Site Feasibility',
    icon: Compass,
    description: 'We evaluate grading, geotechnical requirements, architectural blueprints, and stone material choices with project stakeholders.',
    image: '/houston8.jpg'
  },
  {
    num: '02',
    title: 'Engineering & Precision Sourcing',
    icon: Layers,
    description: 'Structural load calculations, drainage design, and direct quarry sourcing of premium granite, basalt, slate, or manufactured masonry.',
    image: '/houston4.jpg'
  },
  {
    num: '03',
    title: 'Groundwork & Structural Base',
    icon: Hammer,
    description: 'Deep excavation, compacted aggregate foundation, geotextile membrane placement, and integrated subsurface drainage systems.',
    image: '/houston5.jpg'
  },
  {
    num: '04',
    title: 'Master Installation & Hand Finishing',
    icon: CheckSquare,
    description: 'Meticulous stone placement, precision hand chiseling, seamless mortar or dry-stack joints, and architectural sealant application.',
    image: '/houston3.jpg'
  }
];

export default function Process({ onContactClick }) {
  return (
    <div className="subpage-view process-page animate-fade-in">
      <div className="subpage-hero">
        <div className="subpage-hero-inner">
          <div className="brand-tri-bar" style={{ justifyContent: 'center' }}>
            <span className="bar-sand"></span>
            <span className="bar-terracotta"></span>
            <span className="bar-slate"></span>
          </div>
          <span className="subpage-kicker">METICULOUS EXECUTION</span>
          <h1 className="subpage-title">Our Process</h1>
        </div>
      </div>

      <div className="subpage-content-container">
        <div className="process-intro-text">
          <p>
            Every enduring stone structure requires rigorous engineering and old-world craftsmanship. Our streamlined 4-phase methodology guarantees structural integrity and flawless aesthetic delivery.
          </p>
        </div>

        <div className="process-steps-list">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            const colorClass = index === 0 ? 'step-sand' : index === 1 ? 'step-terracotta' : index === 2 ? 'step-slate' : 'step-tri';
            return (
              <div key={step.num} className={`process-step-row ${colorClass}`}>
                <div className="process-step-num-col">
                  <span className={`step-huge-num num-${colorClass}`}>{step.num}</span>
                  <div className="step-num-line"></div>
                </div>

                <div className={`process-step-body body-${colorClass}`}>
                  <div className="process-step-info">
                    <div className={`step-icon-badge badge-${colorClass}`}>
                      <Icon size={22} />
                    </div>
                    <h3 className="process-step-title">{step.title}</h3>
                    <p className="process-step-desc">{step.description}</p>
                  </div>

                  <div className="process-step-img-wrap">
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="process-step-img"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="subpage-action-banner">
          <h3>Have architectural drawings or a project site in mind?</h3>
          <button 
            className="btn-luxury-primary"
            onClick={onContactClick}
          >
            <span>Start Consultation</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
