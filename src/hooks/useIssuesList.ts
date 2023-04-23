import { useQuery } from '@tanstack/react-query';
import { Issue } from '../types/Issues';

export const useIssuesList = () => {
  const fetchIssues = async () => (await fetch('/api/issues')).json();

  return useQuery<Issue[]>(['issues'], fetchIssues);
};
