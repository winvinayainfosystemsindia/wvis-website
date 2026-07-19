import apiClient from './apiClient';
import type { DemoRequestResponse } from '../models/demoRequest';

export const listAllDemoRequests = async (): Promise<DemoRequestResponse[]> => {
	const { data } = await apiClient.get<DemoRequestResponse[]>('/admin/demo-requests/');
	return data;
};

export const setDemoRequestProcessed = async (id: number, is_processed: boolean): Promise<DemoRequestResponse> => {
	const { data } = await apiClient.patch<DemoRequestResponse>(`/admin/demo-requests/${id}`, { is_processed });
	return data;
};

export const deleteDemoRequest = async (id: number): Promise<void> => {
	await apiClient.delete(`/admin/demo-requests/${id}`);
};
