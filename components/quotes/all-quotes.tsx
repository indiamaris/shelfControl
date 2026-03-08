import QuoteCard from "@components/quotes/quote-card"

type Quote = {
  id: number
  text: string
  character: string
  book: {
    id: number
    title: string
  }
}

export default function QuoteList({ quotes }: { quotes: Quote[] }) {
  if (!quotes.length) {
    return (
      <div className="rounded-[24px] border border-dashed border-[var(--color-surface-border)] bg-[var(--color-surface)] p-8 text-center text-[var(--color-muted)] shadow-[0_10px_35px_var(--color-shadow)]">
        No quotes saved yet.
      </div>
    )
  }

  return (
    <ul className="grid gap-4">
      {quotes.map((quote) => (
        <li key={quote.id}>
          <QuoteCard
            text={quote.text}
            character={quote.character}
            bookTitle={quote.book.title}
          />
        </li>
      ))}
    </ul>
  )
}
