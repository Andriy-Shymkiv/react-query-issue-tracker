import { useQuery } from '@tanstack/react-query';
import { Label } from '../types/Label';

export const useLabelsData = () => {
  const fetchLabels = async () => (await fetch('/api/labels')).json();

  return useQuery<Label[]>(['labels'], fetchLabels);
};
