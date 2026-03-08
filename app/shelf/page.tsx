import ShowQuoteOnShelf from "@components/shelf/show-quote-on-shelf"
import UserShelfBoard from "@components/shelf/user-shelf-board"
import PageShell from "@components/ui/page-shell"
import { getUsers } from "@services/users/get-users"

export default async function ShelfPage() {
  const users = await getUsers()

  return (
    <PageShell
      eyebrow="Shelf Overview"
      title="Julian's shelf"
      description=""
    >
      <div className="space-y-8">
        {users.length ? (
          <section className="grid gap-6">
            {users.map((user) => (
              <UserShelfBoard
                key={user.id}
                userId={user.id}
                quoteCount={user.quoteCount}
                shelfColumns={user.shelfColumns}
              />
            ))}
          </section>
        ) : (
          <div className="rounded-[24px] border border-dashed border-[var(--color-surface-border)] bg-[var(--color-surface)] p-8 text-center text-[var(--color-muted)] shadow-[0_10px_35px_var(--color-shadow)]">
            No shelves available yet.
          </div>
        )}

        <ShowQuoteOnShelf />
      </div>
    </PageShell>
  )
}
