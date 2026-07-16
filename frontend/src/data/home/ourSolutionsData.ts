export const ourSolutionsData = {
	header: {
		overline: 'WHAT WE\'VE BUILT',
		title: {
			main: 'Real Problems.',
			gradient: 'Real Solutions.',
		},
		description:
			'Every product we\'ve built started with a real conversation, a real gap, and a real team that needed better tools.',
	},
	products: [
		{
			id: 'a11ysense',
			label: 'A11ySense AI',
			hook: 'AI-powered Accessibility auditing made simple',
			story:
				'Testing websites and web applications for accessibility compliance can be time-consuming and manual. A11ySense AI automates WCAG 2.1 audits, helping developers and enterprises identify and resolve accessibility barriers quickly to build inclusive digital experiences.',
			features: [
				'Automated WCAG 2.1 compliance scanning',
				'Real-time accessibility score and visual highlights',
				'Detailed developer reports with code snippet recommendations',
				'Intelligent dashboard to track audit history and improvements',
			],
			stat: { value: '100%', label: 'WCAG scanning coverage' },
			secondaryStats: [
				{ value: 'AI-Powered', label: 'Detection Engine' },
				{ value: 'Automated', label: 'Reports' },
			],
			badge: 'AI-Powered Accessibility Audit',
			ctaText: 'Explore A11ySense AI',
			ctaLink: '/products/a11ysense-ai',
			accentColor: '#2563eb',
			bgAccent: 'rgba(37, 99, 235, 0.05)',
			tag: 'For Developers & QA Teams',
		},
		{
			id: 'mis',
			label: 'WinVinaya MIS',
			hook: 'Custom-built candidate lifecycle management platform',
			story:
				'Managing candidate lifecycle details across spreadsheets can lead to data fragmentation and errors. WinVinaya MIS provides a secure, role-based platform to manage trainee enrollment, course scheduling, progress assessments, job placement logs, and employer relations in a unified dashboard.',
			features: [
				'End-to-end candidate lifecycle tracking',
				'Batch scheduling and attendance management',
				'Comprehensive analytics and progress reporting',
				'Secure role-based access control (RBAC)',
			],
			stat: { value: 'Full', label: 'Lifecycle visibility' },
			secondaryStats: [
				{ value: 'Custom', label: 'MIS Engine' },
				{ value: 'Batch-wise', label: 'Analytics' },
			],
			badge: 'Tailored for Candidate Lifecycles',
			ctaText: 'Explore WinVinaya MIS',
			ctaLink: '/products/winvinaya-mis',
			accentColor: '#0891b2',
			bgAccent: 'rgba(8, 145, 178, 0.05)',
			tag: 'For NGOs & Program Managers',
		},
		{
			id: 'nammacademy',
			label: 'NammAcademy',
			hook: "India's first sign-language tech academy",
			story:
				'Millions of Deaf and Hard of Hearing learners across India want to learn to code, design, build careers in tech — but no platform speaks their language. Literally. NammAcademy changes that, one lesson at a time.',
			features: [
				'Indian Sign Language (ISL) video content — first of its kind',
				'Built-in live code editor so you learn by doing',
				'WCAG 2.1 compliant — accessible to all learners',
				'Certifications recognised by industry partners',
			],
			stat: { value: '500+', label: 'ISL learning modules' },
			secondaryStats: [
				{ value: 'WCAG 2.1', label: 'Compliant' },
				{ value: 'Live IDE', label: 'Practice Coding' },
			],
			badge: 'First of its kind in India',
			ctaText: 'Explore NammAcademy',
			ctaLink: '/products/nammacademy',
			accentColor: '#8512E0',
			bgAccent: 'rgba(133, 18, 224, 0.05)',
			tag: 'For Learners & Enterprises',
		},
		{
			id: 'invoice',
			label: 'Invoice Intelligence',
			hook: 'AI-powered invoice extraction, fully automated',
			story:
				'Finance teams in SMEs and large organisations spend hours every single week keying in invoice line items from PDFs, scanned bills, and vendor documents. We trained an AI model specifically on Indian invoices to automate this.',
			features: [
				'90% accuracy on Indian invoice formats (regional languages included)',
				'Classifies vendor bills, invoices, credit & debit notes automatically',
				'Exports structured Excel in seconds',
				'No data stored — your financials stay private',
			],
			stat: { value: '90%', label: 'Extraction accuracy' },
			secondaryStats: [
				{ value: 'Zero', label: 'Data stored' },
				{ value: 'Batch', label: 'Processing' },
			],
			badge: 'India-specific AI model',
			ctaText: 'See It in Action',
			ctaLink: '/products/invoice-intelligence',
			accentColor: '#7c3aed',
			bgAccent: 'rgba(124, 58, 237, 0.05)',
			tag: 'For Finance & Operations Teams',
		},
	],
};
