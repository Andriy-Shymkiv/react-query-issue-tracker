import { useQuery } from '@tanstack/react-query';
import { Issue } from '../types/Issue';

const fetchIssues = async (labels: string[], status: string) => {
  const statusString = status ? `&status=${status}` : '';
  const labelsString = labels.map((label) => `labels[]=${label}`).join('&');

  const res = await fetch(`/api/issues?${labelsString}${statusString}`);

  return res.json();
};

export const constructIssuesCacheKey = (labels: string[], status: string) => [
  'issues',
  { labels, status },
];

export const useIssuesList = (labels: string[], status: string) => {
  return useQuery<Issue[]>(constructIssuesCacheKey(labels, status), () =>
    fetchIssues(labels, status)
  );
};
