import { api } from '@/src/services/api.instance';
import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  VerifyOtpRequest,
  VerifyOtpResponse,
  ForgotPasswordRequest,
  ForgotPasswordResponse,
  ResetPasswordRequest,
  ResetPasswordResponse,
} from '@/src/types/auth';
import { ApiResponse } from 'apisauce';

export const authApi = {
  login: (data: LoginRequest): Promise<ApiResponse<LoginResponse>> =>
    api.post('auth/login', data),

  register: (data: RegisterRequest): Promise<ApiResponse<RegisterResponse>> =>
    api.post('auth/register', data),

  verifyOtp: (
    data: VerifyOtpRequest,
  ): Promise<ApiResponse<VerifyOtpResponse>> =>
    api.post('auth/verify-otp', data),

  forgotPassword: (
    data: ForgotPasswordRequest,
  ): Promise<ApiResponse<ForgotPasswordResponse>> =>
    api.post('auth/forgot-password', data),

  resetPassword: (
    data: ResetPasswordRequest,
  ): Promise<ApiResponse<ResetPasswordResponse>> =>
    api.post('auth/reset-password', data),

  resendEmail: (
    email: string,
  ): Promise<ApiResponse<{ data: any | null; success: boolean }>> =>
    api.post('auth/resend-email', { email }),
};
