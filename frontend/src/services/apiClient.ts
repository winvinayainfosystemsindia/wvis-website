import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8000';

const apiClient = axios.create({
	baseURL: `${API_BASE_URL}/api/v1`,
	headers: {
		'Content-Type': 'application/json',
	},
	timeout: 15000,
});

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
