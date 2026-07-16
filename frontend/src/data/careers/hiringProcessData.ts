export interface HiringStep {
	step: string;
	title: string;
	description: string;
}

export const hiringProcessHeader = {
	overline: "HOW TO JOIN",
	title: {
		main: "A Simple,",
		accent: "Honest Process"
	},
	description: "No black-box applications. Here's exactly what happens after you apply."
};

export const hiringProcessData: HiringStep[] = [
	{
		step: "01",
		title: "Apply",
		description: "Send us your resume for a role — or reach out even if nothing's an exact fit."
	},
	{
		step: "02",
		title: "Screening Call",
		description: "A short conversation about your experience, what you're looking for, and any accommodations you need."
	},
	{
		step: "03",
		title: "Interviews",
		description: "Role-specific interviews with the team you'd actually work with — practical, not a trivia contest."
	},
	{
		step: "04",
		title: "Offer & Onboarding",
		description: "A clear offer, then a structured onboarding plan with a dedicated mentor from day one."
	}
];
