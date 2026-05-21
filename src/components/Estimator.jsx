import React, { useState, useEffect } from 'react';
import { Calculator } from 'lucide-react';

export default function Estimator() {
  const [projectType, setProjectType] = useState('retaining'); // 'retaining', 'fence', 'patio'
  
  // Dimensions
  const [length, setLength] = useState(40); // in feet
  const [height, setHeight] = useState(4);  // in feet (for walls/fences)
  const [width, setWidth] = useState(15);   // in feet (for patio/pathway)
  
  // Cost ranges
  const [costMin, setCostMin] = useState(0);
  const [costMax, setCostMax] = useState(0);

  useEffect(() => {
    let minRate = 0;
    let maxRate = 0;
    let totalUnits = 0;

    if (projectType === 'retaining') {
      // Retaining wall cost calculated per square face foot (length * height)
      totalUnits = length * height;
      minRate = 35; // $35 CAD/sqft
      maxRate = 52; // $52 CAD/sqft
    } else if (projectType === 'fence') {
      // Perimeter block fence cost calculated per square face foot (length * height)
      totalUnits = length * height;
      minRate = 45; // $45 CAD/sqft
      maxRate = 68; // $68 CAD/sqft
    } else {
      // Patio / Stone pathway cost calculated per square foot (length * width)
      totalUnits = length * width;
      minRate = 26; // $26 CAD/sqft
      maxRate = 42; // $42 CAD/sqft
    }

    setCostMin(Math.round(totalUnits * minRate));
    setCostMax(Math.round(totalUnits * maxRate));
  }, [projectType, length, height, width]);

  const handleSubmitEstimate = () => {
    let messageText = '';
    if (projectType === 'retaining') {
      messageText = `Hi Khaan Stone, I used your online estimator and calculated a preliminary budget of $${costMin.toLocaleString()} - $${costMax.toLocaleString()} CAD for a block Retaining Wall (Length: ${length} ft, Height: ${height} ft). Please contact me to schedule a site visit and formal quote.`;
    } else if (projectType === 'fence') {
      messageText = `Hi Khaan Stone, I used your online estimator and calculated a preliminary budget of $${costMin.toLocaleString()} - $${costMax.toLocaleString()} CAD for a Block Fence / Wall (Length: ${length} ft, Height: ${height} ft). Please contact me to schedule a site visit and formal quote.`;
    } else {
      messageText = `Hi Khaan Stone, I used your online estimator and calculated a preliminary budget of $${costMin.toLocaleString()} - $${costMax.toLocaleString()} CAD for a Flagstone Patio / Pathway (Length: ${length} ft, Width: ${width} ft). Please contact me to schedule a site visit and formal quote.`;
    }

    // Scroll to contact form and prefill the message
    const contactMessageInput = document.getElementById('contact-message');
    const contactSection = document.getElementById('contact');
    if (contactMessageInput) {
      contactMessageInput.value = messageText;
      // Trigger native React onChange if necessary (we will handle form state cleanly in App.jsx or Contact.jsx)
      // Dispatches an event to update form state
      const event = new Event('input', { bubbles: true });
      contactMessageInput.dispatchEvent(event);
    }
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="estimator" className="section reveal">
      <div className="section-header">
        <span className="section-subtitle">Project Budgeting</span>
        <h2 className="section-title">Interactive Project Estimator</h2>
      </div>

      <div className="estimator-panel glass-panel">
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '32px', fontSize: '0.95rem', lineHeight: '1.6' }}>
          Select a project type and adjust the sliders to calculate a budget estimate based on standard Vancouver materials, local union rates, and premium masonry construction.
        </p>

        {/* Project Types */}
        <div className="estimator-type-grid">
          <button 
            className={`estimator-type-btn estimator-btn-retaining ${projectType === 'retaining' ? 'active' : ''}`}
            onClick={() => setProjectType('retaining')}
          >
            <h4>Retaining Wall</h4>
            <p>Block Retaining Masonry</p>
          </button>
          <button 
            className={`estimator-type-btn estimator-btn-fence ${projectType === 'fence' ? 'active' : ''}`}
            onClick={() => setProjectType('fence')}
          >
            <h4>Block Fence</h4>
            <p>Perimeter Block Walls</p>
          </button>
          <button 
            className={`estimator-type-btn estimator-btn-patio ${projectType === 'patio' ? 'active' : ''}`}
            onClick={() => setProjectType('patio')}
          >
            <h4>Stone Patio/Path</h4>
            <p>Slate & Flagstone paving</p>
          </button>
        </div>

        {/* Sliders */}
        <div className="estimator-sliders">
          <div className="slider-group">
            <div className="slider-header">
              <span className="slider-label">Length</span>
              <span className="slider-val">{length} feet ({Math.round(length * 0.3048 * 10)/10} m)</span>
            </div>
            <input 
              type="range" 
              min="10" 
              max="200" 
              value={length} 
              onChange={(e) => setLength(parseInt(e.target.value))}
            />
          </div>

          {projectType !== 'patio' ? (
            <div className="slider-group">
              <div className="slider-header">
                <span className="slider-label">Height</span>
                <span className="slider-val">{height} feet ({Math.round(height * 0.3048 * 10)/10} m)</span>
              </div>
              <input 
                type="range" 
                min="2" 
                max="10" 
                value={height} 
                onChange={(e) => setHeight(parseInt(e.target.value))}
              />
            </div>
          ) : (
            <div className="slider-group">
              <div className="slider-header">
                <span className="slider-label">Width</span>
                <span className="slider-val">{width} feet ({Math.round(width * 0.3048 * 10)/10} m)</span>
              </div>
              <input 
                type="range" 
                min="5" 
                max="50" 
                value={width} 
                onChange={(e) => setWidth(parseInt(e.target.value))}
              />
            </div>
          )}
        </div>

        {/* Results */}
        <div className="estimator-results">
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
            Estimated Vancouver Price Range
          </div>
          <div className="estimator-range">
            ${costMin.toLocaleString()} - ${costMax.toLocaleString()} <span style={{ fontSize: '1.2rem', fontWeight: '500', color: 'var(--text-secondary)' }}>CAD</span>
          </div>
          <p className="estimator-disclaimer">
            *This is an approximate budget calculation representing average costs for site prep, materials, gravel backing, and professional masonry laying. Final costs vary based on slope angles, soil conditions, and selected material patterns.
          </p>
          <button 
            className="btn-cta" 
            style={{ width: 'fit-content', margin: '12px auto 0', display: 'flex', gap: '8px', alignItems: 'center' }}
            onClick={handleSubmitEstimate}
          >
            <Calculator size={18} /> Send Estimate to Our Team
          </button>
        </div>
      </div>
    </section>
  );
}
