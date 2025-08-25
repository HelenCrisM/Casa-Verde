import React from 'react';
import OfferCard from '../OfferCard';

const Ofertas: React.FC = () => {
  return (
    <div className="grid place-items-center">
      <p className="text-[22px] opacity-50">Conheça nossas</p>
      <h1 className="font-['Elsie_Swash_Caps'] text-[82px] font-black my-4">
        ofertas
      </h1>
      <div className="grid grid-cols-3 gap-8 mb-16">
        <OfferCard
          title="Ajuga reptans"
          price="R$ 20,00"
          img="/imgs/produto-01.png"
        />
        <OfferCard
          title="Cordyline fruticosa"
          price="R$ 20,00"
          img="/imgs/produto-02.png"
        />
        <OfferCard
          title="Crassula ovata"
          price="R$ 20,00"
          img="/imgs/produto-03.png"
        />
        <OfferCard
          title="Cyperus rotundus"
          price="R$ 20,00"
          img="/imgs/produto-04.png"
        />
        <OfferCard
          title="Delairea odorata"
          price="R$ 20,00"
          img="/imgs/produto-05.png"
        />
        <OfferCard
          title="Datura metel"
          price="R$ 20,00"
          img="/imgs/produto-06.png"
        />
      </div>
    </div>
  );
};

export default Ofertas;
