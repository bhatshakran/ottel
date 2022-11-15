import { gql } from '@apollo/client';

export const typeDefs = gql`
  type Booking {
    bookingId: Int
    userId: Int
    hotel: Hotel
    user: User
    hotelId: Int
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

  input SignupInput {
    code: String
  }

  input LoginInput {
    name: String
    password: String
  }

  input BookingInput {
    userId: Int
    hotelId: Int
  }

  input LoginWithGoogleInput {
    name: String
    avatar: String
    contact: String
    id: Int
  }

  input getUserInput {
    id: Int
  }

  type Mutation {
    signup(input: LoginInput!): User
    login(input: LoginInput!): User
    loginWithGoogle(input: LoginWithGoogleInput!): User
    createBooking(input: BookingInput!): Booking
  }
  type Query {
    hotels(limit: Int): [Hotel]
    users: [User]
    searchHotels(city: String): [Hotel]
    getHotel(id: Int): Hotel
    bookingExists(input: BookingInput!): Boolean
    getUser(input: getUserInput!): User
    getBookings(id: Int): [Booking]
  }
`;
