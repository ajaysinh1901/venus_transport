import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaTruck, FaShieldAlt, FaClock, FaMapMarkedAlt, FaChartLine, FaHeadset, FaBoxes, FaWarehouse, FaShippingFast, FaCheckCircle, FaUsers, FaStar } from 'react-icons/fa';
import CounterStats from '../components/CounterStats';
import TestimonialCarousel from '../components/TestimonialCarousel';
import PartnerLogos from '../components/PartnerLogos';
import './Home.css';

const Home = () => {
  const [formData, setFormData] = useState({
    pickup: '',
    drop: '',
    vehicleType: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will contact you shortly.');
  };

  return (
    <>
      <Helmet>
        <title>Venus Transport - Delivering Trust Across Every Mile | Premium Logistics Services</title>
        <meta name="description" content="Experience premium transport and logistics services with Venus Transport. 15+ years of excellence, 500+ fleet vehicles, serving 10,000+ happy clients across India." />
        <meta name="keywords" content="transport services, logistics, truck booking, cargo, freight, India transport" />
      </Helmet>

      {/* SECTION 1: Hero Section with Parallax Motion */}
      <section className="hero-light-section">
        <div className="hero-gradient-overlay"></div>
        <motion.div 
          className="hero-content-light"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container">
            <div className="row align-items-center min-vh-100">
              <div className="col-lg-7" data-aos="fade-right">
                <span className="badge-light-hero mb-3">
                  <FaTruck className="me-2" />
                  India's Trusted Logistics Partner
                </span>
                <h1 className="display-3 fw-bold mb-4 text-dark">
                  Delivering Trust<br />
                  <span className="text-gradient">Across Every Mile</span>
                </h1>
                <p className="lead mb-4 text-secondary">
                  Experience seamless logistics solutions with 15+ years of excellence. 
                  Your cargo, our commitment - safe, secure, and on-time delivery guaranteed.
                </p>
                <div className="hero-buttons">
                  <Link to="/contact" className="btn btn-primary-modern me-3">
                    <FaShippingFast className="me-2" />
                    Book Your Transport Now
                  </Link>
                  <Link to="/services" className="btn btn-outline-primary-modern">
                    Request a Quote
                  </Link>
                </div>
                
                {/* Quick Stats Cards */}
                <div className="row mt-5 g-3">
                  <div className="col-md-4">
                    <div className="quick-stat-card">
                      <h3 className="fw-bold text-primary mb-0"><CounterStats end={15} suffix="+" /></h3>
                      <p className="text-muted mb-0 small">Years Experience</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="quick-stat-card">
                      <h3 className="fw-bold text-primary mb-0"><CounterStats end={500} suffix="+" /></h3>
                      <p className="text-muted mb-0 small">Fleet Vehicles</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="quick-stat-card">
                      <h3 className="fw-bold text-primary mb-0"><CounterStats end={10000} suffix="+" /></h3>
                      <p className="text-muted mb-0 small">Happy Clients</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-5" data-aos="fade-left">
                <div className="hero-image-wrapper">
                  <img 
                    src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80" 
                    alt="Modern Logistics Truck" 
                    className="img-fluid hero-truck-image"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <div className="scroll-indicator" data-aos="fade-up" data-aos-delay="1000">
          <span>Scroll to Explore</span>
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* SECTION 2: Quick Inquiry Form */}
      <section className="quick-inquiry-light py-5 bg-light">
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div className="inquiry-card-light" data-aos="zoom-in">
                <div className="row align-items-center g-4">
                  <div className="col-lg-5 text-center text-lg-start mb-4 mb-lg-0">
                    <span className="badge-light-modern mb-3 d-inline-block">Loyal to Delivery</span>
                    <h2 className="display-6 fw-bold mb-3 text-dark">Get Instant Quote</h2>
                    <p className="text-secondary mb-0">
                      Fill in your details and get a customized quote within minutes. 
                      Our team is ready to serve you 24/7.
                    </p>
                  </div>
                  <div className="col-lg-7">
                    <div className="quote-form-wrapper">
                      <form onSubmit={handleSubmit}>
                        <div className="row g-3">
                          <div className="col-md-6">
                            <input 
                              type="text" 
                              className="form-control form-control-modern" 
                              placeholder="Pickup Location"
                              name="pickup"
                              value={formData.pickup}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="col-md-6">
                            <input 
                              type="text" 
                              className="form-control form-control-modern" 
                              placeholder="Drop Location"
                              name="drop"
                              value={formData.drop}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="col-md-6">
                            <select 
                              className="form-select form-control-modern" 
                              name="vehicleType"
                              value={formData.vehicleType}
                              onChange={handleInputChange}
                              required
                            >
                              <option value="">Choose Vehicle</option>
                              <option value="mini-truck">Mini Truck</option>
                              <option value="open-truck">Open Truck</option>
                              <option value="container">Container</option>
                              <option value="trailer">Trailer</option>
                            </select>
                          </div>
                          <div className="col-md-6">
                            <input 
                              type="tel" 
                              className="form-control form-control-modern" 
                              placeholder="Phone Number"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="col-12">
                            <button type="submit" className="btn btn-primary-modern btn-lg w-100">
                              <FaCheckCircle className="me-2" />
                              Get Free Quote Now
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: About Overview */}
      <section className="about-overview-light py-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
              <div className="about-image-grid">
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80" 
                  alt="Modern Warehouse" 
                  className="img-fluid rounded-4 shadow-lg main-image"
                  loading="lazy"
                />
                <div className="experience-badge">
                  <h3 className="fw-bold mb-0">15+</h3>
                  <p className="mb-0">Years Experience</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <span className="badge-light-modern mb-3">About Venus Transport</span>
              <h2 className="display-5 fw-bold mb-4">Your Trusted Logistics Partner Since 2008</h2>
              <p className="text-secondary mb-4">
                Venus Transport has been at the forefront of India's logistics industry for over 15 years. 
                We've built our reputation on reliability, safety, and exceptional customer service.
              </p>
              <p className="text-secondary mb-4">
                With a fleet of 500+ modern vehicles and a presence in 120+ cities, we deliver 
                comprehensive transport solutions tailored to your business needs.
              </p>
              
              <div className="row g-4 mt-4">
                <div className="col-md-6">
                  <div className="feature-item-light">
                    <FaShieldAlt className="feature-icon-light text-primary" />
                    <h5 className="fw-bold mb-2">100% Secure</h5>
                    <p className="text-muted mb-0">Full insurance coverage for your cargo</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="feature-item-light">
                    <FaClock className="feature-icon-light text-primary" />
                    <h5 className="fw-bold mb-2">On-Time Delivery</h5>
                    <p className="text-muted mb-0">98% on-time delivery success rate</p>
                  </div>
                </div>
              </div>
              
              <Link to="/about" className="btn btn-primary-modern mt-4">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Services Grid (6 Cards) */}
      <section className="services-grid-light py-5 bg-light">
        <div className="container py-5">
          <div className="section-header" data-aos="fade-up">
            <span className="badge-light-modern mb-3">Our Services</span>
            <h2 className="display-5 fw-bold mb-3">Comprehensive Transport Solutions</h2>
            <p className="text-secondary">
              From small parcels to full truckloads, we handle all your logistics needs with precision and care.
            </p>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="service-card-light">
                <div className="service-icon-light">
                  <FaTruck />
                </div>
                <h4 className="fw-bold mb-3">Full Truck Load (FTL)</h4>
                <p className="text-secondary mb-4">
                  Dedicated truck for your entire shipment, ensuring direct and secure transportation from pickup to delivery.
                </p>
                <ul className="service-features-list">
                  <li><FaCheckCircle className="text-primary me-2" />Direct Delivery</li>
                  <li><FaCheckCircle className="text-primary me-2" />No Transshipment</li>
                  <li><FaCheckCircle className="text-primary me-2" />Cost-Effective for Bulk</li>
                </ul>
                <Link to="/services" className="btn btn-outline-primary-modern w-100 mt-3">Learn More</Link>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="service-card-light">
                <div className="service-icon-light">
                  <FaBoxes />
                </div>
                <h4 className="fw-bold mb-3">Part Truck Load (PTL)</h4>
                <p className="text-secondary mb-4">
                  Share truck space with other shipments, ideal for smaller loads and budget-conscious shipping.
                </p>
                <ul className="service-features-list">
                  <li><FaCheckCircle className="text-primary me-2" />Flexible Volumes</li>
                  <li><FaCheckCircle className="text-primary me-2" />Economical Option</li>
                  <li><FaCheckCircle className="text-primary me-2" />Regular Departures</li>
                </ul>
                <Link to="/services" className="btn btn-outline-primary-modern w-100 mt-3">Learn More</Link>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="service-card-light">
                <div className="service-icon-light">
                  <FaWarehouse />
                </div>
                <h4 className="fw-bold mb-3">Warehousing Solutions</h4>
                <p className="text-secondary mb-4">
                  Secure, climate-controlled storage facilities with real-time inventory management and quick dispatch.
                </p>
                <ul className="service-features-list">
                  <li><FaCheckCircle className="text-primary me-2" />24/7 Security</li>
                  <li><FaCheckCircle className="text-primary me-2" />Inventory Management</li>
                  <li><FaCheckCircle className="text-primary me-2" />Quick Fulfillment</li>
                </ul>
                <Link to="/services" className="btn btn-outline-primary-modern w-100 mt-3">Learn More</Link>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div className="service-card-light">
                <div className="service-icon-light">
                  <FaShippingFast />
                </div>
                <h4 className="fw-bold mb-3">Express Delivery</h4>
                <p className="text-secondary mb-4">
                  Time-critical shipments delivered with priority handling and guaranteed delivery windows.
                </p>
                <ul className="service-features-list">
                  <li><FaCheckCircle className="text-primary me-2" />Same-Day Delivery</li>
                  <li><FaCheckCircle className="text-primary me-2" />Priority Handling</li>
                  <li><FaCheckCircle className="text-primary me-2" />Real-Time Tracking</li>
                </ul>
                <Link to="/services" className="btn btn-outline-primary-modern w-100 mt-3">Learn More</Link>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
              <div className="service-card-light">
                <div className="service-icon-light">
                  <FaMapMarkedAlt />
                </div>
                <h4 className="fw-bold mb-3">Pan-India Network</h4>
                <p className="text-secondary mb-4">
                  Extensive network covering 120+ cities across India, ensuring reach to every corner of the country.
                </p>
                <ul className="service-features-list">
                  <li><FaCheckCircle className="text-primary me-2" />120+ Cities</li>
                  <li><FaCheckCircle className="text-primary me-2" />Remote Areas Covered</li>
                  <li><FaCheckCircle className="text-primary me-2" />Regional Expertise</li>
                </ul>
                <Link to="/network" className="btn btn-outline-primary-modern w-100 mt-3">View Network</Link>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
              <div className="service-card-light">
                <div className="service-icon-light">
                  <FaHeadset />
                </div>
                <h4 className="fw-bold mb-3">24/7 Support</h4>
                <p className="text-secondary mb-4">
                  Round-the-clock customer support team ready to assist with tracking, queries, and emergency situations.
                </p>
                <ul className="service-features-list">
                  <li><FaCheckCircle className="text-primary me-2" />Live Chat Support</li>
                  <li><FaCheckCircle className="text-primary me-2" />Dedicated Account Manager</li>
                  <li><FaCheckCircle className="text-primary me-2" />Emergency Assistance</li>
                </ul>
                <Link to="/contact" className="btn btn-outline-primary-modern w-100 mt-3">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Why Choose Us with Animated Icons */}
      <section className="why-choose-light py-5">
        <div className="container py-5">
          <div className="section-header" data-aos="fade-up">
            <span className="badge-light-modern mb-3">Why Choose Venus Transport</span>
            <h2 className="display-5 fw-bold mb-3">Excellence in Every Mile</h2>
            <p className="text-secondary">
              We combine experience, technology, and dedication to provide unmatched logistics solutions.
            </p>
          </div>
          
          <div className="row g-4 mt-4">
            <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="100">
              <div className="feature-box-light text-center">
                <div className="feature-icon-box-light mx-auto mb-4">
                  <FaChartLine />
                </div>
                <h5 className="fw-bold mb-3">Real-Time Tracking</h5>
                <p className="text-secondary">
                  GPS-enabled tracking system for complete visibility of your shipment 24/7.
                </p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="200">
              <div className="feature-box-light text-center">
                <div className="feature-icon-box-light mx-auto mb-4">
                  <FaShieldAlt />
                </div>
                <h5 className="fw-bold mb-3">Full Insurance Coverage</h5>
                <p className="text-secondary">
                  Comprehensive insurance protecting your cargo against all transit risks.
                </p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="300">
              <div className="feature-box-light text-center">
                <div className="feature-icon-box-light mx-auto mb-4">
                  <FaClock />
                </div>
                <h5 className="fw-bold mb-3">On-Time Guarantee</h5>
                <p className="text-secondary">
                  98% on-time delivery record with transparent ETA updates.
                </p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="400">
              <div className="feature-box-light text-center">
                <div className="feature-icon-box-light mx-auto mb-4">
                  <FaUsers />
                </div>
                <h5 className="fw-bold mb-3">Expert Team</h5>
                <p className="text-secondary">
                  Trained professionals dedicated to handling your logistics with care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Statistics with Parallax */}
      <section className="stats-parallax-light py-5" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80)',
        position: 'relative',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        minHeight: '500px'
      }}>
        <div className="stats-overlay-light" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.65)',
          zIndex: 1
        }}></div>
        <div className="container position-relative py-5" style={{ zIndex: 2 }}>
          <div className="row g-4 text-center">
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="stat-item-light" style={{
                backgroundColor: '#ffffff',
                padding: '45px 35px',
                borderRadius: '25px',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(255, 255, 255, 0.3)',
                border: '3px solid #f7941d'
              }}>
                <div className="stat-icon-light mb-3">
                  <FaTruck />
                </div>
                <h2 className="fw-bold mb-2" style={{ color: '#1e1e1e', fontSize: '4rem', fontWeight: 800 }}>
                  <CounterStats end={500} suffix="+" />
                </h2>
                <p className="text-uppercase fw-semibold mb-0" style={{ color: '#555', letterSpacing: '1.5px', fontSize: '0.95rem' }}>
                  Fleet Vehicles
                </p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="stat-item-light" style={{
                backgroundColor: '#ffffff',
                padding: '45px 35px',
                borderRadius: '25px',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(255, 255, 255, 0.3)',
                border: '3px solid #f7941d'
              }}>
                <div className="stat-icon-light mb-3">
                  <FaUsers />
                </div>
                <h2 className="fw-bold mb-2" style={{ color: '#1e1e1e', fontSize: '4rem', fontWeight: 800 }}>
                  <CounterStats end={10000} suffix="+" />
                </h2>
                <p className="text-uppercase fw-semibold mb-0" style={{ color: '#555', letterSpacing: '1.5px', fontSize: '0.95rem' }}>
                  Happy Clients
                </p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="stat-item-light" style={{
                backgroundColor: '#ffffff',
                padding: '45px 35px',
                borderRadius: '25px',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(255, 255, 255, 0.3)',
                border: '3px solid #f7941d'
              }}>
                <div className="stat-icon-light mb-3">
                  <FaMapMarkedAlt />
                </div>
                <h2 className="fw-bold mb-2" style={{ color: '#1e1e1e', fontSize: '4rem', fontWeight: 800 }}>
                  <CounterStats end={120} suffix="+" />
                </h2>
                <p className="text-uppercase fw-semibold mb-0" style={{ color: '#555', letterSpacing: '1.5px', fontSize: '0.95rem' }}>
                  Cities Covered
                </p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div className="stat-item-light" style={{
                backgroundColor: '#ffffff',
                padding: '45px 35px',
                borderRadius: '25px',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(255, 255, 255, 0.3)',
                border: '3px solid #f7941d'
              }}>
                <div className="stat-icon-light mb-3">
                  <FaStar />
                </div>
                <h2 className="fw-bold mb-2" style={{ color: '#1e1e1e', fontSize: '4rem', fontWeight: 800 }}>
                  <CounterStats end={98} suffix="%" />
                </h2>
                <p className="text-uppercase fw-semibold mb-0" style={{ color: '#555', letterSpacing: '1.5px', fontSize: '0.95rem' }}>
                  On-Time Delivery
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Testimonials Carousel */}
      <section className="testimonials-light py-5" style={{
        background: 'linear-gradient(180deg, #fef9f5 0%, #fff 30%, #fff 70%, #fef9f5 100%)',
        position: 'relative'
      }}>
        <div className="container py-5">
          <div className="section-header text-center" data-aos="fade-up">
            <span className="badge-light-modern mb-3">Client Testimonials</span>
            <h2 className="display-5 fw-bold mb-3 text-dark">What Our Clients Say</h2>
            <p className="text-secondary lead mb-5">
              Real experiences from businesses that trust Venus Transport for their logistics needs.
            </p>
          </div>
          
          <div className="mt-5" data-aos="fade-up" data-aos-delay="200">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* SECTION 8: Partner Logos */}
      <section className="partners-light py-5">
        <div className="container py-4">
          <div className="section-header" data-aos="fade-up">
            <span className="badge-light-modern mb-3">Trusted Partners</span>
            <h2 className="display-6 fw-bold mb-3">Companies That Trust Us</h2>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="200">
            <PartnerLogos />
          </div>
        </div>
      </section>

      {/* SECTION 9: CTA Footer Section */}
      <section className="cta-light py-5" style={{background: 'linear-gradient(135deg, #f7941d 0%, #ff6b35 100%)'}}>
        <div className="container py-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8" data-aos="zoom-in">
              <h2 className="display-4 fw-bold text-white mb-4">
                Ready to Experience Premium Logistics?
              </h2>
              <p className="lead text-white mb-5">
                Join 10,000+ businesses that have transformed their logistics with Venus Transport. 
                Get started today with a free consultation.
              </p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn btn-light btn-lg me-3 px-5">
                  <FaTruck className="me-2" />
                  Get Started Now
                </Link>
                <a href="tel:+919876543210" className="btn btn-outline-light btn-lg px-5">
                  Call: +91 98765 43210
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
