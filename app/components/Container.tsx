import React from 'react';

type Children = {
  children: React.ReactNode;
};

const Container: React.FC<Children> = ({ children }: Children) => {
  return (
    <div className='flex justify-center'>
      <div className='w-full max-w-6xl '>{children}</div>
    </div>
  );
};

export default Container;
