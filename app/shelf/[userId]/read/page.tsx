import ReadBooksList from "@components/shelf/read/read-books-list"
import PageShell from "@components/ui/page-shell"
import { getShelfBooksByStatus } from "@services/shelf/get-shelf-books-by-status"

type ReadShelfPageProps = {
  params: Promise<{
    userId: string
  }>
}

export default async function ReadShelfPage({ params }: ReadShelfPageProps) {
  const { userId } = await params
  const shelf = await getShelfBooksByStatus(Number(userId), "read")

  return (
    <PageShell
      eyebrow="Shelf"
      title="Read"
      description={`Books finished by ${shelf.user?.name ?? "this user"}.`}
      backHref="/shelf"
      backLabel="Back to shelf"
    >
      <ReadBooksList books={shelf.books} />
    </PageShell>
  )
}
