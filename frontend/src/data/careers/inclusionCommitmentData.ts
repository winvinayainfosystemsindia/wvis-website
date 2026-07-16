export interface InclusionCommitmentPoint {
	title: string;
	description: string;
}

export interface InclusionCommitmentData {
	overline: string;
	title: string;
	description: string;
	points: InclusionCommitmentPoint[];
}

export const inclusionCommitmentData: InclusionCommitmentData = {
	overline: "OUR COMMITMENT",
	title: "A Workplace Built for Every Ability",
	description: "Accessibility isn't a feature we ship to clients — it's how we run our own company. If you need an accommodation to do your best work here, we'll build it, not just approve it.",
	points: [
		{
			title: "Assistive Technology, Provided",
			description: "Screen readers, alternative input devices, ergonomic setups — whatever your role needs, on day one, not after a request form."
		},
		{
			title: "Structured Onboarding & Mentorship",
			description: "Every hire — disabled or not — gets a dedicated mentor and a training plan built around how you learn best."
		},
		{
			title: "Flexible, Accessible Communication",
			description: "ISL interpretation for meetings on request, flexible hours, and remote-friendly roles wherever the work allows it."
		},
		{
			title: "Careers, Not Just Placements",
			description: "We track growth after hiring — promotions, skill development, and long-term careers — not just how many people we placed."
		}
	]
};
