
import React from 'react';
import styles from './TariffCard.module.scss';

const TariffCard = ({
  name,
  price,
  speed,
  dataLimit,
  colorScheme,
  isHighlighted,
  onClick,  
}) => {
  return (
    <div 
      className={`${styles.tariffCard} ${isHighlighted ? styles.highlighted : ''}`} 
      style={{
        '--name-background': colorScheme.nameBackground,
        '--price-background': colorScheme.priceBackground,
        '--speed-background': colorScheme.speedBackground,
        '--data-background': colorScheme.dataBackground,
      }} 
      onClick={onClick}  
    >
      <div className={styles.tariffName}>{name}</div>
      <div className={styles.tariffPrice}>{price} руб.</div>
      <div className={styles.tariffSpeed}>{speed} Мбит/с</div>
      <div className={styles.tariffData}> {dataLimit}</div>
    </div>
  );
};

export default TariffCard;
