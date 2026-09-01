import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Khaan Stone executed a complex 3-tier retaining wall and flamed granite entryway for our West Vancouver hillside estate. Their engineering foresight, precision joint cuts, and water drainage integration are unparalleled in British Columbia.",
    author: "Julian Vance",
    role: "Senior Project Director",
    company: "Westmont Architectural Developments",
    location: "West Vancouver, BC"
  },
  {
    quote: "Finding stonemasons who truly understand natural stone clefting and modern minimalist alignments is rare. Khaan Stone transformed our backyard into a masterpiece with organic slate paving and custom granite steps.",
    author: "Elena Moreau",
    role: "Principal Architect",
    company: "Moreau & Associates Landscape Architecture",
    location: "Shaughnessy, Vancouver"
  },
  {
    quote: "Our strata property needed major retaining wall remediation on a steep slope in North Vancouver. Khaan Stone handled all permits, structural engineering, and delivered ahead of schedule with zero disruption.",
    author: "Marcus Chen",
    role: "Strata Council President",
    company: "Panorama Ridge Residences",
    location: "North Vancouver, BC"
  }
];

export default function Testimonials() {
  return (
    <section className="testimonials-section reveal">
      <div className="testimonials-container">
        <div className="section-header-centered">
          <span className="section-eyebrow">CLIENT & ARCHITECT ENDORSEMENTS</span>
          <h2 className="section-title-large">
            Trusted by BC’s Discerning <br />
            <span className="text-serif-italic">Builders, Architects & Homeowners.</span>
          </h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <div key={index} className="testimonial-card group">
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="var(--accent-gold)" color="var(--accent-gold)" />
                ))}
              </div>

              <p className="testimonial-quote">
                “{item.quote}”
              </p>

              <div className="testimonial-author-block">
                <div className="author-avatar-initial">
                  {item.author.charAt(0)}
                </div>
                <div className="author-details">
                  <h4 className="author-name">{item.author}</h4>
                  <p className="author-title">{item.role}, <em>{item.company}</em></p>
                  <span className="author-location">{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
