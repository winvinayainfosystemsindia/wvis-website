import React from 'react';
import {
	Code,
	Accessibility,
	VideoLibrary,
	SettingsSuggest,
	IntegrationInstructions,
	Key,
	Analytics
} from '@mui/icons-material';

export interface AcademyFeature {
	id: string;
	title: string;
	description: string;
	icon: React.ReactNode;
	color: string;
}

export interface EnterpriseFeature {
	title: string;
	description: string;
	icon: React.ReactNode;
}

export const NAMM_ACADEMY_FEATURES: AcademyFeature[] = [
	{
		id: 'isl',
		title: 'ISL-Enabled Learning',
		description: 'The only platform offering Indian Sign Language (ISL) video content, making tech education truly inclusive for Deaf and Hard of Hearing learners.',
		icon: <VideoLibrary fontSize="large" />,
		color: '#8512E0'
	},
	{
		id: 'compiler',
		title: 'Live Practice IDE',
		description: 'Learn by doing. Our integrated code editor and compiler allow you to practice and test your code directly within the platform.',
		icon: <Code fontSize="large" />,
		color: '#002FFF'
	},
	{
		id: 'accessible',
		title: 'Accessible for All',
		description: 'Built with WCAG 2.1 standards to ensure a seamless learning experience for persons with different disabilities.',
		icon: <Accessibility fontSize="large" />,
		color: '#10B981'
	}
];

export const NAMM_ACADEMY_ENTERPRISE: EnterpriseFeature[] = [
	{
		title: 'SSO Integration',
		description: 'Seamlessly access NammAcademy using your enterprise credentials with our robust Single Sign-On (SSO) support.',
		icon: <Key />
	},
	{
		title: 'B2B API Access',
		description: 'Integrate professional courses and learner data directly into your internal systems through secure APIs.',
		icon: <IntegrationInstructions />
	},
	{
		title: 'Custom Curriculums',
		description: 'Organization-specific learning paths aligned with your technical and inclusion objectives.',
		icon: <SettingsSuggest />
	},
	{
		title: 'Enterprise Analytics & Reporting',
		description: 'Track learner progress, engagement, and outcomes with centralized dashboards and exportable reports.',
		icon: <Analytics />
	}
];

export const EXPLORE_ITEMS = [
	{
		title: 'Courses',
		description: 'Practical hands-on learning across WinVinaya products, built for the way real teams work.',
		image: '/images/academy/explore_courses.png',
		link: '/nammacademy/courses',
		linkText: 'Explore Courses'
	},
	{
		title: 'Certifications',
		description: 'Validate your expertise with globally recognized professional certifications.',
		image: '/images/academy/explore_certs.png',
		link: '/nammacademy/certifications',
		linkText: 'Explore Certificates'
	},
	{
		title: 'Learning Paths',
		description: 'Choose a learning journey that\'s tailored to your product, role or goal and grow with confidence!',
		image: '/images/academy/explore_paths.png',
		link: '/nammacademy/paths',
		linkText: 'Explore Learning Paths'
	}
];

export const NAMM_ACADEMY_STATS = [
	{ label: 'Learners Empowered', value: '10,000+' },
	{ label: 'ISL Modules', value: '500+' },
	{ label: 'Industry Partners', value: '50+' },
	{ label: 'Certified Experts', value: '2,500+' }
];
