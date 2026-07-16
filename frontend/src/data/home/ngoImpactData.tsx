import {
	Dashboard,
	School,
	Draw,
	VideoLibrary,
	Storage,
} from '@mui/icons-material';

export const ngoImpactData = {
	header: {
		overline: 'NGO & SOCIAL SECTOR',
		title: {
			main: 'Technology',
			gradient: 'for Good',
		},
		description:
			'We believe inclusion is not a feature — it\'s the foundation. We partner with NGOs and social enterprises to multiply their impact through purposeful technology.',
	},
	mission: {
		quote:
			'"WinVinaya Infosystems was founded on the principle that technology must serve everyone — including persons with disabilities, underrepresented communities, and mission-driven organisations."',
		author: '— Sivasankar Jayagopal, Founder & Chairman',
	},
	services: [
		{
			title: 'Custom Built MIS',
			description: 'Manage trainee enrollment, batch schedules, evaluations, and job placement logs in a secure, role-based platform.',
			icon: <Dashboard />,
			color: '#0891b2',
		},
		{
			title: 'Learning Management Systems',
			description: 'Digital education platforms tailored for NGO training programs, beneficiary skilling & capacity building.',
			icon: <School />,
			color: '#8512E0',
		},
		{
			title: 'Digital Marketing & Branding',
			description: 'Amplify your mission with impactful digital presence — from website design to social media strategy.',
			icon: <Draw />,
			color: '#002FFF',
		},
		{
			title: 'ISL Video & Inclusive Content',
			description: 'Indian Sign Language videos, captions & multimedia content that ensures your message reaches every beneficiary.',
			icon: <VideoLibrary />,
			color: '#f59e0b',
		},
		{
			title: 'Operational Excellence',
			description: 'Workflow optimisation, process mapping & digital tools that help you do more with less.',
			icon: <Storage />,
			color: '#ef4444',
		},
	],
	ctaBanner: {
		question: 'Is your NGO leveraging technology to its full potential?',
		cta: "Let's Talk",
		link: '/contact',
	},
};
