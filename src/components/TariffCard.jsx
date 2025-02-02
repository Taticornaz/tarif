import React from 'react';
import PropTypes from 'prop-types';
import './TariffCard.css';

const TariffCard = ({ name, price, speed, dataLimit, isHighlighted, colorScheme }) => {
  const defaultColors = {
    nameBackground: '#ADD8E6',   
    nameTextColor: '#000000',    
    priceBackground: '#003366', 
    speedBackground: '#D3D3D3',  
    dataBackground: '#9A9A9C'    
  };

  const {
    nameBackground,
    nameTextColor,
    priceBackground,
    speedBackground,
    dataBackground
  } = colorScheme || defaultColors;

  return (
    <div className={`tariff-card ${isHighlighted ? 'highlighted' : ''}`}>
      <div className="tariff-header">
        <div className="tariff-name" style={{ backgroundColor: nameBackground, color: nameTextColor }}>
          {name}
        </div>
        <div className="tariff-price" style={{ backgroundColor: priceBackground }}>
          {price} руб/мес
        </div>
      </div>
      <div className="tariff-speed" style={{ backgroundColor: speedBackground }}>
        До {speed} Мбит/с
      </div>
      <div className="tariff-data" style={{ backgroundColor: dataBackground }}>
        Объем включенного трафика {dataLimit}
      </div>
    </div>
  );
};

TariffCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
  dataLimit: PropTypes.string.isRequired,
  isHighlighted: PropTypes.bool,
  colorScheme: PropTypes.shape({
    nameBackground: PropTypes.string,
    nameTextColor: PropTypes.string,  
    priceBackground: PropTypes.string,
    speedBackground: PropTypes.string,
    dataBackground: PropTypes.string
  })
};

TariffCard.defaultProps = {
  isHighlighted: false,
  colorScheme: null 
};

export default TariffCard;