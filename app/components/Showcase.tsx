import React from 'react';
import Container from './Container';
import RoomCard from './RoomCard';

export interface CardData {
  id: number;
  image: string;
  name: string;
  price: number;
  numOfGuest: string;
  city: string;
  host: string;
  country: string;
  admin: string;
  title: string;
  bookings: any[] | null;
}

interface ShowcaseProps {
  data: CardData[];
}

const Showcase: React.FC<ShowcaseProps> = ({ data }: ShowcaseProps) => {
  console.log(data);
  return (
    <>
      <Container>
        <div className='mt-24 flex  flex-col gap-16 px-8 md:px-0'>
          <div className='flex flex-wrap text-center md:text-left justify-between items-center'>
            <h2 className='font-regis text-4xl w-full md:w-2/5 leading-snug'>
              Cottages that blend <br />
              <span className='text-secondary italic'>
                comfort and elegance
              </span>{' '}
            </h2>
            <p className='mt-8 md:mt-0 w-full md:w-3/5 font-silka text-center md:text-left text-lg'>
              Tucked between sunny coconut groves and pristine white sand
              beaches, each of Ottelo's homely cottages gives you a breathtaking
              view to wake up to.
            </p>
          </div>
          <div className='flex flex-wrap gap-6 w-full justify-center '>
            {data.map((item: CardData) => {
              return <RoomCard hotel={item} key={item.id} />;
            })}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Showcase;
