import Prisma from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

export const prisma = new Prisma.PrismaClient();

const prismaClientSingleton = () => {
  return prisma.$extends(withAccelerate());
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prismaFinal = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prismaFinal;

if (process.env.NODE_ENV !== "production")
  globalThis.prismaGlobal = prismaFinal;
