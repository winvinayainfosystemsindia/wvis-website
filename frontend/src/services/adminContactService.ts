import apiClient from './apiClient';
import type { ContactResponse } from '../models/contact';

export const listAllContacts = async (): Promise<ContactResponse[]> => {
	const { data } = await apiClient.get<ContactResponse[]>('/admin/contacts/');
	return data;
};

export const setContactProcessed = async (id: number, is_processed: boolean): Promise<ContactResponse> => {
	const { data } = await apiClient.patch<ContactResponse>(`/admin/contacts/${id}`, { is_processed });
	return data;
};

export const deleteContact = async (id: number): Promise<void> => {
	await apiClient.delete(`/admin/contacts/${id}`);
};
