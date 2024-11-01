import Link from "next/link";
import Arrow from "./arrow";

const Banner = () => {
	return (
		<div className="px-4 md:px-12 lg:px-32 bg-[url('/banner.jpeg')] bg-cover py-20 md:py-40">
			<div className="w-full space-y-10 md:space-y-20">
				<h2 className="text-4xl md:text-8xl font-regis font-bold md:text-left">
					Watch the stars. <br /> Soak up the sun.
					<br /> Experience peace at Ottelo.
				</h2>
				<button
					type="button"
					className="font-silka text-lg md:text-3xl flex items-center gap-3 md:gap-6"
				>
					<Link href="/hotels">Look for rooms</Link>
					<Arrow />
				</button>
			</div>

			<div className="w-full bg-white/70 rounded-lg mt-12 md:mt-20 md:h-1/5 max-w-4xl border border-backgroundColor p-4 md:p-8">
				<p className="font-silka w-full text-sm md:text-lg">
					Escape the routine and enjoy the height of luxury at{" "}
					<span className="font-semibold">Toronto&apos;s #1 </span>
					luxury resort.
				</p>
			</div>
		</div>
	);
};

export default Banner;
