import PaypalCheckout from "../_components/paypal";

export default function Checkout() {
	const { price, hotelId, userId } = { price: 2, hotelId: 37, userId: 16 };
	return (
		<div className="flex gap-y-6 min-h-screen w-full bg-backgroundColor">
			<div className="w-1/2  bg-[url('/banner.jpeg')] bg-cover bg-right min-h-screen" />

			<div className="w-1/2 font-silka h-full px-12 py-8 space-y-8">
					<h1 className="text-3xl font-silka font-semibold">Checkout</h1>
					<div className="space-y-3">
						<h6 className="text-lg font-semibold">Order summary</h6>
						<p className="flex justify-between">
							Subtotal <span>${price}</span>
						</p>
						<p className="flex justify-between">
							Shipping <span>$5.99</span>
						</p>
						<p className="flex justify-between border-b pb-4">
							Discount <span className="text-green-500">-$5.00</span>
						</p>
						<p className="font-semibold flex justify-between">
							Total <span>${price + 5.99 - 5.0}</span>
						</p>
						<PaypalCheckout price={price} />
					</div>
			</div>
			<form action="" method="post">
				<input type="hidden" name="hotelId" value={hotelId} />
				<input type="hidden" name="userId" value={userId} />
			</form>
		</div>
	);
}
