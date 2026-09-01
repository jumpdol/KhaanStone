import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Shield, Calendar } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    project: 'retaining-wall',
    timeline: '1-3-months',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        location: '',
        project: 'retaining-wall',
        timeline: '1-3-months',
        message: ''
      });

      setTimeout(() => {
        setShowToast(false);
      }, 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="contact-section reveal">
      <div className="contact-container">
        {/* Section Header */}
        <div className="section-header-centered">
          <span className="section-eyebrow">START A CONVERSATION</span>
          <h2 className="section-title-large">
            Request an On-Site <span className="text-serif-italic">Consultation</span>
          </h2>
          <p className="section-header-sub">
            Let's evaluate your property, review blueprint elevations, and explore stone selections with our master masons.
          </p>
        </div>

        <div className="contact-main-grid">
          {/* Left Column: Contact Cards & Office Details */}
          <div className="contact-info-panel">
            <div className="contact-info-header">
              <h3 className="info-panel-title">Direct Inquiries & Project Desk</h3>
              <p className="info-panel-sub">
                We work directly with private homeowners, landscape architects, general contractors, and strata managers across Greater Vancouver and the Sea-to-Sky corridor.
              </p>
            </div>

            <div className="contact-channels-list">
              <div className="channel-item">
                <div className="channel-icon-wrap">
                  <Phone size={20} />
                </div>
                <div className="channel-text">
                  <span className="channel-label">Direct Phone Line</span>
                  <a href="tel:6045550190" className="channel-link">(604) 555-0190</a>
                  <span className="channel-sub">Mon–Sat: 7:00 AM – 6:00 PM PST</span>
                </div>
              </div>

              <div className="channel-item">
                <div className="channel-icon-wrap">
                  <Mail size={20} />
                </div>
                <div className="channel-text">
                  <span className="channel-label">Blueprint & Inquiries Email</span>
                  <a href="mailto:info@khaanstone.ca" className="channel-link">info@khaanstone.ca</a>
                  <span className="channel-sub">Guaranteed response within 24 hours</span>
                </div>
              </div>

              <div className="channel-item">
                <div className="channel-icon-wrap">
                  <MapPin size={20} />
                </div>
                <div className="channel-text">
                  <span className="channel-label">Headquarters & Service Depot</span>
                  <span className="channel-val">Metro Vancouver, British Columbia</span>
                  <span className="channel-sub">Serving Sea-to-Sky, North Shore, Fraser Valley</span>
                </div>
              </div>
            </div>

            {/* Credibility Guarantee Box */}
            <div className="contact-guarantee-box">
              <div className="guarantee-icon">
                <Shield size={24} />
              </div>
              <div className="guarantee-content">
                <h4>Certified, Licensed & Bonded</h4>
                <p>$5,000,000 Commercial Liability • WorkSafeBC Registered • City of Vancouver Licensed Masonry Contractor</p>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Luxury Consultation Form */}
          <div className="contact-form-panel">
            <h3 className="form-panel-title">Project Consultation Request</h3>
            
            <form onSubmit={handleSubmit} className="luxury-consult-form">
              <div className="form-group-row">
                <div className="form-field">
                  <label htmlFor="contact-name">Full Name *</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Harrison Bennett"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="contact-phone">Phone Number *</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    required
                    placeholder="(604) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group-row">
                <div className="form-field">
                  <label htmlFor="contact-email">Email Address *</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    placeholder="harrison@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="contact-location">Project Location / City *</label>
                  <input
                    id="contact-location"
                    type="text"
                    name="location"
                    required
                    placeholder="e.g. West Vancouver, Point Grey"
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group-row">
                <div className="form-field">
                  <label htmlFor="contact-project">Primary Masonry Scope</label>
                  <select
                    id="contact-project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                  >
                    <option value="retaining-wall">Engineered Retaining & Block Walls</option>
                    <option value="stone-stairs">Architectural Entryways & Slate Stairs</option>
                    <option value="flagstone-patio">Luxury Flagstone Patios & Walkways</option>
                    <option value="stone-veneer">Natural Stone Veneer & Fireplaces</option>
                    <option value="full-landscape">Full Architectural Landscape Hardscaping</option>
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="contact-timeline">Target Timeline</label>
                  <select
                    id="contact-timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                  >
                    <option value="immediate">Immediate (Ready to Start)</option>
                    <option value="1-3-months">Within 1–3 Months</option>
                    <option value="future-season">Planning for Future Season</option>
                  </select>
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="contact-message">Project Description & Site Notes</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Please describe your property slope, stone preferences, measurements, or blueprint details..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-luxury-primary btn-submit-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span>Sending Consultation Request...</span>
                ) : (
                  <>
                    <span>Submit Consultation Request</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Confirmation Toast */}
      {showToast && (
        <div className="luxury-toast animate-fade-in-up">
          <CheckCircle2 size={24} className="toast-icon-success" />
          <div className="toast-text">
            <h4>Consultation Request Received</h4>
            <p>Our senior stonemason will contact you within 24 hours to review your project details.</p>
          </div>
        </div>
      )}
    </section>
  );
}
