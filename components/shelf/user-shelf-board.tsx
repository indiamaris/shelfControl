import ShelfCard from "@components/shelf/shelf-card"

type UserShelfBoardProps = {
  quoteCount: number
  shelfColumns: {
    read: Array<unknown>
    reading: Array<unknown>
    toBeRead: Array<unknown>
    abandoned: Array<unknown>
  }
}

export default function UserShelfBoard({
  quoteCount,
  shelfColumns,
}: UserShelfBoardProps) {
  return (
  
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        <ShelfCard
          title="Read"
          count={shelfColumns.read.length}
          href="/shelf/read"
        />
        <ShelfCard
          title="Reading"
          count={shelfColumns.reading.length}
          href="/shelf/reading"
        />
        <ShelfCard
          title="TBR"
          count={shelfColumns.toBeRead.length}
          href="/shelf/to-be-read"
        />
        <ShelfCard
          title="Abandoned"
          count={shelfColumns.abandoned.length}
          href="/shelf/abandoned"
        />
        <ShelfCard
          title="Quotes"
          count={quoteCount}
          href="/shelf/quotes"
        />
      </div>

  )
}
