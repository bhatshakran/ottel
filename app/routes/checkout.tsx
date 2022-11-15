import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from '@paypal/react-paypal-js';
import type { PayPalScriptOptions } from '@paypal/paypal-js/types/script-options';
import type { PayPalButtonsComponentOptions } from '@paypal/paypal-js/types/components/buttons';
import type { ActionFunction, LoaderFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { gql } from '@apollo/client';
import { graphQLClient } from '~/lib/apollo';
import React from 'react';

const paypalScriptOptions: PayPalScriptOptions = {
  'client-id':
    'AVoOeut-MlNH-iuUsHV7zRa6OvTY5_cGqUlyejMmQLGO6UNuAlTCOA9gonD2zt7tSu2EK73l9xs13AFq',
  // currency: 'USD',
};

interface Props {
  price: number;
  hotelId: number;
  userId: number;
  setTransactionCompleted: any;
}

function Button({ price, hotelId, userId, setTransactionCompleted }: Props) {
  // const [tranState, setTranState] = React.useState(false)

  const tranComplete = () => {
    setTransactionCompleted(true);
  };

  const [{ isPending }] = usePayPalScriptReducer();
  const paypalbuttonTransactionProps: PayPalButtonsComponentOptions = {
    style: { layout: 'vertical' },
    createOrder(data, actions) {
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              value: `${price / 100}`,
            },
          },
        ],
      });
    },
    async onApprove(data, actions) {
      /**
       * data: {
       *   orderID: string;
       *   payerID: string;
       *   paymentID: string | null;
       *   billingToken: string | null;
       *   facilitatorAccesstoken: string;
       * }
       */

      return actions.order?.capture().then(async (details) => {
        // setTranState(true)
        tranComplete();
      });
    },
  };
  return (
    <>
      {isPending ? <h2>Load Smart Payment Button...</h2> : null}
      <PayPalButtons {...paypalbuttonTransactionProps} />
    </>
  );
}

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const price = url.searchParams.get('price');
  const hotelId = url.searchParams.get('hotelId');
  const userId = url.searchParams.get('userId');
  return { price, hotelId, userId };
};

export const action: ActionFunction = async ({ request }) => {
  // create a booking for the user

  const body = await request.formData();
  const userId = body.get('userId');
  const hotelId = body.get('hotelId');
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

  const variables = {
    input: {
      userId: Number(userId),
      hotelId: Number(hotelId),
    },
  };
  const { data } = await graphQLClient.mutate({
    mutation,
    variables,
  });
  console.log(data);
  return redirect('/account');
};

export default function Checkout() {
  const [transactionCompleted, setTransactionCompleted] = React.useState(false);

  const { price, hotelId, userId } = useLoaderData();

  React.useEffect(() => {
    if (transactionCompleted === true) {
      console.log(transactionCompleted);
      (async function () {
        const form = document.querySelector('form');
        form?.submit();
      })();
    }
  }, [transactionCompleted]);

  return (
    <div className='mt-20 flex items-center flex-col w-full '>
      <h2>Your total is: {price}$</h2>
      <PayPalScriptProvider options={paypalScriptOptions}>
        <Button
          setTransactionCompleted={setTransactionCompleted}
          price={Number(price)}
          hotelId={Number(hotelId)}
          userId={Number(userId)}
        />
        {transactionCompleted && 'completed transaction'}
      </PayPalScriptProvider>

      <form action='' method='post'>
        <input type='hidden' name='hotelId' value={hotelId} />
        <input type='hidden' name='userId' value={userId} />
      </form>
    </div>
  );
}
