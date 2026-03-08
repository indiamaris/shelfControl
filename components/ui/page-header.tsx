type PageHeaderProps = {
  eyebrow?: string
  title: string
  description: string
}

export default function PageHeader({
  eyebrow,
  title,
  description,
}: PageHeaderProps) {
  return (
    <header className="space-y-3">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-secondary)]">
          {eyebrow}
        </p>
      ) : null}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight text-[var(--color-primary)] sm:text-5xl">
          {title}
        </h1>
        <p className="max-w-2xl text-base leading-7 text-[var(--color-muted)] sm:text-lg">
          {description}
        </p>
      </div>
    </header>
  )
}
