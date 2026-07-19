export interface DemoBenefit {
	title: string;
	description: string;
}

export const DEMO_BENEFITS: DemoBenefit[] = [
	{
		title: 'Tailored Walkthrough',
		description: 'A live session focused on the products and use cases relevant to your team.',
	},
	{
		title: 'Expert-Led Session',
		description: 'Meet the specialists behind our accessibility and automation solutions.',
	},
	{
		title: 'No Obligation',
		description: 'Explore what we offer with zero pressure to commit — just honest answers.',
	},
	{
		title: 'Fast Turnaround',
		description: 'Our team typically confirms your slot within one business day.',
	},
];

export const PRODUCT_INTEREST_OPTIONS: string[] = [
	'A11ySense AI — Accessibility Audit Platform',
	'WinVinaya MIS — Candidate Lifecycle Management',
	'NammAcademy — Inclusive Learning Platform',
	'Invoice Intelligence — Automated Invoice Processing',
	'Enterprise & Power Platform Solutions',
	'Not sure yet — help me choose',
];

export const COMPANY_SIZE_OPTIONS: string[] = [
	'1 – 10 employees',
	'11 – 50 employees',
	'51 – 200 employees',
	'201 – 500 employees',
	'500+ employees',
];
