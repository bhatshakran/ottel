import Banner from '~/components/Banner';
import Features from '~/components/Features';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import Ingredients from '~/components/Ingredients';
import Reviews from '~/components/Reviews';
import Showcase from '~/components/Showcase';

export default function Index() {
  return (
    <main className='bg-backgroundColor'>
      <Header />
      <Banner />
      <Showcase />
      <Features />
      <Ingredients />
      <Reviews />
      <Footer />
    </main>
  );
}
