import apiClient from './apiClient';
import type { ContactFormValues, ContactResponse } from '../models/contact';

export const submitContactForm = async (payload: ContactFormValues): Promise<ContactResponse> => {
	const { data } = await apiClient.post<ContactResponse>('/comms/contact', payload);
	return data;
};
