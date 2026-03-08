import { userRepository } from "@repositories/users/user-repository"

type CreateUserInput = {
  name: string
  email: string
}

export async function createUser(data: CreateUserInput) {
  if (!data.name || !data.name.trim()) {
    throw new Error("Name required")
  }

  if (!data.email || !data.email.trim()) {
    throw new Error("Email required")
  }

  return userRepository.create({
    name: data.name.trim(),
    email: data.email.trim(),
  })
}
