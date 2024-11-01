import Image from "next/image";
import Arrow from "./arrow";

const Ingredients = () => {
	return (
		<div className="px-6 md:px-0 max-w-6xl mx-auto mt-24 flex md:flex-row flex-col items-start py-8 gap-12">
			<div className="md:w-4/12">
				<h2 className="text-4xl font-regis">
					Fresh local ingredients, delicious global cuisine.
				</h2>
				<p className="mt-6 font-silka text-md">
					Indulge yourself in lipsmacking gourment meals prepared by world-class
					chefs. Whether it&apos;s late breakfasts, buffets, show cooking or
					fine dining, we&apos;ve got it all.
				</p>
				<button type="button" className="flex text-lg items-center gap-2 mt-8">
					See the menu
					<Arrow />
				</button>
			</div>
			<div className="flex-grow w-full md:w-auto flex justify-end relative">
				<Image
					className="absolute w-80"
					src="https://res.cloudinary.com/tiny-house/image/upload/v1560641352/mock/Toronto/toronto-listing-8_awkmrj.jpg"
					alt="house"
					width="1000"
					height="750"
				/>
				<Image
					className="absolute w-80 bottom-0 left-0"
					src="https://res.cloudinary.com/tiny-house/image/upload/v1560641352/mock/Toronto/toronto-listing-7_p3a5ms.jpg"
					alt="kitchen"
					width="1000"
					height="750"
				/>
				<div className="w-full h-96 py-2 px-4 border border-secondary">
					<div className="py-2 h-full px-4 border border-secondary">
						<div className="py-2 px-4 h-full border border-secondary">
							<div className="py-2 px-4 h-full border border-secondary">
								<div className="py-2 px-4 h-full border border-secondary">
									<div className="py-2 px-4 h-full border border-secondary">
										<div className="py-2 px-4 h-full border border-secondary" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Ingredients;
