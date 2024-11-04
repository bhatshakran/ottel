CREATE TABLE IF NOT EXISTS "Booking" (
	"bookingId" serial PRIMARY KEY NOT NULL,
	"hotelId" integer NOT NULL,
	"userId" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Hotel" (
	"id" serial NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"image" text NOT NULL,
	"host" text NOT NULL,
	"address" text NOT NULL,
	"country" text NOT NULL,
	"admin" text NOT NULL,
	"city" text NOT NULL,
	"price" integer NOT NULL,
	"numOfGuest" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "_prisma_migrations" (
	"id" varchar(36) PRIMARY KEY NOT NULL,
	"checksum" varchar(64) NOT NULL,
	"finished_at" timestamp with time zone,
	"migration_name" varchar(255) NOT NULL,
	"logs" text,
	"rolled_back_at" timestamp with time zone,
	"started_at" timestamp with time zone DEFAULT now() NOT NULL,
	"applied_steps_count" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "User" (
	"id" serial PRIMARY KEY NOT NULL,
	"passwordHash" text NOT NULL,
	"name" text NOT NULL,
	"avatar" text NOT NULL,
	"contact" text NOT NULL,
	"walletId" text NOT NULL,
	"income" integer NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Booking" ADD CONSTRAINT "Booking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Booking" ADD CONSTRAINT "Booking_hotelId_fkey" FOREIGN KEY ("hotelId") REFERENCES "public"."Hotel"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "Booking_bookingId_key" ON "Booking" USING btree ("bookingId");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "User_name_key" ON "User" USING btree ("name");