import Link from "next/link"

export default function Home() {
  return (
    <div>
      <Link href="/users">Users</Link>
      <br />
      <Link href="/books">Books</Link>
  
    </div>
  )
}
