import { useQuery } from '@tanstack/react-query';
import { Issue } from '../types/Issues';

export const useIssuesList = () => {
  const fetchIssues = () => fetch('/api/issues').then((res) => res.json());

  return useQuery<Issue[]>(['issues'], fetchIssues);
};
