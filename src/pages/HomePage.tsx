import React from 'react';
import Menu from '../components/Menu';
import AssinaturaNewsLetter from '../components/AssinaturaNewsLetter';

const HomePage: React.FC = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute top-0 right-0">
          <img alt="Casa Verde" src='/imgs/body-shape.svg' className="h-140 w-auto" />
        </div>
      </div>

      <div>
        <Menu />
        <AssinaturaNewsLetter />
      </div>
    </>
  );
};

export default HomePage;
