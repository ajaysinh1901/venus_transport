import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaTruck, FaBoxes, FaWarehouse, FaShippingFast, FaMapMarkedAlt, 
  FaShieldAlt, FaClock, FaCheckCircle, FaStar, FaPhone, 
  FaChartLine, FaHeadset, FaDollarSign, FaRoute, FaBox
} from 'react-icons/fa';
import CounterStats from '../components/CounterStats';
import './Services.css';

const Services = () => {
  const [activeTab, setActiveTab] = useState('ftl');

  return (
    <>
      <Helmet>
        <title>Our Services - Venus Transport | FTL, PTL, Warehousing & Express Delivery</title>
        <meta name="description" content="Comprehensive logistics services including Full Truck Load (FTL), Part Truck Load (PTL), Warehousing, Express Delivery, and more. Trusted by 10,000+ businesses across India." />
        <meta name="keywords" content="FTL services, PTL services, warehousing, express delivery, logistics solutions, freight services" />
      </Helmet>

      {/* SECTION 1: Hero Section */}
      <section className="services-hero-light">
        <div className="services-hero-overlay"></div>
        <div className="container position-relative">
          <div className="row align-items-center min-vh-70">
            <div className="col-lg-6" data-aos="fade-right">
              <span className="badge-light-modern mb-3">
                <FaTruck className="me-2" />
                Our Services
              </span>
              <h1 className="display-3 fw-bold mb-4">
                Comprehensive <span className="text-gradient">Transport Solutions</span>
              </h1>
              <p className="lead text-secondary mb-4">
                From small parcels to full truckloads, we provide end-to-end logistics solutions 
                tailored to your business needs. Experience reliability, speed, and security.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <Link to="/contact" className="btn btn-primary-modern">
                  Get Free Quote
                </Link>
                <a href="tel:+919876543210" className="btn btn-outline-primary-modern">
                  <FaPhone className="me-2" />
                  Call: +91 98765 43210
                </a>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="services-hero-image">
                <motion.img 
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80" 
                  alt="Logistics Services" 
                  className="img-fluid rounded-4"
                  animate={{ 
                    y: [0, -20, 0],
                    rotateY: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Core Services Grid */}
      <section className="core-services-section py-5 bg-light">
        <div className="container py-5">
          <div className="section-header text-center mb-5" data-aos="fade-up">
            <span className="badge-light-modern mb-3">What We Offer</span>
            <h2 className="display-5 fw-bold mb-3">Our Core Services</h2>
            <p className="text-secondary">
              Professional logistics solutions designed to meet every transportation need
            </p>
          </div>

          <div className="row g-4">
            {/* FTL Service */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="core-service-card">
                <div className="service-card-icon">
                  <FaTruck />
                </div>
                <h3 className="fw-bold mb-3">Full Truck Load (FTL)</h3>
                <p className="text-secondary mb-4">
                  Dedicated truck for your entire shipment. Direct delivery without any transshipment, 
                  ensuring maximum safety and faster transit times.
                </p>
                <ul className="service-benefits-list mb-4">
                  <li><FaCheckCircle className="text-primary me-2" />Direct point-to-point delivery</li>
                  <li><FaCheckCircle className="text-primary me-2" />No cargo mixing</li>
                  <li><FaCheckCircle className="text-primary me-2" />Faster transit time</li>
                  <li><FaCheckCircle className="text-primary me-2" />Cost-effective for bulk</li>
                </ul>
                <Link to="/contact" className="btn btn-outline-primary-modern w-100">
                  Request Quote
                </Link>
              </div>
            </div>

            {/* PTL Service */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="core-service-card featured">
                <div className="featured-badge">Most Popular</div>
                <div className="service-card-icon">
                  <FaBoxes />
                </div>
                <h3 className="fw-bold mb-3">Part Truck Load (PTL)</h3>
                <p className="text-secondary mb-4">
                  Share truck space with other shipments. Perfect for smaller loads, 
                  offering flexibility and cost savings without compromising on quality.
                </p>
                <ul className="service-benefits-list mb-4">
                  <li><FaCheckCircle className="text-primary me-2" />Flexible volume options</li>
                  <li><FaCheckCircle className="text-primary me-2" />Budget-friendly</li>
                  <li><FaCheckCircle className="text-primary me-2" />Regular departures</li>
                  <li><FaCheckCircle className="text-primary me-2" />Pan-India coverage</li>
                </ul>
                <Link to="/contact" className="btn btn-primary-modern w-100">
                  Request Quote
                </Link>
              </div>
            </div>

            {/* Warehousing */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="core-service-card">
                <div className="service-card-icon">
                  <FaWarehouse />
                </div>
                <h3 className="fw-bold mb-3">Warehousing Solutions</h3>
                <p className="text-secondary mb-4">
                  Secure, climate-controlled storage with real-time inventory management. 
                  Strategic locations for efficient distribution across India.
                </p>
                <ul className="service-benefits-list mb-4">
                  <li><FaCheckCircle className="text-primary me-2" />24/7 security & CCTV</li>
                  <li><FaCheckCircle className="text-primary me-2" />Inventory management</li>
                  <li><FaCheckCircle className="text-primary me-2" />Quick fulfillment</li>
                  <li><FaCheckCircle className="text-primary me-2" />Strategic locations</li>
                </ul>
                <Link to="/contact" className="btn btn-outline-primary-modern w-100">
                  Request Quote
                </Link>
              </div>
            </div>

            {/* Express Delivery */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div className="core-service-card">
                <div className="service-card-icon">
                  <FaShippingFast />
                </div>
                <h3 className="fw-bold mb-3">Express Delivery</h3>
                <p className="text-secondary mb-4">
                  Time-critical shipments with guaranteed delivery windows. Priority handling 
                  and real-time tracking for urgent consignments.
                </p>
                <ul className="service-benefits-list mb-4">
                  <li><FaCheckCircle className="text-primary me-2" />Same-day delivery available</li>
                  <li><FaCheckCircle className="text-primary me-2" />Priority handling</li>
                  <li><FaCheckCircle className="text-primary me-2" />Guaranteed time slots</li>
                  <li><FaCheckCircle className="text-primary me-2" />Real-time tracking</li>
                </ul>
                <Link to="/contact" className="btn btn-outline-primary-modern w-100">
                  Request Quote
                </Link>
              </div>
            </div>

            {/* Container Service */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
              <div className="core-service-card">
                <div className="service-card-icon">
                  <FaBox />
                </div>
                <h3 className="fw-bold mb-3">Container Transport</h3>
                <p className="text-secondary mb-4">
                  Specialized container transport for heavy and bulk cargo. 
                  Secure loading, unloading, and transportation services.
                </p>
                <ul className="service-benefits-list mb-4">
                  <li><FaCheckCircle className="text-primary me-2" />20ft & 40ft containers</li>
                  <li><FaCheckCircle className="text-primary me-2" />Heavy cargo handling</li>
                  <li><FaCheckCircle className="text-primary me-2" />Secure fastening</li>
                  <li><FaCheckCircle className="text-primary me-2" />Port to door service</li>
                </ul>
                <Link to="/contact" className="btn btn-outline-primary-modern w-100">
                  Request Quote
                </Link>
              </div>
            </div>

            {/* Multi-Modal */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
              <div className="core-service-card">
                <div className="service-card-icon">
                  <FaRoute />
                </div>
                <h3 className="fw-bold mb-3">Multi-Modal Transport</h3>
                <p className="text-secondary mb-4">
                  Combine road, rail, and air transport for optimal efficiency. 
                  Seamless coordination for complex logistics requirements.
                </p>
                <ul className="service-benefits-list mb-4">
                  <li><FaCheckCircle className="text-primary me-2" />Road + Rail + Air</li>
                  <li><FaCheckCircle className="text-primary me-2" />Cost optimization</li>
                  <li><FaCheckCircle className="text-primary me-2" />Single point contact</li>
                  <li><FaCheckCircle className="text-primary me-2" />End-to-end tracking</li>
                </ul>
                <Link to="/contact" className="btn btn-outline-primary-modern w-100">
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Service Comparison */}
      <section className="service-comparison-section py-5">
        <div className="container py-5">
          <div className="section-header text-center mb-5" data-aos="fade-up">
            <span className="badge-light-modern mb-3">Compare Services</span>
            <h2 className="display-5 fw-bold mb-3">FTL vs PTL - Choose What's Best</h2>
            <p className="text-secondary">
              Understanding the difference helps you make the right choice for your business
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="comparison-table-wrapper" data-aos="fade-up" data-aos-delay="200">
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th className="highlight-column">
                        <FaTruck className="me-2" />
                        Full Truck Load (FTL)
                      </th>
                      <th>
                        <FaBoxes className="me-2" />
                        Part Truck Load (PTL)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Best For</strong></td>
                      <td className="highlight-column">Large shipments (full truck)</td>
                      <td>Small to medium shipments</td>
                    </tr>
                    <tr>
                      <td><strong>Delivery Time</strong></td>
                      <td className="highlight-column">Faster (direct delivery)</td>
                      <td>Standard (with consolidation)</td>
                    </tr>
                    <tr>
                      <td><strong>Cost</strong></td>
                      <td className="highlight-column">Fixed rate per truck</td>
                      <td>Pay only for space used</td>
                    </tr>
                    <tr>
                      <td><strong>Cargo Mixing</strong></td>
                      <td className="highlight-column">No mixing (dedicated truck)</td>
                      <td>Shared with other cargo</td>
                    </tr>
                    <tr>
                      <td><strong>Flexibility</strong></td>
                      <td className="highlight-column">Schedule as needed</td>
                      <td>Regular scheduled departures</td>
                    </tr>
                    <tr>
                      <td><strong>Handling</strong></td>
                      <td className="highlight-column">Minimal handling</td>
                      <td>Multiple touchpoints</td>
                    </tr>
                    <tr>
                      <td><strong>Ideal Volume</strong></td>
                      <td className="highlight-column">&gt;12 tons or full truck</td>
                      <td>&lt;12 tons or partial loads</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Service Features */}
      <section className="service-features-section py-5 bg-light">
        <div className="container py-5">
          <div className="section-header text-center mb-5" data-aos="fade-up">
            <span className="badge-light-modern mb-3">Why Choose Us</span>
            <h2 className="display-5 fw-bold mb-3">Service Features & Benefits</h2>
            <p className="text-secondary">
              Every service comes with our commitment to excellence
            </p>
          </div>

          <div className="row g-4">
            <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="100">
              <div className="feature-card-modern text-center">
                <div className="feature-icon-modern mx-auto mb-3">
                  <FaShieldAlt />
                </div>
                <h5 className="fw-bold mb-3">100% Insurance</h5>
                <p className="text-secondary mb-0">
                  Complete cargo insurance coverage protecting against all transit risks
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="200">
              <div className="feature-card-modern text-center">
                <div className="feature-icon-modern mx-auto mb-3">
                  <FaChartLine />
                </div>
                <h5 className="fw-bold mb-3">Live Tracking</h5>
                <p className="text-secondary mb-0">
                  GPS-enabled real-time tracking with automated status updates
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="300">
              <div className="feature-card-modern text-center">
                <div className="feature-icon-modern mx-auto mb-3">
                  <FaClock />
                </div>
                <h5 className="fw-bold mb-3">On-Time Delivery</h5>
                <p className="text-secondary mb-0">
                  98% on-time delivery rate with transparent ETA updates
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="400">
              <div className="feature-card-modern text-center">
                <div className="feature-icon-modern mx-auto mb-3">
                  <FaHeadset />
                </div>
                <h5 className="fw-bold mb-3">24/7 Support</h5>
                <p className="text-secondary mb-0">
                  Round-the-clock customer service and emergency assistance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Process/How It Works */}
      <section className="service-process-section py-5">
        <div className="container py-5">
          <div className="section-header text-center mb-5" data-aos="fade-up">
            <span className="badge-light-modern mb-3">Simple Process</span>
            <h2 className="display-5 fw-bold mb-3">How It Works</h2>
            <p className="text-secondary">
              Getting started with our services is quick and easy
            </p>
          </div>

          <div className="row g-4">
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="process-step-card">
                <div className="step-number">01</div>
                <h5 className="fw-bold mb-3">Request Quote</h5>
                <p className="text-secondary mb-0">
                  Fill our simple form or call us. Share pickup, delivery locations and cargo details.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="process-step-card">
                <div className="step-number">02</div>
                <h5 className="fw-bold mb-3">Get Instant Price</h5>
                <p className="text-secondary mb-0">
                  Receive competitive pricing within minutes. No hidden charges, transparent rates.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="process-step-card">
                <div className="step-number">03</div>
                <h5 className="fw-bold mb-3">Schedule Pickup</h5>
                <p className="text-secondary mb-0">
                  Choose convenient time slot. Our team arrives on time for cargo pickup.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div className="process-step-card">
                <div className="step-number">04</div>
                <h5 className="fw-bold mb-3">Track & Receive</h5>
                <p className="text-secondary mb-0">
                  Monitor shipment in real-time. Delivery with proof of delivery documentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Service Statistics */}
      <section className="service-stats-section py-5" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80)'}}>
        <div className="stats-overlay-light"></div>
        <div className="container position-relative py-5">
          <div className="row g-4 text-center">
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="stat-box-light">
                <h2 className="fw-bold text-primary mb-2">
                  <CounterStats end={10000} suffix="+" />
                </h2>
                <p className="text-uppercase fw-semibold text-secondary mb-0">Deliveries/Month</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="stat-box-light">
                <h2 className="fw-bold text-primary mb-2">
                  <CounterStats end={98} suffix="%" />
                </h2>
                <p className="text-uppercase fw-semibold text-secondary mb-0">On-Time Delivery</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="stat-box-light">
                <h2 className="fw-bold text-primary mb-2">
                  <CounterStats end={500} suffix="+" />
                </h2>
                <p className="text-uppercase fw-semibold text-secondary mb-0">Fleet Vehicles</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div className="stat-box-light">
                <h2 className="fw-bold text-primary mb-2">
                  <CounterStats end={120} suffix="+" />
                </h2>
                <p className="text-uppercase fw-semibold text-secondary mb-0">Cities Covered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Industries We Serve */}
      <section className="industries-section py-5 bg-light">
        <div className="container py-5">
          <div className="section-header text-center mb-5" data-aos="fade-up">
            <span className="badge-light-modern mb-3">Industries We Serve</span>
            <h2 className="display-5 fw-bold mb-3">Trusted Across Sectors</h2>
            <p className="text-secondary">
              Specialized logistics solutions for diverse industry requirements
            </p>
          </div>

          <div className="row g-4">
            {['E-Commerce', 'Manufacturing', 'Retail & FMCG', 'Pharmaceuticals', 'Electronics', 'Automotive', 'Textiles', 'Agriculture'].map((industry, index) => (
              <div className="col-lg-3 col-md-4 col-sm-6" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="industry-badge">
                  <FaCheckCircle className="text-primary me-2" />
                  {industry}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: CTA Section */}
      <section className="services-cta-section py-5" style={{background: 'linear-gradient(135deg, #f7941d 0%, #ff6b35 100%)'}}>
        <div className="container py-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8" data-aos="zoom-in">
              <h2 className="display-4 fw-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="lead text-white mb-5">
                Get a free quote today and experience hassle-free logistics. 
                Our team is ready to help you 24/7.
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <Link to="/contact" className="btn btn-light btn-lg px-5">
                  <FaTruck className="me-2" />
                  Get Free Quote
                </Link>
                <a href="tel:+919876543210" className="btn btn-outline-light btn-lg px-5">
                  <FaPhone className="me-2" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
