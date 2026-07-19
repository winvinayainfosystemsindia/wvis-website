export interface CaseStudy {
	id: number;
	title: string;
	slug: string;
	summary: string | null;
	content: string;
	industry: string | null;
	client_name: string | null;
	is_published: boolean;
	featured_image: string | null;
	author_id: number | null;
	created_at: string;
	updated_at: string;
}

export interface CaseStudyPayload {
	title?: string;
	summary?: string;
	content?: string;
	industry?: string;
	client_name?: string;
	is_published?: boolean;
	featuredImage?: File | null;
}
