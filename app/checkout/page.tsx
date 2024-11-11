"use client";
import { useActionState } from "react";
import { createBooking } from "../_actions/hotelActions";
import { Loader } from "lucide-react";

export default function Checkout() {
	const { price, hotelId, userId } = { price: 2, hotelId: 37, userId: 16 };
	const initialState = {
		message: "",
		success: false,
	};
	const [formState, formAction, isPending] = useActionState(
		createBooking,
		initialState,
	);

	console.log(formState, isPending);
	return (
		<div className="flex gap-y-6 min-h-screen w-full bg-backgroundColor">
			<div className="w-1/2  bg-[url('/banner.jpeg')] bg-cover bg-right min-h-screen" />

			<form
				action={formAction}
				className="w-1/2 font-silka h-full px-12 py-8 space-y-8"
			>
				<h1 className="text-3xl font-silka font-semibold">Checkout</h1>
				<div className="space-y-3 space-x-6">
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
					<div className="flex justify-between pt-3">
						<button
							type="submit"
							disabled={isPending}
							className="bg-secondary text-white px-4 py-2 rounded-md disabled:bg-opacity-20 flex gap-3"
						>
							{isPending && <Loader className="animate-spin" />}
							Confirm Booking
						</button>
						<button
							type="button"
							disabled={isPending}
							className="bg-black text-white px-4 py-2 rounded-md disabled:bg-opacity-20"
						>
							Cancel
						</button>
					</div>
				</div>
				<input type="text" name="userId" value={userId} hidden readOnly />
				<input type="text" name="hotelId" value={hotelId} hidden readOnly />
			</form>
		</div>
	);
}
