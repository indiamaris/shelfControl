import { NextResponse } from "next/server"
import { createUser } from "@services/users/create-user"
import { listUsers } from "@services/users/list-users"

export async function POST(req: Request) {
  const body = await req.json()

  const user = await createUser({
    name: body.name,
    email: body.email,
  })

  return NextResponse.json(user)
}

export async function GET() {
  const users = await listUsers()

  return NextResponse.json(users)
}