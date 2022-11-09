import { gql } from '@apollo/client';
import { graphQLClient } from '~/lib/apollo';
import { json } from '@remix-run/node';
import type { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

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

  return <div>hello here man</div>;
};

export default Hotel;
