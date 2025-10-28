import React from 'react';
import './PartnerLogos.css';

const PartnerLogos = () => {
  const partners = [
    { name: 'Amazon', icon: 'fa-amazon' },
    { name: 'Flipkart', icon: 'fa-shopify' },
    { name: 'Reliance', icon: 'fa-industry' },
    { name: 'Tata', icon: 'fa-building' },
    { name: 'Mahindra', icon: 'fa-truck' },
    { name: 'Asian Paints', icon: 'fa-paint-roller' },
    { name: 'ITC', icon: 'fa-box' },
    { name: 'Wipro', icon: 'fa-laptop-code' },
    { name: 'Infosys', icon: 'fa-computer' },
    { name: 'HUL', icon: 'fa-spray-can' },
    { name: 'Nestle', icon: 'fa-mug-hot' },
    { name: 'PepsiCo', icon: 'fa-bottle-water' }
  ];

  return (
    <section className="partner-logos-section py-5">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="badge bg-orange-light text-orange mb-3">
            <i className="fa-solid fa-handshake me-2"></i>
            Our Partners
          </span>
          <h2 className="display-5 fw-bold mb-3">Trusted by Industry Leaders</h2>
          <p className="lead text-muted">Serving 1000+ businesses across India</p>
        </div>

        <div className="logos-scroll-container" data-aos="fade-up">
          <div className="logos-scroll">
            {/* First set */}
            {partners.map((partner, index) => (
              <div key={`partner-1-${index}`} className="logo-item">
                <div className="logo-card">
                  <i className={`fa-brands ${partner.icon}`}></i>
                  <span className="partner-name">{partner.name}</span>
                </div>
              </div>
            ))}
            {/* Duplicate set for infinite scroll */}
            {partners.map((partner, index) => (
              <div key={`partner-2-${index}`} className="logo-item">
                <div className="logo-card">
                  <i className={`fa-brands ${partner.icon}`}></i>
                  <span className="partner-name">{partner.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-5">
          <p className="text-muted">
            <i className="fa-solid fa-star text-warning me-2"></i>
            Join 1000+ satisfied customers who trust Venus Transport
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
