import Link from "next/link";

const Header = ({ id }: { id?: string }) => {
	return (
		<>
			<div className="flex justify-between px-4 xl:px-0 py-2 border-b border-black font-regis">
				<div className="text-lg">
					<Link href="/">Ottelo</Link>
				</div>
				<div className="text-lg cursor-pointer">
					<ul className="flex items-center w-full  justify-center text-lg font-regis gap-x-3">
						<li className="hover:text-secondary">
							<Link href="/hotels">Hotels</Link>
						</li>
						<li className="hover:text-secondary">
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
