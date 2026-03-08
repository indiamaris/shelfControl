import ToBeReadBooksList from "@components/shelf/to-be-read/to-be-read-books-list"
import PageShell from "@components/ui/page-shell"
import { getCurrentUserShelfBooksByStatus } from "@services/shelf/get-current-user-shelf-books-by-status"
import { redirect } from "next/navigation"

export default async function ToBeReadShelfPage() {
  const shelf = await getCurrentUserShelfBooksByStatus("toBeRead")

  if (!shelf) {
    redirect("/login")
  }

  return (
    <PageShell
      eyebrow="Shelf"
      title="TBR"
      description={`Books still waiting on ${shelf.user.name}'s list.`}
      backHref="/shelf"
      backLabel="Back to shelf"
    >
      <ToBeReadBooksList books={shelf.books} />
    </PageShell>
  )
}
