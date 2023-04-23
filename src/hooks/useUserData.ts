import { useQuery } from '@tanstack/react-query';
import { User } from '../types/User';

export const useUserData = (userId: string) => {
  const fetchUser = async () => (await fetch(`/api/users/${userId}`)).json();

  return useQuery<User>(['user', userId], fetchUser);
};
