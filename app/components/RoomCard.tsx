import { Link } from '@remix-run/react';
import React from 'react';
import type { CardData } from './Showcase';

interface Props {
  hotel: CardData;
}

const RoomCard: React.FC<Props> = ({ hotel }: Props) => {
  return (
    <div className='flex flex-col'>
      <div className='w-80 h-72 pl-4 border border-black pt-4'>
        <img
          src={hotel.image}
          alt=''
          width={'100%'}
          height={'100%'}
          className=' object-cover w-full h-full'
        />
      </div>
      <div className='w-80  flex items-end justify-between bg-lightorange py-4 px-3 font-silka'>
        <div className='w-2/3'>
          <h2 className='font-regis text-lg leading-tight'>{hotel.title}</h2>
          <p>{hotel.city}</p>
        </div>
        <div className='text-right w-1/3'>
          <h2 className=' font-bold'>${hotel.price}/night</h2>
          <Link
            to={`/hotels/${hotel.id}`}
            className='w-full text-white text-sm hover:text-secondary'
          >
            Show details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
