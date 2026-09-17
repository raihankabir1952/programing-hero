interface StatusBadgeProps {
    isActive: boolean;
}

function StatusBadge({ isActive }: StatusBadgeProps) {
    if (isActive) {
        return <span className="status-badge active">Active</span>;
    }
    return <span className="status-badge inactive">Inactive</span>;
}

export default StatusBadge;