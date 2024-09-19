import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../api-client';
import MenuData from '../../types/menus';
import { menuQueryKeys } from './menuQueryKeys';

const getMenusFn = async (): Promise<MenuData[]> => {
  const response = await apiClient.get('/menu');
  return response.data;
};

export const useMenus = () =>
  useQuery<MenuData[]>({ queryKey: menuQueryKeys.menus, queryFn: getMenusFn });
