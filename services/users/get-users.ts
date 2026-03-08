import { userRepository } from "@repositories/users/user-repository"

export async function getUsers() {
  return userRepository.findAll()
}
