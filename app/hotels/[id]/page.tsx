import BookingForm from "@/app/_components/bookingForm";
import { getHotel } from "@/app/_actions/hotelActions";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hotel = async ({ params }: { params: { id: string } }) => {
	const { id } = await params;
	const data = { user: { id: 0 } };
	const hotel = await getHotel(Number(id));
	//
	return (
		<main className="bg-backgroundColor min-h-screen overflow-hidden flex justify-center w-full px-8 md:py-0">
			<div className="flex flex-col justify-start items-center h-full my-24 ">
				<div className=" flex flex-wrap justify-between  items-start w-full h-1/2 gap-10">
					<div className="w-full md:w-1/2  ">
						<Image
							src={hotel?.image}
							alt="hotel_thumbnail_img"
							className="hotel-img w-full h-full rounded-md cursor-pointer"
							width={1000}
							height={1000}
						/>
					</div>
					<div className="w-full md:w-1/3  flex flex-col gap-6 font-silka">
						<div className="flex flex-col gap-4 ">
							<h2 className=" text-3xl  w-full text-black font-regis ">
								{hotel?.title}
							</h2>
							<h3 className=" text-blue-700">
								{" "}
								<MapPin /> {hotel?.address}
							</h3>

							<h3 className="font-bold bg-black text-white p-2 rounded-md">
								Price: ${hotel?.price}
							</h3>
							<h3 className="font-bold">Guests: {hotel?.numOfGuest}</h3>
							<h3 className="font-bold">
								City & Country: {hotel?.city}, {hotel?.country}
							</h3>
						</div>
						{data.user ? (
							<BookingForm
								userId={0}
								hotelId={Number(id)}
								price={hotel.price}
							/>
						) : (
							<div className="flex flex-col gap-3">
								<h3 className="text-red-500 font-bold">
									In order to book, you need to login/register
								</h3>
								<Link
									href="/auth/login"
									className="text-center bg-secondary text-white p-2 rounded-md font-silka hover:bg-transparent hover:border hover:border-secondary hover:text-black"
								>
									Login
								</Link>
							</div>
						)}
					</div>
				</div>
			</div>
		</main>
	);
};

export default Hotel;
