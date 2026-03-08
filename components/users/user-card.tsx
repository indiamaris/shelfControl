type ShelfMetric = {
  count: number
  totalPrice: string
}

type UserCardProps = {
  name: string
  email: string
  isAdmin: boolean
  shelfSummary: {
    read: ShelfMetric
    reading: ShelfMetric
    toBeRead: ShelfMetric
    abandoned: ShelfMetric
  }
}

const metricLabels: Array<{
  key: keyof UserCardProps["shelfSummary"]
  label: string
}> = [
  { key: "read", label: "Read" },
  { key: "reading", label: "Reading" },
  { key: "toBeRead", label: "TBR" },
  { key: "abandoned", label: "Abandoned" },
]

export default function UserCard({
  name,
  email,
  isAdmin,
  shelfSummary,
}: UserCardProps) {
  return (
    <article className="rounded-[24px] border border-[var(--color-surface-border)] bg-[var(--color-surface)] p-5 shadow-[0_10px_35px_var(--color-shadow)]">
      <div className="space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-1">
            <h2 className="text-lg font-semibold text-[var(--color-primary)]">{name}</h2>
            <p className="text-sm text-[var(--color-muted)]">{email}</p>
          </div>

          <span className="inline-flex w-fit rounded-full bg-[color:color-mix(in_srgb,var(--color-secondary)_18%,transparent)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-secondary)]">
            {isAdmin ? "Admin User" : "User"}
          </span>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {metricLabels.map(({ key, label }) => {
            const metric = shelfSummary[key]

            return (
              <div
                key={key}
                className="rounded-[20px] border border-[var(--color-surface-border)] bg-[color:color-mix(in_srgb,var(--color-primary)_8%,transparent)] p-4"
              >
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-secondary)]">
                    {label}
                  </p>
                  <p className="text-2xl font-bold text-[var(--color-primary)]">
                    {metric.count}
                  </p>
                  <p className="text-sm text-[var(--color-muted)]">
                    Total price: ${metric.totalPrice}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </article>
  )
}
