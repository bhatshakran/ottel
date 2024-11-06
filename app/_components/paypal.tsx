"use client";
import React from "react";
import { useEffect, useState } from "react";
import {
	PayPalScriptProvider,
	PayPalButtons,
	usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import type { PayPalScriptOptions } from "@paypal/paypal-js/types/script-options";
import type { PayPalButtonsComponentOptions } from "@paypal/paypal-js/types/components/buttons";

const paypalScriptOptions: PayPalScriptOptions = {
	clientId: process.env.PAYPAL_CLIENT_ID as string,
};

interface Props {
	price: number;
	setTransactionCompleted: any;
}

function Button({ price, setTransactionCompleted }: Props) {
	// const [tranState, setTranState] = React.useState(false)

	const tranComplete = () => {
		setTransactionCompleted(true);
	};

	const [{ isPending }] = usePayPalScriptReducer();
	const paypalbuttonTransactionProps: PayPalButtonsComponentOptions = {
		style: { layout: "vertical" },
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
			{isPending ? <h2>Loading Smart Payment Button...</h2> : null}
			<PayPalButtons {...paypalbuttonTransactionProps} />
		</>
	);
}
const PaypalCheckout = ({ price }: { price: number }) => {
	const [transactionCompleted, setTransactionCompleted] = useState(false);

	useEffect(() => {
		if (transactionCompleted === true) {
			console.log(transactionCompleted);
			(async () => {
				const form = document.querySelector("form");
				form?.submit();
			})();
		}
	}, [transactionCompleted]);

	return (
		<PayPalScriptProvider options={paypalScriptOptions}>
			<Button
				setTransactionCompleted={setTransactionCompleted}
				price={Number(price)}
			/>
			{transactionCompleted && "completed transaction"}
		</PayPalScriptProvider>
	);
};

export default PaypalCheckout;
