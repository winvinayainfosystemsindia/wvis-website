import apiClient from './apiClient';
import type { JobOpening } from '../models/jobOpening';

export const getActiveJobOpenings = async (): Promise<JobOpening[]> => {
	const { data } = await apiClient.get<JobOpening[]>('/job-openings/', { params: { limit: 100 } });
	return data;
};
