import { gql } from '@apollo/client';
import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import { graphQLClient } from '~/lib/apollo';
import { getUserId } from '~/utils/session.server';
import spanishguy from '../../../public/imgs/svgs/spanishguy.svg';
import blackgirl from '../../../public/imgs/svgs/blackgirl.svg';
import blackspecs from '../../../public/imgs/svgs/blackspecs.svg';
import child from '../../../public/imgs/svgs/child.svg';
import brownkid from '../../../public/imgs/svgs/brownkid.svg';

const imgsArr = [blackgirl, blackspecs, child, brownkid, spanishguy];

export const loader: LoaderFunction = async ({ request }) => {
  const id = await getUserId(request);
  let query = gql`
    query getUserAccount($input: getUserInput) {
      getUser(input: $input) {
        id
        name
        avatar
        income
        walletId
        contact
        bookings {
          bookingId
          userId
          hotelId
          hotel {
            id
            title
            description
            price
          }
          user {
            name
            contact
          }
        }
      }
    }
  `;

  let variables = {
    input: {
      id,
    },
  };

  const { data } = await graphQLClient.query({ query, variables });
  const otherquery = gql`
    query getAllBooking($id: Int) {
      getBookings(id: $id) {
        hotelId
        userId
        hotel {
          id
          title
          description
          price
          address
        }
      }
    }
  `;
  const othervariables = {
    id: id,
  };
  const { data: otherData } = await graphQLClient.query({
    query: otherquery,
    variables: othervariables,
  });

  return json({ user: data.getUser, allBookings: otherData.getBookings });
};

const Account = () => {
  const { user, allBookings } = useLoaderData();
  console.log(allBookings);
  return (
    <main className='bg-backgroundColor h-screen flex justify-center items-center'>
      <div className='border flex flex-col items-start border-lightorange p-4 gap-3 rounded-md w-auto'>
        <div className='w-full flex items-center gap-8'>
          <div className='relative '>
            <img
              src={user.avatar}
              alt='user_avatar'
              className='w-16 h-16 rounded-full'
            />
          </div>
          <div className='flex flex-col gap-y-3'>
            <h3 className='w-full font-silka'>Available avatars:</h3>
            <div className='flex gap-2'>
              {imgsArr.map((img: string, idx) => {
                return (
                  <img
                    src={img}
                    key={idx}
                    className='w-10 h-10 rounded full cursor-pointer'
                    alt='available_avatar '
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div>
          <div className=''>
            <h2 className='font-regis text-2xl text-secondary'>{user.name}</h2>
          </div>

          <div>
            <h2 className='font-silka opacity-60 font-bold'>
              {user.contact ? user.contact : 'bhatshakran@gmail.com'}
            </h2>
          </div>

          <div>
            <h3 className='font-silka font-bold mt-4 text-secondary'>
              Your bookings:
            </h3>
            <div className='flex flex-col gap-3 mt-3'>
              {allBookings &&
                allBookings.map((item: any, idx: number) => {
                  return (
                    <div
                      key={idx}
                      className='bg-lightorange text-black  p-3 rounded-md font-silka'
                    >
                      <h2>Title: {item.hotel.title}</h2>
                      <h2>Address: {item.hotel.address}</h2>
                      <h2>Price: ${item.hotel.price}/night</h2>
                      <Link
                        className='text-white font-bold'
                        to={`/hotels/${item.hotelId}`}
                      >
                        View Hotel
                      </Link>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Account;
