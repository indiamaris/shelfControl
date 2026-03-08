import PageShell from "@components/ui/page-shell"
import UserList from "@components/users/all-users"
import { getUsers } from "@services/users/get-users"

export default async function UsersPage() {
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