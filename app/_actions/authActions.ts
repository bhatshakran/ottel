"use server";

import { z } from "zod";
import { db } from "../_db";
import { user } from "../_db/schema";
import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";
import {
	createSession,
	decrypt,
	deleteSession,
	getSession,
} from "../_lib/session";
import { redirect } from "next/navigation";
import { cache } from "react";

const schema = z.object({
	username: z.string().min(5),
	password: z.string().min(5),
});

export const handleLogin = async (
	prevState: { message: string } | null | undefined,
	formData: FormData,
) => {
	let redirectPath = "/auth";
	//
	const parse = schema.safeParse({
		username: formData.get("username"),
		password: formData.get("password"),
	});

	if (!parse.success) {
		return { message: "Failed to create booking!" };
	}
	const data = parse.data;

	try {
		const userExists = await db
			.select()
			.from(user)
			.where(eq(user.name, data.username));

		if (userExists.length > 0) {
			const isPasswordVerified = await bcrypt.compare(
				data.password,
				userExists[0].passwordHash,
			);
			if (!isPasswordVerified) return null;
			await createSession(userExists[0].id.toString());
			redirectPath = "/";
			return {
				message: "User logged in!",
			};
		}
	} catch (e) {
		console.log(e);
		redirectPath = "/auth";
		return {
			message: "Failed to create user",
		};
	} finally {
		if (redirectPath) {
			redirect(redirectPath);
		}
	}
};

export const handleRegister = async (
	prevState: { message: string } | null | undefined,
	formData: FormData,
) => {
	let redirectPath = "/auth";
	//
	const parse = schema.safeParse({
		username: formData.get("username"),
		password: formData.get("password"),
	});

	if (!parse.success) {
		return { message: "Failed to create account!" };
	}
	const data = parse.data;
	//
	try {
		const userExists = await db
			.select()
			.from(user)
			.where(eq(user.name, data.username));
		if (userExists.length > 0) {
			return { message: "User is already registered. You can log in!" };
		}

		const passwordHash = await bcrypt.hash(data.password, 10);
		const signedUpUser = await db
			.insert(user)
			.values({
				name: data.username,
				passwordHash,
				walletId: "",
				contact: "",
				income: 0,
				avatar:
					"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
			})
			.returning({ id: user.id });
		await createSession(signedUpUser[0].id.toString());
		redirectPath = "/";
		return {
			message: "User signed up!",
		};
	} catch (e) {
		console.log(e);
		redirectPath = "/auth";
		return {
			message: "Failed to create user",
		};
	} finally {
		if (redirectPath) {
			redirect(redirectPath);
		}
	}
};

export const logout = async () => {
	deleteSession();
	redirect("/auth");
};

export const isUserVerified = async () => {
	const session = await getSession();
	if (session) {
		const userId = session.value;
		if (!userId) return false;
		return true;
	}
	return false;
};

export const getUserIdFromSession = async () => {
	const session = await getSession();
	if (session) {
		const payload = await decrypt(session.value);
		if (payload) {
			const userId = payload.userId as string;
			return userId;
		}
		return null;
	}
	return null;
};

export const getUserDetails = cache(async (userId: string) => {
	try {
		const userDetails = await db
			.select({ name: user.name, id: user.id })
			.from(user)
			.where(eq(user.id, Number(userId)));
		if (userDetails.length > 0) {
			return userDetails[0];
		}
	} catch (error) {
		console.log(error);
	}
});

export const updateUserDetails = cache(
	async (
		prevState: { message: string; type: string },
		formData: FormData,
	) => {
		try {
			const schema = z.object({
				username: z.string().min(5),
				password: z.string().min(5).optional(),
				userId: z.string().min(1),
			});
			const parse = schema.safeParse({
				username: formData.get("username"),
				...(formData.get("password")
					? { password: formData.get("password") }
					: {}),
				userId: formData.get("userId"),
			});
			if (!parse.success) {
				return { message: "Failed to create account!", type: "error" };
			}
			const data = parse.data;
			let passwordHash = "";
			if (data.password) {
				passwordHash = await bcrypt.hash(data.password, 10);
			}
			//
			const userDetails = await db
				.update(user)
				.set({
					name: data.username,
					...(data.password ? { passwordHash: passwordHash } : {}),
				})
				.where(eq(user.id, Number(data.userId)))
				.returning();
			//
			if (userDetails.length > 0) {
				return {
					message: "User details updated successfully!",
					type: "info",
				};
			}
			return {
				message: "Failed to create account",
				type: "error",
			};
		} catch (error) {
			console.log(error);
			return {
				message: "Could not update details. Please try again!",
				type: "error",
			};
		}
	},
);
