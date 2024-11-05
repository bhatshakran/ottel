"use client";
import React from "react";
import type { Hotel } from "../_types/hotelTypes";
import Image from "next/image";
import { redirect } from "next/navigation";

const HotelCard = ({ data }: { data: Hotel }) => {
	return (
		<div className="rounded-md pb-4 cursor-pointer hover:scale-105 transition-transform ease-in-out duration-200 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 px-2">
			{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<div
				className="overflow-hidden"
				onClick={() => redirect(`hotels/${data.id}`)}
			>
				<Image
					src={data.image ? data.image : ""}
					alt="hotel_thumbnail"
					className="rounded-tr-2xl rounded-tl-2xl h-80"
					width={1000}
					height={1000}
				/>
				<div className="w-full bg-white font-silka flex flex-col gap-3 px-4 py-6 rounded-br-2xl rounded-bl-2xl min-h-40">
					<h3 className="font-bold  text-secondary">
						Price: ${data.price}/night
					</h3>
					<h3 className="text-sm">{data.title}</h3>
					<h4 className=" text-xs font-bold">
						{data.city}, {data.country}
					</h4>
				</div>
			</div>
		</div>
	);
};

export default HotelCard;
