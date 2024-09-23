import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSetAtom } from 'jotai';
import { userAtom, authErrorAtom } from '../../atoms/atoms';
import { apiClient } from '../api-client';

export const authQueryKeys = {
  auth: ['auth'],
};

export const useLogin = () => {
  const setUser = useSetAtom(userAtom);
  const setAuthError = useSetAtom(authErrorAtom);
  const queryClient = useQueryClient();

  const loginMutation = useMutation({
    mutationFn: async (loginData: { username: string; password: string }) => {
      const { username, password } = loginData;
      const response = await apiClient.get(
        `/users?username=${username}&password=${password}`,
      );
      if (response.data.length > 0) {
        return response.data[0];
      } else {
        alert('아이디 혹은 패스워드가 맞지 않습니다.');
      }
    },
    onSuccess: (data) => {
      setUser({ username: data.username, token: data.token });
      setAuthError(null);
      queryClient.invalidateQueries({ queryKey: authQueryKeys.auth });
    },
    onError: (error: Error) => {
      setAuthError(error.message);
    },
  });

  return loginMutation;
};

export const useLogout = () => {
  const setUser = useSetAtom(userAtom);
  return () => setUser(null);
};
