import { prisma } from "@lib/prisma"

type CreateQuoteInput = {
  text: string
  character: string
  bookId: number
}

export const quoteRepository = {
  findAll() {
    return prisma.quote.findMany({
      select: {
        id: true,
        text: true,
        character: true,
        book: {
          select: {
            id: true,
            title: true,
          },
        },
      },
      orderBy: {
        id: "asc",
      },
    })
  },

  findAllWithBook() {
    return prisma.quote.findMany({
      include: {
        book: true,
      },
      orderBy: {
        id: "asc",
      },
    })
  },

  findById(id: number) {
    return prisma.quote.findUnique({
      where: { id },
      include: {
        book: true,
      },
    })
  },

  create(data: CreateQuoteInput) {
    return prisma.quote.create({
      data,
      include: {
        book: true,
      },
    })
  },

  delete(id: number) {
    return prisma.quote.delete({
      where: { id },
    })
  },
}
