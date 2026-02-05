export interface BaseResponse<T> {
  success: boolean;
  data: T;
}

export interface PaginateRequest {
  offset: number;
  limit: number;
}

export interface PaginateResponse<T> {
  total: number;
  offset: number;
  limit: number;
  rows: T[];
}
