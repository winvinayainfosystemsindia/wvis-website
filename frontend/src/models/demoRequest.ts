export interface DemoRequestFormValues {
	full_name: string;
	work_email: string;
	phone: string;
	company_name: string;
	job_title: string;
	company_size: string;
	product_interest: string;
	preferred_date: string;
	message: string;
}

export interface DemoRequestPayload {
	full_name: string;
	work_email: string;
	phone?: string;
	company_name: string;
	job_title?: string;
	company_size?: string;
	product_interest?: string;
	preferred_date?: string;
	message?: string;
}

export interface DemoRequestResponse extends DemoRequestPayload {
	id: number;
	is_processed: boolean;
	created_at: string;
	updated_at: string;
}
