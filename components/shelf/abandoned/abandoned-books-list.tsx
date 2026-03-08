import BookList from "@components/books/all-books"

type Book = {
  id: number
  title: string
  author: string
  price: string
}

export default function AbandonedBooksList({ books }: { books: Book[] }) {
  return <BookList books={books} />
}
