import axios from 'axios';
import { getToken, clearToken } from './tokenStore';

export const API_BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8000';

const apiClient = axios.create({
	baseURL: `${API_BASE_URL}/api/v1`,
	timeout: 15000,
});

apiClient.interceptors.request.use((config) => {
	const token = getToken();
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});

apiClient.interceptors.response.use(
	(response) => response,
	(error) => {
		if (axios.isAxiosError(error) && error.response?.status === 401) {
			clearToken();
		}
		return Promise.reject(error);
	}
);

export const toMediaUrl = (path: string): string => {
	if (!path) return path;
	return path.startsWith('http') ? path : `${API_BASE_URL}${path}`;
};

export const getApiErrorMessage = (error: unknown, fallback: string): string => {
	if (axios.isAxiosError(error)) {
		const detail = error.response?.data?.detail;
		if (typeof detail === 'string') return detail;
		if (Array.isArray(detail) && detail[0]?.msg) return detail[0].msg;
		if (error.message === 'Network Error') return 'Unable to reach the server. Please check your connection and try again.';
	}
	return fallback;
};

export default apiClient;
