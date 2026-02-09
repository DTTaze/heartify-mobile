import { api } from '@/src/services/api.instance';
import { BaseResponse } from '@/src/types/common';
import { User } from '@/src/types/profile';
import { ApiResponse } from 'apisauce';

export const ProfileApi = {
  getProfile: (): Promise<ApiResponse<BaseResponse<User>>> =>
    api.get(`/users/profile`),
};
