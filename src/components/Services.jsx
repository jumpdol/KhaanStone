import React from 'react';
import { Layers, Landmark, Milestone, Construction } from 'lucide-react';

const servicesList = [
  {
    icon: <Layers size={24} />,
    title: 'Block Fences & Retaining Walls',
    description: 'Structural and decorative block masonry tailored for the Pacific Northwest climate. We build heavy-duty retaining walls and perimeter block fences that secure and elevate your land.',
    items: ['Retaining wall engineering support', 'Segmental concrete blocks', 'Perimeter block fences', 'Slope stabilization']
  },
  {
    icon: <Landmark size={24} />,
    title: 'Entryway Stonework & Stairs',
    description: 'First impressions matter. We craft elegant entranceways using premium slate, granite, and natural stone. Perfect for front porch tiles, masonry stairs, and structural pillars.',
    items: ['Natural stone staircases', 'Porch & entryway stone tiling', 'Structural stone pillars', 'Grand architectural columns']
  },
  {
    icon: <Milestone size={24} />,
    title: 'Patios & Flagstone Pathways',
    description: 'Transform your outdoor living. We lay custom flagstone pathways and outdoor patios using organic, irregular stone cuts for a timeless, natural-looking landscape design.',
    items: ['Irregular flagstone walkways', 'Slate & basalt patios', 'Integrated fire pits', 'Joint compound sealing']
  },
  {
    icon: <Construction size={24} />,
    title: 'Custom Rock Masonry',
    description: 'Bespoke masonry solutions for unique projects. From natural rock veneering for modern house facades to custom indoor/outdoor brick and stone fireplaces.',
    items: ['Natural stone veneer siding', 'Stone fireplace wraps', 'Masonry restoration', 'Custom stone detailing']
  }
];

export default function Services() {
  return (
    <section id="services" className="services-section reveal">
      <div className="section services-container" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="section-header">
          <span className="section-subtitle">Excellence in Masonry</span>
          <h2 className="section-title">Architectural Masonry Services</h2>
        </div>

        <div className="grid-2">
          {servicesList.map((service, idx) => (
            <div key={idx} className={`glass-panel service-card service-card-${idx}`}>
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-list">
                {service.items.map((item, itemIdx) => (
                  <li key={itemIdx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
