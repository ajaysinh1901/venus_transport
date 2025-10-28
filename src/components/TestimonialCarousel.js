import React, { useState } from 'react';
import './TestimonialCarousel.css';

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      company: 'Manufacturing Industry',
      image: 'https://ui-avatars.com/api/?name=Rajesh+Kumar&background=f7941d&color=fff&size=100',
      rating: 5,
      text: 'Venus Transport has been our trusted logistics partner for over 5 years. Their reliability and professional service are unmatched. Highly recommended!'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      company: 'E-commerce Business',
      image: 'https://ui-avatars.com/api/?name=Priya+Sharma&background=f7941d&color=fff&size=100',
      rating: 5,
      text: 'Excellent service! Real-time tracking and on-time delivery every single time. Venus Transport has helped scale our business significantly.'
    },
    {
      id: 3,
      name: 'Amit Patel',
      company: 'Textile Industry',
      image: 'https://ui-avatars.com/api/?name=Amit+Patel&background=f7941d&color=fff&size=100',
      rating: 5,
      text: 'Professional team, competitive pricing, and excellent customer support. We have moved our entire logistics operations to Venus Transport.'
    },
    {
      id: 4,
      name: 'Sneha Reddy',
      company: 'FMCG Sector',
      image: 'https://ui-avatars.com/api/?name=Sneha+Reddy&background=f7941d&color=fff&size=100',
      rating: 5,
      text: 'Outstanding service! Their fleet is well-maintained, drivers are professional, and the entire process is seamless. A true logistics partner!'
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="testimonial-carousel">
      <div className="carousel-wrapper">
        <button className="carousel-btn prev-btn" onClick={prevSlide} aria-label="Previous testimonial">
          <i className="fa-solid fa-chevron-left"></i>
        </button>

        <div className="testimonial-cards">
          {testimonials.map((testimonial, index) => {
            const isActive = index === activeIndex;
            const isPrev = index === activeIndex - 1 || (activeIndex === 0 && index === testimonials.length - 1);
            const isNext = index === activeIndex + 1 || (activeIndex === testimonials.length - 1 && index === 0);
            
            return (
              <div
                key={testimonial.id}
                className={`testimonial-card ${isActive ? 'active' : ''} ${isPrev ? 'prev' : ''} ${isNext ? 'next' : ''}`}
                style={{
                  display: isActive ? 'block' : 'none'
                }}
              >
                <div className="quote-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </div>
                <div className="stars mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star"></i>
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="client-info">
                  <img src={testimonial.image} alt={testimonial.name} className="client-image" />
                  <div className="client-details">
                    <h5 className="client-name">{testimonial.name}</h5>
                    <p className="client-company">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button className="carousel-btn next-btn" onClick={nextSlide} aria-label="Next testimonial">
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>

      <div className="carousel-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;