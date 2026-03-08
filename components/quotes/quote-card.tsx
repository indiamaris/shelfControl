type QuoteCardProps = {
  text: string
  character: string
  bookTitle: string
}

export default function QuoteCard({
  text,
  character,
  bookTitle,
}: QuoteCardProps) {
  return (
    <article className="rounded-[24px] border border-[var(--color-surface-border)] bg-[var(--color-surface)] p-5 shadow-[0_10px_35px_var(--color-shadow)]">
      <div className="space-y-3">
        <span className="inline-flex rounded-full bg-[color:color-mix(in_srgb,var(--color-primary)_18%,transparent)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
          Quote
        </span>

        <blockquote className="text-lg leading-8 text-[var(--color-text)]">
          &quot;{text}&quot;
        </blockquote>

        <div className="text-sm text-[var(--color-muted)]">
          <span className="font-semibold text-[var(--color-secondary)]">
            {character}
          </span>
          {" in "}
          <span>{bookTitle}</span>
        </div>
      </div>
    </article>
  )
}
