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

  findAllWithShelfItems() {
    return prisma.user.findMany({
      include: {
        shelfItems: {
          include: {
            book: {
              include: {
                quotes: {
                  select: {
                    id: true,
                  },
                },
              },
            },
          },
        },
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
