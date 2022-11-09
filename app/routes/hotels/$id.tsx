import { gql } from '@apollo/client';
import { graphQLClient } from '~/lib/apollo';
import { json } from '@remix-run/node';
import type { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import Arrow from '~/components/Arrow';

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
  return json({ hotel: data.getHotel });
};

const Hotel = () => {
  const { hotel } = useLoaderData();
  console.log(hotel);

  return (
    <main className=' bg-backgroundColor h-screen overflow-hidden'>
      <div className='flex justify-center items-center w-full h-full gap-3 '>
        <div className='w-2/5 flex flex-col gap-2 font-silka'>
          <h2 className=' text-4xl  w-full text-secondary font-regis'>
            {hotel.title}
          </h2>
          <h3 className=' '>Address: {hotel.address}</h3>
          <h3>City:{hotel.city}</h3>
          <h3>Country: {hotel.country}</h3>
          <h3>No of Guests: {hotel.numOfGuest}</h3>
          <h3>Price: ${hotel.price}</h3>
          <h3>Admin: {hotel.admin}</h3>
        </div>
        <div className='w-full md:w-2/5 '>
          <img src={hotel.image} alt='' className='w-full h-full' />
        </div>
        <div>
          <button className=' text-secondary flex items-center p-2 rounded-full font-silka'>
            Request to book
            <Arrow />
          </button>
        </div>
      </div>
    </main>
  );
};

export default Hotel;
