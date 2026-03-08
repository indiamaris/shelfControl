import { userRepository } from "@repositories/users/user-repository"

export async function listUsers() {
  return userRepository.findAllWithShelfItems()
}
