import { getCurrentUser } from "@lib/auth/get-current-user"

export async function canViewAdminNavigation() {
  const currentUser = await getCurrentUser()

  return currentUser?.role === "ADMIN"
}
