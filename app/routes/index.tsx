import Banner from '~/components/Banner';
import Features from '~/components/Features';
import Header from '~/components/Header';
import Ingredients from '~/components/Ingredients';
import Showcase from '~/components/Showcase';

export default function Index() {
  return (
    <main className='bg-backgroundColor'>
      <Header />
      <Banner />
      <Showcase />
      <Features />
      <Ingredients />
    </main>
  );
}
