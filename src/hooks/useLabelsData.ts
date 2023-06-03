import { useQuery } from '@tanstack/react-query';
import { Label } from '../types/Label';

const fetchLabels = async () => {
  const res = await fetch('/api/labels');

  return res.json();
};

export const constructLabelsCacheKey = () => ['labels'];

export const useLabelsData = () => {
  return useQuery<Label[]>(constructLabelsCacheKey(), fetchLabels);
};
