import BookList from "@components/books/all-books"
import { getBooks } from "@services/books/get-books"

export default async function BooksPage() {
  const books = await getBooks()

  return (
    <div>
      <h1>Livros</h1>
      <BookList books={books} />
    </div>
  )
}