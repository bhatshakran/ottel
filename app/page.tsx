import Header from "./_components/header";
import Banner from "./_components/banner";
import Showcase from "./_components/showcase";
import type { CardData } from "./_components/roomCard";
import Features from "./_components/features";
import Ingredients from "./_components/ingredients";
import Reviews from "./_components/reviews";
import Footer from "./_components/footer";

export default function Home() {
  const hotels: CardData[]= []
	return (
		<main className="bg-backgroundColor relative text-black">
			<Header />
			<Banner />
			<Showcase data={hotels} />
			<Features />
			<Ingredients />
			<Reviews />
			<Footer />
		</main>
	);
}
