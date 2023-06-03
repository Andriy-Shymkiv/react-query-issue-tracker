import { GoIssueClosed, GoIssueOpened } from 'react-icons/go';
import { relativeDate } from '../helpers/relativeDate';
import { useUserData } from '../hooks/useUserData';
import { Issue } from '../types/Issue';
import { possibleStatuses } from './StatusSelect';

interface IssueHeaderProps {
  issue: Issue;
}
export const IssueHeader: React.FC<IssueHeaderProps> = ({ issue }) => {
  const statusObject = possibleStatuses.find(
    (status) => status.id === issue.status
  );

  const { data: createdByUser, isLoading: createdByUserIsLoading } =
    useUserData(issue.createdBy);

  return (
    <header>
      <h2>
        {issue.title} <span>{`#${issue.number}`}</span>
      </h2>

      <div>
        <span
          className={
            issue.status === 'done' || issue.status === 'cancelled'
              ? 'closed'
              : 'open'
          }
        >
          {issue.status === 'done' || issue.status === 'canceled' ? (
            <GoIssueClosed style={{ color: 'red' }} />
          ) : (
            <GoIssueOpened style={{ color: 'green' }} />
          )}
          {statusObject?.label}
        </span>
        <span className="created-by">
          {createdByUserIsLoading ? '...' : createdByUser?.name}
        </span>{' '}
        opened this issue {relativeDate(issue.createdDate)} ||{' '}
        {issue.comments.length} comments
      </div>
    </header>
  );
};
