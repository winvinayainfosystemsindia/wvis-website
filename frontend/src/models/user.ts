export type UserRole = 'admin' | 'editor' | 'user';

export interface AdminUser {
	id: number;
	email: string;
	username: string;
	full_name: string | null;
	role: UserRole;
	is_active: boolean;
}
