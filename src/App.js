import React from 'react';
import TariffCard from './components/TariffCard';
import './App.css';

const App = () => {
  const colorSchemes = [
    { 
      nameBackground: '#003366',   
      nameTextColor: '#ffffff',    
      priceBackground: '#ADD8E6',  
      speedBackground: '#D3D3D3',  
      dataBackground: '#9A9A9C' 
    },   
    { 
      nameBackground: '#006400',   
      nameTextColor: '#ffffff', 
      priceBackground: '#008000',
      speedBackground: '#D3D3D3',  
      dataBackground: '#9A9A9C'    
    },
    { 
      nameBackground: '#8B0000',   
      nameTextColor: '#ffffff',    
      priceBackground: '#FF0000',  
      speedBackground: '#D3D3D3',  
      dataBackground: '#9A9A9C'    
    },
    { 
      nameBackground: '#000000',   
      nameTextColor: '#ffffff',    
      priceBackground: '#2F2F2F',  
      speedBackground: '#D3D3D3',  
      dataBackground: '#9A9A9C'    
    }
  ];

  return (
    <div className="tariff-container">
      <TariffCard 
        name="Безлимитный 300" 
        price={300} 
        speed={100} 
        dataLimit="не ограничен" 
        colorScheme={colorSchemes[0]} 
      />
      <TariffCard 
        name="Безлимитный 450" 
        price={500} 
        speed={200} 
        dataLimit="не ограничен" 
        colorScheme={colorSchemes[1]} 
      />
      <TariffCard 
        name="Безлимитный 550" 
        price={700} 
        speed={300} 
        dataLimit="не ограничен" 
        colorScheme={colorSchemes[2]} 
        isHighlighted={true}
      />
      <TariffCard 
        name="Безлимитный 1000" 
        price={1000} 
        speed={500} 
        dataLimit="не ограничен" 
        colorScheme={colorSchemes[3]} 
      />
    </div>
  );
};

export default App;
