import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const clearData = async () => {
  await prisma.user.deleteMany({});
  await prisma.booking.deleteMany({});
  await prisma.hotel.deleteMany({});
};
clearData()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
