import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-main">
      <div className="footer-top">
        <div className="container">
          <div className="row g-4">
            {/* Company Info */}
            <div className="col-lg-4 col-md-6">
              <div className="footer-widget">
                <div className="footer-logo mb-3">
                  <div className="brand-logo">
                    <i className="fa-solid fa-truck-fast"></i>
                  </div>
                  <span className="footer-brand">Venus Transport</span>
                </div>
                <p className="footer-desc">
                  India's most trusted transport and logistics partner. Delivering excellence across every mile with reliability and speed.
                </p>
                <div className="footer-social mt-4">
                  <a href="#" className="social-link" aria-label="Facebook">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="#" className="social-link" aria-label="Twitter">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#" className="social-link" aria-label="LinkedIn">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="social-link" aria-label="Instagram">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="#" className="social-link" aria-label="YouTube">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-6 col-6">
              <div className="footer-widget">
                <h5 className="footer-title">Quick Links</h5>
                <ul className="footer-links">
                  <li><Link to="/"><i className="fa-solid fa-angle-right"></i> Home</Link></li>
                  <li><Link to="/about"><i className="fa-solid fa-angle-right"></i> About Us</Link></li>
                  <li><Link to="/services"><i className="fa-solid fa-angle-right"></i> Services</Link></li>
                  <li><Link to="/network"><i className="fa-solid fa-angle-right"></i> Our Network</Link></li>
                  <li><Link to="/fleet"><i className="fa-solid fa-angle-right"></i> Our Fleet</Link></li>
                  <li><Link to="/contact"><i className="fa-solid fa-angle-right"></i> Contact</Link></li>
                </ul>
              </div>
            </div>

            {/* Services */}
            <div className="col-lg-3 col-md-6 col-6">
              <div className="footer-widget">
                <h5 className="footer-title">Our Services</h5>
                <ul className="footer-links">
                  <li><Link to="/services#ftl"><i className="fa-solid fa-angle-right"></i> Full Truck Load</Link></li>
                  <li><Link to="/services#ptl"><i className="fa-solid fa-angle-right"></i> Part Truck Load</Link></li>
                  <li><Link to="/services#express"><i className="fa-solid fa-angle-right"></i> Express Delivery</Link></li>
                  <li><Link to="/services#warehousing"><i className="fa-solid fa-angle-right"></i> Warehousing</Link></li>
                  <li><Link to="/services#container"><i className="fa-solid fa-angle-right"></i> Container Transport</Link></li>
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <h5 className="footer-title">Get In Touch</h5>
                <ul className="footer-contact">
                  <li>
                    <i className="fa-solid fa-location-dot"></i>
                    <span>Ishanpur, Ahmedabad, Gujarat 382443, India</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-phone"></i>
                    <span>+91 93138 79878</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-envelope"></i>
                    <span>info@venustransport.com</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-clock"></i>
                    <span>24/7 Available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <p className="footer-copyright mb-0">
                &copy; {currentYear} <span className="text-orange">Venus Transport</span>. All Rights Reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-bottom-links">
                <a href="#">Privacy Policy</a>
                <span className="separator">|</span>
                <a href="#">Terms & Conditions</a>
                <span className="separator">|</span>
                <a href="#">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
