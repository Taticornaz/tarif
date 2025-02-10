import React, { useState } from 'react';
import TariffCard from './components/TariffCard';  
import styles from './App.module.scss'; 

const App = () => {
  const [selectedTariff, setSelectedTariff] = useState(null);

  const tariffs = [
    {
      name: "Безлимитный 300",
      price: 300,
      speed: 100,
      dataLimit: "Объем включенного трафика не ограничен",
      colorScheme: {
        nameBackground: '#003366',
        nameTextColor: '#fff',
        priceBackground: '#4c78a8',
        speedBackground: '#ecf0f1',
        dataBackground: '#bdc3c7',
      },
    },
    {
      name: "Безлимитный 450",
      price: 450,
      speed: 200,
      dataLimit: "Объем включенного трафика не ограничен",
      colorScheme: {
        nameBackground: '#2c3e50',
        nameTextColor: '#fff',
        priceBackground: '#5d6d7e',
        speedBackground: '#ecf0f1',
        dataBackground: '#bdc3c7',
      },
    },
    {
      name: "Безлимитный 550",
      price: 550,
      speed: 300,
      dataLimit: "Объем включенного трафика не ограничен",
      colorScheme: {
        nameBackground: '#C3554D',
        nameTextColor: '#fff',
        priceBackground: '#F46A5F',
        speedBackground: '#ecf0f1',
        dataBackground: '#bdc3c7',
      },
      isHighlighted: true,
    },
    {
      name: "Безлимитный 1000",
      price: 1000,
      speed: 500,
      dataLimit: "Объем включенного трафика не ограничен",
      colorScheme: {
        nameBackground: '#16a085',
        nameTextColor: '#fff',
        priceBackground: '#7f8c8d',
        speedBackground: '#ecf0f1',
        dataBackground: '#bdc3c7',
      },
    },
  ];

  const handleCardClick = (index) => {
    setSelectedTariff(index === selectedTariff ? null : index);
  };

  return (
    <div className={styles.tariffContainer}>
      {tariffs.map((tariff, index) => (
        <TariffCard 
          key={index}
          name={tariff.name}
          price={tariff.price}
          speed={tariff.speed}
          dataLimit={tariff.dataLimit}
          colorScheme={tariff.colorScheme}
          isHighlighted={selectedTariff === index}
          onClick={() => handleCardClick(index)} 
        />
      ))}
    </div>
  );
};

export default App;
