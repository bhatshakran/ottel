import Link from "next/link";

const Header = ({ id }: { id?: string }) => {
	return (
		<>
			<div className="flex justify-between w-full font-regis bg-backgroundColor text-black px-4 md:px-12 lg:px-32 py-6">
				<div className="text-2xl md:text-4xl text-secondary">
					<Link href="/">Ottelo</Link>
				</div>
				<div className="flex-grow">
					<ul className="flex items-center w-full justify-end text-lg md:text-2xl font-silka gap-x-4 md:gap-x-16">
						<li className="hover:text-secondary cursor-pointer">
							<Link href="/hotels">Hotels</Link>
						</li>
						<li className="hover:text-secondary cursor-pointer">
							{id ? (
								<Link href="/account">Account</Link>
							) : (
								<Link href="/auth/login">Signup</Link>
							)}
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Header;
