import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from '@paypal/react-paypal-js';
import type { PayPalScriptOptions } from '@paypal/paypal-js/types/script-options';
import type { PayPalButtonsComponentOptions } from '@paypal/paypal-js/types/components/buttons';
import type { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

const paypalScriptOptions: PayPalScriptOptions = {
  'client-id':
    'AVoOeut-MlNH-iuUsHV7zRa6OvTY5_cGqUlyejMmQLGO6UNuAlTCOA9gonD2zt7tSu2EK73l9xs13AFq',
  // currency: 'USD',
};

interface Props {
  price: number;
}
function Button({ price }: Props) {
  const [{ isPending }] = usePayPalScriptReducer();
  const paypalbuttonTransactionProps: PayPalButtonsComponentOptions = {
    style: { layout: 'vertical' },
    createOrder(data, actions) {
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              value: `${price}`,
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

      return actions.order?.capture().then((details) => {
        alert(
          'Transaction completed by' +
            (details?.payer?.name?.given_name ?? 'No details')
        );

        alert('Data details: ' + JSON.stringify(data, null, 2));
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
  console.log(price);
  return price;
};

export default function Checkout() {
  const price = useLoaderData();
  console.log(price);
  return (
    <div className='mt-20 flex items-center flex-col w-full '>
      <h2>Your total is: {price}$</h2>
      <PayPalScriptProvider options={paypalScriptOptions}>
        <Button price={Number(price)} />
      </PayPalScriptProvider>
    </div>
  );
}
