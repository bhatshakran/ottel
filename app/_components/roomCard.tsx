import Link from "next/link";

export interface CardData {
	id: number;
	image: string;
	name: string;
	price: number;
	numOfGuest: string;
	city: string;
	host: string;
	country: string;
	admin: string;
	title: string;
	bookings: any[] | null;
}

interface Props {
	hotel: CardData;
}

const RoomCard = ({ hotel }: Props) => {
	return (
		<div className="flex flex-col">
			<div className="w-80 h-72 pl-4 border border-black pt-4">
				<img
					src={hotel.image}
					alt=""
					width={"100%"}
					height={"100%"}
					className=" object-cover w-full h-full"
				/>
			</div>
			<div className="w-80  flex items-end justify-between bg-lightorange py-4 px-3 font-silka">
				<div className="w-2/3">
					<h2 className="font-regis text-lg leading-tight">{hotel.title}</h2>
					<p>{hotel.city}</p>
				</div>
				<div className="text-right w-1/3">
					<h2 className=" font-bold">${hotel.price}/night</h2>
					<Link
						href={`/hotels/${hotel.id}`}
						className="w-full text-white text-sm hover:text-secondary"
					>
						Show details
					</Link>
				</div>
			</div>
		</div>
	);
};

export default RoomCard;
