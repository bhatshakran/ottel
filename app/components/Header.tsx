import React from 'react';
import Container from './Container';

const Header: React.FC = () => {
  return (
    <>
      <Container>
        <div className='flex justify-between px-4 xl:px-0 py-2 border-b border-black font-regis'>
          <div className='text-lg'>Ottel</div>
          <div className='text-lg'>menu</div>
        </div>
      </Container>
    </>
  );
};

export default Header;
