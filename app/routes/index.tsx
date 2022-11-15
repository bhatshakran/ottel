import { gql } from '@apollo/client';
import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import Banner from '~/components/Banner';
import Features from '~/components/Features';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import Ingredients from '~/components/Ingredients';
import Reviews from '~/components/Reviews';
import Showcase from '~/components/Showcase';
import { graphQLClient } from '~/lib/apollo';
import { getUser } from '~/utils/session.server';

const query = gql`
  query getHotels {
    hotels(limit: 3) {
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

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request);
  const { data } = await graphQLClient.query({ query });
  return json({ hotels: data.hotels, id: user?.id });
};

export default function Index() {
  const data = useLoaderData();
  let id, hotels;
  if (data !== null) {
    id = data.id;
    hotels = data.hotels;
  }

  return (
    <main className='bg-backgroundColor relative'>
      {/* {isMenuActive && <Menu showMenu={showMenu} />} */}
      <Header id={id ? id : null} />
      <Banner />
      <Showcase data={hotels && hotels} />
      <Features />
      <Ingredients />
      <Reviews />
      <Footer />
    </main>
  );
}
