import apiClient from './apiClient';
import type { BlogPayload, BlogPost } from '../models/blog';

const buildFormData = (payload: BlogPayload): FormData => {
	const formData = new FormData();
	if (payload.title !== undefined) formData.append('title', payload.title);
	if (payload.summary !== undefined) formData.append('summary', payload.summary);
	if (payload.content !== undefined) formData.append('content', payload.content);
	if (payload.category !== undefined) formData.append('category', payload.category);
	if (payload.is_published !== undefined) formData.append('is_published', String(payload.is_published));
	if (payload.featuredImage) formData.append('featured_image', payload.featuredImage);
	return formData;
};

export const listAllBlogs = async (): Promise<BlogPost[]> => {
	const { data } = await apiClient.get<BlogPost[]>('/admin/blogs/');
	return data;
};

export const createBlog = async (payload: BlogPayload): Promise<BlogPost> => {
	const { data } = await apiClient.post<BlogPost>('/admin/blogs/', buildFormData(payload));
	return data;
};

export const updateBlog = async (id: number, payload: BlogPayload): Promise<BlogPost> => {
	const { data } = await apiClient.put<BlogPost>(`/admin/blogs/${id}`, buildFormData(payload));
	return data;
};

export const deleteBlog = async (id: number): Promise<void> => {
	await apiClient.delete(`/admin/blogs/${id}`);
};
