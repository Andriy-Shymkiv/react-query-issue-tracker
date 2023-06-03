interface StatusSelectProps {
  status: string;
  onStatusChange: (status: string) => void;
}

const possibleStatuses = [
  {
    id: 'backlog',
    label: 'Backlog',
  },
  {
    id: 'todo',
    label: 'To Do',
  },
  {
    id: 'inProgress',
    label: 'In Progress',
  },
  {
    id: 'done',
    label: 'Done',
  },
  {
    id: 'cancelled',
    label: 'Cancelled',
  },
];

export const StatusSelect: React.FC<StatusSelectProps> = ({
  status,
  onStatusChange,
}) => {
  return (
    <select
      value={status}
      onChange={(e) => onStatusChange(e.target.value)}
      className="status-select"
    >
      <option value="" disabled>
        Select status to filter by
      </option>
      {possibleStatuses.map((status) => (
        <option key={status.id} value={status.id}>
          {status.label}
        </option>
      ))}
    </select>
  );
};
