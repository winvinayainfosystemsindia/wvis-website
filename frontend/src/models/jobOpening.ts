export interface JobOpening {
	id: number;
	title: string;
	department: string;
	location: string;
	job_type: string;
	description: string;
	is_active: boolean;
	created_at: string;
	updated_at: string;
}

export interface JobOpeningPayload {
	title?: string;
	department?: string;
	location?: string;
	job_type?: string;
	description?: string;
	is_active?: boolean;
}
