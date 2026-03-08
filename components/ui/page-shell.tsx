import Link from "next/link"
import type { ReactNode } from "react"

import PageHeader from "@components/ui/page-header"

type PageShellProps = {
  title: string
  description: string
  children: ReactNode
  eyebrow?: string
  backHref?: string
  backLabel?: string
  actions?: ReactNode
}

export default function PageShell({
  title,
  description,
  children,
  eyebrow,
  backHref,
  backLabel = "Back",
  actions,
}: PageShellProps) {
  return (
    <main className="min-h-screen px-6 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <div className="flex flex-col gap-5 rounded-[28px] border border-[var(--color-surface-border)] bg-[var(--color-surface)] p-6 shadow-[0_16px_50px_var(--color-shadow)] backdrop-blur sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {backHref ? (
              <Link
                href={backHref}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-secondary)] transition hover:text-[var(--color-accent)]"
              >
                <span aria-hidden="true">←</span>
                {backLabel}
              </Link>
            ) : (
              <span />
            )}
            {actions ? <div className="flex items-center gap-3">{actions}</div> : null}
          </div>

          <PageHeader eyebrow={eyebrow} title={title} description={description} />
        </div>

        {children}
      </div>
    </main>
  )
}
