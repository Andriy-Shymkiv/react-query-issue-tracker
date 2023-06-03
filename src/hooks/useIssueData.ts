import { useQuery } from '@tanstack/react-query';

const fetchIssueData = async (issueNumber: string) => {
  const response = await fetch(`/api/issues/${issueNumber}`);

  return response.json();
};
export const constructIssueDataCacheKey = (issueNumber: string) => [
  'issue',
  issueNumber,
];

export const useIssueData = (issueNumber: string) => {
  return useQuery(constructIssueDataCacheKey(issueNumber), () =>
    fetchIssueData(issueNumber)
  );
};
