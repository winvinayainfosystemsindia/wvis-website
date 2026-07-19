export interface BlogPost {
	id: number;
	title: string;
	slug: string;
	summary: string | null;
	content: string;
	category: string | null;
	is_published: boolean;
	featured_image: string | null;
	author_id: number | null;
	created_at: string;
	updated_at: string;
}

export interface BlogFormPayload {
	title: string;
	summary: string;
	content: string;
	category: string;
	is_published: boolean;
	featuredImage?: File | null;
}

export interface BlogPayload {
	title?: string;
	summary?: string;
	content?: string;
	category?: string;
	is_published?: boolean;
	featuredImage?: File | null;
}
