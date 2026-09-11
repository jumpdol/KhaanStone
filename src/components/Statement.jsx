import React from 'react';
import { Layers, ShieldCheck, Sparkles } from 'lucide-react';

const CLIENTS = [
  { name: 'Cressey Developments', short: 'CRESSEY' },
  { name: 'Landa Global', short: 'LANDA' },
  { name: 'ITC Construction Group', short: 'ITC GROUP' },
  { name: 'Wall Financial', short: 'WALL FINANCIAL' },
  { name: 'Syncra Construction', short: 'SYNCRA' },
  { name: 'Bosa Properties', short: 'BOSA' }
];

export default function Statement() {
  return (
    <section className="statement-section" id="statement">
      {/* 6px Accent Color Band with 3 Brand Colors */}
      <div className="accent-divider-band"></div>

      {/* Main Editorial Statement */}
      <div className="statement-inner">
        <div className="statement-content-container">
          <div className="brand-tri-bar" style={{ justifyContent: 'center', marginBottom: '24px' }}>
            <span className="bar-sand"></span>
            <span className="bar-terracotta"></span>
            <span className="bar-slate"></span>
          </div>

          <span className="statement-kicker">ARCHITECTURAL HARDSCAPE &amp; STONE MASONRY</span>
          
          <h2 className="statement-lead-text">
            At <span className="highlight-sand">Khaan Stone</span>, our team of dedicated craftsmen specialize in{' '}
            <span className="highlight-terracotta">residential &amp; commercial hardscape</span> and{' '}
            <span className="highlight-slate">custom stone work</span> from design to installation. We undertake complex architectural &amp; engineered projects across Vancouver and the Fraser Valley.
          </h2>

          {/* 3 Core Identity Pillars */}
          <div className="brand-pillars-strip">
            <div className="brand-pillar-box pillar-box-sand">
              <div className="pillar-box-icon">
                <Sparkles size={24} />
              </div>
              <div className="pillar-box-content">
                <span className="pillar-box-tag">COLLECTION • 01</span>
                <h3 className="pillar-box-title">Natural Sandstone &amp; Rock</h3>
                <p className="pillar-box-desc">Hand-chiseled architectural flagstone, natural granite steps, and bespoke garden features.</p>
              </div>
            </div>

            <div className="brand-pillar-box pillar-box-terracotta">
              <div className="pillar-box-icon">
                <Layers size={24} />
              </div>
              <div className="pillar-box-content">
                <span className="pillar-box-tag">STRUCTURE • 02</span>
                <h3 className="pillar-box-title">Precision Brick &amp; Cladding</h3>
                <p className="pillar-box-desc">Dimensioned stone veneer, commercial facades, storefronts, and architectural masonry.</p>
              </div>
            </div>

            <div className="brand-pillar-box pillar-box-slate">
              <div className="pillar-box-icon">
                <ShieldCheck size={24} />
              </div>
              <div className="pillar-box-content">
                <span className="pillar-box-tag">ENGINEERING • 03</span>
                <h3 className="pillar-box-title">Engineered Slate &amp; Retaining</h3>
                <p className="pillar-box-desc">Heavy structural retaining walls, seismic anchored boulders, and sub-base drainage.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clean Client / Builder Partners Showcase */}
      <div className="clients-strip-wrap">
        <div className="clients-container">
          <h3 className="clients-heading">Trusted By Leading Builders &amp; General Contractors</h3>
          <div className="clients-grid">
            {CLIENTS.map((client, i) => {
              const colorClass = i % 3 === 0 ? 'bullet-sand' : i % 3 === 1 ? 'bullet-terracotta' : 'bullet-slate';
              const cardClass = i % 3 === 0 ? 'card-sand' : i % 3 === 1 ? 'card-terracotta' : 'card-slate';
              return (
                <div key={i} className={`client-badge-card ${cardClass}`}>
                  <div className="client-badge-symbol">
                    <span className={`client-bullet ${colorClass}`}>◆</span>
                  </div>
                  <span className="client-name">{client.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
