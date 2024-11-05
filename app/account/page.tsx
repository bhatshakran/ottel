"use client";
import { HandHelping } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import {
	getUserDetails,
	getUserIdFromSession,
	logout,
} from "../_actions/authActions";
import useSWR from "swr";
import Skeleton from "../_components/skeleton";
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
const Account = () => {
	const [activeTab, setActiveTab] = useState("account");
	const { data: user, isLoading } = useSWR(
		"getUserDetails",
		getUserDetailsAsync,
	);

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
				<div className="md:w-[600px] border-l">
					{(() => {
						switch (activeTab) {
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
										<div className="space-y-4 px-6 mt-4">
											<div className="flex gap-x-3 text-lg items-center">
												<HandHelping className="size-8" />
												<label htmlFor="help">What can we help you with?</label>
											</div>
											<select
												name="help"
												id="help"
												className="border rounded-md border-lightorange px-3 py-2"
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
									<div className="flex flex-col gap-y-4 px-12 py-16">
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
										<div className="flex flex-col max-w-80">
											<label htmlFor="username">Username</label>
											<input
												type="text"
												name="username"
												className="border px-3 py-2 rounded-md border-secondary"
												value={user.name}
												onChange={() => {}}
											/>
										</div>
										<div className="flex flex-col max-w-80">
											<label htmlFor="password">Update password</label>
											<input
												type="text"
												name="password"
												className="border px-3 py-2 rounded-md border-secondary"
												placeholder="*******"
											/>
										</div>
										<button
											type="button"
											className="bg-secondary px-3 py-2 rounded-md text-white max-w-36"
										>
											Save changes
										</button>
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
