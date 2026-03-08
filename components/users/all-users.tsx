type User = {
  id: number
  name: string
  email: string
}

export default function UserList({ users }: { users: User[] }) {
  if (!users.length) {
    return (
      <div className="rounded-[24px] border border-dashed border-[var(--color-surface-border)] bg-[var(--color-surface)] p-8 text-center text-[var(--color-muted)] shadow-[0_10px_35px_var(--color-shadow)]">
        No users yet.
      </div>
    )
  }

  return (
    <ul className="grid gap-4">
      {users.map((user) => (
        <li
          key={user.id}
          className="rounded-[24px] border border-[var(--color-surface-border)] bg-[var(--color-surface)] p-5 shadow-[0_10px_35px_var(--color-shadow)]"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-[var(--color-primary)]">
                {user.name}
              </h2>
              <p className="text-sm text-[var(--color-muted)]">{user.email}</p>
            </div>
            <span className="inline-flex w-fit rounded-full bg-[color:color-mix(in_srgb,var(--color-secondary)_18%,transparent)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-secondary)]">
              User
            </span>
          </div>
        </li>
      ))}
    </ul>
  )
}