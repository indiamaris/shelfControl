import ReadingBooksList from "@components/shelf/reading/reading-books-list"
import PageShell from "@components/ui/page-shell"
import { getCurrentUserShelfBooksByStatus } from "@services/shelf/get-current-user-shelf-books-by-status"
import { redirect } from "next/navigation"

export default async function ReadingShelfPage() {
  const shelf = await getCurrentUserShelfBooksByStatus("reading")

  if (!shelf) {
    redirect("/login")
  }

  return (
    <PageShell
      eyebrow="Shelf"
      title="Reading"
      description={`Books currently being read by ${shelf.user.name}.`}
      backHref="/shelf"
      backLabel="Back to shelf"
    >
      <ReadingBooksList books={shelf.books} />
    </PageShell>
  )
}
