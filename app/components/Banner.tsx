import React from 'react';
import Arrow from './Arrow';
import Container from './Container';

const Banner: React.FC = () => {
  return (
    <>
      <Container>
        <div className=' banner flex flex-col md:flex-row items-end md:inline relative'>
          <div className=' w-full md:w-auto md:absolute md:top-6 text-center md:mt-12 left-2 flex flex-col gap-8'>
            <h2 className='bannertxt text-5xl md:text-5xl font-regis md:text-left'>
              Watch the stars. <br /> Soak up the sun.
              <br /> Experience peace at Ottelo.
            </h2>
            <button className=' font-silka text-md flex items-center gap-6 justify-start ml-4'>
              Book a room
              <Arrow />
            </button>
          </div>
          <div className='flex h-auto sm:h-2/3 md:h-auto justify-end'>
            <img src='/imgs/banner.jpeg' alt='hotel' width={'800'} />
          </div>

          <div className=' w-2/5 absolute bottom-0 border-r  border-t border-b border-black border-opacity-40 flex  rounded-tr-sm rounded-br-sm'>
            <p className='font-silka w-2/3  m-8  text-lg  z-10'>
              Escape the routine and enjoy the height of luxury at
              <span className='font-bold'> Toronto's #1 </span>
              luxury resort.
            </p>
            <div className='blurred absolute right-0 top-0 w-3/5 h-full z-0'></div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Banner;
