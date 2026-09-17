import UserList from "./UserList";
import "./App.css";

function App() {
  const users = [
    {
      id: 1,
      name: "Alice",
      email: "alice@example.com",
      isActive: true,
    },
    {
      id: 2,
      name: "Bob",
      email: "bob@example.com",
      isActive: false,
    },
    {
      id: 3,
      name: "Charlie",
      email: "charlie@example.com",
      isActive: true,
    },
    {
      id: 4,
      name: "David",
      email: "david@example.com",
      isActive: false,
    },
  ];

  return (
    <div>
      <h1>User Management</h1>

      <UserList users={users} />
    </div>
  );
}

export default App;