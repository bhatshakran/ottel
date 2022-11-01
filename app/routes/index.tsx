import Banner from '~/components/Banner';
import Header from '~/components/Header';
import Showcase from '~/components/Showcase';

export default function Index() {
  return (
    <main className='bg-backgroundColor'>
      <Header />
      <Banner />
      <Showcase />
    </main>
  );
}
