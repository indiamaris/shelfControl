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
        <li
          key={quote.id}
          className="rounded-[24px] border border-[var(--color-surface-border)] bg-[var(--color-surface)] p-5 shadow-[0_10px_35px_var(--color-shadow)]"
        >
          <div className="space-y-3">
            <span className="inline-flex rounded-full bg-[color:color-mix(in_srgb,var(--color-primary)_18%,transparent)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              Quote
            </span>
            <blockquote className="text-lg leading-8 text-[var(--color-text)]">
              &quot;{quote.text}&quot;
            </blockquote>
            <div className="text-sm text-[var(--color-muted)]">
              <span className="font-semibold text-[var(--color-secondary)]">
                {quote.character}
              </span>
              {" in "}
              <span>{quote.book.title}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
