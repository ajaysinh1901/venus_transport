import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaTruck, FaTruckMoving, FaTruckLoading, FaShippingFast,
  FaWarehouse, FaBox, FaShieldAlt, FaClock, FaCheckCircle,
  FaMapMarkedAlt, FaSatellite, FaTools, FaLeaf, FaCertificate,
  FaFireExtinguisher, FaFirstAid, FaTachometerAlt, FaStar
} from 'react-icons/fa';
import CounterStats from '../components/CounterStats';
import './Fleet.css';

const Fleet = () => {
  const vehicles = [
    {
      name: 'Open Body Trucks',
      icon: <FaTruck />,
      capacity: '10 - 20 Tons',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=500',
      features: ['Versatile Loading', 'Weather Resistant', 'Easy Access', 'Cost-Effective'],
      count: 120
    },
    {
      name: 'Closed Container',
      icon: <FaTruckLoading />,
      capacity: '15 - 25 Tons',
      image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=500',
      features: ['Secure Storage', 'Weather Protection', 'Theft Prevention', 'Multi-Purpose'],
      count: 150
    },
    {
      name: 'Refrigerated Trucks',
      icon: <FaShippingFast />,
      capacity: '8 - 15 Tons',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500',
      features: ['Temperature Control', 'Hygiene Standards', 'Food Grade', 'Real-Time Monitoring'],
      count: 50
    },
    {
      name: 'Trailer Trucks',
      icon: <FaTruckMoving />,
      capacity: '25 - 40 Tons',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=500',
      features: ['Heavy Capacity', 'Long Distance', 'Fuel Efficient', 'GPS Enabled'],
      count: 80
    },
    {
      name: 'Mini Trucks',
      icon: <FaBox />,
      capacity: '1 - 5 Tons',
      image: 'https://images.unsplash.com/photo-1566933293069-b55c7f326dd4?w=500',
      features: ['City Delivery', 'Narrow Access', 'Quick Turnaround', 'Economical'],
      count: 100
    },
    {
      name: 'Specialized Vehicles',
      icon: <FaWarehouse />,
      capacity: 'Custom',
      image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=500',
      features: ['Custom Solutions', 'Special Equipment', 'Project Cargo', 'ODC Transport'],
      count: 30
    }
  ];

  const specifications = [
    { vehicle: 'Mini Truck', capacity: '1-5 Tons', length: '10-14 ft', width: '6 ft', height: '6 ft', fuel: 'Diesel' },
    { vehicle: 'Open Body', capacity: '10-20 Tons', length: '20-25 ft', width: '7.5 ft', height: '7 ft', fuel: 'Diesel' },
    { vehicle: 'Container', capacity: '15-25 Tons', length: '32 ft', width: '8 ft', height: '8.5 ft', fuel: 'Diesel' },
    { vehicle: 'Refrigerated', capacity: '8-15 Tons', length: '18-24 ft', width: '7 ft', height: '7.5 ft', fuel: 'Diesel' },
    { vehicle: 'Trailer', capacity: '25-40 Tons', length: '40-53 ft', width: '8.5 ft', height: '9 ft', fuel: 'Diesel' },
    { vehicle: 'Specialized', capacity: 'Custom', length: 'Variable', width: 'Variable', height: 'Variable', fuel: 'Diesel' }
  ];

  const features = [
    {
      icon: <FaMapMarkedAlt />,
      title: 'GPS Tracking',
      description: 'Real-time vehicle tracking for complete visibility and security'
    },
    {
      icon: <FaSatellite />,
      title: 'IoT Enabled',
      description: 'Smart sensors for temperature, location, and vehicle health monitoring'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Insurance Coverage',
      description: 'Comprehensive insurance for cargo and vehicle protection'
    },
    {
      icon: <FaTools />,
      title: 'Regular Maintenance',
      description: 'Scheduled servicing and preventive maintenance for reliability'
    },
    {
      icon: <FaLeaf />,
      title: 'Eco-Friendly',
      description: 'BS6 compliant engines with reduced emissions and fuel efficiency'
    },
    {
      icon: <FaClock />,
      title: '24/7 Support',
      description: 'Round-the-clock technical and operational support'
    }
  ];

  const safetyStandards = [
    { icon: <FaCertificate />, title: 'ISO Certified', badge: 'ISO 9001:2015' },
    { icon: <FaFireExtinguisher />, title: 'Fire Safety', badge: 'Equipped' },
    { icon: <FaFirstAid />, title: 'First Aid', badge: 'Available' },
    { icon: <FaShieldAlt />, title: 'Safety Protocols', badge: 'Compliant' },
    { icon: <FaTachometerAlt />, title: 'Speed Governors', badge: 'Installed' },
    { icon: <FaCheckCircle />, title: 'Regular Audits', badge: 'Quarterly' }
  ];

  return (
    <>
      <Helmet>
        <title>Our Fleet - Venus Transport | 500+ Modern Vehicles Across India</title>
        <meta name="description" content="Explore Venus Transport's diverse fleet of 500+ vehicles including container trucks, refrigerated vehicles, trailers, and specialized transport solutions." />
        <meta name="keywords" content="transport fleet, truck types, container trucks, refrigerated vehicles, trailer trucks, logistics vehicles" />
      </Helmet>

      {/* SECTION 1: Hero Section */}
      <section className="fleet-hero-light">
        <div className="fleet-hero-gradient-overlay"></div>
        <div className="container position-relative">
          <div className="row min-vh-70 align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <span className="badge-light-hero mb-3">
                <FaTruck className="me-2" />
                Our Fleet
              </span>
              <h1 className="display-3 fw-bold mb-4 text-gradient">
                Modern Fleet for <br />
                <span className="text-primary">Every Need</span>
              </h1>
              <p className="lead mb-4 text-dark-gray">
                500+ well-maintained vehicles equipped with latest technology for safe,
                efficient, and reliable transportation across India.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link to="/contact" className="btn btn-primary-modern btn-lg">
                  <FaTruck className="me-2" />
                  Book a Vehicle
                </Link>
                <a href="#fleet-gallery" className="btn btn-outline-primary btn-lg">
                  Explore Fleet
                </a>
              </div>

              {/* Quick Stats */}
              <div className="row mt-5 g-4">
                <div className="col-6">
                  <div className="quick-stat-card">
                    <h3 className="text-primary fw-bold mb-1">500+</h3>
                    <p className="text-muted mb-0">Total Vehicles</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="quick-stat-card">
                    <h3 className="text-primary fw-bold mb-1">6</h3>
                    <p className="text-muted mb-0">Vehicle Types</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="200">
              <div className="fleet-hero-image">
                <motion.img
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800"
                  alt="Venus Transport Fleet"
                  className="img-fluid rounded-4 shadow-lg"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <span></span>
          <p className="small text-muted mt-2">Scroll to Explore</p>
        </div>
      </section>

      {/* SECTION 2: Fleet Overview */}
      <section className="fleet-overview-light py-5">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="badge-light-modern mb-3">Complete Fleet Range</span>
            <h2 className="display-5 fw-bold mb-3">Vehicles for Every Requirement</h2>
            <p className="lead text-muted">From mini trucks to heavy trailers, we have the perfect vehicle for your cargo</p>
          </div>

          <div className="row g-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up">
              <div className="overview-card-light">
                <div className="overview-icon-box">
                  <FaTruck />
                </div>
                <h4 className="mt-3 mb-2">Diverse Range</h4>
                <p className="text-muted">6 types of vehicles covering all cargo sizes from 1 ton to 40 tons capacity</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="overview-card-light">
                <div className="overview-icon-box">
                  <FaTools />
                </div>
                <h4 className="mt-3 mb-2">Well Maintained</h4>
                <p className="text-muted">Regular servicing and preventive maintenance for optimal performance</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="overview-card-light">
                <div className="overview-icon-box">
                  <FaSatellite />
                </div>
                <h4 className="mt-3 mb-2">Technology Equipped</h4>
                <p className="text-muted">GPS tracking, IoT sensors, and real-time monitoring systems</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Vehicle Gallery */}
      <section id="fleet-gallery" className="fleet-gallery-light py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="badge-light-modern mb-3">Vehicle Gallery</span>
            <h2 className="display-5 fw-bold mb-3">Explore Our Fleet</h2>
            <p className="lead text-muted">Modern vehicles equipped with latest safety and tracking technology</p>
          </div>

          <div className="row g-4">
            {vehicles.map((vehicle, index) => (
              <div key={index} className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay={index * 50}>
                <div className="vehicle-card-light">
                  <div className="vehicle-image-wrapper">
                    <img src={vehicle.image} alt={vehicle.name} className="vehicle-image" />
                    <div className="vehicle-overlay">
                      <div className="vehicle-icon-large">
                        {vehicle.icon}
                      </div>
                    </div>
                  </div>
                  <div className="vehicle-content">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h4 className="mb-0">{vehicle.name}</h4>
                      <span className="badge bg-primary">{vehicle.count}+ Units</span>
                    </div>
                    <p className="capacity-badge mb-3">
                      <FaBox className="me-2" />
                      Capacity: {vehicle.capacity}
                    </p>
                    <ul className="vehicle-features-list">
                      {vehicle.features.map((feature, idx) => (
                        <li key={idx}>
                          <FaCheckCircle className="text-success me-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="btn btn-outline-primary w-100 mt-3">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Specifications Table */}
      <section className="fleet-specs-light py-5">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="badge-light-modern mb-3">Technical Specifications</span>
            <h2 className="display-5 fw-bold mb-3">Vehicle Specifications</h2>
            <p className="lead text-muted">Detailed specifications for informed decision making</p>
          </div>

          <div className="specs-table-wrapper" data-aos="fade-up">
            <table className="specs-table">
              <thead>
                <tr>
                  <th>Vehicle Type</th>
                  <th>Capacity</th>
                  <th>Length</th>
                  <th>Width</th>
                  <th>Height</th>
                  <th>Fuel Type</th>
                </tr>
              </thead>
              <tbody>
                {specifications.map((spec, index) => (
                  <tr key={index}>
                    <td className="fw-bold">{spec.vehicle}</td>
                    <td>{spec.capacity}</td>
                    <td>{spec.length}</td>
                    <td>{spec.width}</td>
                    <td>{spec.height}</td>
                    <td>
                      <span className="badge bg-success">{spec.fuel}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 5: Features Grid */}
      <section className="fleet-features-light py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="badge-light-modern mb-3">Advanced Features</span>
            <h2 className="display-5 fw-bold mb-3">Technology & Innovation</h2>
            <p className="lead text-muted">Modern features for enhanced safety and efficiency</p>
          </div>

          <div className="row g-4">
            {features.map((feature, index) => (
              <div key={index} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="feature-card-modern">
                  <div className="feature-icon-modern mb-3">
                    {feature.icon}
                  </div>
                  <h4 className="mb-3">{feature.title}</h4>
                  <p className="text-muted mb-0">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Safety Standards */}
      <section className="fleet-safety-light py-5">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="badge-light-modern mb-3">Safety First</span>
            <h2 className="display-5 fw-bold mb-3">Safety Standards & Compliance</h2>
            <p className="lead text-muted">We prioritize safety with certified protocols and regular audits</p>
          </div>

          <div className="row g-4 justify-content-center">
            {safetyStandards.map((standard, index) => (
              <div key={index} className="col-lg-2 col-md-4 col-6" data-aos="zoom-in" data-aos-delay={index * 50}>
                <div className="safety-badge-card">
                  <div className="safety-icon-circle">
                    {standard.icon}
                  </div>
                  <h6 className="mt-3 mb-1 fw-bold">{standard.title}</h6>
                  <span className="badge bg-success">{standard.badge}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="row mt-5">
            <div className="col-lg-10 mx-auto">
              <div className="safety-info-card" data-aos="fade-up">
                <div className="row align-items-center">
                  <div className="col-md-2 text-center mb-3 mb-md-0">
                    <div className="certified-badge">
                      <FaStar className="text-warning" size={40} />
                      <p className="mb-0 mt-2 fw-bold">Certified</p>
                    </div>
                  </div>
                  <div className="col-md-10">
                    <h4 className="mb-3">Certified & Compliant Operations</h4>
                    <p className="text-muted mb-0">
                      All our vehicles are ISO certified and comply with national transport safety regulations. 
                      We conduct quarterly safety audits and driver training programs to ensure the highest 
                      standards of safety and reliability. Our fleet is equipped with speed governors, 
                      fire extinguishers, first aid kits, and emergency contact systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Technology & Tracking */}
      <section className="fleet-technology-light py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
              <span className="badge-light-modern mb-3">Smart Technology</span>
              <h2 className="display-5 fw-bold mb-4">Advanced Tracking & Monitoring</h2>
              <p className="lead text-muted mb-4">
                Every vehicle in our fleet is equipped with cutting-edge technology for real-time 
                tracking and monitoring.
              </p>

              <div className="tech-feature-list">
                <div className="tech-feature-item">
                  <div className="tech-icon-box">
                    <FaMapMarkedAlt />
                  </div>
                  <div>
                    <h5 className="mb-2">GPS Tracking System</h5>
                    <p className="text-muted mb-0">Live location tracking with route optimization and geofencing alerts</p>
                  </div>
                </div>

                <div className="tech-feature-item">
                  <div className="tech-icon-box">
                    <FaSatellite />
                  </div>
                  <div>
                    <h5 className="mb-2">IoT Sensors</h5>
                    <p className="text-muted mb-0">Temperature, humidity, and cargo condition monitoring for sensitive goods</p>
                  </div>
                </div>

                <div className="tech-feature-item">
                  <div className="tech-icon-box">
                    <FaTachometerAlt />
                  </div>
                  <div>
                    <h5 className="mb-2">Vehicle Health Monitoring</h5>
                    <p className="text-muted mb-0">Real-time engine diagnostics, fuel consumption, and maintenance alerts</p>
                  </div>
                </div>

                <div className="tech-feature-item">
                  <div className="tech-icon-box">
                    <FaShieldAlt />
                  </div>
                  <div>
                    <h5 className="mb-2">Security Systems</h5>
                    <p className="text-muted mb-0">Anti-theft devices, CCTV cameras, and emergency panic buttons</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left">
              <div className="technology-visual">
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600" 
                  alt="GPS Tracking Technology" 
                  className="img-fluid rounded-4 shadow-lg"
                />
                <div className="tech-overlay-badge">
                  <FaSatellite size={30} className="text-primary mb-2" />
                  <h5 className="fw-bold">Real-Time Tracking</h5>
                  <p className="small mb-0">24/7 Monitoring</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: Call to Action */}
      <section className="fleet-cta-section py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center" data-aos="zoom-in">
              <FaTruck className="cta-icon mb-4" />
              <h2 className="display-4 fw-bold mb-4 text-white">
                Need a Specific Vehicle?
              </h2>
              <p className="lead text-white mb-4">
                Our fleet experts will help you choose the perfect vehicle for your cargo requirements.
                Get instant quotes and book online in minutes.
              </p>
              <div className="d-flex flex-wrap gap-3 justify-content-center">
                <Link to="/contact" className="btn btn-light btn-lg">
                  <FaTruck className="me-2" />
                  Book a Vehicle
                </Link>
                <a href="tel:+919876543210" className="btn btn-outline-light btn-lg">
                  <FaClock className="me-2" />
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

export default Fleet;
