import { api } from '@/src/services/api.instance';
import { historyMessage, sendMessageResponse } from '@/src/types/chatbot';
import {
  BaseResponse,
  PaginateRequest,
  PaginateResponse,
} from '@/src/types/common';
import { ApiResponse } from 'apisauce';

export const ChatbotApi = {
  sendMessage: (
    message: string,
  ): Promise<ApiResponse<BaseResponse<sendMessageResponse>>> =>
    api.post('/agent/chat', { message }),

  getHistoryMessages: (
    paginate: PaginateRequest,
  ): Promise<ApiResponse<BaseResponse<PaginateResponse<historyMessage>>>> =>
    api.get('/chatbot/history', paginate),
};
