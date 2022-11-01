import React from 'react';
import Arrow from './Arrow';
import Container from './Container';

const Ingredients: React.FC = () => {
  return (
    <>
      <Container>
        <div className='px-4 sm:px-0 mt-24 flex flex-wrap items-center py-8 gap-y-12'>
          <div className='w-full md:w-1/2'>
            <h2 className='text-4xl font-regis'>
              Fresh local ingredients, delicious global cuisine.
            </h2>
            <p className='mt-6 font-silka text-md'>
              Indulge yourself in lipsmacking gourment meals prepared by
              world-class chefs. Whether it's late breakfasts, buffets, show
              cooking or fine dining, we've got it all.
            </p>
            <button className='flex text-lg items-center gap-2 mt-8'>
              See the menu
              <Arrow />
            </button>
          </div>
          <div className='w-full md:w-1/2 flex justify-end relative'>
            <img
              className='absolute w-80'
              src='https://res.cloudinary.com/tiny-house/image/upload/v1560641352/mock/Toronto/toronto-listing-8_awkmrj.jpg'
              alt=''
            />
            <img
              className='absolute w-80 bottom-0 left-0'
              src='https://res.cloudinary.com/tiny-house/image/upload/v1560641352/mock/Toronto/toronto-listing-7_p3a5ms.jpg'
              alt=''
            />
            <div className='w-full h-96 py-2 px-4 border border-secondary'>
              <div className='py-2 h-full px-4 border border-secondary'>
                <div className='py-2 px-4 h-full border border-secondary'>
                  <div className='py-2 px-4 h-full border border-secondary'>
                    <div className='py-2 px-4 h-full border border-secondary'>
                      <div className='py-2 px-4 h-full border border-secondary'>
                        <div className='py-2 px-4 h-full border border-secondary'></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Ingredients;
