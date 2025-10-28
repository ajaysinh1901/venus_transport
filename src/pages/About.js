import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaTruck, FaAward, FaUsers, FaHandshake, FaLightbulb, 
  FaShieldAlt, FaChartLine, FaLeaf, FaCheckCircle, 
  FaStar, FaBuilding, FaGlobe, FaHeart, FaRocket 
} from 'react-icons/fa';
import CounterStats from '../components/CounterStats';
import './About.css';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Venus Transport | 15+ Years of Excellence in Logistics</title>
        <meta name="description" content="Discover Venus Transport's journey of 15+ years in logistics excellence. Trusted by 10,000+ clients across India with 500+ vehicles and nationwide coverage." />
        <meta name="keywords" content="about venus transport, logistics company india, transport excellence, pan india logistics, trusted transport partner" />
      </Helmet>

      {/* SECTION 1: Hero with Gradient Overlay */}
      <section className="about-hero-light">
        <div className="about-hero-gradient-overlay"></div>
        <div className="container position-relative">
          <div className="row min-vh-70 align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <span className="badge-light-hero mb-3">
                <FaBuilding className="me-2" />
                About Venus Transport
              </span>
              <h1 className="display-3 fw-bold mb-4">
                Your Trusted <span className="text-gradient">Logistics Partner</span> Since 2008
              </h1>
              <p className="lead mb-4 text-secondary">
                15+ years of delivering excellence, reliability, and trust across every mile. 
                We're not just moving goods—we're moving businesses forward.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <Link to="/contact" className="btn btn-primary-modern btn-lg">
                  <FaHandshake className="me-2" />
                  Partner With Us
                </Link>
                <Link to="/services" className="btn btn-outline-primary-modern btn-lg">
                  Our Services
                </Link>
              </div>

              {/* Quick Stats Below Hero */}
              <div className="row mt-5 g-3">
                <div className="col-4">
                  <div className="hero-mini-stat">
                    <h3 className="text-primary fw-bold mb-0">
                      <CounterStats end={15} duration={2} />+
                    </h3>
                    <p className="small text-secondary mb-0">Years Experience</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="hero-mini-stat">
                    <h3 className="text-primary fw-bold mb-0">
                      <CounterStats end={10000} duration={2.5} />+
                    </h3>
                    <p className="small text-secondary mb-0">Happy Clients</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="hero-mini-stat">
                    <h3 className="text-primary fw-bold mb-0">
                      <CounterStats end={120} duration={2} />+
                    </h3>
                    <p className="small text-secondary mb-0">Cities Served</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left">
              <motion.div 
                className="about-hero-image-wrapper"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80" 
                  alt="Venus Transport Fleet" 
                  className="img-fluid rounded-4 shadow-lg about-hero-truck"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Company Story with Timeline Badge */}
      <section className="company-story-light py-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
              <div className="story-image-grid">
                <img 
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80" 
                  alt="Venus Transport Operations" 
                  className="img-fluid rounded-4 shadow-lg main-story-image"
                />
                <div className="story-experience-badge">
                  <h3 className="fw-bold mb-0">15+</h3>
                  <p className="mb-0">Years of Excellence</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left">
              <span className="badge-modern-light mb-3">
                <FaRocket className="me-2" />
                Our Journey
              </span>
              <h2 className="display-5 fw-bold mb-4">Building Trust Since 2008</h2>
              <p className="lead text-primary mb-4">
                From humble beginnings to becoming a leading name in Indian logistics—our story is one of passion, dedication, and unwavering commitment.
              </p>
              <p className="text-secondary mb-4">
                Venus Transport was founded with a clear vision: to revolutionize the logistics industry in India by combining reliability with technology. Starting with just a handful of trucks in Delhi NCR, we've grown exponentially through customer trust and operational excellence.
              </p>
              <p className="text-secondary mb-4">
                Today, we operate a modern fleet of <strong className="text-primary">500+ vehicles</strong>, serve over <strong className="text-primary">10,000 satisfied clients</strong>, and have established our presence in <strong className="text-primary">120+ cities</strong> across India.
              </p>

              <div className="story-features-list mt-4">
                <div className="story-feature-item-light">
                  <div className="story-feature-icon">
                    <FaAward />
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">ISO 9001:2015 Certified</h6>
                    <p className="text-secondary mb-0 small">International quality management standards</p>
                  </div>
                </div>
                <div className="story-feature-item-light">
                  <div className="story-feature-icon">
                    <FaStar />
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">Industry Recognition</h6>
                    <p className="text-secondary mb-0 small">Multiple awards for logistics excellence</p>
                  </div>
                </div>
                <div className="story-feature-item-light">
                  <div className="story-feature-icon">
                    <FaLeaf />
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">Eco-Friendly Operations</h6>
                    <p className="text-secondary mb-0 small">Committed to sustainable logistics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Mission & Vision Cards */}
      <section className="mission-vision-light py-5 bg-light">
        <div className="container py-5">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-3">Our Mission & Vision</h2>
            <p className="lead text-secondary">Driving logistics excellence with purpose and innovation</p>
          </div>

          <div className="row g-4">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="mission-card-light">
                <div className="mission-icon-wrapper">
                  <FaRocket className="mission-icon" />
                </div>
                <h3 className="fw-bold mb-3">Our Mission</h3>
                <p className="text-secondary mb-4">
                  To provide reliable, efficient, and cost-effective logistics solutions that empower businesses to grow and succeed. We strive to exceed customer expectations through innovation, technology, and exceptional service quality.
                </p>
                <ul className="mission-list">
                  <li><FaCheckCircle className="me-2 text-primary" /> Customer-first approach in every decision</li>
                  <li><FaCheckCircle className="me-2 text-primary" /> Timely and secure delivery guarantee</li>
                  <li><FaCheckCircle className="me-2 text-primary" /> Continuous innovation in logistics</li>
                  <li><FaCheckCircle className="me-2 text-primary" /> Building long-term partnerships</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left">
              <div className="mission-card-light">
                <div className="mission-icon-wrapper">
                  <FaLightbulb className="mission-icon" />
                </div>
                <h3 className="fw-bold mb-3">Our Vision</h3>
                <p className="text-secondary mb-4">
                  To become India's most trusted and technologically advanced logistics partner, setting new standards in the industry while contributing to the nation's economic growth and sustainability goals.
                </p>
                <ul className="mission-list">
                  <li><FaCheckCircle className="me-2 text-primary" /> Expand to 200+ cities by 2026</li>
                  <li><FaCheckCircle className="me-2 text-primary" /> 100% digitalized operations</li>
                  <li><FaCheckCircle className="me-2 text-primary" /> Carbon-neutral fleet by 2028</li>
                  <li><FaCheckCircle className="me-2 text-primary" /> Industry-leading customer satisfaction</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Core Values with Icons */}
      <section className="core-values-light py-5">
        <div className="container py-5">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="badge-modern-light mb-3">
              <FaHeart className="me-2" />
              What Drives Us
            </span>
            <h2 className="display-5 fw-bold mb-3">Our Core Values</h2>
            <p className="lead text-secondary">The principles that guide every decision we make</p>
          </div>

          <div className="row g-4">
            <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="0">
              <div className="value-card-light">
                <div className="value-icon-box">
                  <FaShieldAlt />
                </div>
                <h5 className="fw-bold mb-3">Integrity</h5>
                <p className="text-secondary mb-0">
                  Honesty and transparency in all our dealings with clients and partners.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="100">
              <div className="value-card-light">
                <div className="value-icon-box">
                  <FaUsers />
                </div>
                <h5 className="fw-bold mb-3">Customer Focus</h5>
                <p className="text-secondary mb-0">
                  Your success is our success. We go the extra mile for every client.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="200">
              <div className="value-card-light">
                <div className="value-icon-box">
                  <FaChartLine />
                </div>
                <h5 className="fw-bold mb-3">Excellence</h5>
                <p className="text-secondary mb-0">
                  Continuous improvement and delivering quality in every shipment.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="300">
              <div className="value-card-light">
                <div className="value-icon-box">
                  <FaHandshake />
                </div>
                <h5 className="fw-bold mb-3">Trust</h5>
                <p className="text-secondary mb-0">
                  Building lasting relationships through reliability and commitment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Journey Timeline (Horizontal Scroll) */}
      <section className="journey-timeline-light py-5 bg-light">
        <div className="container-fluid py-5">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-3">Our Growth Journey</h2>
            <p className="lead text-secondary">15 years of milestones and achievements</p>
          </div>

          <div className="timeline-scroll-wrapper">
            <div className="timeline-track">
              <div className="timeline-item-light" data-aos="fade-up">
                <div className="timeline-year">2008</div>
                <div className="timeline-content">
                  <h5 className="fw-bold">Foundation</h5>
                  <p className="text-secondary mb-0">Started with 10 trucks in Delhi NCR</p>
                </div>
              </div>

              <div className="timeline-item-light" data-aos="fade-up" data-aos-delay="100">
                <div className="timeline-year">2012</div>
                <div className="timeline-content">
                  <h5 className="fw-bold">Expansion</h5>
                  <p className="text-secondary mb-0">Expanded to 50+ cities across North India</p>
                </div>
              </div>

              <div className="timeline-item-light" data-aos="fade-up" data-aos-delay="200">
                <div className="timeline-year">2015</div>
                <div className="timeline-content">
                  <h5 className="fw-bold">ISO Certification</h5>
                  <p className="text-secondary mb-0">Achieved ISO 9001:2015 certification</p>
                </div>
              </div>

              <div className="timeline-item-light" data-aos="fade-up" data-aos-delay="300">
                <div className="timeline-year">2018</div>
                <div className="timeline-content">
                  <h5 className="fw-bold">Pan-India</h5>
                  <p className="text-secondary mb-0">Reached 100+ cities nationwide</p>
                </div>
              </div>

              <div className="timeline-item-light" data-aos="fade-up" data-aos-delay="400">
                <div className="timeline-year">2021</div>
                <div className="timeline-content">
                  <h5 className="fw-bold">Digital Transformation</h5>
                  <p className="text-secondary mb-0">Launched GPS tracking & online booking</p>
                </div>
              </div>

              <div className="timeline-item-light" data-aos="fade-up" data-aos-delay="500">
                <div className="timeline-year">2023</div>
                <div className="timeline-content">
                  <h5 className="fw-bold">500+ Fleet</h5>
                  <p className="text-secondary mb-0">Expanded fleet to 500+ modern vehicles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Leadership Team */}
      <section className="leadership-light py-5">
        <div className="container py-5">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="badge-modern-light mb-3">
              <FaUsers className="me-2" />
              Meet Our Team
            </span>
            <h2 className="display-5 fw-bold mb-3">Leadership That Inspires</h2>
            <p className="lead text-secondary">Experienced professionals driving our vision forward</p>
          </div>

          <div className="row g-4">
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="0">
              <div className="team-card-light">
                <div className="team-image-wrapper">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" 
                    alt="CEO" 
                    className="img-fluid"
                  />
                  <div className="team-overlay">
                    <p className="text-white mb-0">"Leading with vision"</p>
                  </div>
                </div>
                <div className="team-info">
                  <h5 className="fw-bold mb-1">Rajesh Kumar</h5>
                  <p className="text-primary mb-2">Founder & CEO</p>
                  <p className="text-secondary small mb-0">20+ years in logistics</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="team-card-light">
                <div className="team-image-wrapper">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" 
                    alt="COO" 
                    className="img-fluid"
                  />
                  <div className="team-overlay">
                    <p className="text-white mb-0">"Excellence in operations"</p>
                  </div>
                </div>
                <div className="team-info">
                  <h5 className="fw-bold mb-1">Priya Sharma</h5>
                  <p className="text-primary mb-2">Chief Operations Officer</p>
                  <p className="text-secondary small mb-0">15+ years experience</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="team-card-light">
                <div className="team-image-wrapper">
                  <img 
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" 
                    alt="CTO" 
                    className="img-fluid"
                  />
                  <div className="team-overlay">
                    <p className="text-white mb-0">"Innovation first"</p>
                  </div>
                </div>
                <div className="team-info">
                  <h5 className="fw-bold mb-1">Amit Verma</h5>
                  <p className="text-primary mb-2">Chief Technology Officer</p>
                  <p className="text-secondary small mb-0">Tech transformation leader</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="team-card-light">
                <div className="team-image-wrapper">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" 
                    alt="Head Customer Relations" 
                    className="img-fluid"
                  />
                  <div className="team-overlay">
                    <p className="text-white mb-0">"Customer success champion"</p>
                  </div>
                </div>
                <div className="team-info">
                  <h5 className="fw-bold mb-1">Sneha Patel</h5>
                  <p className="text-primary mb-2">Head of Customer Relations</p>
                  <p className="text-secondary small mb-0">Customer satisfaction expert</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Achievement Statistics with Parallax */}
      <section 
        className="achievement-stats-light py-5"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1920&q=80)',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="achievement-overlay"></div>
        <div className="container position-relative py-5">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-3">Our Achievements</h2>
            <p className="lead text-secondary">Numbers that speak for themselves</p>
          </div>

          <div className="row g-4">
            <div className="col-lg-3 col-md-6 text-center" data-aos="zoom-in" data-aos-delay="0">
              <div className="achievement-box-light">
                <div className="achievement-icon-light">
                  <FaTruck />
                </div>
                <h2 className="text-primary fw-bold mb-2">
                  <CounterStats end={500} duration={2.5} />+
                </h2>
                <p className="text-secondary mb-0">Modern Vehicles</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 text-center" data-aos="zoom-in" data-aos-delay="100">
              <div className="achievement-box-light">
                <div className="achievement-icon-light">
                  <FaUsers />
                </div>
                <h2 className="text-primary fw-bold mb-2">
                  <CounterStats end={10000} duration={3} />+
                </h2>
                <p className="text-secondary mb-0">Happy Clients</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 text-center" data-aos="zoom-in" data-aos-delay="200">
              <div className="achievement-box-light">
                <div className="achievement-icon-light">
                  <FaGlobe />
                </div>
                <h2 className="text-primary fw-bold mb-2">
                  <CounterStats end={120} duration={2} />+
                </h2>
                <p className="text-secondary mb-0">Cities Covered</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 text-center" data-aos="zoom-in" data-aos-delay="300">
              <div className="achievement-box-light">
                <div className="achievement-icon-light">
                  <FaStar />
                </div>
                <h2 className="text-primary fw-bold mb-2">
                  <CounterStats end={98} duration={2} />%
                </h2>
                <p className="text-secondary mb-0">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: CTA Section */}
      <section 
        className="about-cta-light py-5"
        style={{
          background: 'linear-gradient(135deg, #f7941d 0%, #ff6b35 100%)'
        }}
      >
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-8 text-center text-lg-start mb-4 mb-lg-0">
              <h2 className="display-5 fw-bold text-white mb-3">Ready to Partner With Us?</h2>
              <p className="lead text-white mb-0">
                Join 10,000+ satisfied clients who trust Venus Transport for their logistics needs.
              </p>
            </div>
            <div className="col-lg-4 text-center text-lg-end">
              <Link to="/contact" className="btn btn-light btn-lg px-5 me-3 mb-3 mb-sm-0">
                <FaHandshake className="me-2" />
                Get Started
              </Link>
              <Link to="/services" className="btn btn-outline-light btn-lg px-5">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
