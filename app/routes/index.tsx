import type { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import Banner from '~/components/Banner';
import Features from '~/components/Features';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import Ingredients from '~/components/Ingredients';
import Reviews from '~/components/Reviews';
import Showcase from '~/components/Showcase';
import { getUser } from '~/utils/session.server';

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request);
  if (user) return { id: user.id };
  else return null;
};

export default function Index() {
  const data = useLoaderData();
  let id;
  if (data !== null) {
    id = data.id;
  }
  console.log(id);
  return (
    <main className='bg-backgroundColor relative'>
      {/* {isMenuActive && <Menu showMenu={showMenu} />} */}
      <Header id={id ? id : null} />
      <Banner />
      <Showcase />
      <Features />
      <Ingredients />
      <Reviews />
      <Footer />
    </main>
  );
}
