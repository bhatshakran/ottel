import React from 'react';
import Container from './Container';
import HandshakeIcon from '@mui/icons-material/Handshake';
import GppGoodIcon from '@mui/icons-material/GppGood';
import SpaIcon from '@mui/icons-material/Spa';

const Features: React.FC = () => {
  return (
    <>
      <Container>
        <div className='border-t border-gray-600 mt-24 py-32 flex flex-col gap-24'>
          <div>
            <h2 className='text-6xl font-regis'>
              Inspired by local{' '}
              <span className='italic text-secondary'>
                traditions & rich history,{' '}
              </span>{' '}
              we've crafted a experience you're likely to never forget.
            </h2>
          </div>
          <div className='flex flex-wrap gap-6 justify-center'>
            <div className=' featurecard w-72 p-0.5'>
              <div className=' bg-backgroundColor flex flex-col gap-6  px-4 py-8'>
                <div className='text-secondary '>
                  <HandshakeIcon fontSize='large' className=' scale-125' />
                </div>
                <h4 className='font-regis text-xl'>
                  Dive into history at the Venetian Castle
                </h4>
                <p className='font-silka'>
                  Rub shoulders with the past at the ancient ruins and
                  experience the island from a stunning viewpoint.
                </p>
              </div>
            </div>
            <div className=' featurecard w-72 p-0.5'>
              <div className=' bg-backgroundColor flex flex-col gap-6  px-4 py-8'>
                <div className='text-secondary '>
                  <GppGoodIcon fontSize='large' className=' scale-125' />
                </div>
                <h4 className='font-regis text-xl'>
                  Tick water sports off your bucket list
                </h4>
                <p className='font-silka'>
                  Craving an adrenaline rush? Trye out snorkelling, parsailing,
                  jet skiing and more adventure activities.
                </p>
              </div>
            </div>
            <div className=' featurecard w-72 p-0.5'>
              <div className=' bg-backgroundColor flex flex-col gap-6  px-4 py-8'>
                <div className='text-secondary '>
                  <SpaIcon fontSize='large' className=' scale-125' />
                </div>
                <h4 className='font-regis text-xl'>
                  Relax at the boutique spa and club
                </h4>
                <p className='font-silka'>
                  Ease the knots in your body and release the tension at our
                  spa, and make full use of our fitness facilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Features;
