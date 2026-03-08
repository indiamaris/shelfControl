import { prisma } from "@lib/prisma"

export type ShelfStatus = "read" | "reading" | "toBeRead" | "abandoned"

export const shelfRepository = {
  findBooksByStatus(userId: number, status: ShelfStatus) {
    return prisma.shelfItem.findMany({
      where: {
        userId,
        status,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        book: {
          select: {
            id: true,
            title: true,
            author: true,
            price: true,
          },
        },
      },
      orderBy: {
        id: "asc",
      },
    })
  },
}
