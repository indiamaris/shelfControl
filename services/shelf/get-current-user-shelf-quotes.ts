import { getCurrentUser } from "@lib/auth/get-current-user"
import { quoteRepository } from "@repositories/quotes/quote-repository"

export async function getCurrentUserShelfQuotes() {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    return null
  }

  const quotes = await quoteRepository.findAllByUserShelf(currentUser.id)

  return {
    user: currentUser,
    quotes,
  }
}
