import { useIssuesList } from '../hooks/useIssuesList';
import { IssueItem } from './IssueItem';

export const IssuesList = () => {
  const { isLoading, data: issues } = useIssuesList();

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
