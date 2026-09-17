interface UserGreetingProps {
  username?: string;
}

function UserGreeting({ username }: UserGreetingProps) {
  return (
    <div className="common">
      <h2>
      Hello, {username || "Guest"}!
    </h2>
    </div>
  );
}

export default UserGreeting;