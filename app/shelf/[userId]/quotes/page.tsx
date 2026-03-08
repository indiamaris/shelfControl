import QuoteList from "@components/quotes/all-quotes"
import PageShell from "@components/ui/page-shell"
import { getShelfQuotes } from "@services/shelf/get-shelf-quotes"

type ShelfQuotesPageProps = {
  params: Promise<{
    userId: string
  }>
}

export default async function ShelfQuotesPage({
  params,
}: ShelfQuotesPageProps) {
  const { userId } = await params
  const shelf = await getShelfQuotes(Number(userId))

  return (
    <PageShell
      eyebrow="Shelf"
      title="Quotes"
      description={`Highlighted passages connected to ${shelf.user?.name ?? "this user"}'s shelf.`}
      backHref="/shelf"
      backLabel="Back to shelf"
    >
      <QuoteList quotes={shelf.quotes} />
    </PageShell>
  )
}
