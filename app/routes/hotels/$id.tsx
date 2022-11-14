import { gql } from '@apollo/client';
import { graphQLClient } from '~/lib/apollo';
import type { ActionFunction } from '@remix-run/node';
import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Link, useActionData, useLoaderData } from '@remix-run/react';
import Arrow from '~/components/Arrow';
import Container from '~/components/Container';
import PlaceIcon from '@mui/icons-material/Place';
import Header from '~/components/Header';
import { getUser } from '~/utils/session.server';
import { runValidation } from '~/utils/services/dateValidator';

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
        bookings {
          bookingId
          bookerId
          hotel {
            id
            title
          }
          user {
            id
            name
          }
        }
      }
    }
  `;
  const variables = { id: hotelId };

  const { data } = await graphQLClient.query({ query, variables });
  const user = await getUser(request);

  return json({ hotel: data.getHotel, user });
};

export const action: ActionFunction = async ({ request }) => {
  const body = await request.formData();
  let checkInDate = body.get('checkinpicker');
  const checkOutDate = body.get('checkoutpicker');
  const userId = body.get('userid');
  if (checkInDate && checkOutDate) {
    const validated = runValidation(
      checkInDate.toString(),
      checkOutDate.toString()
    );
    if (validated) {
      // create a booking for the user

      const mutation = gql`
        mutation createBooking($input: BookingInput) {
          createBooking(input: $input) {
            bookingId
            bookerId
            user {
              name
              id
              avatar
              income
              walletId
              bookings {
                bookingId
                userId
                hotelId
              }
            }
            hotel {
              id
              title
              description
              address
              country
              admin
              city
              bookings {
                bookingId
                userId
                hotelId
              }
            }
            hotelId
          }
        }
      `;
      const url = new URL(request.url);
      const splittedUrl = url.pathname.split('/');
      const hotelId = Number(splittedUrl[splittedUrl.length - 1]);
      const variables = {
        input: {
          hotelId: Number(hotelId),
          userId: Number(userId),
        },
      };

      const { data } = await graphQLClient.mutate({ mutation, variables });

      return json({ booking: data.createBooking });
    }
    return 'Not validated';
  }
};

const Hotel = () => {
  const { hotel, user } = useLoaderData();
  const actionData = useActionData();
  console.log(actionData && actionData);

  return (
    <main className=' bg-backgroundColor min-h-screen overflow-hidden flex justify-center  px-8 md:py-0'>
      <Container>
        <Header />
        <div className='flex flex-col justify-start items-center h-full my-24 '>
          <div className=' flex flex-wrap justify-between  items-start w-full h-1/2 gap-10'>
            <div className='w-full md:w-1/2  '>
              <img
                src={hotel.image}
                alt=''
                className='hotel-img w-full h-full rounded-md cursor-pointer'
              />
            </div>
            <div className='w-full md:w-1/3  flex flex-col gap-16 font-silka'>
              <div className='flex flex-col gap-4 '>
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
              {user ? (
                <form
                  method='post'
                  className='w-full  ml-auto  flex flex-col gap-8  overflow-hidden'
                >
                  <div className='font-silka flex flex-col gap-6 w-full'>
                    <div className='flex flex-col'>
                      <input type='hidden' name='userid' value={user.id} />
                      <label htmlFor='checkin' className=' font-bold'>
                        Check in date:
                      </label>
                      <input
                        type='date'
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
                        type='date'
                        name='checkoutpicker'
                        id='checkoutpicker'
                        className='focus:outline-none cursor-pointer px-2 py-1 rounded-full border border-lightorange'
                      />
                    </div>
                  </div>
                  <button
                    className='  flex items-center justify-center gap-2 p-2 rounded-full font-silka bg-lightorange text-white'
                    type='submit'
                  >
                    Request to book
                    <Arrow />
                  </button>
                </form>
              ) : (
                <div className='flex flex-col gap-3'>
                  <h3 className='text-red-500 font-bold'>
                    In order to book, you need to login/register
                  </h3>
                  <Link
                    to='/auth/login'
                    className='text-center bg-secondary text-white p-2 rounded-md font-silka hover:bg-transparent hover:border hover:border-secondary hover:text-black'
                  >
                    Login
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Hotel;
