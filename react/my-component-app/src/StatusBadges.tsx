interface StatusBadgeProps {
  isActive: boolean;
}

function StatusBadges({ isActive }: StatusBadgeProps) {
  return (
    <span>
      {isActive ? "Active" : "Inactive"}
    </span>
  );
}

export default StatusBadges;