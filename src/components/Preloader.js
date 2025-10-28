import React, { useEffect, useState } from 'react';
import './Preloader.css';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide preloader after 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader">
      <div className="preloader-content">
        <div className="truck-container">
          <div className="truck">
            <i className="fa-solid fa-truck-fast"></i>
          </div>
          <div className="wheels">
            <div className="wheel"></div>
            <div className="wheel"></div>
          </div>
        </div>
        <h2 className="loading-text">Venus Transport</h2>
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
        <p className="tagline">Delivering Trust Across Every Mile</p>
      </div>
    </div>
  );
};

export default Preloader;
