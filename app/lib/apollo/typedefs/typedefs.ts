import { gql } from '@apollo/client';

export const typeDefs = gql`
  type Booking {
    bookingId: Int
    bookerId: Int
  }

  type Hotel {
    id: Int
    title: String
    image: String
    host: String
    address: String
    country: String
    admin: String
    city: String
    bookings: [Booking]
    price: String
    numOfGuest: Int
  }

  type User {
    id: Int
    token: String
    name: String
    avatar: String
    contact: String
    walletId: String
    income: Int
    bookings: [Booking]
    hotels: [Hotel]
  }

  type Query {
    hotels(limit: Int): [Hotel]
    users: [User]
    searchHotels(city: String): [Hotel]
    getHotel(id: Int): Hotel
  }

  input SignupInput {
    code: String
  }

  type Mutation {
    signup(input: SignupInput): User
  }
`;
