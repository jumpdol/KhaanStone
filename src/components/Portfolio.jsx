import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import retainingWallImg from '../assets/retaining_wall.png';
import entrywayStairsImg from '../assets/entryway_stairs.png';
import stonePathwayImg from '../assets/stone_pathway.png';

const projects = [
  {
    id: 1,
    image: retainingWallImg,
    category: 'Retaining & Block Walls',
    title: 'Modern Tiered Retaining Wall',
    description: 'A multi-tiered grey concrete block retaining wall surrounding a residential lawn in Vancouver. Designed for soil stabilization, optimal slope drainage, and a clean architectural border.'
  },
  {
    id: 2,
    image: entrywayStairsImg,
    category: 'Entryways & Stairs',
    title: 'Minimalist Slate Steps',
    description: 'Premium dark format slate tile installation for a modern architectural home entryway. Features precision joint cuts and waterproof architectural concrete integration.'
  },
  {
    id: 3,
    image: stonePathwayImg,
    category: 'Patios & Walkways',
    title: 'Irregular Flagstone Patio',
    description: 'Luxurious backyard patio and walkway built using hand-selected, organic irregular slate stones. Integrated with professional outdoor landscape accents.'
  }
];

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(null);

  const openLightbox = (project) => {
    setActiveProject(project);
    document.body.style.overflow = 'hidden'; // Lock background scrolling
  };

  const closeLightbox = () => {
    setActiveProject(null);
    document.body.style.overflow = ''; // Unlock background scrolling
  };

  return (
    <section id="portfolio" className="section reveal">
      <div className="section-header">
        <span className="section-subtitle">Our Showcase</span>
        <h2 className="section-title">Crafted Stone Formations</h2>
      </div>

      <div className="portfolio-grid">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="portfolio-item group"
            onClick={() => openLightbox(project)}
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="portfolio-img"
            />
            <div className="portfolio-overlay">
              <span className="portfolio-cat">{project.category}</span>
              <h3 className="portfolio-title">{project.title}</h3>
              <div 
                style={{ 
                  marginTop: '12px', 
                  color: 'var(--accent-gold)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '6px',
                  fontSize: '0.85rem'
                }}
              >
                <ZoomIn size={16} /> Click to Inspect
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeProject && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              <X size={20} />
            </button>
            <img 
              src={activeProject.image} 
              alt={activeProject.title} 
              className="lightbox-img"
            />
            <div className="lightbox-caption">
              <span className="portfolio-cat" style={{ display: 'block', marginBottom: '4px' }}>
                {activeProject.category}
              </span>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>
                {activeProject.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '0.95rem', lineHeight: '1.5' }}>
                {activeProject.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
