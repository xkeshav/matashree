import React, { useState } from 'react';

interface MapComponentProps {
  address?: string;
  className?: string;
}

const MapComponent: React.FC<MapComponentProps> = ({ address = 'Panathur, Karnataka 560001, India', className = '' }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Encode address for Google Maps embed
  const encodedAddress = encodeURIComponent(address);
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15554.061019344046!2d77.71086794921308!3d12.938847095951258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13efd7986bdb%3A0x5c7347a3e63243e8!2sMatha%20Sree%20Home%20Appliance!5e0!3m2!1sen!2sin!4v1758838003492!5m2!1sen!2sin`;

  // For demo purposes, using a working embed URL
  const demoMapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d77.6081!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15cd8e1b5b73%3A0x9f3d0b1a1c5b0e7a!2sMG%20Road%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin`;

  return (
    <div className={`map-container ${className}`}>
      <div className="map-header">
        <h3>Visit Our Store</h3>
        <p className="map-address">{address}</p>
      </div>

      <div className="map-wrapper">
        {!isLoaded && (
          <div className="map-loading">
            <div className="loading-spinner"></div>
            <p>Loading map...</p>
          </div>
        )}

        <iframe
          src={mapSrc}
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: '0.5rem' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={() => setIsLoaded(true)}
          title="MataShree Store Location"
        />
      </div>

      <div className="map-actions">
        <a href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
          <i className="fas fa-directions"></i>
          Get Directions
        </a>
        <a href="tel:+918023456789" className="btn">
          <i className="fas fa-phone"></i>
          Call Store
        </a>
      </div>

      <style jsx>{`
        .map-container {
          background: var(--white);
          border-radius: 1rem;
          box-shadow: var(--shadow-lg);
          overflow: hidden;
          margin: 2rem 0;
        }

        .map-header {
          padding: 2rem;
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          color: var(--white);
          text-align: center;
        }

        .map-header h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .map-address {
          opacity: 0.9;
          font-size: 1rem;
        }

        .map-wrapper {
          position: relative;
          background: var(--light-gray);
        }

        .map-loading {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: var(--light-gray);
          z-index: 1;
        }

        .loading-spinner {
          width: 40px;
          height: 40px;
          border: 4px solid var(--border-color);
          border-top: 4px solid var(--primary-color);
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 1rem;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .map-actions {
          padding: 2rem;
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .map-header {
            padding: 1.5rem;
          }

          .map-actions {
            padding: 1.5rem;
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default MapComponent;
