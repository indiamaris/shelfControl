import {
  shelfRepository,
  type ShelfStatus,
} from "@repositories/shelf/shelf-repository"

export async function getShelfBooksByStatus(
  userId: number,
  status: ShelfStatus,
) {
  const shelfItems = await shelfRepository.findBooksByStatus(userId, status)

  const user = shelfItems[0]?.user ?? null

  return {
    user,
    books: shelfItems.map((item) => ({
      id: item.book.id,
      title: item.book.title,
      author: item.book.author,
      price: item.book.price.toString(),
    })),
  }
}
