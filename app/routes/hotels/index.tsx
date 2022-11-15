import type { ActionFunction, LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { gql } from '@apollo/client';
import {
  Form,
  useActionData,
  useLoaderData,
  useTransition,
} from '@remix-run/react';
import { graphQLClient } from '~/lib/apollo';
import HotelCard from '~/components/HotelCard';
import React from 'react';
import Container from '~/components/Container';
import Header from '~/components/Header';
import Menu from '~/components/menu';
import SearchSvg from '~/components/searchsvg';

export interface Hotel {
  id: number;
  title: string;
  image: string;
  host: string;
  address: string;
  country: string;
  admin: string;
  city: string;
  bookings?: any[];
  price: number;
  numOfGuest: number;
}

const topCities = ['Toronto', 'Dubai', 'Los Angeles', 'London', 'Cancún'];

const query = gql`
  query getHotels {
    hotels(limit: 10) {
      id
      title
      image
      host
      address
      country
      admin
      city
      bookings
      price
      numOfGuest
    }
  }
`;

export const loader: LoaderFunction = async ({ request, params }) => {
  const { data } = await graphQLClient.query({ query });
  return json({ hotels: data.hotels });
};

export const action: ActionFunction = async ({ request }) => {
  const body = await request.formData();
  const city = body.get('city');
  const query = gql`
    query getHotelsBySearch($city: String!) {
      searchHotels(city: $city) {
        id
        title
        image
        host
        address
        country
        admin
        city
        bookings
        price
        numOfGuest
      }
    }
  `;

  const variables = { city: city };
  const { data } = await graphQLClient.query({ query, variables });
  return json({ hotels: data.searchHotels });
};

export default function Hotels() {
  const transition = useTransition();
  const { hotels } = useLoaderData();
  const actionData = useActionData();
  const [cityVal, setCityVal] = React.useState('');

  const fillSearchInput = (e: React.MouseEvent<HTMLButtonElement>) => {
    const formInput = document.getElementById('cityInput');
    const { target } = e;
    if (target) {
      const buttonName = (target as HTMLButtonElement).innerHTML;
      if (actionData?.hotels[0].city !== buttonName || !actionData) {
        (formInput as HTMLInputElement).value = buttonName;
        const inputForm = document.querySelector('form');
        if (inputForm) inputForm.submit();
      }
    }
  };

  const [isMenuActive, setIsMenuActive] = React.useState(false);

  const showMenu = () => {
    setIsMenuActive(!isMenuActive);
  };
  React.useEffect(() => {
    if (isMenuActive) {
      if (window)
        window.onscroll = function () {
          window.scrollTo(0, 0);
        };
    }
  }, [isMenuActive]);
  return (
    <main className='bg-backgroundColor max-h-screen px-8 md:px-0 overflow-y-hidden'>
      <Container>
        <Header showMenu={showMenu} />
        {isMenuActive && <Menu showMenu={showMenu} />}
        <div className='flex flex-wrap '>
          <div className='leftpane w-full md:w-1/2  h-screen px-4 flex flex-wrap  justify-center'>
            <div className='w-full h-1/3 flex justify-center'>
              <SearchSvg />
            </div>
            <div className=' h-96 p-6 rounded-lg w-2/3 shadow-sm'>
              <Form method='post' className='flex gap-2'>
                <input
                  type='text'
                  name='city'
                  id='cityInput'
                  placeholder='Enter a city'
                  className='bg-transparent border border-lightorange w-full rounded-md px-4 font-silka py-2 focus:outline-none'
                  value={cityVal}
                  onChange={(e) => setCityVal(e.target.value)}
                />
                <button
                  type='submit'
                  className='bg-secondary text-white px-2 font-silka rounded-md hover:bg-backgroundColor hover:text-secondary hover:border hover:border-secondary disabled:bg-secondary disabled:cursor-not-allowed disabled:text-current disabled:border-none disabled:opacity-50'
                  disabled={transition.state === 'submitting'}
                >
                  {' '}
                  Search
                </button>
              </Form>

              <div className='mt-8'>
                <h4 className='font-silka text-md font-bold opacity-60'>
                  Top cities:{' '}
                </h4>
                <div className='flex flex-wrap gap-1 mt-6'>
                  {topCities.map((city: any, idx: number) => {
                    return (
                      <button
                        onClick={(e) => fillSearchInput(e)}
                        key={idx}
                        className=' p-2 px-3 rounded-full text-sm w-auto font-silka text-secondary border border-lightorange cursor-pointer hover:bg-secondary hover:text-white  hover:border-secondary transition duration-100 ease-in-out'
                      >
                        {city}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className=' rightpane w-full md:w-1/2 pt-16 overflow-scroll pb-16'>
            <div>
              <div className='font-regis text-5xl'>
                {actionData ? (
                  <h2>
                    {' '}
                    <span className='italic text-secondary'>Search </span>{' '}
                    results{' '}
                  </h2>
                ) : (
                  <h2>
                    <span className='italic text-secondary'> Trending</span>{' '}
                    suites and apartments
                  </h2>
                )}
              </div>
            </div>
            <div className='flex flex-wrap justify-center gap-4 mt-12'>
              {actionData
                ? actionData.hotels.map((hotel: Hotel) => {
                    return <HotelCard key={hotel.id} data={hotel} />;
                  })
                : hotels.map((hotel: Hotel) => {
                    return <HotelCard key={hotel.id} data={hotel} />;
                  })}
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
