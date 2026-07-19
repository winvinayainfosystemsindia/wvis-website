import apiClient from './apiClient';
import type { MarketingPitch, MarketingPitchFormPayload } from '../models/marketingPitch';

const buildFormData = (payload: Partial<MarketingPitchFormPayload>): FormData => {
	const formData = new FormData();
	if (payload.title !== undefined) formData.append('title', payload.title);
	if (payload.description !== undefined) formData.append('description', payload.description);
	if (payload.published_date !== undefined) formData.append('published_date', payload.published_date);
	if (payload.is_published !== undefined) formData.append('is_published', String(payload.is_published));
	if (payload.coverImage) formData.append('cover_image', payload.coverImage);
	if (payload.pdfFile) formData.append('pdf_file', payload.pdfFile);
	return formData;
};

export const listAllMarketingPitches = async (): Promise<MarketingPitch[]> => {
	const { data } = await apiClient.get<MarketingPitch[]>('/admin/marketing-pitches/');
	return data;
};

export const createMarketingPitch = async (payload: MarketingPitchFormPayload): Promise<MarketingPitch> => {
	const { data } = await apiClient.post<MarketingPitch>('/admin/marketing-pitches/', buildFormData(payload));
	return data;
};

export const updateMarketingPitch = async (
	id: number,
	payload: Partial<MarketingPitchFormPayload>
): Promise<MarketingPitch> => {
	const { data } = await apiClient.put<MarketingPitch>(`/admin/marketing-pitches/${id}`, buildFormData(payload));
	return data;
};

export const deleteMarketingPitch = async (id: number): Promise<void> => {
	await apiClient.delete(`/admin/marketing-pitches/${id}`);
};
