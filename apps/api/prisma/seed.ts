import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const counter = await prisma.counter.create({
    data: {
      counter: 1,
    },
  });
  console.log('counter created:', counter);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
