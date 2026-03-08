import UserList from "@components/users/all-users"
import { getUsers } from "@lib/users/get-users"

export default async function UsersPage() {
  const users = await getUsers()

  return (
    <div>
      <h1>Usuários</h1>
      <UserList users={users} />
    </div>
  )
}