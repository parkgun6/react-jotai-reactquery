import { useMutation, useQueryClient } from '@tanstack/react-query';
import MenuData from '../../types/menus';
import { apiClient } from '../api-client';
import { menuQueryKeys } from './menuQueryKeys';

const editMenuFn = async (menuData: MenuData, id: number) => {
  const response = await apiClient.put(`/menu/${id}`, menuData);
  return response.data;
};

export const useEditMenu = () => {
  const queryClient = useQueryClient();
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
