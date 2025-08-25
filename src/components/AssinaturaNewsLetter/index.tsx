import * as React from 'react';
import EmailInput from '../EmailInput';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ColoredBall from '../ColoredBall';

const AssinaturaNewsLetter: React.FC = () => {
  return (
    <>
      <div className="columns-2">
        <div className="grid relative justify-items-start mt-24 mx-48">
          <p className="text-[12px] opacity-50">Sua casa com as </p>
          <h1 className="font-['Elsie_Swash_Caps'] text-[82px] font-black my-4">
            melhores plantas
          </h1>
          <p className="text-[16px] opacity-50">
            Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
            torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu
            e-mail e assine nossa newsletter para saber das novidades da marca.
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

      <div className="flex items-center justify-center">
        <Card sx={{ display: 'flex', width: 995, height: 400 }}>
          <CardMedia
            component="img"
            sx={{ width: 500, height: 420 }}
            image="/imgs/image.png"
            alt="Planta"
          />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <div className="grid relative justify-items-start my-6 mx-8">
                <p className="text-[22px] opacity-50">Como conseguir</p>
                <h3 className="font-['Elsie_Swash_Caps'] text-[42px] font-black mb-4">
                  minha planta
                </h3>
                <div className='flex gap-4 justify-center items-center mb-4'>
                  <ColoredBall />
                  <p className="text-[22px] opacity-50">Escolha suas plantas</p>
                </div>

                <div className='flex gap-4 justify-center items-center mb-4'>
                  <ColoredBall />
                  <p className="text-[22px] opacity-50">Faça seu pedido</p>
                </div>

                <div className='flex gap-4 justify-center items-center mb-4'>
                  <ColoredBall />
                  <p className="text-[22px] opacity-50">Aguarde na sua casa</p>
                </div>
              </div>
            </CardContent>
          </Box>
        </Card>
      </div>

      <div className="m-10"></div>
    </>
  );
};

export default AssinaturaNewsLetter;
