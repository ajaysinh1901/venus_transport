import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaMapMarkedAlt, FaWarehouse, FaTruck, FaGlobe, 
  FaRoute, FaMapMarker, FaCity, FaShippingFast,
  FaCheckCircle, FaPhone, FaUsers, FaStar
} from 'react-icons/fa';
import CounterStats from '../components/CounterStats';
import './Network.css';

const Network = () => {
  const regions = [
    { name: 'North India', cities: 40, icon: <FaMapMarker />, color: '#f7941d' },
    { name: 'South India', cities: 35, icon: <FaMapMarker />, color: '#ff6b35' },
    { name: 'East India', cities: 20, icon: <FaMapMarker />, color: '#007bff' },
    { name: 'West India', cities: 25, icon: <FaMapMarker />, color: '#28a745' },
    { name: 'Central India', cities: 15, icon: <FaMapMarker />, color: '#6f42c1' },
    { name: 'Northeast India', cities: 8, icon: <FaMapMarker />, color: '#fd7e14' }
  ];

  const majorHubs = [
    { city: 'Delhi NCR', address: 'Sector 18, Gurgaon', phone: '+91 98765 43210', branches: 5 },
    { city: 'Mumbai', address: 'Andheri East', phone: '+91 98765 43211', branches: 4 },
    { city: 'Bangalore', address: 'Electronic City', phone: '+91 98765 43212', branches: 3 },
    { city: 'Chennai', address: 'Guindy Industrial Estate', phone: '+91 98765 43213', branches: 3 },
    { city: 'Kolkata', address: 'Salt Lake City', phone: '+91 98765 43214', branches: 2 },
    { city: 'Hyderabad', address: 'Kukatpally', phone: '+91 98765 43215', branches: 2 }
  ];

  const partners = [
    'Amazon Logistics', 'Flipkart Ekart', 'BigBasket', 'Zomato Supply',
    'Swiggy Instamart', 'Myntra Fashion', 'Reliance Retail', 'Future Group',
    'DMart', 'TCS Supply Chain', 'Blue Dart Express', 'Delhivery Logistics'
  ];

  return (
    <>
      <Helmet>
        <title>Our Network - Venus Transport | Pan-India Logistics Coverage</title>
        <meta name="description" content="Venus Transport serves 120+ cities across India with strategic hubs, warehouses, and regional branches. Comprehensive coverage from North to South, East to West." />
        <meta name="keywords" content="venus transport network, pan india logistics, transport coverage, regional hubs, warehouse network, logistics branches" />
      </Helmet>

      {/* SECTION 1: Hero with Map Illustration */}
      <section className="network-hero-light">
        <div className="network-hero-gradient"></div>
        <div className="container position-relative">
          <div className="row min-vh-70 align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <span className="badge-light-hero mb-3">
                <FaGlobe className="me-2" />
                Our Network
              </span>
              <h1 className="display-3 fw-bold mb-4">
                <span className="text-gradient">120+ Cities</span> Connected Across India
              </h1>
              <p className="lead mb-4 text-secondary">
                Strategic presence in every major city and town, ensuring your cargo reaches anywhere, anytime. From Jammu to Kanyakumari, from Gujarat to Assam.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <Link to="/contact" className="btn btn-primary-modern btn-lg">
                  <FaPhone className="me-2" />
                  Find Nearest Hub
                </Link>
                <Link to="/services" className="btn btn-outline-primary-modern btn-lg">
                  View Services
                </Link>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left">
              <motion.div
                className="network-map-wrapper"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80" 
                  alt="India Network Map" 
                  className="img-fluid rounded-4 shadow-lg"
                />
                <div className="network-pulse pulse-1"></div>
                <div className="network-pulse pulse-2"></div>
                <div className="network-pulse pulse-3"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Regional Coverage Grid */}
      <section className="regional-coverage-light py-5">
        <div className="container py-5">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="badge-modern-light mb-3">
              <FaMapMarkedAlt className="me-2" />
              Regional Presence
            </span>
            <h2 className="display-5 fw-bold mb-3">Pan-India Coverage</h2>
            <p className="lead text-secondary">Comprehensive logistics network spanning all regions of India</p>
          </div>

          <div className="row g-4">
            {regions.map((region, index) => (
              <div className="col-lg-4 col-md-6" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
                <div className="region-card-light">
                  <div className="region-icon-wrapper" style={{ background: `linear-gradient(135deg, ${region.color}, ${region.color}dd)` }}>
                    {region.icon}
                  </div>
                  <h4 className="fw-bold mb-2">{region.name}</h4>
                  <p className="text-secondary mb-3">Serving {region.cities}+ cities with dedicated hubs</p>
                  <div className="region-stats">
                    <div className="region-stat-item">
                      <FaTruck className="me-2 text-primary" />
                      <span>Daily Service</span>
                    </div>
                    <div className="region-stat-item">
                      <FaShippingFast className="me-2 text-primary" />
                      <span>Express Available</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Interactive Hub Map (Static Image with Markers) */}
      <section className="hub-map-light py-5 bg-light">
        <div className="container py-5">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-3">Our Strategic Hub Locations</h2>
            <p className="lead text-secondary">Major distribution centers across India for faster delivery</p>
          </div>

          <div className="map-container-light" data-aos="fade-up">
            <img 
              src="https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=1400&q=80" 
              alt="India Map with Hubs" 
              className="img-fluid rounded-4 shadow-lg"
            />
            <div className="map-stats-overlay">
              <div className="row g-3 text-center">
                <div className="col-3">
                  <div className="map-stat-box">
                    <h3 className="text-primary fw-bold mb-0">
                      <CounterStats end={120} duration={2} />+
                    </h3>
                    <p className="small mb-0">Cities</p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="map-stat-box">
                    <h3 className="text-primary fw-bold mb-0">
                      <CounterStats end={25} duration={2} />+
                    </h3>
                    <p className="small mb-0">States</p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="map-stat-box">
                    <h3 className="text-primary fw-bold mb-0">
                      <CounterStats end={50} duration={2} />+
                    </h3>
                    <p className="small mb-0">Warehouses</p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="map-stat-box">
                    <h3 className="text-primary fw-bold mb-0">
                      <CounterStats end={200} duration={2.5} />+
                    </h3>
                    <p className="small mb-0">Branches</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Major Hubs & Branches */}
      <section className="major-hubs-light py-5">
        <div className="container py-5">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="badge-modern-light mb-3">
              <FaWarehouse className="me-2" />
              Hub Network
            </span>
            <h2 className="display-5 fw-bold mb-3">Major Distribution Hubs</h2>
            <p className="lead text-secondary">Visit our regional offices and warehouses</p>
          </div>

          <div className="row g-4">
            {majorHubs.map((hub, index) => (
              <div className="col-lg-4 col-md-6" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="hub-card-light">
                  <div className="hub-header">
                    <div className="hub-icon-box">
                      <FaCity />
                    </div>
                    <div>
                      <h5 className="fw-bold mb-0">{hub.city}</h5>
                      <span className="badge bg-primary-light mt-1">{hub.branches} Branches</span>
                    </div>
                  </div>
                  <div className="hub-details">
                    <div className="hub-detail-item">
                      <FaMapMarker className="text-primary me-2" />
                      <span>{hub.address}</span>
                    </div>
                    <div className="hub-detail-item">
                      <FaPhone className="text-primary me-2" />
                      <a href={`tel:${hub.phone}`} className="text-decoration-none">{hub.phone}</a>
                    </div>
                  </div>
                  <Link to="/contact" className="btn btn-outline-primary-modern w-100 mt-3">
                    <FaRoute className="me-2" />
                    Get Directions
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Partner Warehouse Network */}
      <section className="partner-network-light py-5 bg-light">
        <div className="container py-5">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-3">Partner Warehouse Network</h2>
            <p className="lead text-secondary">Collaborating with industry leaders for extended reach</p>
          </div>

          <div className="row g-4 mb-5">
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="0">
              <div className="network-feature-box">
                <div className="network-feature-icon">
                  <FaWarehouse />
                </div>
                <h5 className="fw-bold mb-2">50+ Warehouses</h5>
                <p className="text-secondary mb-0 small">Climate-controlled storage facilities</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="network-feature-box">
                <div className="network-feature-icon">
                  <FaTruck />
                </div>
                <h5 className="fw-bold mb-2">500+ Vehicles</h5>
                <p className="text-secondary mb-0 small">Modern fleet for all cargo types</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="network-feature-box">
                <div className="network-feature-icon">
                  <FaRoute />
                </div>
                <h5 className="fw-bold mb-2">1000+ Routes</h5>
                <p className="text-secondary mb-0 small">Optimized delivery paths</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="network-feature-box">
                <div className="network-feature-icon">
                  <FaUsers />
                </div>
                <h5 className="fw-bold mb-2">2000+ Staff</h5>
                <p className="text-secondary mb-0 small">Trained logistics professionals</p>
              </div>
            </div>
          </div>

          <div className="partner-warehouse-grid" data-aos="fade-up">
            {partners.map((partner, index) => (
              <div className="partner-badge-light" key={index}>
                <FaCheckCircle className="me-2 text-primary" />
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Network Statistics with Parallax */}
      <section 
        className="network-stats-parallax py-5"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1586528116493-a029325540fa?w=1920&q=80)',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="network-stats-overlay"></div>
        <div className="container position-relative py-5">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-3 text-white">Network by Numbers</h2>
            <p className="lead text-white">Our infrastructure supports your growth</p>
          </div>

          <div className="row g-4">
            <div className="col-lg-3 col-md-6 text-center" data-aos="zoom-in" data-aos-delay="0">
              <div className="network-stat-box-light">
                <FaMapMarkedAlt className="network-stat-icon-big" />
                <h2 className="text-white fw-bold mb-2">
                  <CounterStats end={120} duration={2} />+
                </h2>
                <p className="text-white mb-0">Cities Connected</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center" data-aos="zoom-in" data-aos-delay="100">
              <div className="network-stat-box-light">
                <FaWarehouse className="network-stat-icon-big" />
                <h2 className="text-white fw-bold mb-2">
                  <CounterStats end={50} duration={2} />+
                </h2>
                <p className="text-white mb-0">Storage Facilities</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center" data-aos="zoom-in" data-aos-delay="200">
              <div className="network-stat-box-light">
                <FaRoute className="network-stat-icon-big" />
                <h2 className="text-white fw-bold mb-2">
                  <CounterStats end={1000} duration={2.5} />+
                </h2>
                <p className="text-white mb-0">Delivery Routes</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center" data-aos="zoom-in" data-aos-delay="300">
              <div className="network-stat-box-light">
                <FaStar className="network-stat-icon-big" />
                <h2 className="text-white fw-bold mb-2">
                  <CounterStats end={98} duration={2} />%
                </h2>
                <p className="text-white mb-0">On-Time Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Coverage Benefits */}
      <section className="coverage-benefits-light py-5">
        <div className="container py-5">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-3">Why Our Network Matters</h2>
            <p className="lead text-secondary">Advantages of choosing Venus Transport's extensive network</p>
          </div>

          <div className="row g-4">
            <div className="col-lg-3 col-md-6" data-aos="flip-left" data-aos-delay="0">
              <div className="benefit-card-light">
                <div className="benefit-number">01</div>
                <h5 className="fw-bold mb-3">Faster Delivery</h5>
                <p className="text-secondary mb-0">Strategic hub placement reduces transit time by up to 40%</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="flip-left" data-aos-delay="100">
              <div className="benefit-card-light">
                <div className="benefit-number">02</div>
                <h5 className="fw-bold mb-3">Cost Efficiency</h5>
                <p className="text-secondary mb-0">Optimized routes and bulk operations reduce shipping costs</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="flip-left" data-aos-delay="200">
              <div className="benefit-card-light">
                <div className="benefit-number">03</div>
                <h5 className="fw-bold mb-3">Reliability</h5>
                <p className="text-secondary mb-0">Multiple backup routes ensure on-time delivery always</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="flip-left" data-aos-delay="300">
              <div className="benefit-card-light">
                <div className="benefit-number">04</div>
                <h5 className="fw-bold mb-3">Local Expertise</h5>
                <p className="text-secondary mb-0">Regional teams understand local challenges and regulations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: CTA Section */}
      <section 
        className="network-cta-light py-5"
        style={{
          background: 'linear-gradient(135deg, #f7941d 0%, #ff6b35 100%)'
        }}
      >
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-8 text-center text-lg-start mb-4 mb-lg-0">
              <h2 className="display-5 fw-bold text-white mb-3">Need Logistics Support in Your City?</h2>
              <p className="lead text-white mb-0">
                Our network team is ready to serve you. Find your nearest hub or request service in your area.
              </p>
            </div>
            <div className="col-lg-4 text-center text-lg-end">
              <Link to="/contact" className="btn btn-light btn-lg px-5 me-3 mb-3 mb-sm-0">
                <FaMapMarker className="me-2" />
                Find Hub
              </Link>
              <Link to="/services" className="btn btn-outline-light btn-lg px-5">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Network;
