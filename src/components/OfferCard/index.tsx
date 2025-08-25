import React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

interface OfferCardProps {
  title: string;
  price: string;
  img: string;
}

const OfferCard: React.FC<OfferCardProps> = ({ title, price, img }) => {
  return (
    <Card sx={{ display: 'flex', width: 440, height: 240 }}>
      <CardMedia
        component="img"
        sx={{ width: 225, height: 240 }}
        image={img}
        alt="Planta"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <div className="grid relative justify-items-start my-4 mx-8">
            <h3 className="font-['Elsie_Swash_Caps'] text-[32px] font-black mb-2">
              {title}
            </h3>
            <p className="text-[16px] opacity-50 mb-2">{price}</p>

            <div className="flex gap-4 justify-center items-center mb-4">
              <p className="text-[16px] text-[#FFCB47] font-bold">Comprar</p>
              <img alt="Seta" src="/imgs/seta.svg" />
            </div>
          </div>
        </CardContent>
      </Box>
    </Card>
  );
};

export default OfferCard;
