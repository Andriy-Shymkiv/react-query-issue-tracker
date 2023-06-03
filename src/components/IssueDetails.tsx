import { useParams } from 'react-router-dom';
import { useIssueComments } from '../hooks/useIssueComments';
import { useIssueData } from '../hooks/useIssueData';
import { IssueComment } from './IssueComment';
import { IssueHeader } from './IssueHeader';

export default function IssueDetails() {
  const { number } = useParams();
  const { data: issue, isLoading: issueIsLoading } = useIssueData(number ?? '');
  const { data: comments, isLoading: commentsIsLoading } = useIssueComments(
    number ?? ''
  );
  console.log(comments);

  return (
    <div className="issue-details">
      {issueIsLoading ? (
        <p>Loading issue...</p>
      ) : (
        <>
          <IssueHeader issue={issue} />

          <main>
            <section>
              {commentsIsLoading ? (
                <p>Loading comments...</p>
              ) : (
                comments?.map((comment) => (
                  <IssueComment key={comment.id} comment={comment} />
                ))
              )}
            </section>
          </main>
        </>
      )}
    </div>
  );
}
