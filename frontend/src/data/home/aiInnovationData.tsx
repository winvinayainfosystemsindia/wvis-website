import {
	Psychology,
	RocketLaunch,
	AutoGraph,
	Scanner,
	ArrowForward,
} from '@mui/icons-material';

export const aiInnovationData = {
	header: {
		overline: 'NEXT-GEN INTELLIGENT SYSTEMS',
		title: {
			main: 'AI That Works for',
			gradient: 'Your Business',
		},
		description:
			'From intelligent document processing to agentic workflows — we build AI solutions that deliver measurable ROI and are optimised for the Indian market.',
	},
	features: [
		{
			title: 'AI-Powered Applications',
			description:
				'Custom LLMs, RAG pipelines & conversational chatbots tuned for your domain — turning raw data into intelligent, context-aware experiences.',
			icon: <Psychology fontSize="large" />,
			color: '#8512E0',
			accent: 'rgba(133, 18, 224, 0.08)',
		},
		{
			title: 'Agentic AI Systems',
			description:
				'Autonomous workflow agents that think, decide, and act — reducing manual overhead significantly and freeing your team for high-value work.',
			icon: <RocketLaunch fontSize="large" />,
			color: '#002FFF',
			accent: 'rgba(0, 47, 255, 0.08)',
		},
		{
			title: 'Document Intelligence',
			description:
				'OCR & AI extraction from invoices, forms, and reports with 90% accuracy. Built specifically for Indian regional documents and formats.',
			icon: <Scanner fontSize="large" />,
			color: '#7c3aed',
			accent: 'rgba(124, 58, 237, 0.08)',
		},
		{
			title: 'Data Engineering & Analytics',
			description:
				'End-to-end ETL pipelines, real-time Power BI dashboards, and executive-level insights — delivered straight to your decision-makers.',
			icon: <AutoGraph fontSize="large" />,
			color: '#0ea5e9',
			accent: 'rgba(14, 165, 233, 0.08)',
		},
	],
	cta: {
		text: 'Explore AI Solutions',
		icon: <ArrowForward />,
		link: '/services/corporate',
	},
};
