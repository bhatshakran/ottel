import Banner from "./_components/banner";
import Showcase from "./_components/showcase";
import Features from "./_components/features";
import Ingredients from "./_components/ingredients";
import Reviews from "./_components/reviews";
import Footer from "./_components/footer";
import { getHotels } from "./_actions/hotelActions";

export default async function Home() {
	const hotels = await getHotels(3);
	return (
		<main className="bg-backgroundColor relative text-black">
			<Banner />
			<Showcase data={hotels} />
			<Features />
			<Ingredients />
			<Reviews />
			<Footer />
		</main>
	);
}
