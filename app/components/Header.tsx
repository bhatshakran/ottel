import React from 'react';

const Header: React.FC = () => {
  return (
    <div className='flex justify-between px-8 py-2 border-b border-black font-freebasics'>
      <div className='text-sm'>Ottel</div>
      <div className='text-sm'>menu</div>
    </div>
  );
};

export default Header;
