import { WorkspacePremium, School, Accessibility, Groups } from '@mui/icons-material';

export type WhyJoinUsAccent = 'primary' | 'secondary' | 'info' | 'success';

export interface WhyJoinUsItem {
	title: string;
	description: string;
	icon: typeof WorkspacePremium;
	accent: WhyJoinUsAccent;
}

export const whyJoinUsHeader = {
	overline: "OUR CULTURE",
	title: {
		main: "Why People",
		accent: "Stay"
	},
	description: "This isn't a job that happens to be at a good company. It's work that funds a mission — and a culture built to match it."
};

export const whyJoinUsData: WhyJoinUsItem[] = [
	{
		title: "Meaningful Work",
		description: "Every project you ship funds training and jobs for persons with disabilities. Your code has a second job — changing lives.",
		icon: WorkspacePremium,
		accent: 'primary'
	},
	{
		title: "Real Growth",
		description: "Structured mentorship, access to the latest AI tools, and a culture that invests in your technical growth, not just your output.",
		icon: School,
		accent: 'secondary'
	},
	{
		title: "Inclusive by Design",
		description: "We build accessible products because we live accessibility — our own workplace, tools, and hiring are designed for every kind of ability.",
		icon: Accessibility,
		accent: 'info'
	},
	{
		title: "A Real Community",
		description: "Flat teams, real ownership, and a workplace where your voice shapes what we build next — not just another org chart.",
		icon: Groups,
		accent: 'success'
	}
];
