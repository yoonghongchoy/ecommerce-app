import apiClient from '../apiClient';
import endpoints from './endpoints';
import {User} from './types';

export const fetchUser = async () => {
  const response = await apiClient.get<User>(endpoints.getUser);
  return response.data;
};
