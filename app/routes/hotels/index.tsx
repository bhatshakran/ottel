import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { gql } from '@apollo/client';
import { useLoaderData } from '@remix-run/react';
import { graphQLClient } from '~/lib/apollo';

const query = gql`
  query getHotels {
    hotels {
      _id
      title
      image
      host
    }
  }
`;

export const loader: LoaderFunction = async ({ request, params }) => {
  const { data } = await graphQLClient.query({ query });
  console.log(data);
  return json({ hotels: data.hotels });
};

export default function Hotels() {
  const { hotels } = useLoaderData();
  console.log(hotels);
  return <div>Hotels here</div>;
}
