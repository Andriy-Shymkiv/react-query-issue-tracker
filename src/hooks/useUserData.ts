import { useQuery } from '@tanstack/react-query';
import { User } from '../types/User';

const fetchUser = async (userId: string) => {
  const res = await fetch(`/api/users/${userId}`);

  return res.json();
};

export const constructUserCacheKey = (userId: string) => ['user', userId];

export const useUserData = (userId: string) => {
  return useQuery<User>(constructUserCacheKey(userId), () => fetchUser(userId));
};
