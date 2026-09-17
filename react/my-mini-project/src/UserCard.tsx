interface UserCardProps {
  name: string;
  email: string;
  isActive: boolean;
}

function UserCard({ name, email, isActive }: UserCardProps) {
  return (
    <div>
      <h2>{name}</h2>

      <p>{email}</p>

      <p>
        {isActive ? "Active" : "Inactive"}
      </p>
    </div>
  );
}

export default UserCard;