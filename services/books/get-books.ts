import { bookRepository } from "@repositories/books/book-repository"

export async function getBooks() {
  const books = await bookRepository.findAll()

  return books.map((book) => ({
    ...book,
    price: book.price.toString(),
  }))
}
