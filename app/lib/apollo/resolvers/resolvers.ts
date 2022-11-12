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
        const { name, password } = input;
        const userExists = await db.user.findFirst({ where: { name: name } });
        if (userExists) throw new Error('User already exists');

        const passwordHash = await bcrypt.hash(password, 10);
        const user = await db.user.create({
          data: {
            name,
            passwordHash,
            avatar:
              'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
            walletId: '',
            contact: '',
            income: 0,
          },
        });

        return {
          id: user.id,
          name,
          avatar: user.avatar,
          walletId: user.walletId,
          income: user.income,
          contact: user.contact,
        };
      } catch (error) {
        return null;
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
