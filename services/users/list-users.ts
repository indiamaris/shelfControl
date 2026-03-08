import { prisma } from "@lib/prisma"

export async function listUsers() {
  return prisma.user.findMany({
    include: {
      books: true,
    },
    orderBy: {
      name: "asc",
    },
  })
}
