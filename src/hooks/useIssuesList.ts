import { useQuery } from '@tanstack/react-query';
import { Issue } from '../types/Issues';

export const useIssuesList = () => {
  const fetchIssues = async () => {
    const response = await fetch('/api/issues');

    return await response.json();
  };

  return useQuery<Issue[]>(['issues'], fetchIssues);
};
