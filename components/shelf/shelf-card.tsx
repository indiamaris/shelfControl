import Link from "next/link"

type ShelfCardProps = {
  title: string
  count: number
  href: string
}

export default function ShelfCard({ title, count, href }: ShelfCardProps) {
  return (
    <section className="rounded-[24px] border border-[var(--color-surface-border)] bg-[var(--color-surface)] p-5 shadow-[0_10px_35px_var(--color-shadow)]">
  
        <div className="flex items-start justify-between gap-4">
          <span className="inline-flex rounded-full bg-[color:color-mix(in_srgb,var(--color-secondary)_18%,transparent)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-secondary)]">
            {title}
          </span>
          <span className="rounded-full bg-[color:color-mix(in_srgb,var(--color-primary)_16%,transparent)] px-3 py-1 text-sm font-semibold text-[var(--color-primary)]">
            {count}
          </span>
        </div>

        <Link
          href={href}
          className="mt-auto pt-3 flex w-full items-center justify-end text-sm font-semibold text-[var(--color-secondary)] transition hover:text-[var(--color-accent)]"
        >
          <span aria-hidden="true">→</span>
        </Link>

    </section>
  )
}
