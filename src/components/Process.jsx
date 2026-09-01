import React from 'react';
import { Ruler, Sparkles, Hammer, ShieldCheck, CheckCircle2 } from 'lucide-react';

const processSteps = [
  {
    step: '01',
    icon: <Ruler size={24} />,
    title: 'Site Analysis & Engineering Review',
    description: 'We examine your site topography, soil composition, drainage paths, and slope stabilization requirements. For structural retaining walls, we calculate load bearing, geogrid tiebacks, and ensure full compliance with BC building bylaws.',
    highlights: ['Laser-grade elevation mapping', 'Drainage & hydrostatic pressure planning', 'Municipal permit & engineering coordination']
  },
  {
    step: '02',
    icon: <Sparkles size={24} />,
    title: 'Material Sourcing & Hand Selection',
    description: 'We source the finest quarried Pacific Northwest stones—dense mountain basalts, deep charcoal slates, textured granites, and heavy architectural concrete blocks tested for high freeze-thaw durability.',
    highlights: ['Hand-sorted cleft & texture matching', 'High-compression architectural block varieties', 'Color & vein alignment for seamless flow']
  },
  {
    step: '03',
    icon: <Hammer size={24} />,
    title: 'Precision Craftsmanship & Masonry',
    description: 'Our certified Red Seal stonemasons execute every installation with exact joint alignments, deep compacted road-base foundations, structural reinforced mortar, and gravel backfill drainage cores.',
    highlights: ['Vibrated multi-layer base compaction', 'Clean, precision-chiseled stone joints', 'Integrated perforated drainage piping']
  },
  {
    step: '04',
    icon: <ShieldCheck size={24} />,
    title: 'Sealing, Inspection & Handover',
    description: 'We apply premium breathable, hydrophobic stone sealants to lock out moss, efflorescence, and moisture intrusion. We conduct a rigorous multi-point inspection before final client sign-off.',
    highlights: ['Deep penetrating UV & moisture sealants', 'Permeable polymeric joint lock', '10-Year Craftsmanship & Structural Guarantee']
  }
];

export default function Process() {
  return (
    <section id="process" className="process-section reveal">
      <div className="process-container">
        {/* Section Header */}
        <div className="section-header-centered">
          <span className="section-eyebrow">OUR METHODOLOGY</span>
          <h2 className="section-title-large">
            The Khaan Stone <span className="text-serif-italic">Standard of Mastery</span>
          </h2>
          <p className="section-header-sub">
            Inspired by classical stone masonry traditions and modern structural engineering, our structured 4-phase process guarantees longevity and flawless execution.
          </p>
        </div>

        {/* Process 4-Col Flow */}
        <div className="process-steps-grid">
          {processSteps.map((item) => (
            <div key={item.step} className="process-step-card group">
              <div className="step-header">
                <span className="step-number">{item.step}</span>
                <div className="step-icon-wrap">{item.icon}</div>
              </div>

              <h3 className="step-card-title">{item.title}</h3>
              <p className="step-card-desc">{item.description}</p>

              <div className="step-highlights-list">
                {item.highlights.map((h, i) => (
                  <div key={i} className="step-highlight-row">
                    <CheckCircle2 size={14} className="highlight-bullet" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
