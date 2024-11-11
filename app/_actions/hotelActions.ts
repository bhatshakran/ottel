"use server";
import { z } from "zod";
import { and, desc, eq, ilike } from "drizzle-orm";
import { db } from "../_db";
import { booking, hotel, user } from "../_db/schema";
import { runValidation } from "../_utils/dateValidator";
import { redirect } from "next/navigation";
import { cache } from "react";

export const getHotels = cache(async (limit: number) => {
	const data = await db
		.select()
		.from(hotel)
		.limit(limit)
		.orderBy(desc(hotel.id));
	return data;
});

export const getHotel = cache(async (id: number) => {
	const data = await db.select().from(hotel).where(eq(hotel.id, id));
	return data[0];
});

export const doesBookingExist = cache(
	async (userId: string, hotelId: string) => {
		const bookingExists = await db
			.select()
			.from(booking)
			.where(
				and(
					eq(booking.hotelId, Number(hotelId)),
					eq(booking.userId, Number(userId)),
				),
			);
		if (bookingExists.length > 0) {
			return true;
		}
		return false;
	},
);

export const checkBooking = async (
	prevState: { message: string },
	formData: FormData,
) => {
	const schema = z.object({
		checkInDate: z.string(),
		checkOutDate: z.string(),
		userId: z.string(),
		hotelId: z.string(),
		price: z.string(),
	});
	//
	const parse = schema.safeParse({
		checkInDate: formData.get("checkInDate"),
		checkOutDate: formData.get("checkOutDate"),
		userId: formData.get("userId"),
		hotelId: formData.get("hotelId"),
		price: formData.get("price"),
	});

	if (!parse.success) {
		return { message: "Failed to create booking!" };
	}
	const data = parse.data;
	const validated = runValidation(
		data.checkInDate.toString(),
		data.checkOutDate.toString(),
	);
	if (!validated) {
		return { message: "Failed to validate the dates, please try again!" };
	}
	const bookingExists = await doesBookingExist(data.userId, data.hotelId);

	if (bookingExists) {
		return { message: "Booking already exists" };
	}
	redirect(
		`/checkout?price=${data.price}&userId=${data.userId}&hotelId=${data.hotelId}`,
	);
};

export const searchHotel = cache(async (city: string) => {
	try {
		const hotels = await db.select().from(hotel).where(ilike(hotel.city, city));
		return hotels;
	} catch (error) {
		console.log(error);
	}
});

export const createBooking = cache(
	async (prevState: { message: string }, formData: FormData) => {
		const schema = z.object({
			userId: z.string(),
			hotelId: z.string(),
		});
		const parse = schema.safeParse({
			userId: formData.get("userId"),
			hotelId: formData.get("hotelId"),
		});
		if (!parse.success) {
			return { message: "Failed to create booking!" };
		}
		const data = parse.data;
		try {
			if (data) {
				// Check if hotel exists
				const hotelExists = await db
					.select()
					.from(hotel)
					.where(eq(hotel.id, Number(data.hotelId)));
				// Check if user exists
				const userExists = await db
					.select()
					.from(user)
					.where(eq(user.id, Number(data.userId)));
				if (hotelExists.length > 0 && userExists.length > 0) {
					await db.insert(booking).values({
						hotelId: Number(data.hotelId),
						userId: Number(data.userId),
					});
					return { message: "Booking created", success: true };
				}
			}

			return { message: "Failed to create booking", success: false };
		} catch (error) {
			console.log(error);
			return { message: "Failed to create booking", success: false };
		}
	},
);
