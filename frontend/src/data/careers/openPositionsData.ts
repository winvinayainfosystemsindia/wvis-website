export type Department =
	| 'Engineering'
	| 'AI & Innovation'
	| 'Accessibility & Compliance'
	| 'Training & Empowerment'
	| 'Design';

export const departments: Department[] = [
	'Engineering',
	'AI & Innovation',
	'Accessibility & Compliance',
	'Training & Empowerment',
	'Design'
];

export const jobTypes: string[] = [
	'Full-time',
	'Part-time',
	'Contract',
	'Internship',
];

export const openPositionsHeader = {
	overline: "OPEN ROLES",
	title: {
		main: "Current",
		accent: "Openings"
	},
	description: "Don't see the exact fit? We're still worth a conversation — reach out anyway.",
	allLabel: "All Roles"
};
