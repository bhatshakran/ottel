import {
	Blend,
	ChefHat,
	Fish,
	GlassWater,
	Handshake,
	UtensilsCrossed,
	Waves,
	Wine,
} from "lucide-react";
import Image from "next/image";

const Features = () => {
	return (
		<div className="w-full border-t border-gray-600 mt-24">
			<div className="py-40 flex flex-col gap-24 max-w-6xl mx-auto px-6 md:px-0">
				<div>
					<h2 className="text-4xl text-center md:text-left md:text-4xl font-regis">
						Inspired by local{" "}
						<span className="italic text-secondary">
							traditions & rich history,{" "}
						</span>{" "}
						we&apos;ve crafted a experience you&apos;re likely to never forget.
					</h2>
				</div>
				<div className="flex flex-wrap gap-6 justify-center">
					<div className=" featurecard w-72 p-0.5">
						<div className=" bg-backgroundColor flex flex-col gap-6 px-4 py-8">
							<div className="text-secondary ">
								<Handshake className="size-8" />
							</div>
							<h4 className="font-regis text-xl">
								Dive into history at the Venetian Castle
							</h4>
							<p className="font-silka">
								Rub shoulders with the past at the ancient ruins and experience
								the island from a stunning viewpoint.
							</p>
						</div>
					</div>
					<div className=" featurecard w-72 p-0.5">
						<div className=" bg-backgroundColor flex flex-col gap-6  px-4 py-8">
							<div className="text-secondary ">
								<Waves className="size-8" />
							</div>
							<h4 className="font-regis text-xl">
								Tick water sports off your bucket list
							</h4>
							<p className="font-silka">
								Craving an adrenaline rush? Trye out snorkelling, parsailing,
								jet skiing and more adventure activities.
							</p>
						</div>
					</div>
					<div className=" featurecard w-72 p-0.5">
						<div className=" bg-backgroundColor flex flex-col gap-6  px-4 py-8">
							<div className="text-secondary ">
								<Blend className="size-8" />
							</div>
							<h4 className="font-regis text-xl">
								Relax at the boutique spa and club
							</h4>
							<p className="font-silka">
								Ease the knots in your body and release the tension at our spa,
								and make full use of our fitness facilities.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-black py-24 px-6 md:px-0">
				<div className="max-w-6xl mx-auto flex flex-wrap items-start justify-between">
					<div className="w-full md:w-1/2 md:p-8">
						<div className="border-t border-l border-white border-opacity-60 pt-2 pl-2">
							<Image
								src="https://res.cloudinary.com/tiny-house/image/upload/v1560641327/mock/Dubai/dubai-listing-2_qc2kos.jpg"
								alt="hotel_img"
								width={2000}
								height={1500}
								className="w-full"
							/>
						</div>
					</div>
					<div className="w-full md:w-1/2 text-white py-8 px-2 sm:p-8">
						<h3 className=" text-4xl md:text-5xl font-regis">
							You&apos;ll never want to leave
						</h3>
						<p className=" mt-8 md:mt-16 font-silka text-lg">
							The freedom to do exactly what you want&quot; whether it is
							dipping into a tub of hot water with a book or exploring local
							culture. The perfect place to open your heart and let it decide!
						</p>
						<ul className="mt-16 text-2xl font-silka flex flex-wrap w-full gap-y-4 text-secondary items-center">
							<li className="w-1/2 flex items-center">
								<Blend className="size-5 mr-2" />
								<p className="text-white"> Spa</p>
							</li>
							<li className="w-1/2 flex items-center">
								<GlassWater className="size-5 mr-2" />
								<p className="text-white"> Pool</p>
							</li>
							<li className="w-1/2 flex items-center">
								<UtensilsCrossed className="size-5 mr-2" />
								<p className="text-white"> Dining</p>
							</li>
							<li className="w-1/2 flex items-center">
								<Wine className="size-5 mr-2" />
								<p className="text-white"> 24/7 Bar</p>
							</li>
							<li className="w-1/2 flex items-center">
								<Fish className="size-5 mr-2" />
								<p className="text-white"> Fishing</p>
							</li>
							<li className="w-1/2 flex items-center">
								<ChefHat className="size-5 mr-2" />
								<p className="text-white"> Barbeque</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features;
