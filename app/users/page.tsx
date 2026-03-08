import PageShell from "@components/ui/page-shell"
import UserList from "@components/users/all-users"
import { canViewAdminNavigation } from "@lib/auth/can-view-admin-navigation"
import { redirect } from "next/navigation"
import { getUsers } from "@services/users/get-users"

export default async function UsersPage() {
  const canAccessAdminView = await canViewAdminNavigation()

  if (!canAccessAdminView) {
    redirect("/login")
  }

  const users = await getUsers()

  return (
    <PageShell
      eyebrow="Readers"
      title="Users"
      description="See everyone registered in the app and prepare their shelves, reading states, and future activity."
      backHref="/login"
      backLabel="Back to dashboard"
    >
      <UserList users={users} />
    </PageShell>
  )
}