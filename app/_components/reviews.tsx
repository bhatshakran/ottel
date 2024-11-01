import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

const Reviews = () => {
	return (
		<div className="border-t border-gray-500 mt-16">
			<div className="max-w-6xl mx-auto px-4 md:px-0 mt-16 pb-16">
				<h2 className="text-center font-regis text-4xl py-16">
					What customers are saying
				</h2>
				<div className="flex flex-wrap justify-center lg:justify-between items-center relative customers w-full h-auto gap-y-8 ">
					<div className="w-full lg:w-1/2 h-1/2 lg:h-full">
						<div className="lg:border border-secondary pl-2 pt-2 w-24">
							<Image
								src="https://res.cloudinary.com/tiny-house/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1560648533/mock/users/user-profile-1_mawp12.jpg"
								alt="user_avatar1"
								className="w-full"
								width={1000}
								height={1000}
							/>
						</div>
						<div className="lg:border border-secondary pl-2 pt-2 lg:absolute lg:left-32 lg:top-16">
							<Image
								src="https://res.cloudinary.com/tiny-house/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1560649052/mock/users/user-profile-2_arwtdy.jpg"
								alt="user_avatar2"
								className="w-32"
								width={1000}
								height={1000}
							/>
						</div>
						<div className="lg:border border-secondary pl-2 pt-2 lg:absolute lg:left-80 lg:top-32">
							<Image
								src="https://res.cloudinary.com/tiny-house/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1560649280/mock/users/user-profile-3_omxctk.jpg"
								alt="user_avatar3"
								className="w-48"
								width={1000}
								height={1000}
							/>
						</div>
					</div>
					<div className="w-full lg:w-1/2 h-1/2 lg:h-full flex items-center">
						<div className="w-96">
							<p className="font-silka ">
								It is littered with antiques, art works, a bright red grand
								piano for the bar, asymmetrical carpets-- if I'm honest, this
								hotel itself needs to be on itineraries. The views are insane,
								and uif you want to react peak relaxation, the spa is the place
								to be.
							</p>
							<h4 className="mt-6 text-lg text-bold font-silka">Alax Sandro</h4>
						</div>
						<div className="sliderbtns ml-6">
							<div className="bg-gray-400 p-1 cursor-pointer">
								<ArrowLeft className="size-7" />
							</div>
							<div className="bg-secondary p-1 mt-3 cursor-pointer">
								<ArrowRight className="size-7" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Reviews;
