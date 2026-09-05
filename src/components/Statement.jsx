import React from 'react';

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
      {/* Accent Color Band */}
      <div className="accent-divider-band"></div>

      {/* Main Punchy Editorial Statement */}
      <div className="statement-inner">
        <div className="statement-content-container">
          <h2 className="statement-lead-text">
            At Khaan Stone, our team of dedicated craftsmen specialize in interior &amp; exterior stone work from design to installation. We undertake complex architectural &amp; engineered projects that require a high level of expertise in Vancouver’s Lower Mainland area.
          </h2>
        </div>
      </div>

      {/* Clean Client / Builder Partners Showcase */}
      <div className="clients-strip-wrap">
        <div className="clients-container">
          <h3 className="clients-heading">Trusted By Leading Builders &amp; Architects</h3>
          <div className="clients-grid">
            {CLIENTS.map((client, i) => (
              <div key={i} className="client-badge-card">
                <div className="client-badge-symbol">
                  <span className="client-bullet">◆</span>
                </div>
                <span className="client-name">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
