import { db } from '~/utils/db.server';
import type { LogInArgs } from '../types';
import bcrypt from 'bcryptjs';

export const resolvers = {
  Query: {
    hotels: async (_: any, { limit }: any) => {
      const hotels = await db.hotel.findMany({
        take: limit,
        orderBy: {
          id: 'desc',
        },
      });

      return hotels;
    },
    users: async (_: any) => {
      const users = await db.user.findMany({
        orderBy: {
          id: 'desc',
        },
      });

      return users;
    },

    searchHotels: async (_: any, { city }: any) => {
      let cities = await db.hotel.findMany({
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

    getHotel: async (_: any, { id }: any) => {
      let hotel = await db.hotel.findUnique({
        where: {
          id,
        },
      });

      return hotel;
    },
  },
  Mutation: {
    signup: async (_root: undefined, { input }: LogInArgs) => {
      try {
        console.log('trying');
      } catch (error) {
        throw new Error(`Failed to log in: ${error}`);
      }
    },
    login: async (_root: any, { input }: LogInArgs) => {
      const { name, password } = input;
      const dbUser = await db.user.findFirst({
        where: { name: name },
      });

      if (!dbUser) return null;
      else {
        const isCorrectPassword = await bcrypt.compare(
          password,
          dbUser.passwordHash
        );

        if (!isCorrectPassword) return null;
        return dbUser;
      }
    },
  },
};
