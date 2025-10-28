import React from 'react';
import './WhatsAppFloat.css';

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/919313879878"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <i className="fa-brands fa-whatsapp fa-2x"></i>
    </a>
  );
};

export default WhatsAppFloat;
