import BookList from "@components/books/all-books"

type Book = {
  id: number
  title: string
  author: string
  price: string
}

export default function ReadBooksList({ books }: { books: Book[] }) {
  return <BookList books={books} />
}
