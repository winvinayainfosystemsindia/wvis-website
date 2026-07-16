import React from 'react';
import { Flag, Visibility, TrendingUp } from '@mui/icons-material';

export type VisionMissionAccent = 'primary' | 'secondary' | 'info';

export interface VisionMissionHeader {
	overline: string;
	title: {
		main: string;
		gradient: string;
	};
	description: string;
}

export const visionMissionHeader: VisionMissionHeader = {
	overline: "STRATEGIC PILLARS",
	title: {
		main: "Architecting the",
		gradient: "Next Frontier"
	},
	description: "Guided by world-class standards and an unwavering commitment to inclusion, we define our success through the clarity of our purpose."
};

export interface VisionMissionItem {
	id: string;
	eyebrow: string;
	title: string;
	icon: React.ReactNode;
	content: string;
	/** Semantic theme palette key — the component resolves this to actual
	 *  colors via theme.palette[accent], never a hardcoded hex value. */
	accent: VisionMissionAccent;
}

export const visionMissionData: VisionMissionItem[] = [
	{
		id: 'vision',
		eyebrow: "VISION",
		title: "Our Vision",
		icon: <Visibility fontSize="large" />,
		accent: 'primary',
		content: "A world where AI and technology are tools of inclusion, not exclusion — where persons with disabilities have equal access to meaningful, well-paid careers in tech."
	},
	{
		id: 'mission',
		eyebrow: "MISSION",
		title: "Our Mission",
		icon: <Flag fontSize="large" />,
		accent: 'secondary',
		content: "To combine enterprise-grade AI and software engineering with structured training and employment for persons with disabilities — proving that business growth and social impact can be the same goal, not competing ones."
	},
	{
		id: 'goal',
		eyebrow: "WHAT DRIVES US",
		title: "Our North Star",
		icon: <TrendingUp fontSize="large" />,
		accent: 'info',
		content: "To build the strongest, most connected community of technology professionals with disabilities in India — where real impact is measured by lives changed, not just numbers on a report."
	}
];
