import ShowQuoteOnShelf from "@components/shelf/show-quote-on-shelf"
import UserShelfBoard from "@components/shelf/user-shelf-board"
import PageShell from "@components/ui/page-shell"
import { getCurrentUserShelf } from "@services/shelf/get-current-user-shelf"
import { redirect } from "next/navigation"

export default async function ShelfPage() {
  const shelf = await getCurrentUserShelf()

  if (!shelf) {
    redirect("/login")
  }

  return (
    <PageShell
      eyebrow="Shelf Overview"
      title={`${shelf.name}'s shelf`}
      description="Track your reading flow and open each category directly from your authenticated shelf."
      backHref="/login"
      backLabel="Back to login"
    >
      <div className="space-y-8">
        <section className="grid gap-6">
          <UserShelfBoard
            quoteCount={shelf.quoteCount}
            shelfColumns={shelf.shelfColumns}
          />
        </section>

        <ShowQuoteOnShelf />
      </div>
    </PageShell>
  )
}
