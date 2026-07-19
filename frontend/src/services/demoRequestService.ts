import apiClient from './apiClient';
import type { DemoRequestPayload, DemoRequestResponse } from '../models/demoRequest';

export const submitDemoRequest = async (payload: DemoRequestPayload): Promise<DemoRequestResponse> => {
	const { data } = await apiClient.post<DemoRequestResponse>('/comms/demo-request', payload);
	return data;
};
