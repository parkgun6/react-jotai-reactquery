import axios from 'axios';

// Vite 환경 변수에서 baseURL 가져오기
const baseURL = import.meta.env.VITE_API_BASE_URL;

export const apiClient = axios.create({
  baseURL: baseURL, // 환경변수에 따라 baseURL 변경
});

export const API_METHODS = {
  GET: 'GET',
  POST: 'POST',
  OPTIONS: 'OPTIONS',
} as const;
