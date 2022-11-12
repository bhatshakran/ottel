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
    passwordHash: String
    name: String
    avatar: String
    contact: String
    walletId: String
    income: Int
    bookings: [Booking]
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

  input LoginInput {
    name: String
    password: String
  }

  type Mutation {
    signup(input: SignupInput): User
    login(input: LoginInput!): User
  }
`;
