export interface Hotel {
	id: number;
	title: string;
	description: string;
	image: string;
	host: string;
	address: string;
	country: string;
	admin: string;
	city: string;
	price: number;
	numOfGuest: number;
}

export interface CardDataProps extends Hotel {
	bookings: any[] | null;
}
