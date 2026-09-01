import React from 'react';
import { Layers, Landmark, Milestone, Sparkles, ArrowUpRight, Check } from 'lucide-react';

const services = [
  {
    id: 'retaining-walls',
    image: '/houston2.jpg',
    badge: 'Structural Engineering',
    title: 'Engineered Retaining Walls & Block Systems',
    description: 'Heavy-duty segmental concrete block walls, gravity retaining structures, and structural slope stabilization tailored for Vancouver’s hillside topographies and heavy precipitation.',
    features: [
      'Engineered geogrid reinforcement & drainage backfill',
      'Architectural segmental retaining blocks & caps',
      'Perimeter acoustic security fences & terraced walls',
      'Municipal permit assistance & laser-level site grading'
    ]
  },
  {
    id: 'stone-stairs',
    image: '/houston3.jpg',
    badge: 'Architectural Entryways',
    title: 'Custom Stone Steps & Grand Entranceways',
    description: 'Make an unforgettable entrance. We precision-cut and install premium natural slate, basalt, and flamed granite steps designed for long-term slip resistance and architectural elegance.',
    features: [
      'Solid granite & flamed basalt step treads',
      'Natural slate porch tiling & landing cladding',
      'Integrated low-voltage step illumination channels',
      'Mortared stone pillars & matching architectural caps'
    ]
  },
  {
    id: 'flagstone-patios',
    image: '/houston4.jpg',
    badge: 'Outdoor Living',
    title: 'Luxury Flagstone Patios & Courtyard Walkways',
    description: 'Transform outdoor spaces into timeless living sanctuaries. Using hand-dressed organic flagstone, thermal bluestone, and basalt paving laid with permeable polymer joints.',
    features: [
      'Organic hand-cut flagstone & irregular slate paving',
      'Permeable joint compounds & frost-resistant sub-bases',
      'Seamless transition from indoor living to patio landscapes',
      'Integrated natural stone fire pits & garden borders'
    ]
  },
  {
    id: 'stone-veneer',
    image: '/houston6.jpg',
    badge: 'Exterior & Interior Masonry',
    title: 'Natural Stone Veneers & Custom Feature Masonry',
    description: 'Enhance your home’s facade or interior with authentic natural stone cladding. From full-depth stone masonry to thin veneer siding, outdoor kitchens, and modern stone fireplaces.',
    features: [
      'Exterior architectural stone siding & facades',
      'Custom outdoor fireplaces, barbecues & chimneys',
      'Basalt, limestone, quartzite & granite veneer options',
      'Stone repair, mortar repointing & weatherproofing sealing'
    ]
  }
];

export default function Services() {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="services-section reveal">
      <div className="services-container">
        {/* Section Header */}
        <div className="section-header-row">
          <div className="section-header-left">
            <span className="section-eyebrow">OUR CAPABILITIES</span>
            <h2 className="section-title-large">
              Architectural Stonework <br />
              <span className="text-serif-italic">Engineered for Generations.</span>
            </h2>
          </div>
          <div className="section-header-right">
            <p className="section-header-desc">
              From residential estates in West Vancouver to commercial landscape developments in Vancouver and the Sea-to-Sky, we deliver full-scope stone masonry and landscape construction with uncompromising standards.
            </p>
          </div>
        </div>

        {/* Services 2x2 Rich Cards Grid */}
        <div className="services-luxury-grid">
          {services.map((service, index) => (
            <div key={service.id} className="service-luxury-card group">
              <div className="service-card-image-wrap">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="service-card-image"
                  loading="lazy"
                />
                <span className="service-card-badge">{service.badge}</span>
                <span className="service-number">0{index + 1}</span>
              </div>

              <div className="service-card-content">
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.description}</p>
                
                <ul className="service-card-checklist">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="checklist-item">
                      <Check size={16} className="checklist-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="service-card-action">
                  <a href="#contact" className="service-link-cta" onClick={handleScrollToContact}>
                    <span>Inquire About This Service</span>
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
