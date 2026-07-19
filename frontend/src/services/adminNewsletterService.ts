import apiClient from './apiClient';
import type { NewsletterFormPayload, NewsletterIssue } from '../models/newsletter';

const buildFormData = (payload: Partial<NewsletterFormPayload>): FormData => {
	const formData = new FormData();
	if (payload.title !== undefined) formData.append('title', payload.title);
	if (payload.description !== undefined) formData.append('description', payload.description);
	if (payload.published_date !== undefined) formData.append('published_date', payload.published_date);
	if (payload.is_published !== undefined) formData.append('is_published', String(payload.is_published));
	if (payload.coverImage) formData.append('cover_image', payload.coverImage);
	if (payload.pdfFile) formData.append('pdf_file', payload.pdfFile);
	return formData;
};

export const listAllNewsletters = async (): Promise<NewsletterIssue[]> => {
	const { data } = await apiClient.get<NewsletterIssue[]>('/admin/newsletters/');
	return data;
};

export const createNewsletter = async (payload: NewsletterFormPayload): Promise<NewsletterIssue> => {
	const { data } = await apiClient.post<NewsletterIssue>('/admin/newsletters/', buildFormData(payload));
	return data;
};

export const updateNewsletter = async (
	id: number,
	payload: Partial<NewsletterFormPayload>
): Promise<NewsletterIssue> => {
	const { data } = await apiClient.put<NewsletterIssue>(`/admin/newsletters/${id}`, buildFormData(payload));
	return data;
};

export const deleteNewsletter = async (id: number): Promise<void> => {
	await apiClient.delete(`/admin/newsletters/${id}`);
};
