import { prisma } from "@lib/prisma"

type CreateBookInput = {
  title: string
  author: string
  userId: number
}

export async function createBook(data: CreateBookInput) {
  return prisma.book.create({
    data,
  })
}
