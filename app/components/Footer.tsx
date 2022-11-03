import React from 'react';
import Container from './Container';

const Footer: React.FC = () => {
  return (
    <div>
      <Container>
        <div className=' flex flex-wrap w-full'>
          <div className='w-full md:w-1/2 bg-lightorange p-8'>
            <h3 className='font-regis text-3xl'>Ottelo</h3>
            <p className='font-silka w-96 mt-6'>
              Reconnect with yourself.Experience the romance of a holiday with
              the comfort of a home.
            </p>
          </div>
          <div className='w-full md:w-1/2 bg-black text-white p-8'>
            <p className='font-silka'>
              Planos - 291 00 Tsilivi Beach, <br /> Toronto, Canada + (123)
              1800-557-8990
            </p>
            <h2 className='font-regis text-5xl mt-8 underline underline-offset-8'>
              Get in touch
            </h2>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
