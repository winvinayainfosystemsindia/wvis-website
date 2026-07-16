import React from 'react';
import { AutoAwesome, School, Diversity3 } from '@mui/icons-material';
import type { SvgIconProps } from '@mui/material/SvgIcon';

export type ESGAccent = 'primary' | 'secondary' | 'info';

export interface ESGSection {
	title: string;
	description: string;
	icon: React.ComponentType<SvgIconProps>;
	/** Semantic theme palette key — resolved to real colors via theme.palette[accent]. */
	accent: ESGAccent;
	points: string[];
}

export const esgPillarsHeader = {
	overline: "HOW WE CREATE IMPACT",
	title: {
		main: "Where Technology Meets",
		accent: "Empowerment"
	},
	description: "Three pillars guide everything we build — from the code we ship to the careers and community we create."
};

export const esgPillarsData: ESGSection[] = [
	{
		title: "AI-Driven Innovation",
		description: "We build AI and enterprise software with a purpose — technology that removes barriers instead of creating new ones.",
		icon: AutoAwesome,
		accent: 'primary',
		points: [
			"AI-powered accessibility tools, like A11ySense AI",
			"Ethical, bias-aware AI development",
			"Every product designed to be accessible from day one"
		]
	},
	{
		title: "Capacity Building",
		description: "Structured, role-based technical training that turns persons with disabilities into industry-ready technology professionals.",
		icon: School,
		accent: 'secondary',
		points: [
			"Role-based technical training for persons with disabilities",
			"Real career paths, not just placements",
			"Corporate and institutional disability-inclusion training"
		]
	},
	{
		title: "Community & Belonging",
		description: "Building a strong, connected community across every kind of disability — one that lasts well beyond a single job placement.",
		icon: Diversity3,
		accent: 'info',
		points: [
			"A support network spanning every kind of disability",
			"Peer mentorship and continued growth after hiring",
			"Real impact measured by lives changed, not headcount"
		]
	}
];
