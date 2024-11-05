"use client";
import React, { useRef, useState } from "react";
import { getHotels, searchHotel } from "../_actions/hotelActions";
import HotelCard from "../_components/hotelCard";
import useSWR from "swr";
import Skeleton from "../_components/skeleton";

const fetcher = async (searchTerm: string) => {
	if (searchTerm.length > 0) {
		return await searchHotel(searchTerm);
	}
	return await getHotels(100);
};
const Hotels = () => {
	const searchTermRef = useRef<string>("");
	const [searchTerm, setSearchTerm] = useState("");
	const { data: hotels, isLoading } = useSWR(["getHotels", searchTerm], () =>
		fetcher(searchTerm),
	);
	if (isLoading) return <Skeleton classes="size-24 fill-secondary" />;
	return (
		<main className="bg-backgroundColor w-full pb-12 px-4 md:px-12 lg:px-32">
			<div className="w-full">
				<div className="w-full flex flex-wrap items-center justify-between gap-3 py-24">
					<h1 className="text-6xl font-regis">
						<span className="text-secondary">Discover</span> Your Perfect
						Getaway
					</h1>
					<div className="w-full lg:w-auto">
						<div className="flex gap-2 w-full">
							<input
								type="text"
								name="city"
								id="cityInput"
								placeholder="Enter a city"
								onChange={(e) => {
									searchTermRef.current = e.target.value;
								}}
								className="bg-transparent border border-lightorange w-full rounded-md px-4 font-silka py-2 focus:outline-none"
							/>
							<button
								type="button"
								onClick={() => {
									if (searchTermRef.current) {
										setSearchTerm(searchTermRef.current);
									}
								}}
								className="bg-secondary text-white px-2 font-silka rounded-md hover:bg-backgroundColor hover:text-secondary hover:border hover:border-secondary disabled:bg-secondary disabled:cursor-not-allowed disabled:text-current disabled:border-none disabled:opacity-50"
							>
								{" "}
								Search
							</button>
						</div>
					</div>
				</div>
				<div className="w-full">
					<div>
						<div className="font-regis text-2xl">
							{hotels ? (
								<h2 className="text-secondary">Results</h2>
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
							hotels?.map((hotel) => {
								return <HotelCard key={hotel.id} data={hotel} />;
							})
						}
					</div>
				</div>
			</div>
		</main>
	);
};

export default Hotels;
