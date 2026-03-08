type Quote = {
  id: number
  text: string
  character: string
  book: {
    id: number
    title: string
  }
}

export default function QuoteList({ quotes }: { quotes: Quote[] }) {
  return (
    <ul>
      {quotes.map((quote) => (
        <li key={quote.id}>
          &quot;{quote.text}&quot; - {quote.character} in {quote.book.title}
        </li>
      ))}
    </ul>
  )
}
