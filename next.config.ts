import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	env:{
		PAYPAL_CLIENT_ID:process.env.PAYPAL_CLIENT_ID
	},
	images: {
		domains: ["res.cloudinary.com",'img.freepik.com','cdn.pixabay.com'],
	},
};

export default nextConfig;
