import Image from "next/image";
import React from "react";
import type { Hotel } from "../_types/hotelTypes";
import { MapPin } from "lucide-react";

interface Props {
	bookingHotel: Hotel;
	bookingId: number;
}

const BookingCard = (props: Props) => {
	return (
		<div className="flex gap-x-4 bg-backgroundColor shadow-sm px-6 py-2 rounded-md w-full">
				<Image
					src={props.bookingHotel.image}
					width={1000}
					height={1000}
					className="w-32 h-24 rounded-md"
					alt="booking_thumb"
				/>
			<div className="space-y-2 flex-grow">
				<div className="flex items-center justify-between w-full">
					<h5 className="text-xl text-secondary font-regis">
						{props.bookingHotel.title}
					</h5>
					<p className="text-xs">Booking id: #{props.bookingId}</p>
				</div>
				<div className="text-sm flex items-center justify-between">
					<p className="bg-black text-white px-3 py-1 w-fit rounded-md ">
						$ {props.bookingHotel.price}
					</p>
					<p>Guests:{props.bookingHotel.numOfGuest}</p>
				</div>
				<p className="flex text-sm">
					<MapPin className="mr-2 size-5" />
					{props.bookingHotel.address}
				</p>
			</div>
		</div>
	);
};

export default BookingCard;
