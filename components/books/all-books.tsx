import BookCard from "@components/books/book-card"

type Book = {
  id: number
  title: string
  author: string
  price: string
}

export default function BookList({ books }: { books: Book[] }) {
  if (!books.length) {
    return (
      <div className="rounded-[24px] border border-dashed border-[var(--color-surface-border)] bg-[var(--color-surface)] p-8 text-center text-[var(--color-muted)] shadow-[0_10px_35px_var(--color-shadow)]">
        No books available yet.
      </div>
    )
  }

  return (
    <ul className="grid gap-4 md:grid-cols-2">
      {books.map((book) => (
        <li key={book.id}>
          <BookCard title={book.title} author={book.author} price={book.price} />
        </li>
      ))}
    </ul>
  )
}