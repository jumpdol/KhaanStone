import React from 'react';
import { ShieldCheck, Compass, Hammer, Sparkles } from 'lucide-react';

export default function Statement() {
  return (
    <section className="statement-section reveal">
      <div className="statement-container">
        <div className="statement-header-block">
          <span className="section-eyebrow">OUR PHILOSOPHY</span>
          <h2 className="statement-title">
            Crafting landscapes and stone structures that blur the boundary between <em>nature and architecture</em>.
          </h2>
          <p className="statement-desc">
            At Khaan Stone, every stone is hand-selected and meticulously placed. Built to withstand the Pacific Northwest's rainfall, freeze-thaw cycles, and seismic conditions, our masonry installations deliver both structural permanence and organic aesthetic harmony.
          </p>
        </div>

        <div className="statement-pillars-grid">
          <div className="pillar-card">
            <div className="pillar-icon-wrap">
              <Compass size={24} />
            </div>
            <h3 className="pillar-title">Architectural Precision</h3>
            <p className="pillar-text">
              Collaborating directly with leading BC landscape architects, structural engineers, and luxury builders to execute complex geometries with zero tolerance for error.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon-wrap">
              <Hammer size={24} />
            </div>
            <h3 className="pillar-title">Master Stoneworkers</h3>
            <p className="pillar-text">
              Every cut, pitch, and joint is carved by experienced stone craftsmen with generational mastery over basalt, slate, granite, and interlocking block systems.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon-wrap">
              <ShieldCheck size={24} />
            </div>
            <h3 className="pillar-title">Engineered For Decades</h3>
            <p className="pillar-text">
              Sub-base compaction, laser drainage slope management, and heavy-duty geo-grid stabilization ensure your retaining walls and stonework never shift or settle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
