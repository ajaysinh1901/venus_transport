import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <svg width="80" height="80" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="#f7941d"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="251.2"
            strokeDashoffset="251.2"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="251.2;0;251.2"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </circle>
          <text
            x="50%"
            y="58%"
            textAnchor="middle"
            fontFamily="Poppins"
            fontWeight="700"
            fontSize="20"
            fill="#f7941d"
          >
            VT
          </text>
        </svg>
        <p className="mt-3 fw-600" style={{ fontFamily: 'Poppins', color: '#1e1e1e' }}>
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loader;
