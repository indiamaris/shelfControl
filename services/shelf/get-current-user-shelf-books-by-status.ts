import { getCurrentUser } from "@lib/auth/get-current-user"
import {
  shelfRepository,
  type ShelfStatus,
} from "@repositories/shelf/shelf-repository"

export async function getCurrentUserShelfBooksByStatus(status: ShelfStatus) {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    return null
  }

  const shelfItems = await shelfRepository.findBooksByStatus(currentUser.id, status)

  return {
    user: currentUser,
    books: shelfItems.map((item) => ({
      id: item.book.id,
      title: item.book.title,
      author: item.book.author,
      price: item.book.price.toString(),
    })),
  }
}
