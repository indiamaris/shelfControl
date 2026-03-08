import { quoteRepository } from "@repositories/quotes/quote-repository"
import { userRepository } from "@repositories/users/user-repository"

export async function getShelfQuotes(userId: number) {
  const [user, quotes] = await Promise.all([
    userRepository.findById(userId),
    quoteRepository.findAllByUserShelf(userId),
  ])

  return {
    user,
    quotes,
  }
}
