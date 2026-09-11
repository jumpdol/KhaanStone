import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="subpage-view contact-page animate-fade-in" id="contact">
      {/* Hero */}
      <div className="subpage-hero">
        <div className="subpage-hero-inner">
          <div className="brand-tri-bar" style={{ justifyContent: 'center' }}>
            <span className="bar-sand"></span>
            <span className="bar-terracotta"></span>
            <span className="bar-slate"></span>
          </div>
          <span className="subpage-kicker">GET IN TOUCH</span>
          <h1 className="subpage-title">Contact Information</h1>
        </div>
      </div>

      <div className="subpage-content-container">
        <div className="contact-focused-container">
          <div className="contact-info-panel">
            <h2 className="contact-panel-title">Let's Build Something Enduring</h2>
            <p className="contact-panel-desc">
              Whether you have architectural blueprints ready for tender or need direct on-site consultation for an upcoming residential or commercial hardscape project, our team is here to assist.
            </p>

            <div className="contact-details-grid">
              <a href="tel:2368632328" className="contact-detail-item contact-item-terracotta">
                <div className="contact-icon-box box-terracotta">
                  <Phone size={22} />
                </div>
                <div>
                  <span className="contact-label">Telephone</span>
                  <span className="contact-value">(236) 863-2328</span>
                </div>
              </a>

              <a href="mailto:khaanstone@gmail.com" className="contact-detail-item contact-item-sand">
                <div className="contact-icon-box box-sand">
                  <Mail size={22} />
                </div>
                <div>
                  <span className="contact-label">Email Inquiries</span>
                  <span className="contact-value">khaanstone@gmail.com</span>
                </div>
              </a>

              <div className="contact-detail-item contact-item-slate">
                <div className="contact-icon-box box-slate">
                  <MapPin size={22} />
                </div>
                <div>
                  <span className="contact-label">Service Regions</span>
                  <span className="contact-value">Vancouver • Abbotsford • Chilliwack • Fraser Valley • Sea-to-Sky</span>
                </div>
              </div>

              <div className="contact-detail-item contact-item-tri">
                <div className="contact-icon-box box-tri">
                  <Clock size={22} />
                </div>
                <div>
                  <span className="contact-label">Operating Hours</span>
                  <span className="contact-value">Monday – Friday: 7:00 AM – 5:30 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
