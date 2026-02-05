import apisauce from 'apisauce';
import axios from 'axios';
// 1. Config
const apiInstance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL, // Nhớ cấu hình biến môi trường này
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
// 2. Xử lý 401 Unauthorized (Global)
let unauthorizedHandler: (() => void) | null = null;
export const setUnauthorizedHandler = (handler: () => void) => {
  unauthorizedHandler = handler;
};
apiInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      if (unauthorizedHandler) unauthorizedHandler();
    }
    return Promise.reject(error);
  },
);
const create = () => {
  // @ts-ignore
  const api = apisauce.create({
    axiosInstance: apiInstance,
  });
  // Logging (Chỉ chạy ở mode DEV)
  api.addRequestTransform((request) => {
    if (__DEV__) console.log('🚀 API Request:', request);
  });
  api.addResponseTransform((response) => {
    if (__DEV__) console.log('🚀 API Response:', response);
  });
  // Helpers
  const setAuthToken = (token: string) => {
    if (token) api.setHeader('Authorization', `Bearer ${token}`);
    else delete api.headers.Authorization;
  };
  const clearAuthToken = () => {
    delete api.headers.Authorization;
  };
  return {
    ...api,
    setAuthToken,
    clearAuthToken,
  };
};
export const api = create();
