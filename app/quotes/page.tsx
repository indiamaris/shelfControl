import PageShell from "@components/ui/page-shell"
import QuoteList from "@components/quotes/all-quotes"
import { getQuotes } from "@services/quotes/get-quotes"

export default async function QuotesPage() {
  const quotes = await getQuotes()

  return (
    <PageShell
      eyebrow="Highlights"
      title="Quotes"
      description="Capture memorable lines, who said them, and the book they belong to in one place."
      backHref="/login"
      backLabel="Back to dashboard"
    >
      <QuoteList quotes={quotes} />
    </PageShell>
  )
}
