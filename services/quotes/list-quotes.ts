import { quoteRepository } from "@repositories/quotes/quote-repository"

export async function listQuotes() {
  return quoteRepository.findAllWithBook()
}
