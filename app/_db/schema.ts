import { pgTable, varchar, timestamp, text, integer, uniqueIndex, serial, foreignKey } from "drizzle-orm/pg-core"


export const prismaMigrations = pgTable("_prisma_migrations", {
	id: varchar({ length: 36 }).primaryKey().notNull(),
	checksum: varchar({ length: 64 }).notNull(),
	finishedAt: timestamp("finished_at", { withTimezone: true, mode: 'string' }),
	migrationName: varchar("migration_name", { length: 255 }).notNull(),
	logs: text(),
	rolledBackAt: timestamp("rolled_back_at", { withTimezone: true, mode: 'string' }),
	startedAt: timestamp("started_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	appliedStepsCount: integer("applied_steps_count").default(0).notNull(),
});

export const user = pgTable("User", {
	id: serial().notNull(),
	passwordHash: text().notNull(),
	name: text().notNull(),
	avatar: text().notNull(),
	contact: text().notNull(),
	walletId: text().notNull(),
	income: integer().notNull(),
}, (table) => {
	return {
		nameKey: uniqueIndex("User_name_key").using("btree", table.name.asc().nullsLast()),
	}
});

export const booking = pgTable("Booking", {
	bookingId: serial().notNull(),
	hotelId: integer().notNull(),
	userId: integer().notNull(),
}, (table) => {
	return {
		bookingIdKey: uniqueIndex("Booking_bookingId_key").using("btree", table.bookingId.asc().nullsLast()),
		bookingUserIdFkey: foreignKey({
			columns: [table.userId],
			foreignColumns: [user.id],
			name: "Booking_userId_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
		bookingHotelIdFkey: foreignKey({
			columns: [table.hotelId],
			foreignColumns: [hotel.id],
			name: "Booking_hotelId_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	}
});

export const hotel = pgTable("Hotel", {
	id: serial().notNull(),
	title: text().notNull(),
	description: text().notNull(),
	image: text().notNull(),
	host: text().notNull(),
	address: text().notNull(),
	country: text().notNull(),
	admin: text().notNull(),
	city: text().notNull(),
	price: integer().notNull(),
	numOfGuest: integer().notNull(),
});
