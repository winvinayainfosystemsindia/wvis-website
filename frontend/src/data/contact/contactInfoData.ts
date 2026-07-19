export interface ContactInfoItem {
	icon: 'email' | 'phone' | 'location' | 'time';
	title: string;
	lines: string[];
}

export const CONTACT_INFO: ContactInfoItem[] = [
	{
		icon: 'email',
		title: 'Email Us',
		lines: ['info@winvinaya.com', 'support@winvinaya.com'],
	},
	{
		icon: 'phone',
		title: 'Call Us',
		lines: ['+91 80 4123 4567', 'Mon – Sat, 9:00 AM – 6:00 PM IST'],
	},
	{
		icon: 'location',
		title: 'Visit Us',
		lines: ['WinVinaya InfoSystems', 'Bengaluru, Karnataka, India'],
	},
	{
		icon: 'time',
		title: 'Response Time',
		lines: ['We reply within 1 business day'],
	},
];

export const CONTACT_SUBJECTS: string[] = [
	'General Enquiry',
	'Sales & Partnerships',
	'Careers',
	'Accessibility Services',
	'Technical Support',
	'Media & Press',
	'Other',
];
