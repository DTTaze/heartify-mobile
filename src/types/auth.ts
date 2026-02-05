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
