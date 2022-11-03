import React from 'react';
import Container from './Container';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Reviews: React.FC = () => {
  return (
    <>
      <Container>
        <div className='w-full px-4 md:px-0 mt-16 pb-16'>
          <h2 className='text-center font-regis text-4xl border-t border-gray-500 mt-16 py-16'>
            What customers are saying
          </h2>
          <div className='flex flex-wrap justify-between items-center relative customers w-full'>
            <div className='w-1/2 h-full'>
              <div className='border border-secondary pl-2 pt-2 w-24'>
                <img
                  src='https://res.cloudinary.com/tiny-house/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1560648533/mock/users/user-profile-1_mawp12.jpg'
                  alt=''
                  className='w-full'
                />
              </div>
              <div className='border border-secondary pl-2 pt-2 absolute left-32 top-16'>
                <img
                  src='https://res.cloudinary.com/tiny-house/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1560649052/mock/users/user-profile-2_arwtdy.jpg'
                  alt=''
                  className='w-32'
                />
              </div>
              <div className='border border-secondary pl-2 pt-2 absolute left-80 top-32'>
                <img
                  src='https://res.cloudinary.com/tiny-house/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1560649280/mock/users/user-profile-3_omxctk.jpg'
                  alt=''
                  className='w-48'
                />
              </div>
            </div>
            <div className='w-1/2 flex items-center'>
              <div className='w-96'>
                <p className='font-silka '>
                  It is littered with antiques, art works, a bright red grand
                  piano for the bar, asymmetrical carpets-- if I'm honest, this
                  hotel itself needs to be on itineraries. The views are insane,
                  and uif you want to react peak relaxation, the spa is the
                  place to be.
                </p>
                <h4 className='mt-6 text-lg text-bold font-silka'>
                  Alax Sandro
                </h4>
              </div>
              <div className='sliderbtns ml-6'>
                <div className='bg-gray-400 w-9 cursor-pointer'>
                  <ArrowBackIcon fontSize='large' />
                </div>
                <div className='bg-secondary w-9 mt-3 cursor-pointer'>
                  <ArrowForwardIcon fontSize='large' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Reviews;
