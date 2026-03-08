import { NextResponse } from "next/server"
import { createQuote } from "@services/quotes/create-quote"
import { listQuotes } from "@services/quotes/list-quotes"

export async function POST(req: Request) {
  const body = await req.json()

  const quote = await createQuote({
    text: body.text,
    character: body.character,
    bookId: body.bookId,
  })

  return NextResponse.json(quote)
}

export async function GET() {
  const quotes = await listQuotes()

  return NextResponse.json(quotes)
}
