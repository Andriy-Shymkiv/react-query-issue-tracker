import { useQuery } from '@tanstack/react-query';
import { Comment } from '../types/Comment';

const fetchIssueComments = async (issueNumber: string) => {
  const response = await fetch(`/api/issues/${issueNumber}/comments`);

  return response.json();
};

export const constructIssuesCommentsCacheKey = (issueNumber: string) => [
  'issueComments',
  issueNumber,
];

export const useIssueComments = (issueNumber: string) => {
  return useQuery<Comment[]>(constructIssuesCommentsCacheKey(issueNumber), () =>
    fetchIssueComments(issueNumber)
  );
};
