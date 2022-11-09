import { gql } from '@apollo/client';
import { graphQLClient } from '~/lib/apollo';
import { json } from '@remix-run/node';
import type { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import Arrow from '~/components/Arrow';
import Container from '~/components/Container';
import ImageIcon from '@mui/icons-material/Image';
import PlaceIcon from '@mui/icons-material/Place';
import { getCurrentBreakpoint } from '~/lib/utils/getCurrentBreakpoint';
import React from 'react';
import Header from '~/components/Header';

export const loader: LoaderFunction = async ({ request, params }) => {
  const url = new URL(request.url);
  const splittedUrl = url.pathname.split('/');
  const hotelId = Number(splittedUrl[splittedUrl.length - 1]);
  const query = gql`
    query getPageHotel($id: Int) {
      getHotel(id: $id) {
        id
        title
        image
        host
        address
        country
        admin
        city
        bookings
        price
        numOfGuest
      }
    }
  `;
  const variables = { id: hotelId };

  const { data } = await graphQLClient.query({ query, variables });
  return json({ hotel: data.getHotel });
};

const Hotel = () => {
  const { hotel } = useLoaderData();

  const addOrRemoveImgEvtListener = React.useCallback(() => {
    const breakpointValue = getCurrentBreakpoint();
    console.log(breakpointValue);
    const img = document.querySelector('.hotel-img');
    if (breakpointValue === 'sm' || breakpointValue === undefined) {
      img?.removeEventListener('mouseenter', zoomImg);
      img?.removeEventListener('mouseleave', unzoomImg);
    } else {
      img?.addEventListener('mouseenter', zoomImg);
      img?.addEventListener('mouseleave', unzoomImg);
    }
  }, []);

  React.useEffect(() => {
    addOrRemoveImgEvtListener();
    window.addEventListener('resize', addOrRemoveImgEvtListener);
    return () =>
      window.removeEventListener('resize', addOrRemoveImgEvtListener);
  }, [addOrRemoveImgEvtListener]);

  const zoomImg = () => {
    const img = document.querySelector('.hotel-img');
    if (img) {
      const image = img as HTMLImageElement;
      image.style.opacity = '1';
      image.style.scale = '3';
      image.style.transition = 'all 0.25s ease-in';
    }
  };

  const unzoomImg = () => {
    const img = document.querySelector('.hotel-img');
    if (img) {
      const image = img as HTMLImageElement;
      image.style.opacity = '0.8';
      image.style.scale = '1';
    }
  };

  return (
    <main className=' bg-backgroundColor min-h-screen overflow-hidden flex justify-center  px-8  md:px-0 md:py-0'>
      <Container>
        <Header />
        <div className='flex flex-col justify-start md:justify-center  items-center h-full my-24 md:my-0 '>
          <div className='font-silka  items-center gap-2 hidden md:flex '>
            <h6 className='text-xs '>Hover on the image to zoom </h6>
            <ImageIcon />
          </div>
          <div className=' flex flex-wrap justify-evenly  items-center w-full h-1/2 gap-10'>
            <div className='w-full md:w-1/4 lg:w-1/4 flex flex-col gap-4 md:gap-2 font-silka'>
              <h2 className=' text-3xl  w-full text-black font-regis '>
                {hotel.title}
              </h2>
              <h3 className=' text-blue-700'>
                {' '}
                <PlaceIcon /> {hotel.address}
              </h3>

              <h3 className='font-bold bg-black text-white p-2 rounded-md'>
                Price: ${hotel.price}
              </h3>
              <h3 className='font-bold'>Guests: {hotel.numOfGuest}</h3>
              <h3 className='font-bold'>
                City & Country: {hotel.city}, {hotel.country}
              </h3>
            </div>

            <div className='w-full md:w-1/4 lg:w-1/4 '>
              <img
                src={hotel.image}
                alt=''
                className='hotel-img w-full h-full rounded-md cursor-pointer opacity-100 md:opacity-80'
              />
            </div>
            <div className='w-full md:w-1/4 lg:w-1/4 flex flex-col gap-8  overflow-hidden'>
              <div className='font-silka flex flex-col gap-6 w-full'>
                <div className='flex flex-col'>
                  <label htmlFor='checkin' className=' font-bold'>
                    Check in date:
                  </label>
                  <input
                    type='datetime-local'
                    name='checkinpicker'
                    id='checkinpicker'
                    className='focus:outline-none cursor-pointer px-2 py-1 rounded-full border border-lightorange'
                  />
                </div>
                <div className='flex flex-col'>
                  <label htmlFor='checkout' className=' font-bold'>
                    Check out date:
                  </label>
                  <input
                    type='datetime-local'
                    name='checkoutpicker'
                    id='checkoutpicker'
                    className='focus:outline-none cursor-pointer px-2 py-1 rounded-full border border-lightorange'
                  />
                </div>
              </div>
              <button className='  flex items-center justify-center gap-2 p-2 rounded-full font-silka bg-lightorange text-white'>
                Request to book
                <Arrow />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Hotel;
