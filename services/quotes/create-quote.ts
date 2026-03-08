import { quoteRepository } from "@repositories/quotes/quote-repository"

type CreateQuoteInput = {
  text: string
  character: string
  bookId: number
}

export async function createQuote(data: CreateQuoteInput) {
  if (!data.text) {
    throw new Error("Text required")
  }

  if (!data.character) {
    throw new Error("Character required")
  }

  if (!data.bookId) {
    throw new Error("Book required")
  }

  return quoteRepository.create(data)
}
