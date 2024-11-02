import Image from "next/image";
import Link from "next/link";
import type { Hotel } from "../types/hotelTypes";

interface Props {
	hotel: Hotel;
}

const RoomCard = ({ hotel }: Props) => {
	return (
		<div className="flex flex-col">
			<div className="w-96 h-80 pl-4 border border-black pt-4">
				<Image
					src={hotel.image}
					alt="hotel_room_img"
					width={"1000"}
					height={"1000"}
					className="object-cover w-full h-full"
				/>
			</div>
			<div className="w-96 min-h-32 bg-lightorange py-4 px-3 font-silka space-y-1 flex flex-col justify-start items-start">
				<div className="flex items-start justify-between gap-3 w-full">
					<div className="">
						<h2 className="font-regis text-md leading-tight">{hotel.title}</h2>
						<p className="text-sm">{hotel.city}</p>
					</div>
					<div className="text-right w-1/3">
						<h2 className="font-bold">${hotel.price}/night</h2>
					</div>
				</div>
				<button type="button" className="text-white  hover:text-secondary">
					<Link href={`/hotels/${hotel.id}`} className="w-full text-sm">
						Show details
					</Link>
				</button>
			</div>
		</div>
	);
};

export default RoomCard;
