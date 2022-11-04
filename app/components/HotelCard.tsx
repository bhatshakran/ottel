import React from 'react';
import type { Hotel } from '~/routes/hotels';
import { useNavigate } from 'react-router-dom';

type HotelType = {
  data: Hotel;
};

const HotelCard: React.FC<HotelType> = ({ data }: HotelType) => {
  const navigate = useNavigate();
  const goToHotel = () => {
    navigate(`/hotels/${data.id}`);
  };
  return (
    <div
      className='bg-white rounded-md pb-4 cursor-pointer hover:opacity-60 hover:scale-105 transition-transform ease-in-out duration-200'
      onClick={goToHotel}
    >
      <div className='w-56'>
        <img src={data.image ? data.image : ''} alt='' />
      </div>
      <div className='w-56 mt-3  font-silka flex flex-col gap-3  px-4'>
        <h3 className='font-bold  text-secondary'>Price: ${data.price}</h3>
        <h3 className='text-sm'>{data.title}</h3>
        <h4 className=' text-xs font-bold'>
          {data.city}, {data.country}
        </h4>
      </div>
    </div>
  );
};

export default HotelCard;
