import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./_components/header";

const regis = localFont({
	src: "./fonts/regis/Regis-Regular.otf",
	variable: "--font-regis",
});
const silka = localFont({
	src: "./fonts/silka/Silka-Regular.otf",
	variable: "--font-silka",
});

export const metadata: Metadata = {
	title: "Ottelo",
	description: "Book the best hotels in North America from Ottelo!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${regis.variable} ${silka.variable} antialiased`}>
				<Header />
				{children}
			</body>
		</html>
	);
}
