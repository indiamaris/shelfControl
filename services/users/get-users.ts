import { userRepository } from "@repositories/users/user-repository"

const shelfStatuses = ["read", "reading", "toBeRead", "abandoned"] as const

type ShelfStatus = (typeof shelfStatuses)[number]

function buildShelfSummary(
  shelfItems: Array<{
    status: string
    book: {
      price: { toString(): string }
    }
  }>,
) {
  return shelfStatuses.reduce(
    (summary, status) => {
      const itemsForStatus = shelfItems.filter((item) => item.status === status)
      const totalPrice = itemsForStatus.reduce(
        (sum, item) => sum + Number(item.book.price.toString()),
        0,
      )

      summary[status] = {
        count: itemsForStatus.length,
        totalPrice: totalPrice.toFixed(2),
      }

      return summary
    },
    {} as Record<ShelfStatus, { count: number; totalPrice: string }>,
  )
}

function buildShelfColumns(
  shelfItems: Array<{
    status: string
    book: {
      id: number
      title: string
      author: string
      price: { toString(): string }
    }
  }>,
) {
  return shelfStatuses.reduce(
    (columns, status) => {
      columns[status] = shelfItems
        .filter((item) => item.status === status)
        .map((item) => ({
          id: item.book.id,
          title: item.book.title,
          author: item.book.author,
          price: item.book.price.toString(),
        }))

      return columns
    },
    {} as Record<
      ShelfStatus,
      Array<{ id: number; title: string; author: string; price: string }>
    >,
  )
}

function buildShelfQuoteCount(
  shelfItems: Array<{
    book: {
      quotes: Array<{ id: number }>
    }
  }>,
) {
  return shelfItems.reduce((total, item) => total + item.book.quotes.length, 0)
}

export async function getUsers() {
  const users = await userRepository.findAllWithShelfItems()

  return users.map((user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
    shelfSummary: buildShelfSummary(user.shelfItems),
    shelfColumns: buildShelfColumns(user.shelfItems),
    quoteCount: buildShelfQuoteCount(user.shelfItems),
  }))
}
