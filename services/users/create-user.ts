import { prisma } from "@lib/prisma"

type CreateUserInput = {
  name: string
  email: string
}

export async function createUser(data: CreateUserInput) {
  return prisma.user.create({
    data,
  })
}
