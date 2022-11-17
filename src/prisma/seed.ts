import { PrismaClient } from '@prisma/client';
import * as argon from 'argon2';
const prisma = new PrismaClient();
async function main() {
  const hash = await argon.hash('admin');
  await prisma.user.create({
    data: {
      email: 'admin@admin.com',
      password: hash,
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    await prisma.$disconnect();
    process.exit(1);
  });
