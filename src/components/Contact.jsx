import { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  const [showMap, setShowMap] = useState(false);
  return (

    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Contact</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Have a project in mind? Let's talk about it</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="contact-info-title">Let's connect</h3>
            <p className="contact-info-text">
              I'm always open to discussing new opportunities, projects, or just having a chat about technology.
            </p>

            <div className="contact-items">
              <a href="mailto:sri.dream18@gmail.com" className="contact-item">
                <div className="contact-item-icon">
                  <FaEnvelope aria-hidden="true" />
                </div>

                <div>
                  <span className="contact-item-label">Email</span>
                  <span className="contact-item-value">sri.dream18@gmail.com</span>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/sri-bhuvane-j-484304264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <div className="contact-item-icon">
                  <FaLinkedin aria-hidden="true" />
                </div>

                <div>
                  <span className="contact-item-label">LinkedIn</span>
                  <span className="contact-item-value">sri-bhuvane-j</span>
                </div>
              </a>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <FaMapMarkerAlt aria-hidden="true" />
                </div>

                <div>
                  <span className="contact-item-label">Location</span>
                  <span className="contact-item-value">Srivilliputhur, Tamil Nadu, India</span>
                </div>
              </div>
            </div>

            <div className="contact-map glass-panel" style={{ position: 'relative', minHeight: '280px' }}>
              {!showMap ? (
                <div 
                  className="map-placeholder"
                  onClick={() => setShowMap(true)}
                  style={{
                    height: '280px',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    background: 'var(--bg-card-hover)',
                    borderRadius: '24px'
                  }}
                >
                  <FaMapMarkerAlt style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '1rem' }} />
                  <span className="btn btn-outline" style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}>View Map</span>
                </div>
              ) : (
                <iframe
                  title="Srivilliputhur Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62955.08316132047!2d77.56236965!3d9.51368945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06e897931c89db%3A0xc39281c5be0e37bc!2sSrivilliputhur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              )}
            </div>

          </div>


          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="john@example.com" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="Project inquiry" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Tell me about your project..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary contact-submit">
              <FaPaperPlane aria-hidden="true" /> Send Message
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
