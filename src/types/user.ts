export interface User {
  id: string;
  hasPassword: boolean;
}

export interface UserInfoResponse {
  data: User;
  success: boolean;
}
