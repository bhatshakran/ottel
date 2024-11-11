"use client";
import { CircleX, HandHelping, Loader } from "lucide-react";
import Image from "next/image";
import React, { useActionState, useRef, useState } from "react";
import {
	getUserDetails,
	getUserIdFromSession,
	logout,
	updateUserDetails,
} from "../_actions/authActions";
import Skeleton from "../_components/skeleton";
import useSWR from "swr";
import { getBookings } from "../_actions/hotelActions";
import BookingCard from "../_components/bookingCard";
//
const getUserDetailsAsync = async () => {
	const userId = await getUserIdFromSession();
	if (userId) {
		const user = await getUserDetails(userId);
		if (user) {
			return user;
		}
	}
	return null;
};
//
const getUserBookings = async () => {
	const userId = await getUserIdFromSession();
	if (userId) {
		const bookings = await getBookings(userId);
		if (bookings) {
			return bookings;
		}
	}
	return null;
};
//
const Account = () => {
	const {
		data: user,
		mutate,
		isLoading,
	} = useSWR("getUserDetails", getUserDetailsAsync);
	const { data: bookings } = useSWR("getUserBookings", getUserBookings);

	//
	const initialState = {
		message: "",
		type: "info",
	};
	const [formState, formAction, isPending] = useActionState(
		updateUserDetails,
		initialState,
	);
	const [activeTab, setActiveTab] = useState("account");
	const usernameRef = useRef<string>(user?.name || "");
	//
	if (isLoading) return <Skeleton classes="size-24 fill-secondary" />;
	if (!user) return <div>Failed to load</div>;
	return (
		<main className="w-full bg-[url('/banner.jpeg')] md:h-screen px-4 md:px-12 lg:px-32 flex gap-12 font-silka py-12">
			<div className="bg-white h-fit flex flex-wrap gap-x-24 max-w-6xl mx-auto overflow-hidden rounded-md">
				<div className="px-6 py-16 flex flex-col space-y-6">
					<button
						type="button"
						className={`w-full text-left hover:text-secondary ${activeTab === "account" ? "text-secondary" : "text-black"}`}
						onClick={() => setActiveTab("account")}
					>
						My account
					</button>
					<button
						type="button"
						className={`w-full text-left hover:text-secondary ${activeTab === "bookings" ? "text-secondary" : "text-black"}`}
						onClick={() => setActiveTab("bookings")}
					>
						My Bookings
					</button>
					<button
						type="button"
						className={`w-full text-left hover:text-secondary ${activeTab === "support" ? "text-secondary" : "text-black"}`}
						onClick={() => setActiveTab("support")}
					>
						Help and Support
					</button>
					<button
						type="button"
						className="w-full text-left hover:text-secondary"
						onClick={() => logout()}
					>
						Logout
					</button>
				</div>
				<div className="w-full md:w-[600px] border-l">
					{(() => {
						switch (activeTab) {
							case "bookings":
								return (
									<div className="flex flex-col justify-start items-start w-full gap-y-6 py-12 px-6">
										<h2 className="text-2xl font-semibold">My Bookings</h2>
										<div>
											{bookings && bookings.length > 0 ? (
												<div className="flex flex-wrap gap-4">
													{bookings.map((booking) => {
														return (
															<BookingCard
																bookingHotel={booking.Hotel}
																bookingId={booking.Booking.bookingId}
																key={booking.Booking.bookingId}
															/>
														);
													})}
												</div>
											) : (
												<>No bookings yet</>
											)}
										</div>
									</div>
								);
							case "support":
								return (
									<div className="flex flex-col justify-start items-start w-full gap-y-6 pb-12">
										<div className="w-full bg-lightorange flex justify-center p-4">
											<Image
												src={"/support.svg"}
												width={1000}
												height={1000}
												className="size-48"
												alt="help_img"
											/>
										</div>
										<div className="px-6 space-y-5 pb-8 shadow">
											<p>2 minutes</p>
											<h2 className="text-2xl font-semibold">
												What matters to you when booking a hotel?
											</h2>
											<h6>
												Answer five simple questions about your hotel
												preferences and help us customise your next hotel search
												experience.
											</h6>
											<button
												className="bg-secondary text-white px-3 py-2 rounded-md"
												type="button"
											>
												Get started
											</button>
										</div>
										<div className="space-y-4 px-6 mt-4 w-full">
											<div className="flex gap-x-3 text-lg items-center w-full">
												<HandHelping className="size-8" />
												<label htmlFor="help">What can we help you with?</label>
											</div>
											<select
												name="help"
												id="help"
												className="border rounded-md border-lightorange px-3 py-2 w-full"
											>
												<option value="topic" defaultChecked>
													Select topic
												</option>
												<option value="confirmation">
													I havent received my booking confirmation
												</option>
												<option value="payment">
													I have a question about a payment.
												</option>
												<option value="cancel">
													I want to cancel/modify my booking
												</option>
												<option value="error">
													I found an error while using ottelo
												</option>
											</select>
										</div>
									</div>
								);
							default:
								return (
									<div className="flex flex-col gap-y-4 px-12 py-6 md:py-16">
										<Image
											src={
												"https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"
											}
											width={1000}
											height={1000}
											alt="user_avatar"
											className="size-24 rounded-full"
										/>
										<h2 className="text-4xl font-semibold font-regis">
											My Account
										</h2>
										<form
											action={formAction}
											className="flex flex-col gap-6 max-w-80"
										>
											{formState.message.length > 0 && !isPending && (
												<p
													className={`flex gap-2 ${formState.type === "info" ? "text-green-500" : "text-red-500"}`}
												>
													{formState.type !== "info" && <CircleX />}
													{formState.message}
												</p>
											)}
											<div className="flex flex-col gap-y-2 max-w-80">
												<label htmlFor="username">Username</label>
												<input
													type="text"
													name="username"
													className="border px-3 py-2 rounded-md border-secondary"
													defaultValue={user.name}
													min={5}
													onChange={(e) => {
														usernameRef.current = e.target.value;
													}}
												/>
											</div>

											<div className="flex flex-col gap-y-2 max-w-80">
												<label htmlFor="password">Update password</label>
												<input
													type="password"
													name="password"
													className="border px-3 py-2 rounded-md border-secondary"
													placeholder="*******"
												/>
												<input
													hidden
													value={user.id}
													onChange={() => {}}
													name="userId"
												/>
											</div>
											<button
												type="submit"
												onClick={() => mutate()}
												disabled={isPending}
												className="bg-secondary px-3 py-2 rounded-md text-white w-fit disabled:bg-opacity-30 flex gap-3 justify-center"
											>
												{isPending && <Loader className="animate-spin" />}
												Save changes
											</button>
										</form>
									</div>
								);
						}
					})()}
				</div>
			</div>
		</main>
	);
};

export default Account;
