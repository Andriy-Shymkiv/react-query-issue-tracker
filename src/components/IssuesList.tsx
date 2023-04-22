import { Link } from 'react-router-dom';
import { useIssuesList } from '../hooks/useIssuesList';

export const IssuesList = () => {
  const { isLoading, data: issues } = useIssuesList();

  return (
    <div>
      <h2>Issues List</h2>
      {isLoading ? (
        'Loading...'
      ) : (
        <ul>
          {issues?.map((issue) => (
            <li key={issue.number}>
              <Link to={`/issue/${issue.number}`}>{issue.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
