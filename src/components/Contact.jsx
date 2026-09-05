import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'retaining-walls',
    timeline: '1-3-months',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="subpage-view contact-page animate-fade-in" id="contact">
      <div className="subpage-hero">
        <div className="subpage-hero-inner">
          <span className="subpage-kicker">GET IN TOUCH</span>
          <h1 className="subpage-title">Contact &amp; Estimations</h1>
        </div>
      </div>

      <div className="subpage-content-container">
        <div className="contact-layout-grid">
          {/* Direct Contact Details */}
          <div className="contact-info-panel">
            <h2 className="contact-panel-title">Let's Build Something Enduring</h2>
            <p className="contact-panel-desc">
              Whether you have architectural blueprints ready for tender or need on-site consultation for an upcoming residential or commercial hardscape project, our team is here to assist.
            </p>

            <div className="contact-details-list">
              <a href="tel:2368632328" className="contact-detail-item">
                <div className="contact-icon-box">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="contact-label">Telephone</span>
                  <span className="contact-value">(236) 863-2328</span>
                </div>
              </a>

              <a href="mailto:khaanstone@gmail.com" className="contact-detail-item">
                <div className="contact-icon-box">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="contact-label">Email Inquiries</span>
                  <span className="contact-value">khaanstone@gmail.com</span>
                </div>
              </a>

              <div className="contact-detail-item">
                <div className="contact-icon-box">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="contact-label">Service Regions</span>
                  <span className="contact-value">Vancouver • Abbotsford • Chilliwack • Fraser Valley • Sea-to-Sky</span>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon-box">
                  <Clock size={20} />
                </div>
                <div>
                  <span className="contact-label">Operating Hours</span>
                  <span className="contact-value">Monday – Friday: 7:00 AM – 5:30 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Clean Inquiry Form */}
          <div className="contact-form-panel">
            {submitted ? (
              <div className="contact-success-state">
                <CheckCircle size={56} className="success-icon" />
                <h3>Inquiry Received</h3>
                <p>Thank you for contacting Khaan Stone. We will review your project requirements and get back to you promptly.</p>
                <button 
                  className="btn-luxury-secondary" 
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      service: 'retaining-walls',
                      timeline: '1-3-months',
                      message: ''
                    });
                  }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form className="minimal-contact-form" onSubmit={handleSubmit}>
                <h3 className="form-heading">Project Consultation Request</h3>

                <div className="form-row-2">
                  <div className="form-field">
                    <label htmlFor="name">Full Name *</label>
                    <input 
                      type="text" 
                      id="name"
                      required
                      placeholder="e.g. Johnathan Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="phone">Phone Number *</label>
                    <input 
                      type="tel" 
                      id="phone"
                      required
                      placeholder="(236) 863-2328"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-field">
                    <label htmlFor="email">Email Address *</label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      placeholder="khaanstone@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="service">Primary Project Scope</label>
                    <select 
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                      <option value="retaining-walls">Retaining Walls &amp; Blocks</option>
                      <option value="paving-stones">Paving Stones &amp; Driveways</option>
                      <option value="natural-stones">Natural &amp; Manufactured Stones</option>
                      <option value="bricks-tiles">Bricks &amp; Exterior Tiles</option>
                      <option value="custom-rock">Custom Rock Work &amp; Pillars</option>
                      <option value="commercial">Commercial / Storefronts</option>
                    </select>
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="message">Project Details / City (e.g. Vancouver, Abbotsford, Chilliwack) *</label>
                  <textarea 
                    id="message"
                    required
                    rows="4"
                    placeholder="Describe your project location, approximate size, materials preferred, or timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn-luxury-primary btn-submit-form"
                  disabled={isSubmitting}
                >
                  <span>{isSubmitting ? 'Sending...' : 'Submit Consultation Request'}</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
