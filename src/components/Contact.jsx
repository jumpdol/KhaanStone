import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: 'retaining',
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

  const handleTextareaInput = (e) => {
    setFormData({
      ...formData,
      message: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        project: 'retaining',
        message: ''
      });
      // Clear raw textarea DOM representation just in case
      const textarea = document.getElementById('contact-message');
      if (textarea) textarea.value = '';

      // Hide toast after 4s
      setTimeout(() => {
        setShowToast(false);
      }, 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="section reveal">
      <div className="section-header">
        <span className="section-subtitle">Get in Touch</span>
        <h2 className="section-title">Schedule a Consultation</h2>
      </div>

      <div className="contact-grid">
        {/* Info Column */}
        <div className="contact-info">
          <div className="about-text">
            <h3 style={{ fontSize: '1.6rem' }}>Let's discuss your next project</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem' }}>
              Have questions about masonry, material selection, or municipal height codes for retaining walls in British Columbia? Send us a message or call directly. We provide free onsite evaluations and laser-grade site inspections.
            </p>
          </div>

          <div className="contact-details">
            <div className="detail-item">
              <div className="detail-icon"><MapPin size={20} /></div>
              <div className="detail-content">
                <h4>Location</h4>
                <p>Vancouver, BC, Canada</p>
              </div>
            </div>
            <div className="detail-item">
              <div className="detail-icon"><Phone size={20} /></div>
              <div className="detail-content">
                <h4>Phone</h4>
                <p>+1 (604) 555-0190</p>
              </div>
            </div>
            <div className="detail-item">
              <div className="detail-icon"><Mail size={20} /></div>
              <div className="detail-content">
                <h4>Email</h4>
                <p>info@khaanstone.ca</p>
              </div>
            </div>
            <div className="detail-item">
              <div className="detail-icon"><Clock size={20} /></div>
              <div className="detail-content">
                <h4>Service Hours</h4>
                <p>Monday – Saturday: 7:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Styled Mock Map */}
          <div className="contact-map-mock">
            <div className="map-bg-lines"></div>
            <div className="map-pin">
              <MapPin size={32} fill="var(--accent-gold)" style={{ color: 'var(--accent-gold)' }} className="animate-float" />
              <span>Khaan Stone Vancouver</span>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="glass-panel contact-form">
          <h3 style={{ fontSize: '1.4rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>
            Inquiry Form
          </h3>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="form-group">
              <label htmlFor="contact-name">Full Name</label>
              <input 
                id="contact-name"
                type="text" 
                name="name" 
                required 
                className="form-input" 
                placeholder="e.g. John Doe"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-email">Email Address</label>
                <input 
                  id="contact-email"
                  type="email" 
                  name="email" 
                  required 
                  className="form-input" 
                  placeholder="name@domain.ca"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-phone">Phone Number</label>
                <input 
                  id="contact-phone"
                  type="tel" 
                  name="phone" 
                  required 
                  className="form-input" 
                  placeholder="+1 (604) 000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="contact-project">Project Category</label>
              <select 
                id="contact-project"
                name="project" 
                className="form-input"
                style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
                value={formData.project}
                onChange={handleChange}
              >
                <option value="retaining">Retaining & Block Wall</option>
                <option value="entryway">Entryway & Stone Stairs</option>
                <option value="patio">Stone Patio & Pathway</option>
                <option value="custom">Custom Masonry Project</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Project Details</label>
              <textarea 
                id="contact-message" 
                name="message" 
                required 
                className="form-input" 
                placeholder="Describe your design, measurements, timeline, or site details..."
                defaultValue={formData.message}
                onInput={handleTextareaInput}
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="btn-cta" 
              style={{ width: '100%', justifyContent: 'center' }}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span>Sending Inquiry...</span>
              ) : (
                <>
                  Send Request <Send size={16} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Toast Notification */}
      <div className={`toast ${showToast ? 'show' : ''}`}>
        <CheckCircle2 size={24} className="toast-success-icon" />
        <div>
          <h4 style={{ fontSize: '0.95rem', fontWeight: '600' }}>Request Received</h4>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>We will reply within 24 hours.</p>
        </div>
      </div>
    </section>
  );
}
