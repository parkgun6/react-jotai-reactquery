import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import MenuData from '../../types/menus';
import { apiClient } from '../api-client';
import { useParams } from 'react-router-dom';

export const menuQueryKeys = {
  menus: ['menus'],
  details: () => [...menuQueryKeys.menus, 'detail'],
  detail: (id: number) => [...menuQueryKeys.details(), id],
};

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

export const useMenus = () => {
  const getMenusFn = async (): Promise<MenuData[]> => {
    const response = await apiClient.get('/menu');
    return response.data;
  };
  return useQuery<MenuData[]>({
    queryKey: menuQueryKeys.menus,
    queryFn: getMenusFn,
  });
};

export const useCreateMenu = () => {
  const queryClient = useQueryClient();
  const createMenuFn = async (newMenu: MenuData) => {
    const response = await apiClient.post('/menu', newMenu);
    return response.data;
  };
  return useMutation({
    mutationFn: createMenuFn,
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: menuQueryKeys.menus }); // 기존의 메뉴 쿼리 취소
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: menuQueryKeys.menus }); // 메뉴 쿼리 무효화 (새로고침)
    },
    onError: (error) => {
      console.error('Menu creation failed', error); // 에러 로깅
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: menuQueryKeys.menus }); // 성공 또는 실패 후 수행할 작업
    },
  });
};

export const useDeleteMenu = () => {
  const queryClient = useQueryClient();
  const deleteMenuFn = async (id: number) => {
    const response = await apiClient.delete(`/menu/${id}`);
    return response.data;
  };
  return useMutation({
    mutationFn: deleteMenuFn,
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: menuQueryKeys.menus });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: menuQueryKeys.menus }); // 메뉴 쿼리 무효화 (새로고침)
    },
    onError: (error) => {
      console.error('Menu creation failed', error); // 에러 로깅
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: menuQueryKeys.menus }); // 성공 또는 실패 후 수행할 작업
    },
  });
};

export const useEditMenu = () => {
  const queryClient = useQueryClient();
  const editMenuFn = async (menuData: MenuData, id: number) => {
    const response = await apiClient.put(`/menu/${id}`, menuData);
    return response.data;
  };
  return useMutation({
    mutationFn: (params: { menuData: MenuData; id: number }) =>
      editMenuFn(params.menuData, params.id),
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: menuQueryKeys.menus });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: menuQueryKeys.menus }); // 메뉴 쿼리 무효화 (새로고침)
    },
    onError: (error) => {
      console.error('Menu creation failed', error); // 에러 로깅
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: menuQueryKeys.menus }); // 성공 또는 실패 후 수행할 작업
    },
  });
};
