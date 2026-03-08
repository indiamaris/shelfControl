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

export async function getUsers() {
  const users = await userRepository.findAllWithShelfItems()

  return users.map((user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
    shelfSummary: buildShelfSummary(user.shelfItems),
  }))
}
