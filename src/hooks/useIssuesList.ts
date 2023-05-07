import { useQuery } from '@tanstack/react-query';
import { Issue } from '../types/Issue';

export const useIssuesList = (labels: string[]) => {
  const fetchIssues = async () => {
    const labelsString = labels.map((label) => `labels[]=${label}`).join('&');
    const res = await fetch(`/api/issues?${labelsString}`);

    return res.json();
  };

  return useQuery<Issue[]>(['issues', { labels }], fetchIssues);
};
