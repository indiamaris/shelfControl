import ReadingBooksList from "@components/shelf/reading/reading-books-list"
import PageShell from "@components/ui/page-shell"
import { getShelfBooksByStatus } from "@services/shelf/get-shelf-books-by-status"

type ReadingShelfPageProps = {
  params: Promise<{
    userId: string
  }>
}

export default async function ReadingShelfPage({
  params,
}: ReadingShelfPageProps) {
  const { userId } = await params
  const shelf = await getShelfBooksByStatus(Number(userId), "reading")

  return (
    <PageShell
      eyebrow="Shelf"
      title="Reading"
      description={`Books currently being read by ${shelf.user?.name ?? "this user"}.`}
      backHref="/shelf"
      backLabel="Back to shelf"
    >
      <ReadingBooksList books={shelf.books} />
    </PageShell>
  )
}
