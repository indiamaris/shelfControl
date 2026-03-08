import AbandonedBooksList from "@components/shelf/abandoned/abandoned-books-list"
import PageShell from "@components/ui/page-shell"
import { getShelfBooksByStatus } from "@services/shelf/get-shelf-books-by-status"

type AbandonedShelfPageProps = {
  params: Promise<{
    userId: string
  }>
}

export default async function AbandonedShelfPage({
  params,
}: AbandonedShelfPageProps) {
  const { userId } = await params
  const shelf = await getShelfBooksByStatus(Number(userId), "abandoned")

  return (
    <PageShell
      eyebrow="Shelf"
      title="Abandoned"
      description={`Books set aside by ${shelf.user?.name ?? "this user"}.`}
      backHref="/shelf"
      backLabel="Back to shelf"
    >
      <AbandonedBooksList books={shelf.books} />
    </PageShell>
  )
}
