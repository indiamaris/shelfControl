import { getCurrentUser } from "@lib/auth/get-current-user"
import { userRepository } from "@repositories/users/user-repository"

const shelfStatuses = ["read", "reading", "toBeRead", "abandoned"] as const

type ShelfStatus = (typeof shelfStatuses)[number]

function buildShelfColumns(
  shelfItems: Array<{
    status: string
    book: {
      id: number
      title: string
      author: string
      price: { toString(): string }
      quotes: Array<{ id: number }>
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

export async function getCurrentUserShelf() {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    return null
  }

  const user = await userRepository.findByIdWithShelfItems(currentUser.id)

  if (!user) {
    return null
  }

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    shelfColumns: buildShelfColumns(user.shelfItems),
    quoteCount: buildShelfQuoteCount(user.shelfItems),
  }
}
