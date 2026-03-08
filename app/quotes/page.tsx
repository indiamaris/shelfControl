import QuoteList from "@components/quotes/all-quotes"
import { getQuotes } from "@services/quotes/get-quotes"

export default async function QuotesPage() {
  const quotes = await getQuotes()

  return (
    <div>
      <h1>Quotes</h1>
      <QuoteList quotes={quotes} />
    </div>
  )
}
