import { stripHtml } from './richText';

export const getReadingTime = (content: string): string => {
	const words = stripHtml(content).trim().split(/\s+/).filter(Boolean).length;
	const minutes = Math.max(1, Math.ceil(words / 200));
	return `${minutes} min read`;
};

export const getExcerpt = (summary: string | null, content: string, maxLength = 180): string => {
	const plain = stripHtml(summary || content).trim();
	return plain.length > maxLength ? `${plain.slice(0, maxLength).trim()}…` : plain;
};
