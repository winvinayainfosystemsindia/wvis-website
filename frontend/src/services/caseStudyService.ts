import apiClient from './apiClient';
import type { CaseStudy } from '../models/caseStudy';

export const getPublishedCaseStudies = async (): Promise<CaseStudy[]> => {
	const { data } = await apiClient.get<CaseStudy[]>('/case-studies/', { params: { limit: 100 } });
	return data;
};

export const getCaseStudyBySlug = async (slug: string): Promise<CaseStudy> => {
	const { data } = await apiClient.get<CaseStudy>(`/case-studies/${slug}`);
	return data;
};
