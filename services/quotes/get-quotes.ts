import { quoteRepository } from "@repositories/quotes/quote-repository"

export async function getQuotes() {
  return quoteRepository.findAll()
}
