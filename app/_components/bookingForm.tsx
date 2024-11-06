"use client";
import React, { useActionState } from "react";
import Arrow from "./arrow";
import { createBooking } from "../_actions/hotelActions";
import { CircleX, Loader } from "lucide-react";

const BookingForm = ({
	userId,
	hotelId,
	price,
}: { userId: number; hotelId: number; price: number }) => {
	const initialState = {
		message: "",
	};

	const [formState, formAction, isPending] = useActionState(
		createBooking,
		initialState,
	);

	return (
		<>
			{formState.message && (
				<div className="rounded-md w-full text-red-500 font-silka text-lg py-4 px-2 flex gap-x-3">
					<CircleX className="size-6"/>
					{formState?.message}
				</div>
			)}

			<form
				action={formAction}
				className="w-full ml-auto flex flex-col gap-8 overflow-hidden"
			>
				<div className="font-silka flex flex-col gap-6 w-full">
					<div className="flex flex-col">
						<input type="hidden" name="userId" value={userId} />
						<input type="hidden" name="hotelId" value={hotelId} />
						<input type="hidden" name="price" value={price} />
						<label htmlFor="checkin" className="font-bold">
							Check in date:
						</label>
						<input
							type="date"
							name="checkInDate"
							id="checkInDate"
							className="focus:outline-none cursor-pointer px-2 py-1 rounded-full border border-lightorange"
						/>
					</div>
					<div className="flex flex-col">
						<label htmlFor="checkout" className="font-bold">
							Check out date:
						</label>
						<input
							type="date"
							name="checkOutDate"
							id="checkOutDate"
							className="focus:outline-none cursor-pointer px-2 py-1 rounded-full border border-lightorange"
						/>
					</div>
				</div>
				<button
					disabled={isPending}
					className="flex items-center justify-center gap-2 p-2 rounded-full font-silka disabled:opacity-30 bg-lightorange text-white"
					type="submit"
				>
					{isPending && <Loader className="animate-spin" />}
					Request to book
					<Arrow />
				</button>
			</form>
		</>
	);
};

export default BookingForm;
