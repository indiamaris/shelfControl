import ShelfCard from "@components/shelf/shelf-card"

type ShelfBook = {
  id: number
  title: string
  author: string
  price: string
}

type UserShelfBoardProps = {
  quoteCount: number
  shelfColumns: {
    read: Array<ShelfBook>
    reading: Array<ShelfBook>
    toBeRead: Array<ShelfBook>
    abandoned: Array<ShelfBook>
  }
}

function getTotalPrice(books: Array<ShelfBook>) {
  return books
    .reduce((total, book) => total + Number.parseFloat(book.price), 0)
    .toFixed(2)
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
          totalPrice={getTotalPrice(shelfColumns.read)}
          href="/shelf/read"
        />
        <ShelfCard
          title="Reading"
          count={shelfColumns.reading.length}
          totalPrice={getTotalPrice(shelfColumns.reading)}
          href="/shelf/reading"
        />
        <ShelfCard
          title="TBR"
          count={shelfColumns.toBeRead.length}
          totalPrice={getTotalPrice(shelfColumns.toBeRead)}
          href="/shelf/to-be-read"
        />
        <ShelfCard
          title="Abandoned"
          count={shelfColumns.abandoned.length}
          totalPrice={getTotalPrice(shelfColumns.abandoned)}
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
