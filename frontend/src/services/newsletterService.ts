import apiClient from './apiClient';
import type { NewsletterIssue } from '../models/newsletter';

export const getPublishedNewsletters = async (): Promise<NewsletterIssue[]> => {
	const { data } = await apiClient.get<NewsletterIssue[]>('/newsletters/');
	return data;
};

export const getNewsletterBySlug = async (slug: string): Promise<NewsletterIssue> => {
	const { data } = await apiClient.get<NewsletterIssue>(`/newsletters/${slug}`);
	return data;
};

export const subscribeToNewsletter = async (email: string): Promise<void> => {
	await apiClient.post('/comms/newsletter', { email });
};
