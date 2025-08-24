import React from 'react';
import EmailInput from '../EmailInput';

const AssinaturaNewsLetter: React.FC = () => {
  return (
    <div className="columns-2">
      <div className="grid relative justify-items-start my-24 mx-48">
        <p className="text-[12px] opacity-50">Sua casa com as </p>
        <h1 className="font-['Elsie_Swash_Caps'] text-[82px] font-black my-4">
          melhores plantas
        </h1>
        <p className="text-[16px] opacity-50">
          Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
          torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail
          e assine nossa newsletter para saber das novidades da marca.
        </p>
        <EmailInput />
      </div>
      <div>
        <img
          alt="Arvore"
          src="/imgs/hero-image.png"
          className="relative h-160 w-auto"
        />
      </div>
    </div>
  );
};

export default AssinaturaNewsLetter;
