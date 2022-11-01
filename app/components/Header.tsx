import React from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';

const Header: React.FC = () => {
  return (
    <>
      <Container>
        <div className='flex justify-between px-4 xl:px-0 py-2 border-b border-black font-regis'>
          <div className='text-lg'>
            <Link to='/'>Ottelo</Link>
          </div>
          <div className='text-lg cursor-pointer'>menu</div>
        </div>
      </Container>
    </>
  );
};

export default Header;
