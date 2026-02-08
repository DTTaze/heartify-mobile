import { api } from '@/src/services/api.instance';
import { BaseResponse } from '@/src/types/common';
import { Recipe } from '@/src/types/discover';
import { ApiResponse } from 'apisauce';

export const DiscorverApi = {
  getFoodDetail: (id: string): Promise<ApiResponse<BaseResponse<Recipe>>> =>
    api.get(`/foods/${id}`),
};
