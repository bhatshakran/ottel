import React from 'react';
import { Link } from 'react-router-dom';
import Arrow from './Arrow';
import Container from './Container';

const Banner: React.FC = () => {
  return (
    <>
      <Container>
        <div className=' banner flex flex-col  md:flex-row items-end md:inline relative px-8 md:px-0 min-h-screen h-auto'>
          <div className=' w-full mt-16  md:w-auto md:absolute md:top-6 text-center md:mt-12 left-2 flex flex-col gap-8 h-2/5'>
            <h2 className='bannertxt text-5xl md:text-5xl font-regis md:text-left'>
              Watch the stars. <br /> Soak up the sun.
              <br /> Experience peace at Ottelo.
            </h2>
            <button className=' font-silka text-md flex items-center gap-6  justify-center md:justify-start ml-4'>
              <Link to='/hotels'>Look for rooms</Link>
              <Arrow />
            </button>
          </div>
          <div className='flex h-2/5 mt-24 md:mt-0  md:h-auto justify-end'>
            <img src='/imgs/banner.jpeg' alt='hotel' width={'800'} />
          </div>

          <div className=' w-full mt-12 h-1/5 border border-lightorange  rounded-lg md:rounded-none md:h-auto  md:w-2/5 md:absolute md:bottom-0 md:border-r  md:border-t md:border-b md:border-black md:border-opacity-40 flex  rounded-tr-sm rounded-br-sm  '>
            <p className='font-silka w-full md:w-2/3  m-8  text-lg z-10 '>
              Escape the routine and enjoy the height of luxury at
              <span className='font-bold'> Toronto's #1 </span>
              luxury resort.
            </p>
            <div className='hidden md:block  blurred absolute  right-0 top-0  md:w-3/5 h-full z-0'></div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Banner;
