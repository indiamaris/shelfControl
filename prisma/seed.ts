import "dotenv/config"

import { PrismaPg } from "@prisma/adapter-pg"
import bcrypt from "bcrypt"

import { PrismaClient } from "@generated/prisma/client"

const connectionString = process.env.DATABASE_URL

if (!connectionString) {
  throw new Error("DATABASE_URL is not set")
}

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString }),
})

async function main() {
  const defaultPassword = await bcrypt.hash("password123", 10)

  await prisma.shelfItem.deleteMany()
  await prisma.quote.deleteMany()
  await prisma.book.deleteMany()
  await prisma.user.deleteMany()

  const [julian, mara, sam] = await Promise.all([
    prisma.user.create({
      data: {
        name: "Julian Reader",
        email: "julian@example.com",
        password: defaultPassword,
        role: "ADMIN",
      },
    }),
    prisma.user.create({
      data: {
        name: "Mara Stone",
        email: "mara@example.com",
        password: defaultPassword,
        role: "USER",
      },
    }),
    prisma.user.create({
      data: {
        name: "Sam Rivers",
        email: "sam@example.com",
        password: defaultPassword,
        role: "USER",
      },
    }),
  ])

  const books = await Promise.all([
    prisma.book.create({
      data: {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        price: "39.90",
      },
    }),
    prisma.book.create({
      data: {
        title: "The Two Towers",
        author: "J.R.R. Tolkien",
        price: "42.50",
      },
    }),
    prisma.book.create({
      data: {
        title: "Dune",
        author: "Frank Herbert",
        price: "56.00",
      },
    }),
    prisma.book.create({
      data: {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        price: "28.90",
      },
    }),
    prisma.book.create({
      data: {
        title: "The Name of the Wind",
        author: "Patrick Rothfuss",
        price: "49.90",
      },
    }),
    prisma.book.create({
      data: {
        title: "The Left Hand of Darkness",
        author: "Ursula K. Le Guin",
        price: "35.50",
      },
    }),
  ])

  const [
    theHobbit,
    theTwoTowers,
    dune,
    prideAndPrejudice,
    theNameOfTheWind,
    leftHandOfDarkness,
  ] = books

  await prisma.quote.createMany({
    data: [
      {
        text: "There is some good in this world, and it's worth fighting for.",
        character: "Samwise Gamgee",
        bookId: theTwoTowers.id,
      },
      {
        text: "Not all those who wander are lost.",
        character: "Bilbo Baggins",
        bookId: theHobbit.id,
      },
      {
        text: "Fear is the mind-killer.",
        character: "Paul Atreides",
        bookId: dune.id,
      },
      {
        text: "Words are pale shadows of forgotten names.",
        character: "Kvothe",
        bookId: theNameOfTheWind.id,
      },
    ],
  })

  await prisma.shelfItem.createMany({
    data: [
      {
        userId: julian.id,
        bookId: theHobbit.id,
        status: "read",
      },
      {
        userId: julian.id,
        bookId: theTwoTowers.id,
        status: "reading",
      },
      {
        userId: julian.id,
        bookId: dune.id,
        status: "toBeRead",
      },
      {
        userId: julian.id,
        bookId: prideAndPrejudice.id,
        status: "abandoned",
      },
      {
        userId: mara.id,
        bookId: prideAndPrejudice.id,
        status: "read",
      },
      {
        userId: mara.id,
        bookId: leftHandOfDarkness.id,
        status: "reading",
      },
      {
        userId: sam.id,
        bookId: dune.id,
        status: "reading",
      },
      {
        userId: sam.id,
        bookId: theNameOfTheWind.id,
        status: "toBeRead",
      },
    ],
  })

  console.log("Seed completed successfully.")
  console.log(`Admin user for testing: ${julian.email}`)
}

main()
  .catch((error) => {
    console.error("Seed failed.")
    console.error(error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
