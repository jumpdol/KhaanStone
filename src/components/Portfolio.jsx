import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, ArrowRight } from 'lucide-react';

export const PROJECTS = [
  {
    id: 1,
    title: 'Abcellera Headquarters',
    location: 'Vancouver, BC',
    category: 'cladding',
    categoryLabel: 'Architectural Cladding',
    image: '/houston1.jpg',
    description: 'Precision dimensioned basalt and granite stone installation with engineered structural anchoring.'
  },
  {
    id: 2,
    title: 'Empire Landmark Estate',
    location: 'West Vancouver, BC',
    category: 'retaining',
    categoryLabel: 'Structural Retaining Wall',
    image: '/houston2.jpg',
    description: 'Tiered mountain granite retaining wall system engineered for steep coastal slope stabilization.'
  },
  {
    id: 3,
    title: 'Casa Mia Community Facility',
    location: 'South West Marine, Vancouver',
    category: 'paving',
    categoryLabel: 'Natural Flagstone & Steps',
    image: '/houston3.jpg',
    description: 'Hand-cut Bluestone courtyards, precision risers, and heritage estate landscape masonry.'
  },
  {
    id: 4,
    title: 'Seashore Pacific Residence',
    location: 'Point Grey, Vancouver',
    category: 'paving',
    categoryLabel: 'Custom Stone Entryway',
    image: '/houston4.jpg',
    description: 'Monolithic granite entry steps, custom perimeter dry-stack walls, and architectural paving.'
  },
  {
    id: 5,
    title: 'Shaughnessy Mountain Terraces',
    location: 'Shaughnessy, Vancouver',
    category: 'retaining',
    categoryLabel: 'Heavy Boulder Terracing',
    image: '/houston5.jpg',
    description: 'Multi-tiered granite block retaining walls with integrated subsurface French drainage.'
  },
  {
    id: 6,
    title: 'Terralux Estate Winery',
    location: 'Sea-to-Sky / Okanagan',
    category: 'cladding',
    categoryLabel: 'Commercial Stone Cladding',
    image: '/houston6.jpg',
    description: 'Extensive natural ledgerock facade and structural stone pillars for landmark winery estate.'
  },
  {
    id: 7,
    title: 'Whistler Alpine Haven',
    location: 'Whistler, BC',
    category: 'commercial',
    categoryLabel: 'Alpine Masonry',
    image: '/houston7.jpg',
    description: 'High-elevation basalt stone fireplaces, thermal exterior stone veneer, and snow-melt stone terraces.'
  },
  {
    id: 8,
    title: 'Wilkinson Private Estate',
    location: 'Kitsilano, Vancouver',
    category: 'retaining',
    categoryLabel: 'Landscape Masonry',
    image: '/houston8.jpg',
    description: 'Bespoke dry-stack slate retaining walls, artisan stone fire features, and garden courtyards.'
  },
  {
    id: 9,
    title: 'North Shore Modern Residence',
    location: 'North Vancouver, BC',
    category: 'cladding',
    categoryLabel: 'Contemporary Cladding',
    image: '/houston9.jpg',
    description: 'Geometric granite paneling and seamless mortar-joint facade construction.'
  }
];

export default function Portfolio({ isFullPage = false, onNavigatePortfolio }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

  const filteredProjects = isFullPage
    ? activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter(p => p.category === activeFilter)
    : PROJECTS.slice(0, 6);

  const openLightbox = (index) => {
    setSelectedProjectIndex(index);
  };

  const closeLightbox = () => {
    setSelectedProjectIndex(null);
  };

  const nextLightbox = (e) => {
    e.stopPropagation();
    setSelectedProjectIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevLightbox = (e) => {
    e.stopPropagation();
    setSelectedProjectIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const currentProject = selectedProjectIndex !== null ? filteredProjects[selectedProjectIndex] : null;

  return (
    <section className={`portfolio-section ${isFullPage ? 'portfolio-fullpage' : ''}`} id="portfolio">
      <div className="portfolio-container">
        {/* Section Heading */}
        <div className="portfolio-header">
          <h2 className="portfolio-title">
            {isFullPage ? 'Our Portfolio' : 'Recent Projects'}
          </h2>
          <p className="portfolio-subtitle">
            A selection of custom residential and commercial stone masonry installations across Metro Vancouver.
          </p>

          {/* Filter Pills for Full Page */}
          {isFullPage && (
            <div className="portfolio-filter-bar">
              {[
                { id: 'all', label: 'All Projects' },
                { id: 'cladding', label: 'Architectural Cladding' },
                { id: 'retaining', label: 'Retaining Walls' },
                { id: 'paving', label: 'Paving & Entryways' },
                { id: 'commercial', label: 'Commercial' },
              ].map(tab => (
                <button
                  key={tab.id}
                  className={`filter-btn ${activeFilter === tab.id ? 'filter-active' : ''}`}
                  onClick={() => setActiveFilter(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, idx) => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => openLightbox(idx)}
            >
              <div className="project-image-wrap">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                  loading="lazy"
                />
                <div className="project-overlay">
                  <span className="project-category-tag">{project.categoryLabel}</span>
                  <h3 className="project-card-title">{project.title}</h3>
                  <span className="project-card-location">{project.location}</span>
                  <div className="project-view-icon">
                    <Maximize2 size={18} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore All CTA for Home page view */}
        {!isFullPage && onNavigatePortfolio && (
          <div className="portfolio-bottom-action">
            <button 
              className="btn-luxury-secondary"
              onClick={onNavigatePortfolio}
            >
              <span>View All Portfolio Projects</span>
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {currentProject && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button 
              className="lightbox-close-btn"
              onClick={closeLightbox}
              aria-label="Close Lightbox"
            >
              <X size={24} />
            </button>

            <button 
              className="lightbox-nav-btn lightbox-prev"
              onClick={prevLightbox}
              aria-label="Previous Project"
            >
              <ChevronLeft size={30} />
            </button>

            <button 
              className="lightbox-nav-btn lightbox-next"
              onClick={nextLightbox}
              aria-label="Next Project"
            >
              <ChevronRight size={30} />
            </button>

            <div className="lightbox-media">
              <img 
                src={currentProject.image} 
                alt={currentProject.title} 
                className="lightbox-image"
              />
            </div>

            <div className="lightbox-details">
              <div className="lightbox-details-header">
                <span className="lightbox-tag">{currentProject.categoryLabel}</span>
                <span className="lightbox-counter">
                  {selectedProjectIndex + 1} / {filteredProjects.length}
                </span>
              </div>
              <h3 className="lightbox-title">{currentProject.title}</h3>
              <p className="lightbox-location">{currentProject.location}</p>
              <p className="lightbox-description">{currentProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
