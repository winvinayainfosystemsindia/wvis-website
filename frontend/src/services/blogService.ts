import apiClient from './apiClient';
import type { BlogPost } from '../models/blog';

export const getPublishedBlogs = async (): Promise<BlogPost[]> => {
	const { data } = await apiClient.get<BlogPost[]>('/blogs/', { params: { limit: 100 } });
	return data;
};

export const getBlogBySlug = async (slug: string): Promise<BlogPost> => {
	const { data } = await apiClient.get<BlogPost>(`/blogs/${slug}`);
	return data;
};
