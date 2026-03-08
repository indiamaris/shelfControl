type User = {
    id: number
    name: string
    email: string
  }
  
  export default function UserList({ users }: { users: User[] }) {
  
    return (
      <ul>
  
        {users.map(user => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
  
      </ul>
    )
  }