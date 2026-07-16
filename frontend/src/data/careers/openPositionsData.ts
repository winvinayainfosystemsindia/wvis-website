export type Department =
	| 'Engineering'
	| 'AI & Innovation'
	| 'Accessibility & Compliance'
	| 'Training & Empowerment'
	| 'Design';

export interface OpenPosition {
	id: string;
	title: string;
	department: Department;
	location: string;
	type: string;
	description: string;
}

export const departments: Department[] = [
	'Engineering',
	'AI & Innovation',
	'Accessibility & Compliance',
	'Training & Empowerment',
	'Design'
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

export const openPositionsData: OpenPosition[] = [
	{
		id: 'senior-fullstack-engineer',
		title: "Senior Full-Stack Engineer",
		department: 'Engineering',
		location: "Bengaluru · Hybrid",
		type: "Full-time",
		description: "Build and ship the enterprise software and product features that directly fund our training and community programs."
	},
	{
		id: 'ai-ml-engineer',
		title: "AI/ML Engineer",
		department: 'AI & Innovation',
		location: "Remote",
		type: "Full-time",
		description: "Design and train the AI models behind products like A11ySense AI — technology built to remove barriers, not create new ones."
	},
	{
		id: 'accessibility-auditor',
		title: "Accessibility Auditor (WCAG)",
		department: 'Accessibility & Compliance',
		location: "Bengaluru",
		type: "Full-time",
		description: "Run WCAG 2.1 audits for enterprise clients and translate findings into fixes developers can actually act on."
	},
	{
		id: 'training-placement-coordinator',
		title: "Training & Placement Coordinator",
		department: 'Training & Empowerment',
		location: "Bengaluru",
		type: "Full-time",
		description: "Run role-based technical training programs for persons with disabilities, from onboarding through job placement."
	},
	{
		id: 'inclusive-ux-designer',
		title: "UX/UI Designer, Inclusive Design",
		department: 'Design',
		location: "Remote",
		type: "Full-time",
		description: "Design accessible-first product experiences and help set the accessibility bar for everything we ship."
	},
	{
		id: 'qa-engineer',
		title: "QA Engineer",
		department: 'Engineering',
		location: "Bengaluru · Hybrid",
		type: "Full-time",
		description: "Own manual and automated testing across our product suite, with a strong focus on accessibility regression testing."
	}
];
