import { gql } from '@apollo/client';
import { graphQLClient } from '~/lib/apollo';
import { json } from '@remix-run/node';
import type { LoaderFunction } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import Arrow from '~/components/Arrow';
import Container from '~/components/Container';
import PlaceIcon from '@mui/icons-material/Place';
import Header from '~/components/Header';
import { getUser } from '~/utils/session.server';

export const loader: LoaderFunction = async ({ request, params }) => {
  const url = new URL(request.url);
  const splittedUrl = url.pathname.split('/');
  const hotelId = Number(splittedUrl[splittedUrl.length - 1]);
  const query = gql`
    query getPageHotel($id: Int) {
      getHotel(id: $id) {
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
  const variables = { id: hotelId };

  const { data } = await graphQLClient.query({ query, variables });
  const user = await getUser(request);

  return json({ hotel: data.getHotel, user });
};

const Hotel = () => {
  const { hotel, user } = useLoaderData();
  console.log(user);

  return (
    <main className=' bg-backgroundColor min-h-screen overflow-hidden flex justify-center  px-8 md:py-0'>
      <Container>
        <Header />
        <div className='flex flex-col justify-start items-center h-full my-24 '>
          <div className=' flex flex-wrap justify-between  items-start w-full h-1/2 gap-10'>
            <div className='w-full md:w-1/2  '>
              <img
                src={hotel.image}
                alt=''
                className='hotel-img w-full h-full rounded-md cursor-pointer'
              />
            </div>
            <div className='w-full md:w-1/3  flex flex-col gap-16 font-silka'>
              <div className='flex flex-col gap-4 '>
                <h2 className=' text-3xl  w-full text-black font-regis '>
                  {hotel.title}
                </h2>
                <h3 className=' text-blue-700'>
                  {' '}
                  <PlaceIcon /> {hotel.address}
                </h3>

                <h3 className='font-bold bg-black text-white p-2 rounded-md'>
                  Price: ${hotel.price}
                </h3>
                <h3 className='font-bold'>Guests: {hotel.numOfGuest}</h3>
                <h3 className='font-bold'>
                  City & Country: {hotel.city}, {hotel.country}
                </h3>
              </div>
              {user ? (
                <div className='w-full  ml-auto  flex flex-col gap-8  overflow-hidden'>
                  <div className='font-silka flex flex-col gap-6 w-full'>
                    <div className='flex flex-col'>
                      <label htmlFor='checkin' className=' font-bold'>
                        Check in date:
                      </label>
                      <input
                        type='datetime-local'
                        name='checkinpicker'
                        id='checkinpicker'
                        className='focus:outline-none cursor-pointer px-2 py-1 rounded-full border border-lightorange'
                      />
                    </div>
                    <div className='flex flex-col'>
                      <label htmlFor='checkout' className=' font-bold'>
                        Check out date:
                      </label>
                      <input
                        type='datetime-local'
                        name='checkoutpicker'
                        id='checkoutpicker'
                        className='focus:outline-none cursor-pointer px-2 py-1 rounded-full border border-lightorange'
                      />
                    </div>
                  </div>
                  <button className='  flex items-center justify-center gap-2 p-2 rounded-full font-silka bg-lightorange text-white'>
                    Request to book
                    <Arrow />
                  </button>
                </div>
              ) : (
                <div className='flex flex-col gap-3'>
                  <h3 className='text-red-500 font-bold'>
                    In order to book, you need to login/register
                  </h3>
                  <Link
                    to='/auth/login'
                    className='text-center bg-secondary text-white p-2 rounded-md font-silka hover:bg-transparent hover:border hover:border-secondary hover:text-black'
                  >
                    Login
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Hotel;
