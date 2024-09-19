import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../api-client';
import MenuData from '../../types/menus';
import { menuQueryKeys } from './menuQueryKeys';
import { useParams } from 'react-router-dom';

export const useMenu = () => {
  const { id } = useParams();
  const getMenuFn = async (): Promise<MenuData> => {
    const response = await apiClient.get(`/menu/${id}`);
    return response.data;
  };

  return useQuery<MenuData>({
    queryKey: menuQueryKeys.detail(Number({ id })),
    queryFn: () => getMenuFn(),
    retry: 1,
  });
};
