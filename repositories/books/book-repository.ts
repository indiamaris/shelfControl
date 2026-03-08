import { prisma } from "@lib/prisma"

type CreateBookInput = {
  title: string
  author: string
}

export const bookRepository = {
  findAll() {
    return prisma.book.findMany({
      select: {
        id: true,
        title: true,
        author: true,
        price: true,
      },
      orderBy: {
        title: "asc",
      },
    })
  },

  findAllWithShelfItems() {
    return prisma.book.findMany({
      include: {
        shelfItems: {
          include: {
            user: true,
          },
        },
      },
      orderBy: {
        title: "asc",
      },
    })
  },

  findById(id: number) {
    return prisma.book.findUnique({
      where: { id },
    })
  },

  create(data: CreateBookInput) {
    return prisma.book.create({
      data,
    })
  },

  delete(id: number) {
    return prisma.book.delete({
      where: { id },
    })
  },
}
