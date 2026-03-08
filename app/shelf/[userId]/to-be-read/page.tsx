import ToBeReadBooksList from "@components/shelf/to-be-read/to-be-read-books-list"
import PageShell from "@components/ui/page-shell"
import { getShelfBooksByStatus } from "@services/shelf/get-shelf-books-by-status"

type ToBeReadShelfPageProps = {
  params: Promise<{
    userId: string
  }>
}

export default async function ToBeReadShelfPage({
  params,
}: ToBeReadShelfPageProps) {
  const { userId } = await params
  const shelf = await getShelfBooksByStatus(Number(userId), "toBeRead")

  return (
    <PageShell
      eyebrow="Shelf"
      title="TBR"
      description={`Books still waiting on ${shelf.user?.name ?? "this user"}'s list.`}
      backHref="/shelf"
      backLabel="Back to shelf"
    >
      <ToBeReadBooksList books={shelf.books} />
    </PageShell>
  )
}
