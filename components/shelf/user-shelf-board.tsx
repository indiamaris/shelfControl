import ShelfCard from "@components/shelf/shelf-card"

type UserShelfBoardProps = {
  userId: number
  quoteCount: number
  shelfColumns: {
    read: Array<unknown>
    reading: Array<unknown>
    toBeRead: Array<unknown>
    abandoned: Array<unknown>
  }
}

export default function UserShelfBoard({
  userId,
  quoteCount,
  shelfColumns,
}: UserShelfBoardProps) {
  return (
  
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        <ShelfCard
          title="Read"
          count={shelfColumns.read.length}
          href={`/shelf/${userId}/read`}
        />
        <ShelfCard
          title="Reading"
          count={shelfColumns.reading.length}
          href={`/shelf/${userId}/reading`}
        />
        <ShelfCard
          title="TBR"
          count={shelfColumns.toBeRead.length}
          href={`/shelf/${userId}/to-be-read`}
        />
        <ShelfCard
          title="Abandoned"
          count={shelfColumns.abandoned.length}
          href={`/shelf/${userId}/abandoned`}
        />
        <ShelfCard
          title="Quotes"
          count={quoteCount}
          href={`/shelf/${userId}/quotes`}
        />
      </div>

  )
}
