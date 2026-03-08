import NavCard from "@components/ui/nav-card"
import PageShell from "@components/ui/page-shell"

export default function Home() {
  return (
    <PageShell
      eyebrow="Shelf Control"
      title="Your reading hub"
      description="Manage readers, books, and memorable quotes with a clean interface designed for both light and dark mode."
    >
      <section className="grid gap-5 md:grid-cols-3">
        <NavCard
          href="/users"
          title="Users"
          description="Browse readers and prepare each personal shelf."
        />
        <NavCard
          href="/books"
          title="Books"
          description="Explore the catalog and keep your library organized."
        />
        <NavCard
          href="/quotes"
          title="Quotes"
          description="Review highlighted passages linked to each book."
        />
      </section>
    </PageShell>
  )
}
