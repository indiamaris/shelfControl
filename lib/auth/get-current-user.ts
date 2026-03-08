import { getServerSession } from "next-auth"

import { authOptions } from "@lib/auth/auth-options"
import { userRepository } from "@repositories/users/user-repository"

export async function getCurrentUser() {
  const session = await getServerSession(authOptions)
  const email = session?.user?.email

  if (!email) {
    return null
  }

  return userRepository.findByEmail(email)
}
