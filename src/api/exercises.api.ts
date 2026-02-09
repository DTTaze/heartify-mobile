import { api } from '@/src/services/api.instance';
import { BaseResponse, PaginateResponse } from '@/src/types/common';
import { Exercise } from '@/src/types/exercises';
import { ApiResponse } from 'apisauce';

export const ExercisesApi = {
  getPaginatedExercises: (): Promise<
    ApiResponse<BaseResponse<PaginateResponse<Exercise>>>
  > => api.get(`/exercises`),
};
