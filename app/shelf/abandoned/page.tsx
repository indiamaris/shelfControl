import AbandonedBooksList from "@components/shelf/abandoned/abandoned-books-list"
import PageShell from "@components/ui/page-shell"
import { getCurrentUserShelfBooksByStatus } from "@services/shelf/get-current-user-shelf-books-by-status"
import { redirect } from "next/navigation"

export default async function AbandonedShelfPage() {
  const shelf = await getCurrentUserShelfBooksByStatus("abandoned")

  if (!shelf) {
    redirect("/login")
  }

  return (
    <PageShell
      eyebrow="Shelf"
      title="Abandoned"
      description={`Books set aside by ${shelf.user.name}.`}
      backHref="/shelf"
      backLabel="Back to shelf"
    >
      <AbandonedBooksList books={shelf.books} />
    </PageShell>
  )
}
