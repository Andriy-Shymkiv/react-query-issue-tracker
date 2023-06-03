import { useIssuesList } from '../hooks/useIssuesList';
import { IssueItem } from './IssueItem';

interface IssuesListProps {
  labels: string[];
  status: string;
}

export const IssuesList: React.FC<IssuesListProps> = ({ labels, status }) => {
  const { isLoading, data: issues } = useIssuesList(labels, status);

  return (
    <div>
      <h2>Issues List</h2>
      {isLoading ? (
        'Loading...'
      ) : (
        <ul className="issues-list">
          {issues?.map((issue) => (
            <IssueItem key={issue.id} issue={issue} />
          ))}
        </ul>
      )}
    </div>
  );
};
