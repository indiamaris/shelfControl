import { bookRepository } from "@repositories/books/book-repository"

type CreateBookInput = {
  title: string
  author: string
}

export async function createBook(data: CreateBookInput) {
  if (!data.title) {
    throw new Error("Title required")
  }

  if (!data.author) {
    throw new Error("Author required")
  }

  return bookRepository.create(data)
}
