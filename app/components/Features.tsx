import React from 'react';
import Container from './Container';
import HandshakeIcon from '@mui/icons-material/Handshake';
import GppGoodIcon from '@mui/icons-material/GppGood';
import SpaIcon from '@mui/icons-material/Spa';
import PoolIcon from '@mui/icons-material/Pool';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import WineBarIcon from '@mui/icons-material/WineBar';
import PhishingIcon from '@mui/icons-material/Phishing';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';

const Features: React.FC = () => {
  return (
    <>
      <Container>
        <div className='border-t border-gray-600 mt-24 py-32 flex flex-col gap-24 px-8 md:px-0'>
          <div>
            <h2 className='text-4xl text-center md:text-left md:text-6xl font-regis'>
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
      <div className='bg-black'>
        <Container>
          <div className=' w-full flex flex-wrap items-center justify-between p-8'>
            <div className='w-full md:w-1/2 p-8'>
              <div className='border  border-white border-opacity-60 pt-2 pl-2'>
                <img
                  src='https://res.cloudinary.com/tiny-house/image/upload/v1560641327/mock/Dubai/dubai-listing-2_qc2kos.jpg'
                  alt=''
                />
              </div>
            </div>
            <div className='w-full md:w-1/2 text-white py-8 px-2 sm:p-8'>
              <h3 className=' text-4xl md:text-5xl font-regis'>
                You'll never want to leave
              </h3>
              <p className=' mt-8 md:mt-16 font-silka text-lg'>
                The freedom to do exactly what you want" whether it is dipping
                into a tub of hot water with a book or exploring local culture.
                The perfect place to open your heart and let it decide!
              </p>
              <ul className='mt-16 text-2xl font-silka flex flex-wrap w-full gap-y-4 text-secondary items-center'>
                <li className='w-1/2 flex items-center '>
                  <SpaIcon fontSize='large' />
                  <p className='text-white'> Spa</p>
                </li>
                <li className='w-1/2 flex items-center'>
                  <PoolIcon fontSize='large' />
                  <p className='text-white'> Pool</p>
                </li>
                <li className='w-1/2 flex items-center'>
                  <RestaurantMenuIcon fontSize='large' />
                  <p className='text-white'> Dining</p>
                </li>
                <li className='w-1/2 flex items-center'>
                  <WineBarIcon fontSize='large' />
                  <p className='text-white'> 24/7 Bar</p>
                </li>
                <li className='w-1/2 flex items-center'>
                  <PhishingIcon fontSize='large' />
                  <p className='text-white'> Fishing</p>
                </li>
                <li className='w-1/2 flex items-center'>
                  <OutdoorGrillIcon fontSize='large' />
                  <p className='text-white'> Barbeque</p>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Features;
