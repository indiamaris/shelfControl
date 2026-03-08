import { prisma } from "@lib/prisma"

type CreateUserInput = {
  name: string
  email: string
}

export const userRepository = {
  findAll() {
    return prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
      },
      orderBy: {
        name: "asc",
      },
    })
  },

  findAllWithBooks() {
    return prisma.user.findMany({
      include: {
        books: true,
      },
      orderBy: {
        name: "asc",
      },
    })
  },

  findById(id: number) {
    return prisma.user.findUnique({
      where: { id },
    })
  },

  create(data: CreateUserInput) {
    return prisma.user.create({
      data,
    })
  },

  delete(id: number) {
    return prisma.user.delete({
      where: { id },
    })
  },
}
