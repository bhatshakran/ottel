import React from 'react';
import Banner from '~/components/Banner';
import Features from '~/components/Features';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import Ingredients from '~/components/Ingredients';
import Menu from '~/components/menu';
import Reviews from '~/components/Reviews';
import Showcase from '~/components/Showcase';

export default function Index() {
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
    <main className='bg-backgroundColor relative'>
      {isMenuActive && <Menu showMenu={showMenu} />}
      <Header showMenu={showMenu} />
      <Banner />
      <Showcase />
      <Features />
      <Ingredients />
      <Reviews />
      <Footer />
    </main>
  );
}
