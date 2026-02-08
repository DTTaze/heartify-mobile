export interface LoginRequest {
  email: string;
  password: string;
}

interface User {
  id: string;
  hasPassword: boolean;
  email: string;
  username: string;
}

export interface LoginResponseData {
  accessToken: string;
  user: User;
}

export interface LoginResponse {
  data: LoginResponseData;
  success: boolean;
}

export interface RegisterRequest {
  email: string;
  password: string;
  username: string;
}

export interface RegisterResponse {
  data: {
    id: string;
    username: string;
    email: string;
    password: string;
    status: string;
    metadata: any | null;
    createdAt: string;
    updatedAt: string;
  };
  success: boolean;
}

export interface VerifyOtpRequest {
  usernameOrEmail: string;
  code: string;
  action: string;
}

export interface VerifyOtpResponse {
  data: any | null;
  success: boolean;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ForgotPasswordResponse {
  data: {
    user: User;
  };
  success: boolean;
}

export interface ResetPasswordRequest {
  email: string;
  password: string;
  code: string;
}

export interface ResetPasswordResponse {
  data: {
    user: User;
  };
  success: boolean;
}

export interface ResendEmailRequest {
  email: string;
}

export interface ResendEmailResponse {
  data: any | null;
  success: boolean;
}
