import { api } from '@/src/services/api.instance';
import {
  UserInfoResponse,
  UserProfileRequest,
  UserProfileResponse,
} from '@/src/types/user';
import { ApiResponse } from 'apisauce';

export const userApi = {
  getUserInfo: (): Promise<ApiResponse<UserInfoResponse>> =>
    api.get('auth/whoami'),

  updateProfile: (
    data: UserProfileRequest,
  ): Promise<ApiResponse<UserProfileResponse>> =>
    api.put('users/profile', data),
};
