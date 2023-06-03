import { relativeDate } from '../helpers/relativeDate';
import { useUserData } from '../hooks/useUserData';
import { Comment } from '../types/Comment';

interface CommentProps {
  comment: Comment;
}

export const IssueComment: React.FC<CommentProps> = ({ comment }) => {
  const { data: user, isLoading: userIsLoading } = useUserData(
    comment.createdBy
  );

  return (
    <>
      <div className="comment">
        {userIsLoading ? (
          <div className="comment-header">Loading...</div>
        ) : (
          <>
            <img src={user?.profilePictureUrl} alt="profilePictureUrl" />
            <div>
              <div className="comment-header">
                <span>{user?.name} commented </span>
                <span>{relativeDate(comment.createdDate)}</span>
              </div>
              <div className="comment-body">{comment.comment}</div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
