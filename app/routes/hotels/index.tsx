import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { gql } from '@apollo/client';
import { useLoaderData } from '@remix-run/react';
import { graphQLClient } from '~/lib/apollo';
import HotelCard from '~/components/HotelCard';
// import Container from '~/components/Container';

export interface Hotel {
  _id: string;
  title: string;
  image: string;
  host: string;
  address: string;
  country: string;
  admin: string;
  city: string;
  bookings: any[];
  bookingIndex: {};
  price: string;
  numOfGuests: number;
}

const topCities = ['Toronto', 'Dubai', 'Los Angeles', 'London', 'Cancún'];

const query = gql`
  query getHotels {
    hotels(limit: 10) {
      _id
      title
      image
      host
      address
      country
      admin
      city
      bookings
      bookingIndex
      price
      numOfGuests
    }
  }
`;

export const loader: LoaderFunction = async ({ request, params }) => {
  const { data } = await graphQLClient.query({ query });
  return json({ hotels: data.hotels });
};

export default function Hotels() {
  const { hotels } = useLoaderData();
  return (
    <main className='bg-backgroundColor max-h-screen px-8 md:px-0 overflow-y-hidden'>
      {/* <Container> */}
      <div className='flex flex-wrap '>
        <div className='leftpane w-full md:w-1/2  h-screen px-4 flex flex-wrap  justify-center'>
          {/*  <h2 className='font-regis text-6xl'>
              Search for <span className='text-secondary italic'> hotels</span>
            </h2> */}
          <div className='w-full h-1/3 flex justify-center'>
            <img src='/imgs/svgs/search.svg' alt='' />
          </div>
          <div className='bg-white h-96 p-6 rounded-lg w-2/3 shadow-sm'>
            <form action='' className='flex gap-2'>
              <input
                type='text'
                name=''
                id=''
                placeholder='Enter a city'
                className='bg-transparent border border-lightorange w-full rounded-md px-4 font-silka py-2 focus:outline-none'
              />
              <button
                type='submit'
                className='bg-secondary text-white px-2 font-silka rounded-md hover:bg-backgroundColor hover:text-secondary hover:border hover:border-secondary'
              >
                {' '}
                Search
              </button>
            </form>

            <div className='mt-8'>
              <h4 className='font-silka text-md '>Top cities: </h4>
              <div className='flex flex-wrap gap-2 mt-6'>
                {topCities.map((city: any, idx: number) => {
                  return (
                    <div
                      key='idx'
                      className='bg-lightorange  p-2 px-3 rounded-full text-sm font-silka text-backgroundColor cursor-pointer hover:bg-white hover:text-secondary hover:border hover:border-secondary transition duration-100 ease-in-out'
                    >
                      {city}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className=' rightpane w-full md:w-1/2 pt-16 overflow-scroll pb-16'>
          <div>
            <h2 className='font-regis text-5xl'>
              <span className='italic text-secondary'> Trending</span> suites
              and apartments
            </h2>
          </div>
          <div className='flex flex-wrap gap-4 mt-12'>
            {hotels.map((hotel: Hotel) => {
              return <HotelCard key={hotel._id} data={hotel} />;
            })}
          </div>
        </div>
      </div>
      {/* </Container> */}
    </main>
  );
}
