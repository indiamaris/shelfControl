import PageShell from "@components/ui/page-shell"
import BookList from "@components/books/all-books"
import { getBooks } from "@services/books/get-books"

export default async function BooksPage() {
  const books = await getBooks()

  return (
    <PageShell
      eyebrow="Library"
      title="Books"
      description="Browse the shared catalog and keep your collection ready for shelf assignments and quote tracking."
      backHref="/login"
      backLabel="Back to dashboard"
    >
      <BookList books={books} />
    </PageShell>
  )
}