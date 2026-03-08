import Link from "next/link"

type NavCardProps = {
  href: string
  title: string
  description: string
}

export default function NavCard({ href, title, description }: NavCardProps) {
  return (
    <Link
      href={href}
      className="group rounded-[24px] border border-[var(--color-surface-border)] bg-[var(--color-surface)] p-6 shadow-[0_10px_35px_var(--color-shadow)] transition duration-200 hover:-translate-y-1 hover:border-[var(--color-secondary)] hover:shadow-[0_18px_45px_var(--color-shadow)]"
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-xl font-semibold text-[var(--color-primary)] transition group-hover:text-[var(--color-accent)]">
            {title}
          </h2>
          <span
            aria-hidden="true"
            className="text-lg font-semibold text-[var(--color-secondary)] transition group-hover:translate-x-1"
          >
            →
          </span>
        </div>
        <p className="text-sm leading-6 text-[var(--color-muted)]">{description}</p>
      </div>
    </Link>
  )
}
