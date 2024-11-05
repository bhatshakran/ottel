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

export interface UserProps {
	name: string;
	id: number;
	passwordHash: string;
	avatar: string;
	contact: string;
	walletId: string;
	income: number;
}

export interface BookingProps {
	bookingId: string;
	hotelId: number;
	userId: number;
}

export interface CardDataProps extends Hotel {
	bookings: BookingProps[] | null;
}
