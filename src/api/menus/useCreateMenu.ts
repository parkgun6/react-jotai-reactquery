import { useMutation, useQueryClient } from '@tanstack/react-query';
import MenuData from '../../types/menus';
import { apiClient } from '../api-client';
import { menuQueryKeys } from './menuQueryKeys';

const createMenuFn = async (newMenu: MenuData) => {
  const response = await apiClient.post('/menu', newMenu);
  return response.data;
};

export const useCreateMenu = () => {
  const queryClient = useQueryClient();
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
