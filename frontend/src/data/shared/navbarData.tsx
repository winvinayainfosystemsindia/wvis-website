import React from 'react';
import {
	Business,
	RocketLaunch,
	VolunteerActivism,
	AutoAwesome,
	Code,
	Cloud,
	Security,
	Dashboard,
	BugReport,
	AccessibilityNew,
	Scanner,
	PictureAsPdf,
	Psychology,
	School,
	VideoLibrary,
	Draw,
	Storage,
	AutoGraph,
	Groups,
	Insights,
	Lightbulb,
	TrendingUp,
	Speed,
	Info,
	Diversity1,
	Work,
	Diversity3,
} from '@mui/icons-material';

export interface ServiceItem {
	label: string;
	subtext: string;
	icon?: React.ReactNode;
	path: string;
}

export interface ServiceSection {
	title: string;
	icon: React.ReactNode;
	description: string;
	items: ServiceItem[];
}

export const WHAT_WE_DO_DATA: ServiceSection[] = [
	{
		title: 'Enterprise Solutions',
		icon: <Business />,
		description: 'End-to-end digital transformation',
		items: [
			{
				label: 'Microsoft Power Platform Solutions',
				subtext: 'Power BI, Apps & Automate',
				icon: <Dashboard fontSize="small" />,
				path: '/services/power-platform'
			},
			{
				label: 'Quality Assurance & Testing',
				subtext: 'Manual & Automated',
				icon: <BugReport fontSize="small" />,
				path: '/services/qa-testing'
			},
			{
				label: 'Custom Application Development',
				subtext: 'Web & Mobile Apps',
				icon: <Code fontSize="small" />,
				path: '/services/custom-app-dev'
			},
			{
				label: 'Cloud Infra Solutions',
				subtext: 'AWS, GCP & Azure Infrastructure',
				icon: <Cloud fontSize="small" />,
				path: '/services/cloud-infra'
			},
		],
	},

	{
		title: 'Accessibility & Compliance',
		icon: <Security />,
		description: 'Inclusive digital experiences',
		items: [
			{
				label: 'Accessibility Audit',
				subtext: 'Web & Mobile Accessibility',
				icon: <AccessibilityNew fontSize="small" />,
				path: '/services/a11y-audit'
			},
			{
				label: 'Document Remediation',
				subtext: 'PDF/UA Standards',
				icon: <PictureAsPdf fontSize="small" />,
				path: '/services/doc-remediation'
			}
		],
	},
	{
		title: 'NGO & Social Impact',
		icon: <VolunteerActivism />,
		description: 'Technology for good',
		items: [
			{
				label: 'Custom Built MIS',
				subtext: 'Candidate Lifecycle Management',
				icon: <Dashboard fontSize="small" />,
				path: '/services/custom-built-mis'
			},
			{
				label: 'Digital Marketing & Design',
				subtext: 'Branding & UX',
				icon: <Draw fontSize="small" />,
				path: '/services/digital-marketing'
			},
			{
				label: 'Operational Excellence',
				subtext: 'Workflow Optimization',
				icon: <Storage fontSize="small" />,
				path: '/services/operational-excellence'
			},
			{
				label: 'Inclusive Content Creation',
				subtext: 'ISL Video & Media',
				icon: <VideoLibrary fontSize="small" />,
				path: '/services/inclusive-content'
			},
		],
	},
	{
		title: 'Capacity Building & Adoption',
		icon: <School />,
		description: 'Training and inclusion programs',
		items: [
			{
				label: 'Corporate Training Programs',
				subtext: 'Digital & Technical Skills Upskilling',
				icon: <Code fontSize="small" />,
				path: '/services/corporate-training'
			},
			{
				label: 'Educational Institution Training',
				subtext: 'Industry-Ready Skill Development',
				icon: <School fontSize="small" />,
				path: '/services/edu-training'
			},
			{
				label: 'NGO Capacity Building',
				subtext: 'Organizational & Digital Skills Training',
				icon: <VolunteerActivism fontSize="small" />,
				path: '/services/ngo-capacity'
			},
			{
				label: 'Disability Awareness Orientation (DAO)',
				subtext: 'Inclusive Workplace & Sensitization Programs',
				icon: <Diversity3 fontSize="small" />,
				path: '/services/disability-awareness'
			},
			{
				label: 'DEI Consulting Services',
				subtext: 'Diversity, Equity & Inclusion Advisory for Corporates',
				icon: <Diversity1 fontSize="small" />,
				path: '/services/dei-consulting'
			}
		],
	},
	{
		title: 'AI & Innovation',
		icon: <AutoAwesome />,
		description: 'Next-gen intelligent systems',
		items: [
			{
				label: 'AI-Powered Applications',
				subtext: 'LLMs & Chatbots',
				icon: <Psychology fontSize="small" />,
				path: '/services/ai-applications'
			},
			{
				label: 'Agentic AI Systems',
				subtext: 'Workflow Automation',
				icon: <RocketLaunch fontSize="small" />,
				path: '/services/agentic-ai'
			},
			{
				label: 'Data Engineering & Analytics',
				subtext: 'ETL & Pipelines',
				icon: <AutoGraph fontSize="small" />,
				path: '/services/data-engineering'
			},
			{
				label: 'Document Intelligence',
				subtext: 'OCR & Digitization',
				icon: <Scanner fontSize="small" />,
				path: '/services/doc-intelligence'
			},
		],
	}

];

export interface NavMenuItem {
	label: string;
	description: string;
	path: string;
	icon: React.ReactNode;
	color?: string;
}

export const NAV_MENU_ITEMS = {
	ourSolutions: [
		{
			label: 'A11ySense AI',
			description: 'AI powered Accessibility audit application to test websites and web applications.',
			path: '/products/a11ysense-ai',
			icon: <AccessibilityNew />,
			color: '#2563eb',
		},
		{
			label: 'WinVinaya MIS',
			description: 'Custom built MIS Application for handling candidate lifecycle.',
			path: '/products/winvinaya-mis',
			icon: <Groups />,
			color: '#0891b2',
		},
		{
			label: 'NammAcademy',
			description: 'Inclusive digital learning platform, industry-relevant skill development.',
			path: '/products/nammacademy',
			icon: <School />,
			color: '#16a34a',
		},
		{
			label: 'Invoice Intelligence',
			description: 'Automated invoice data extraction, validation, and processing for finance teams.',
			path: '/products/invoice-intelligence',
			icon: <Insights />,
			color: '#7c3aed',
		},
	],
	resources: [
		{
			label: 'Blogs',
			description: 'Expert articles on technology, inclusion, and AI.',
			path: '/resources/blog',
			icon: <Lightbulb />,
			color: '#ef4444', // Red-orange theme
		},
		{
			label: 'Newsletters',
			description: 'Monthly updates on digital accessibility trends and services.',
			path: '/resources/newsletter',
			icon: <Speed />,
			color: '#eab308', // Gold theme
		},
		{
			label: 'Case Studies',
			description: 'Real-world success stories and client implementations.',
			path: '/resources/case-studies',
			icon: <TrendingUp />,
			color: '#3b82f6', // Blue theme
		},
		{
			label: 'Marketing Pitch',
			description: 'Overview of our services, mission, and client offerings.',
			path: '/resources/marketing-pitch',
			icon: <RocketLaunch />,
			color: '#10b981', // Emerald theme
		},
	],
	whoWeAre: [
		{
			label: 'Who We Are',
			description: 'Our values, mission, and leadership vision',
			path: '/who-we-are',
			icon: <Info />,
		},
		{
			label: 'Impact',
			description: 'Social impact and inclusion metrics',
			path: '/impact',
			icon: <VolunteerActivism />,
		},
	],
	careers: [
		{
			label: 'Open Positions',
			description: 'Join our inclusive team',
			path: '/careers',
			icon: <Work />,
		},
	],
	// ourTeam: [
	// 	{
	// 		label: 'Leadership',
	// 		description: 'Meet our leaders',
	// 		path: '/team/leadership',
	// 		icon: <Diversity1 />,
	// 	},
	// ]
};

export const CTA_BUTTONS = [
	{ label: 'Demo', path: '/demo', variant: 'outlined' as const },
	{ label: 'Contact Us', path: '/contact', variant: 'contained' as const },
];

// Top-level navbar items (desktop nav bar + mobile drawer top links).
// `path` -> plain link. `megaMenu` -> opens the matching MegaMenu panel
// and highlights active when the current route starts with `activePrefix`.
export type MegaMenuKey = 'whatWeDo' | 'ourSolutions' | 'resources';

export interface TopNavItem {
	label: string;
	path?: string;
	megaMenu?: MegaMenuKey;
	activePrefix: string;
}

export const NAV_ITEMS: TopNavItem[] = [
	{ label: 'Who We Are', path: '/who-we-are', activePrefix: '/who-we-are' },
	{ label: 'What We Do', megaMenu: 'whatWeDo', activePrefix: '/what-we-do' },
	{ label: 'Our Solutions', megaMenu: 'ourSolutions', activePrefix: '/our-solutions' },
	{ label: 'Resources', megaMenu: 'resources', activePrefix: '/resources' },
	{ label: 'Careers', path: '/careers', activePrefix: '/careers' },
	// { label: 'Our Team', path: '/our-team', activePrefix: '/our-team' },
];
