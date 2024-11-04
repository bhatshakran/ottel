import type React from "react";

const Rectangles = ({ children }: { children?: React.ReactNode }) => {
	return (
		<div className="w-full h-96 py-2 px-4 border border-secondary">
			<div className="py-2 h-full px-4 border border-secondary">
				<div className="py-2 px-4 h-full border border-secondary">
					<div className="py-2 px-4 h-full border border-secondary">
						<div className="py-2 px-4 h-full border border-secondary">
							<div className="py-2 px-4 h-full border border-secondary">
								<div className="py-2 px-4 h-full border border-secondary">
									{children}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Rectangles;
