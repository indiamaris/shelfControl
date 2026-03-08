import { NextResponse } from "next/server"
import { createBook } from "@services/books/create-book"
import { listBooks } from "@services/books/list-books"

export async function POST(req: Request) {
  const body = await req.json()

  const book = await createBook({
    title: body.title,
    author: body.author,
    userId: body.userId,
  })

  return NextResponse.json(book)
}

export async function GET() {
  const books = await listBooks()

  return NextResponse.json(books)
}