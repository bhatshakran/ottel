import React from 'react';
import type { CardData } from './Showcase';

interface CardProps {
  data: CardData;
}

const RoomCard: React.FC<CardProps> = ({ data }: CardProps) => {
  return (
    <div className='flex flex-col'>
      <div className='w-80 h-72 pl-4 border border-black pt-4'>
        <img
          src={data.img}
          alt=''
          width={'100%'}
          height={'100%'}
          className=' object-cover w-full h-full'
        />
      </div>
      <div className='w-80  flex items-end justify-between bg-lightorange py-8 px-3 font-silka'>
        <div>
          <h2 className='font-regis text-lg leading-tight'>{data.name}</h2>
          <p>{data.rooms}</p>
        </div>
        <div className='text-right'>
          <h2 className=' font-bold'>$ {data.cost}/night</h2>
          <button>Check availability</button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
