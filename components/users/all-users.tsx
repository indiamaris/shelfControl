import UserCard from "@components/users/user-card"

type ShelfMetric = {
  count: number
  totalPrice: string
}

type User = {
  id: number
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
        <li key={user.id}>
          <UserCard
            name={user.name}
            email={user.email}
            isAdmin={user.isAdmin}
            shelfSummary={user.shelfSummary}
          />
        </li>
      ))}
    </ul>
  )
}