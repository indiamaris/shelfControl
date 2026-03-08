import { prisma } from "@lib/prisma"

export async function listBooks() {
  return prisma.book.findMany({
    include: {
      user: true,
    },
    orderBy: {
      title: "asc",
    },
  })
}
