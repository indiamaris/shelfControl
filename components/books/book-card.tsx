type BookCardProps = {
  title: string
  author: string
  price: string
}

export default function BookCard({ title, author, price }: BookCardProps) {
  return (
    <article className="rounded-[24px] border border-[var(--color-surface-border)] bg-[var(--color-surface)] p-5 shadow-[0_10px_35px_var(--color-shadow)]">
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-4">
          <span className="inline-flex rounded-full bg-[color:color-mix(in_srgb,var(--color-secondary)_18%,transparent)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-secondary)]">
            Book
          </span>
          <span className="rounded-full bg-[color:color-mix(in_srgb,var(--color-primary)_16%,transparent)] px-3 py-1 text-sm font-semibold text-[var(--color-primary)]">
            ${price}
          </span>
        </div>

        <div className="space-y-1">
          <h2 className="text-lg font-semibold text-[var(--color-primary)]">{title}</h2>
          <p className="text-sm text-[var(--color-muted)]">{author}</p>
        </div>
      </div>
    </article>
  )
}
