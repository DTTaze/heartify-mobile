import { api } from '@/src/services/api.instance';
import { UserInfoResponse } from '@/src/types/user';
import { ApiResponse } from 'apisauce';

export const userApi = {
  getUserInfo: (): Promise<ApiResponse<UserInfoResponse>> =>
    api.get('auth/whoami'),
};
