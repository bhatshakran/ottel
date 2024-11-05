import type { Hotel } from "../_types/hotelTypes";
import RoomCard from "./roomCard";

interface ShowcaseProps {
	data: Hotel[];
}

const Showcase = ({ data }: ShowcaseProps) => {
	return (
		<div className="mt-24 flex flex-col gap-16 px-8 max-w-7xl mx-auto">
			<div className="flex flex-wrap text-center md:text-left justify-between items-center">
				<h2 className="font-regis text-4xl w-full md:w-2/5 leading-snug">
					Cottages that blend <br />
					<span className="text-secondary italic">
						comfort and elegance
					</span>{" "}
				</h2>
				<p className="mt-8 md:mt-0 w-full md:w-3/5 font-silka text-center md:text-left text-lg">
					Tucked between sunny coconut groves and pristine white sand beaches,
					each of Ottelo&apos;s homely cottages gives you a breathtaking view to
					wake up to.
				</p>
			</div>
			<div className="flex flex-wrap gap-6 w-full justify-center ">
				{data.map((item) => {
					return <RoomCard hotel={item} key={item.id} />;
				})}
			</div>
		</div>
	);
};

export default Showcase;
