import { userRepository } from "@repositories/users/user-repository"

type CreateUserInput = {
  name: string
  email: string
}

export async function createUser(data: CreateUserInput) {
  if (!data.email) {
    throw new Error("Email required")
  }

  return userRepository.create(data)
}
