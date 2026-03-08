import QuoteList from "@components/quotes/all-quotes"
import PageShell from "@components/ui/page-shell"
import { getCurrentUserShelfQuotes } from "@services/shelf/get-current-user-shelf-quotes"
import { redirect } from "next/navigation"

export default async function ShelfQuotesPage() {
  const shelf = await getCurrentUserShelfQuotes()

  if (!shelf) {
    redirect("/login")
  }

  return (
    <PageShell
      eyebrow="Shelf"
      title="Quotes"
      description={`Highlighted passages connected to ${shelf.user.name}'s shelf.`}
      backHref="/shelf"
      backLabel="Back to shelf"
    >
      <QuoteList quotes={shelf.quotes} />
    </PageShell>
  )
}
