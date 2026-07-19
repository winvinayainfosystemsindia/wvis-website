export interface ContactFormValues {
	full_name: string;
	email: string;
	subject: string;
	message: string;
}

export interface ContactResponse extends ContactFormValues {
	id: number;
	is_processed: boolean;
	created_at: string;
	updated_at: string;
}
