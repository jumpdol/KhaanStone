import React, { useState } from 'react';
import { X, ZoomIn, MapPin, Layers, ArrowRight, ArrowLeft } from 'lucide-react';

const portfolioItems = [
  {
    id: 1,
    image: '/houston1.jpg',
    category: 'Patios & Walkways',
    tag: 'Estate Patio',
    title: 'Waterfront Estate Flagstone Terraces',
    location: 'West Vancouver, BC',
    material: 'Hand-Dressed Natural Slate & Basalt',
    scope: 'Multi-level outdoor patio, custom retaining stone boundary, integrated garden steps',
    aspect: 'landscape'
  },
  {
    id: 2,
    image: '/houston2.jpg',
    category: 'Retaining Walls',
    tag: 'Engineered Wall',
    title: 'Tiered Segmental Slope Stabilization',
    location: 'North Vancouver, BC',
    material: 'High-Strength Architectural Concrete Blocks',
    scope: '3-tier engineered structural retaining system with geogrid reinforcement and drainage core',
    aspect: 'portrait'
  },
  {
    id: 3,
    image: '/houston3.jpg',
    category: 'Entryways & Steps',
    tag: 'Architectural Entry',
    title: 'Minimalist Flamed Granite Entry Stairs',
    location: 'Point Grey, Vancouver',
    material: 'Thermal Flamed Granite & Basalt Risers',
    scope: 'Precision-measured modern front entrance steps with integrated concealed LED raceways',
    aspect: 'square'
  },
  {
    id: 4,
    image: '/houston4.jpg',
    category: 'Patios & Walkways',
    tag: 'Courtyard Paving',
    title: 'Modern Linear Stone Walkway & Courtyard',
    location: 'Shaughnessy, Vancouver',
    material: 'Large-Format Basalt Pavers with Polymeric Joints',
    scope: 'Seamless indoor-to-outdoor hardscaping connecting modern residence to private courtyard',
    aspect: 'portrait'
  },
  {
    id: 5,
    image: '/houston5.jpg',
    category: 'Retaining Walls',
    tag: 'Perimeter Boundary',
    title: 'Hillside Architectural Stone Wall & Planters',
    location: 'Whistler, BC',
    material: 'Natural Mountain Basalt & Boulder Capping',
    scope: 'Heavy alpine-grade retaining structure resisting high snow loads and seismic grade shifts',
    aspect: 'landscape'
  },
  {
    id: 6,
    image: '/houston6.jpg',
    category: 'Stone Veneer & Features',
    tag: 'Stone Veneer',
    title: 'Bespoke Modern Stone Facade & Pillar Wraps',
    location: 'Burnaby Mountain, BC',
    material: 'Full-Depth Hand-Chiseled Quartzite Veneer',
    scope: 'Exterior facade masonry, matching entrance column wraps, and custom stone perimeter caps',
    aspect: 'portrait'
  },
  {
    id: 7,
    image: '/houston7.jpg',
    category: 'Patios & Walkways',
    tag: 'Outdoor Living',
    title: 'Curved Organic Slate Pool Deck & Patio',
    location: 'Lions Bay, BC',
    material: 'Pacific Slate & Permeable Polymeric Stone Jointing',
    scope: 'Curvilinear outdoor patio framing custom swimming pool with non-slip textured finish',
    aspect: 'landscape'
  },
  {
    id: 8,
    image: '/houston8.jpg',
    category: 'Entryways & Steps',
    tag: 'Garden Access',
    title: 'Natural Cascading Garden Stone Steps',
    location: 'Deep Cove, North Vancouver',
    material: 'Rough-Hewn Native Granite Slabs',
    scope: 'Cascading natural rock staircase embedded into native woodland hillside terrain',
    aspect: 'square'
  },
  {
    id: 9,
    image: '/houston9.jpg',
    category: 'Retaining Walls',
    tag: 'Commercial Hardscape',
    title: 'Urban Plaza Retaining Structure & Planters',
    location: 'False Creek, Vancouver',
    material: 'Precision Smooth-Faced Architectural Blocks',
    scope: 'Commercial grade retaining planters and integrated public bench stone seating',
    aspect: 'portrait'
  },
  {
    id: 10,
    image: '/houston10.jpg',
    category: 'Stone Veneer & Features',
    tag: 'Fireplace & Feature',
    title: 'Outdoor Living Masonry Hearth & Fire Table',
    location: 'Kitsilano, Vancouver',
    material: 'Charcoal Basalt & Flamed Granite Coping',
    scope: 'Custom outdoor stone masonry entertainment hearth with natural gas fire pit integration',
    aspect: 'landscape'
  }
];

const categories = ['All Projects', 'Retaining Walls', 'Entryways & Steps', 'Patios & Walkways', 'Stone Veneer & Features'];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All Projects');
  const [activeProject, setActiveProject] = useState(null);

  const filteredItems = selectedCategory === 'All Projects'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  const openLightbox = (item) => {
    setActiveProject(item);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setActiveProject(null);
    document.body.style.overflow = '';
  };

  return (
    <section id="portfolio" className="portfolio-section reveal">
      <div className="portfolio-container">
        {/* Section Header */}
        <div className="section-header-centered">
          <span className="section-eyebrow">SELECTED WORKS</span>
          <h2 className="section-title-large">
            A Portfolio of <span className="text-serif-italic">Enduring Stonework</span>
          </h2>
          <p className="section-header-sub">
            Explore recent architectural stone masonry, structural retaining walls, and custom landscape installations across British Columbia.
          </p>

          {/* Category Filter Tabs */}
          <div className="portfolio-filter-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-tab ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Multi-Aspect Portfolio Grid */}
        <div className="portfolio-editorial-grid">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className={`portfolio-card-luxury card-aspect-${item.aspect} group`}
              onClick={() => openLightbox(item)}
            >
              <div className="portfolio-image-wrapper">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="portfolio-img-render"
                  loading="lazy"
                />
                <div className="portfolio-card-overlay">
                  <div className="overlay-top">
                    <span className="portfolio-tag-pill">{item.tag}</span>
                    <span className="portfolio-location-tag">
                      <MapPin size={13} /> {item.location}
                    </span>
                  </div>
                  
                  <div className="overlay-bottom">
                    <h3 className="portfolio-card-title">{item.title}</h3>
                    <p className="portfolio-card-material">{item.material}</p>
                    <div className="portfolio-inspect-cta">
                      <ZoomIn size={16} />
                      <span>View Project Details</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner CTA */}
        <div className="portfolio-bottom-banner">
          <div className="banner-content">
            <h3>Have an ambitious architectural stone or landscape project?</h3>
            <p>We review blueprints, site topography, and material options with builders and property owners.</p>
          </div>
          <a href="#contact" className="btn-luxury-primary">
            <span>Discuss Your Project</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeProject && (
        <div className="lightbox-backdrop" onClick={closeLightbox}>
          <div className="lightbox-modal animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close-btn" onClick={closeLightbox} aria-label="Close modal">
              <X size={22} />
            </button>

            <div className="lightbox-body">
              <div className="lightbox-image-side">
                <img 
                  src={activeProject.image} 
                  alt={activeProject.title} 
                  className="lightbox-main-image"
                />
              </div>

              <div className="lightbox-details-side">
                <div className="lightbox-tag-row">
                  <span className="portfolio-tag-pill">{activeProject.category}</span>
                  <span className="portfolio-location-tag">
                    <MapPin size={14} /> {activeProject.location}
                  </span>
                </div>

                <h2 className="lightbox-title">{activeProject.title}</h2>

                <div className="lightbox-meta-block">
                  <div className="meta-item">
                    <span className="meta-label">Primary Materials</span>
                    <span className="meta-value">{activeProject.material}</span>
                  </div>

                  <div className="meta-item">
                    <span className="meta-label">Project Scope</span>
                    <span className="meta-value">{activeProject.scope}</span>
                  </div>

                  <div className="meta-item">
                    <span className="meta-label">Craftsmanship Guarantee</span>
                    <span className="meta-value">10-Year Structural Integrity Warranty</span>
                  </div>
                </div>

                <div className="lightbox-actions">
                  <a 
                    href="#contact" 
                    className="btn-luxury-primary" 
                    style={{ width: '100%', justifyContent: 'center' }}
                    onClick={() => {
                      closeLightbox();
                      const el = document.getElementById('contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <span>Request Estimate for Similar Project</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
