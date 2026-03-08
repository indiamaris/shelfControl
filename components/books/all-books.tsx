type Book = {
  id: number
  title: string
  author: string
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
        <li
          key={book.id}
          className="rounded-[24px] border border-[var(--color-surface-border)] bg-[var(--color-surface)] p-5 shadow-[0_10px_35px_var(--color-shadow)]"
        >
          <div className="space-y-2">
            <span className="inline-flex rounded-full bg-[color:color-mix(in_srgb,var(--color-secondary)_18%,transparent)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-secondary)]">
              Book
            </span>
            <h2 className="text-lg font-semibold text-[var(--color-primary)]">
              {book.title}
            </h2>
            <p className="text-sm text-[var(--color-muted)]">{book.author}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}