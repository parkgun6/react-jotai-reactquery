import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '../api-client';
import { menuQueryKeys } from './menuQueryKeys';

const deleteMenuFn = async (id: number) => {
  const response = await apiClient.delete(`/menu/${id}`);
  return response.data;
};

export const useDeleteMenu = () => {
  const queryClient = useQueryClient();
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
