import apiClient from './apiClient';
import type { AdminUser } from '../models/user';

interface LoginResponse {
	access_token: string;
	token_type: string;
}

export const login = async (email: string, password: string): Promise<LoginResponse> => {
	const body = new URLSearchParams();
	body.set('username', email);
	body.set('password', password);

	const { data } = await apiClient.post<LoginResponse>('/auth/login', body, {
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
	});
	return data;
};

export const getMe = async (): Promise<AdminUser> => {
	const { data } = await apiClient.get<AdminUser>('/auth/me');
	return data;
};
