import React from 'react';
import Container from './Container';
import RoomCard from './RoomCard';

const cardsData = [
  {
    id: 0,
    img: 'https://res.cloudinary.com/tiny-house/image/upload/v1560641331/mock/Dubai/dubai-listing-8_fg5dtb.jpg',
    name: 'King Suite',
    cost: 220,
    rooms: '4 bedrooms',
  },
  {
    id: 1,
    img: 'https://res.cloudinary.com/tiny-house/image/upload/v1560646289/mock/Cancun/cancun-listing-2_bsocu5.jpg',
    name: 'Premium Suite',
    cost: 320,
    rooms: '2 bedrooms',
  },
  {
    id: 2,
    img: 'https://res.cloudinary.com/tiny-house/image/upload/v1560645375/mock/Los%20Angeles/los-angeles-listing-2_ygm2ai.jpg',
    name: 'Master Suite',
    cost: 520,
    rooms: '3 bedrooms',
  },
];

export interface CardData {
  id: number;
  img: string;
  name: string;
  cost: number;
  rooms: string;
}

const Showcase: React.FC = () => {
  return (
    <>
      <Container>
        <div className='mt-24 flex flex-col gap-16'>
          <div className='flex justify-between items-center'>
            <h2 className='font-regis text-4xl w-2/5 leading-snug'>
              Cottages that blend <br />
              <span className='text-secondary italic'>
                comfort and elegance
              </span>{' '}
            </h2>
            <p className='w-3/5 font-silka text-left text-lg'>
              Tucked between sunny coconut groves and pristine white sand
              beaches, each of Ottelo's homely cottages gives you a breathtaking
              view to wake up to.
            </p>
          </div>
          <div className='flex flex-wrap gap-6 w-full justify-center'>
            {cardsData.map((item: CardData) => {
              return <RoomCard data={item} key={item.id} />;
            })}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Showcase;
