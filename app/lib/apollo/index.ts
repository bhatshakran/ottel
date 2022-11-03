import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import { SchemaLink } from '@apollo/client/link/schema';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { read } from '../../utils/readWrite';

// a schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
export const typeDefs = gql`
  type Hotel {
    _id: String
    title: String
    image: String
    host: String
    address: String
    country: String
    admin: String
    city: String
    bookings: Array
    bookingsIndex: Object
    price: String
    numOfGuest: Number
  }

  type Query {
    hotels: [Hotel]
  }
`;

// resolvers define the technique for fetching the types defined in the
// schema. this resolver retrieves books from the "books" array above.
export const resolvers = {
  Query: {
    books: () => {
      const books = read();
      return books;
    },
  },
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

export const graphQLClient = new ApolloClient({
  cache: new InMemoryCache(),
  ssrMode: true,
  link: new SchemaLink({ schema }),
});
