import ReadBooksList from "@components/shelf/read/read-books-list"
import PageShell from "@components/ui/page-shell"
import { getCurrentUserShelfBooksByStatus } from "@services/shelf/get-current-user-shelf-books-by-status"
import { redirect } from "next/navigation"

export default async function ReadShelfPage() {
  const shelf = await getCurrentUserShelfBooksByStatus("read")

  if (!shelf) {
    redirect("/login")
  }

  return (
    <PageShell
      eyebrow="Shelf"
      title="Read"
      description={`Books finished by ${shelf.user.name}.`}
      backHref="/shelf"
      backLabel="Back to shelf"
    >
      <ReadBooksList books={shelf.books} />
    </PageShell>
  )
}
