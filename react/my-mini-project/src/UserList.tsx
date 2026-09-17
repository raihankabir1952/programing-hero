import UserCard from "./UserCard";

interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

interface UserListProps {
  users: User[];
}

function UserList({ users }: UserListProps) {
  return (
    <div>
      {users.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          email={user.email}
          isActive={user.isActive}
        />
      ))}
    </div>
  );
}

export default UserList;