export interface NewsletterIssue {
	id: number;
	title: string;
	slug: string;
	description: string | null;
	cover_image_path: string;
	pdf_path: string;
	published_date: string;
	is_published: boolean;
	author_id: number | null;
	created_at: string;
	updated_at: string;
}

export interface NewsletterFormPayload {
	title: string;
	description: string;
	published_date: string;
	is_published: boolean;
	coverImage?: File | null;
	pdfFile?: File | null;
}
