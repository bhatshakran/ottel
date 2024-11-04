import React from "react";
import { getHotels } from "../_actions/hotelActions";
import HotelCard from "../_components/hotelCard";

const Hotels = async () => {
	const hotels = await getHotels(100);
	return (
		<main className="bg-backgroundColor w-full pb-12 px-4 md:px-12 lg:px-32">
			<div className="w-full">
				<div className="w-full flex items-center justify-between gap-0 py-24">
					<h1 className="text-6xl font-regis">
						<span className="text-secondary">Discover</span> Your Perfect
						Getaway
					</h1>
					<div className="p-6">
						<form method="post" className="flex gap-2 w-full">
							<input
								type="text"
								name="city"
								id="cityInput"
								placeholder="Enter a city"
								className="bg-transparent border border-lightorange w-full rounded-md px-4 font-silka py-2 focus:outline-none"
							/>
							<button
								type="submit"
								className="bg-secondary text-white px-2 font-silka rounded-md hover:bg-backgroundColor hover:text-secondary hover:border hover:border-secondary disabled:bg-secondary disabled:cursor-not-allowed disabled:text-current disabled:border-none disabled:opacity-50"
							>
								{" "}
								Search
							</button>
						</form>
					</div>
				</div>
				<div className="w-full">
					<div>
						<div className="font-regis text-2xl">
							{hotels ? (
								<h2>
									{" "}
									<span className="italic text-secondary">Search </span> results{" "}
								</h2>
							) : (
								<h2>
									<span className="italic text-secondary"> Trending</span>{" "}
									suites and apartments
								</h2>
							)}
						</div>
					</div>
					<div className="flex flex-wrap justify-center mt-6">
						{
							hotels.map((hotel) => {
								return <HotelCard key={hotel.id} data={hotel} />;
							})
							// : hotels.map((hotel: Hotel) => {
							// 		return <HotelCard key={hotel.id} data={hotel} />;
							// 	})}
						}
					</div>
				</div>
			</div>
		</main>
	);
};

export default Hotels;
