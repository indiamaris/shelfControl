import { cookies } from "next/headers"

import { userRepository } from "@repositories/users/user-repository"

export async function getCurrentUser() {
  const cookieStore = await cookies()
  const currentUserId = Number(cookieStore.get("current-user-id")?.value)

  if (!Number.isInteger(currentUserId) || currentUserId <= 0) {
    return null
  }

  return userRepository.findById(currentUserId)
}
