import { api } from '@/src/services/api.instance';
import { LoginRequest, LoginResponse } from '@/src/types/auth';
import { ApiResponse } from 'apisauce';

export const authApi = {
  login: (data: LoginRequest): Promise<ApiResponse<LoginResponse>> =>
    api.post('auth/login', data),
};
