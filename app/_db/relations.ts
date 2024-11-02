import { relations } from "drizzle-orm/relations";
import { user, booking, hotel } from "./schema";

export const bookingRelations = relations(booking, ({one}) => ({
	user: one(user, {
		fields: [booking.userId],
		references: [user.id]
	}),
	hotel: one(hotel, {
		fields: [booking.hotelId],
		references: [hotel.id]
	}),
}));

export const userRelations = relations(user, ({many}) => ({
	bookings: many(booking),
}));

export const hotelRelations = relations(hotel, ({many}) => ({
	bookings: many(booking),
}));