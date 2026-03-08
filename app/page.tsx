import Link from "next/link"

export default function Home() {
  return (
    <div>
      <Link href="/users">Users</Link>
      <Link href="/books">Books</Link>
  
    </div>
  )
}