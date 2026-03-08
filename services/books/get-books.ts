import { bookRepository } from "@repositories/books/book-repository"

export async function getBooks() {
  return bookRepository.findAll()
}
