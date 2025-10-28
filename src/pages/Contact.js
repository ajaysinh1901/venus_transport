import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp,
  FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram,
  FaPaperPlane, FaCheckCircle, FaBuilding, FaUser,
  FaQuestionCircle, FaHeadset, FaTruck
} from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Phone is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      errors.phone = 'Phone must be 10 digits';
    }
    if (!formData.service) errors.service = 'Please select a service';
    return errors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error for this field
    if (formErrors[e.target.name]) {
      setFormErrors({
        ...formErrors,
        [e.target.name]: ''
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
        setIsSubmitted(false);
      }, 3000);
    } else {
      setFormErrors(errors);
    }
  };

  const branches = [
    {
      city: 'Delhi NCR',
      address: 'Sector 18, Gurgaon, Haryana 122015',
      phone: '+91 93138 79878',
      email: 'delhi@venustransport.com'
    },
    {
      city: 'Mumbai',
      address: 'Andheri East, Mumbai, Maharashtra 400069',
      phone: '+91 98765 43211',
      email: 'mumbai@venustransport.com'
    },
    {
      city: 'Bangalore',
      address: 'Electronic City, Bangalore, Karnataka 560100',
      phone: '+91 98765 43212',
      email: 'bangalore@venustransport.com'
    },
    {
      city: 'Chennai',
      address: 'Guindy, Chennai, Tamil Nadu 600032',
      phone: '+91 98765 43213',
      email: 'chennai@venustransport.com'
    }
  ];

  const faqs = [
    {
      question: 'What areas do you cover?',
      answer: 'We cover 500+ cities across India with our comprehensive logistics network, including all major metropolitan cities and remote locations.'
    },
    {
      question: 'How can I track my shipment?',
      answer: 'All our vehicles are GPS-enabled. You\'ll receive a tracking link via SMS and email once your shipment is dispatched. You can track in real-time 24/7.'
    },
    {
      question: 'Do you provide insurance?',
      answer: 'Yes, all shipments are covered under comprehensive transit insurance. We also offer additional coverage options based on cargo value.'
    },
    {
      question: 'What are your payment terms?',
      answer: 'We accept multiple payment methods including cash, bank transfer, UPI, and credit facilities for regular corporate clients.'
    },
    {
      question: 'How quickly can you deliver?',
      answer: 'Delivery time depends on the route and service type. Express delivery takes 1-2 days for metro cities, while standard delivery takes 3-5 days.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Venus Transport | Get in Touch for Logistics Solutions</title>
        <meta name="description" content="Contact Venus Transport for all your logistics needs. Call us at +91 93138 79878 or fill out our contact form. Available 24/7 across 500+ cities in India." />
        <meta name="keywords" content="contact venus transport, logistics inquiry, transport quote, customer support, 24/7 helpline" />
      </Helmet>

      {/* SECTION 1: Hero Section */}
      <section className="contact-hero-light">
        <div className="contact-hero-gradient-overlay"></div>
        <div className="container position-relative">
          <div className="row min-vh-60 align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <span className="badge-light-hero mb-3">
                <FaHeadset className="me-2" />
                Get in Touch
              </span>
              <h1 className="display-3 fw-bold mb-4 text-gradient">
                We're Here to <br />
                <span className="text-primary">Help You</span>
              </h1>
              <p className="lead mb-4 text-dark-gray">
                Have a question or need assistance? Our team is available 24/7 to provide
                you with the best logistics solutions.
              </p>

              {/* Quick Contact Cards */}
              <div className="row g-3 mt-4">
                <div className="col-md-6">
                  <div className="quick-contact-card">
                    <div className="quick-icon">
                      <FaPhone />
                    </div>
                    <div>
                      <p className="small text-muted mb-1">Call Us</p>
                      <a href="tel:+919313879878" className="fw-bold text-decoration-none">+91 93138 79878</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="quick-contact-card">
                    <div className="quick-icon">
                      <FaEnvelope />
                    </div>
                    <div>
                      <p className="small text-muted mb-1">Email Us</p>
                      <a href="mailto:info@venustransport.com" className="fw-bold text-decoration-none">info@venustransport.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="200">
              <div className="contact-hero-icons">
                <motion.div
                  className="floating-icon icon-1"
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <FaTruck />
                </motion.div>
                <motion.div
                  className="floating-icon icon-2"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                >
                  <FaHeadset />
                </motion.div>
                <motion.div
                  className="floating-icon icon-3"
                  animate={{ y: [0, -25, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
                >
                  <FaCheckCircle />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Contact Form & Map */}
      <section className="contact-form-section py-5">
        <div className="container">
          <div className="row g-5">
            {/* Contact Form */}
            <div className="col-lg-6" data-aos="fade-right">
              <div className="contact-form-wrapper">
                <span className="badge-light-modern mb-3">Send a Message</span>
                <h2 className="display-6 fw-bold mb-4">Let's Start a Conversation</h2>
                <p className="text-muted mb-4">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>

                {isSubmitted && (
                  <div className="alert alert-success d-flex align-items-center mb-4" role="alert">
                    <FaCheckCircle className="me-3" size={24} />
                    <div>
                      <strong>Success!</strong> Your message has been sent. We'll contact you soon.
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="contact-form-modern">
                  <div className="mb-4">
                    <label htmlFor="name" className="form-label fw-600">
                      <FaUser className="me-2 text-primary" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      className={`form-control form-control-modern ${formErrors.name ? 'is-invalid' : ''}`}
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                    />
                    {formErrors.name && <div className="invalid-feedback">{formErrors.name}</div>}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="form-label fw-600">
                      <FaEnvelope className="me-2 text-primary" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className={`form-control form-control-modern ${formErrors.email ? 'is-invalid' : ''}`}
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                    />
                    {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="phone" className="form-label fw-600">
                      <FaPhone className="me-2 text-primary" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      className={`form-control form-control-modern ${formErrors.phone ? 'is-invalid' : ''}`}
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                    />
                    {formErrors.phone && <div className="invalid-feedback">{formErrors.phone}</div>}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="service" className="form-label fw-600">
                      <FaTruck className="me-2 text-primary" />
                      Select Service *
                    </label>
                    <select
                      className={`form-select form-control-modern ${formErrors.service ? 'is-invalid' : ''}`}
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="">Choose a service</option>
                      <option value="ftl">Full Truck Load (FTL)</option>
                      <option value="ptl">Part Truck Load (PTL)</option>
                      <option value="warehouse">Warehousing Solutions</option>
                      <option value="express">Express Delivery</option>
                      <option value="network">Network Services</option>
                      <option value="other">Other Services</option>
                    </select>
                    {formErrors.service && <div className="invalid-feedback">{formErrors.service}</div>}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="form-label fw-600">
                      <FaPaperPlane className="me-2 text-primary" />
                      Your Message
                    </label>
                    <textarea
                      className="form-control form-control-modern"
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary-modern btn-lg w-100">
                    <FaPaperPlane className="me-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Map & Info */}
            <div className="col-lg-6" data-aos="fade-left">
              <div className="map-wrapper">
                <iframe
                  title="Venus Transport Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224357.0!2d77.1025!3d28.7041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Working Hours Card */}
              <div className="working-hours-card mt-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="hours-icon">
                    <FaClock />
                  </div>
                  <h5 className="fw-bold mb-0 ms-3">Working Hours</h5>
                </div>
                <div className="hours-list">
                  <div className="hours-item">
                    <span>Monday - Friday</span>
                    <span className="fw-bold text-primary">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span>Saturday</span>
                    <span className="fw-bold text-primary">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span>Sunday</span>
                    <span className="fw-bold text-danger">Closed</span>
                  </div>
                </div>
                <div className="support-badge mt-3">
                  <FaHeadset className="me-2" />
                  <span>24/7 Emergency Support Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Branch Offices */}
      <section className="branches-section py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="badge-light-modern mb-3">Our Locations</span>
            <h2 className="display-5 fw-bold mb-3">Branch Offices Across India</h2>
            <p className="lead text-muted">Visit our offices in major cities for personalized assistance</p>
          </div>

          <div className="row g-4">
            {branches.map((branch, index) => (
              <div key={index} className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="branch-card">
                  <div className="branch-icon-box">
                    <FaBuilding />
                  </div>
                  <h5 className="fw-bold mb-3">{branch.city}</h5>
                  <div className="branch-info">
                    <p className="small mb-2">
                      <FaMapMarkerAlt className="text-primary me-2" />
                      {branch.address}
                    </p>
                    <p className="small mb-2">
                      <FaPhone className="text-primary me-2" />
                      <a href={`tel:${branch.phone}`} className="text-decoration-none">{branch.phone}</a>
                    </p>
                    <p className="small mb-0">
                      <FaEnvelope className="text-primary me-2" />
                      <a href={`mailto:${branch.email}`} className="text-decoration-none">{branch.email}</a>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Quick Contact Cards */}
      <section className="quick-contact-section py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4" data-aos="zoom-in">
              <div className="quick-action-card phone-card">
                <div className="quick-action-icon">
                  <FaPhone />
                </div>
                <h4 className="fw-bold mb-2">Call Us Now</h4>
                <p className="text-muted mb-3">Speak with our logistics experts</p>
                <a href="tel:+919313879878" className="btn btn-light btn-lg w-100">
                  <FaPhone className="me-2" />
                  +91 93138 79878
                </a>
              </div>
            </div>

            <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="100">
              <div className="quick-action-card whatsapp-card">
                <div className="quick-action-icon">
                  <FaWhatsapp />
                </div>
                <h4 className="fw-bold mb-2">WhatsApp Chat</h4>
                <p className="text-muted mb-3">Get instant support on WhatsApp</p>
                <a href="https://wa.me/919313879878" target="_blank" rel="noopener noreferrer" className="btn btn-success btn-lg w-100">
                  <FaWhatsapp className="me-2" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="200">
              <div className="quick-action-card email-card">
                <div className="quick-action-icon">
                  <FaEnvelope />
                </div>
                <h4 className="fw-bold mb-2">Email Us</h4>
                <p className="text-muted mb-3">Send us your detailed inquiry</p>
                <a href="mailto:info@venustransport.com" className="btn btn-light btn-lg w-100">
                  <FaEnvelope className="me-2" />
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FAQ Section */}
      <section className="faq-section py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="badge-light-modern mb-3">
              <FaQuestionCircle className="me-2" />
              FAQs
            </span>
            <h2 className="display-5 fw-bold mb-3">Frequently Asked Questions</h2>
            <p className="lead text-muted">Quick answers to common questions about our services</p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="faq-accordion">
                {faqs.map((faq, index) => (
                  <div key={index} className="faq-item" data-aos="fade-up" data-aos-delay={index * 50}>
                    <div className="accordion accordion-flush" id={`faqAccordion${index}`}>
                      <div className="accordion-item">
                        <h3 className="accordion-header">
                          <button
                            className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#faq${index}`}
                            aria-expanded={index === 0 ? 'true' : 'false'}
                          >
                            <FaCheckCircle className="text-primary me-3" />
                            {faq.question}
                          </button>
                        </h3>
                        <div
                          id={`faq${index}`}
                          className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                          data-bs-parent={`#faqAccordion${index}`}
                        >
                          <div className="accordion-body">
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Social Media */}
      <section className="social-section py-5">
        <div className="container">
          <div className="social-connect-card" data-aos="zoom-in">
            <div className="text-center">
              <h3 className="fw-bold mb-3">Connect With Us on Social Media</h3>
              <p className="text-muted mb-4">Follow us for latest updates, industry news, and exclusive offers</p>
              <div className="social-icons-modern">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-link facebook">
                  <FaFacebookF />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon-link twitter">
                  <FaTwitter />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-link linkedin">
                  <FaLinkedinIn />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-link instagram">
                  <FaInstagram />
                </a>
                <a href="https://wa.me/919313879878" target="_blank" rel="noopener noreferrer" className="social-icon-link whatsapp">
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: CTA Section */}
      <section className="contact-cta-section py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center" data-aos="zoom-in">
              <FaHeadset className="cta-icon mb-4" />
              <h2 className="display-4 fw-bold mb-4 text-white">
                Ready to Get Started?
              </h2>
              <p className="lead text-white mb-4">
                Let us handle your logistics needs. Request a quote today and experience
                hassle-free transportation across India.
              </p>
              <div className="d-flex flex-wrap gap-3 justify-content-center">
                <Link to="/services" className="btn btn-light btn-lg">
                  <FaTruck className="me-2" />
                  View Services
                </Link>
                <a href="tel:+919313879878" className="btn btn-outline-light btn-lg">
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

export default Contact;
