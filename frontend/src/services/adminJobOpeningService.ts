import apiClient from './apiClient';
import type { JobOpening, JobOpeningPayload } from '../models/jobOpening';

export const listAllJobOpenings = async (): Promise<JobOpening[]> => {
	const { data } = await apiClient.get<JobOpening[]>('/admin/job-openings/');
	return data;
};

export const createJobOpening = async (payload: JobOpeningPayload): Promise<JobOpening> => {
	const { data } = await apiClient.post<JobOpening>('/admin/job-openings/', payload);
	return data;
};

export const updateJobOpening = async (id: number, payload: JobOpeningPayload): Promise<JobOpening> => {
	const { data } = await apiClient.put<JobOpening>(`/admin/job-openings/${id}`, payload);
	return data;
};

export const deleteJobOpening = async (id: number): Promise<void> => {
	await apiClient.delete(`/admin/job-openings/${id}`);
};
