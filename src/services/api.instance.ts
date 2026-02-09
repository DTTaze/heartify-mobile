import apisauce from 'apisauce';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

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
  const saveToken = async (token: string) => {
    try {
      await SecureStore.setItemAsync('user_token', token);
    } catch (error) {
      console.error('Error saving token:', error);
    }
  };

  const getToken = async () => {
    try {
      return await SecureStore.getItemAsync('user_token');
    } catch (error) {
      console.error('Error getting token:', error);
      return null;
    }
  };

  const removeToken = async () => {
    try {
      await SecureStore.deleteItemAsync('user_token');
    } catch (error) {
      console.error('Error removing token:', error);
    }
  };

  const setAuthToken = async (token: string) => {
    if (token) {
      api.setHeader('Authorization', `Bearer ${token}`);
      await saveToken(token);
    } else {
      delete api.headers.Authorization;
      await removeToken();
    }
  };

  const clearAuthToken = async () => {
    delete api.headers.Authorization;
    await removeToken();
  };

  return {
    ...api,
    setAuthToken,
    clearAuthToken,
    getToken,
  };
};

export const api = create();
