import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import { SchemaLink } from '@apollo/client/link/schema';
import { makeExecutableSchema } from '@graphql-tools/schema';
import prismaclient from '@prisma/client';

const prisma = new prismaclient.PrismaClient();

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
    hotel(city: String): [Hotel]
  }
`;

// resolvers define the technique for fetching the types defined in the
// schema. this resolver retrieves books from the "books" array above.
export const resolvers = {
  Query: {
    hotels: async (_: any, { limit }: any) => {
      const hotels = await prisma.hotel.findMany({
        take: limit,
        orderBy: {
          id: 'desc',
        },
      });

      return hotels;
    },
    users: async (_: any) => {
      const users = await prisma.user.findMany({
        orderBy: {
          id: 'desc',
        },
      });

      return users;
    },

    hotel: async (_: any, { city }: any) => {
      console.log(city, 'city goes here');
      let cities = await prisma.hotel.findMany({
        where: {
          city: {
            contains: city,
          },
        },
        orderBy: {
          id: 'desc',
        },
      });

      return cities;
    },
  },
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

export const graphQLClient = new ApolloClient({
  cache: new InMemoryCache(),
  ssrMode: true,
  link: new SchemaLink({ schema }),
});
