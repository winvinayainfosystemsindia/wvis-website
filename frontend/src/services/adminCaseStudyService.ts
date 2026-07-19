import apiClient from './apiClient';
import type { CaseStudy, CaseStudyPayload } from '../models/caseStudy';

const buildFormData = (payload: CaseStudyPayload): FormData => {
	const formData = new FormData();
	if (payload.title !== undefined) formData.append('title', payload.title);
	if (payload.summary !== undefined) formData.append('summary', payload.summary);
	if (payload.content !== undefined) formData.append('content', payload.content);
	if (payload.industry !== undefined) formData.append('industry', payload.industry);
	if (payload.client_name !== undefined) formData.append('client_name', payload.client_name);
	if (payload.is_published !== undefined) formData.append('is_published', String(payload.is_published));
	if (payload.featuredImage) formData.append('featured_image', payload.featuredImage);
	return formData;
};

export const listAllCaseStudies = async (): Promise<CaseStudy[]> => {
	const { data } = await apiClient.get<CaseStudy[]>('/admin/case-studies/');
	return data;
};

export const createCaseStudy = async (payload: CaseStudyPayload): Promise<CaseStudy> => {
	const { data } = await apiClient.post<CaseStudy>('/admin/case-studies/', buildFormData(payload));
	return data;
};

export const updateCaseStudy = async (id: number, payload: CaseStudyPayload): Promise<CaseStudy> => {
	const { data } = await apiClient.put<CaseStudy>(`/admin/case-studies/${id}`, buildFormData(payload));
	return data;
};

export const deleteCaseStudy = async (id: number): Promise<void> => {
	await apiClient.delete(`/admin/case-studies/${id}`);
};
