import { prisma } from "@lib/prisma"

export async function getBooks() {
  return prisma.book.findMany({
    select: {
      id: true,
      title: true,
      author: true,
    },
    orderBy: {
      title: "asc",
    },
  })
}
