export enum EXCEPTION_NAME_ENUM {
  BAD_REQUEST_EXCEPTION = 'BadRequestException',
}
export interface ErrorResponse {
  name?: EXCEPTION_NAME_ENUM;
  success: false;
  message: string;
  code: string;
  httpCode: number;
}
export interface SuccessResponse<T> {
  success: true;
  data: T;
}
export type ApiResponse<T> = SuccessResponse<T> | ErrorResponse;
