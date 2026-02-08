import { api } from '@/src/services/api.instance';
import { HealthRecord } from '@/app/(tabs)/health-record/types/health';
import {
  BaseResponse,
  PaginateRequest,
  PaginateResponse,
} from '@/src/types/common';
import { ApiResponse } from 'apisauce';

export const HealthRecordApi = {
  getRecords: (
    paginate: PaginateRequest,
  ): Promise<ApiResponse<BaseResponse<PaginateResponse<HealthRecord>>>> =>
    api.get('/health-records', paginate),
};
