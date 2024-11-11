import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isUserVerified } from "./app/_actions/authActions";

const protectedRoutes = ["/account", "/checkout"];

export default async function middleware(req: NextRequest) {
	const isAuthenticated = await isUserVerified();
	if (!isAuthenticated && protectedRoutes.includes(req.nextUrl.pathname)) {
		const absoluteURL = new URL("/", req.nextUrl.origin);
		return NextResponse.redirect(absoluteURL.toString());
	}
}
