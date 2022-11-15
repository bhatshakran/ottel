import { gql } from '@apollo/client';
import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { graphQLClient } from '~/lib/apollo';
import { getUserId } from '~/utils/session.server';

export const loader: LoaderFunction = async ({ request }) => {
  const id = await getUserId(request);
  console.log(id);
  const query = gql`
    query getUserAccount($input: getUserInput) {
      getUser(input: $input) {
        id
        name
        avatar
        income
        walletId
        bookings {
          bookingId
          userId
          hotelId
        }
      }
    }
  `;

  const variables = {
    input: {
      id,
    },
  };

  const { data } = await graphQLClient.query({ query, variables });

  return json({ user: data.getUser });
};

const Account = () => {
  const { user } = useLoaderData();
  console.log(user);

  return <div>account here</div>;
};

export default Account;
