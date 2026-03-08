import { bookRepository } from "@repositories/books/book-repository"

export async function listBooks() {
  return bookRepository.findAllWithUser()
}
