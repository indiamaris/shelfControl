type Book = {
    id: number
    title: string
    author: string
  }
  
  export default function BookList({ books }: { books: Book[] }) {
  
    return (
      <ul>
  
        {books.map(book => (
          <li key={book.id}>
            {book.title} ({book.author})
          </li>
        ))}
  
      </ul>
    )
  }