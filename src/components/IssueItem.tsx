import { Issue } from '../types/Issues';
import { Link } from 'react-router-dom';
import { relativeDate } from '../helpers/relativeDate';
import { useUserData } from '../hooks/useUserData';
import { GoIssueOpened, GoIssueClosed, GoComment } from 'react-icons/go';

interface IssueItemProps {
  issue: Issue;
}

export const IssueItem: React.FC<IssueItemProps> = ({ issue }) => {
  const { data: assigneeUser } = useUserData(issue.assignee);
  const { data: createByUser } = useUserData(issue.createdBy);

  return (
    <li>
      <div>
        {status === 'done' || status === 'canceled' ? (
          <GoIssueClosed style={{ color: 'red' }} />
        ) : (
          <GoIssueOpened style={{ color: 'green' }} />
        )}
      </div>
      <div>
        <span>
          <Link to={`/issue/${issue.number}`}>{issue.title}</Link>
          {issue.labels.map((label) => (
            <span key={label} className={'label red'}>
              {label}
            </span>
          ))}
        </span>
        <small>
          #{issue.number} opened {relativeDate(issue.createdDate)} by{' '}
          {createByUser?.name}
        </small>
      </div>
      {issue.assignee ? <div>{assigneeUser?.name}</div> : null}
      <span className="comment-count">
        {issue.comments.length > 0 ? (
          <>
            <GoComment />
            {issue.comments.length}
          </>
        ) : null}
      </span>
    </li>
  );
};
