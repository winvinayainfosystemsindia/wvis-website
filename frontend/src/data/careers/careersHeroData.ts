export interface CareersHeroStat {
	value: string;
	label: string;
}

export interface CareersHeroData {
	overline: string;
	title: {
		main: string;
		accent: string;
	};
	description: string;
	stats: CareersHeroStat[];
	primaryCta: { text: string; targetId: string };
	secondaryCta: { text: string; targetId: string };
}

export const careersHeroData: CareersHeroData = {
	overline: "JOIN THE MISSION",
	title: {
		main: "Build Technology.",
		accent: "Change Lives."
	},
	description: "We're hiring engineers, designers, and trainers who want their work to matter. Every product you help ship funds real training and real careers for persons with disabilities.",
	stats: [
		{ value: "60%+", label: "Inclusive Hiring" },
		{ value: "500+", label: "Lives Changed" },
		{ value: "100%", label: "Accessible Workplace" }
	],
	primaryCta: { text: "View Open Positions", targetId: "open-positions-section" },
	secondaryCta: { text: "Our Culture", targetId: "why-join-us-section" }
};
