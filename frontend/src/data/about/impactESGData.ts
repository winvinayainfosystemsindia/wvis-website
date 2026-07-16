export type ImpactESGAccent = 'primary' | 'secondary';

export interface ImpactESGPillar {
	title: string;
	description: string;
	/** Semantic theme palette key — resolved to real colors via theme.palette[accent]. */
	accent: ImpactESGAccent;
}

export interface ImpactESGData {
	title: string;
	description: string;
	pillars: ImpactESGPillar[];
}

export const impactESGData: ImpactESGData = {
	title: "If It Doesn't Change a Life, It's Not Impact",
	description: "We don't measure success in revenue alone. We measure it in the careers we've built, the barriers we've removed, and the lives of persons with disabilities we've genuinely changed.",
	pillars: [
		{
			title: "Training That Changes Lives",
			accent: 'primary',
			description: "Every training program we run starts with one question: will this genuinely change someone's life? We focus on role-based technical training for persons with disabilities — turning skills into real jobs, real income, and real independence, not just a certificate."
		},
		{
			title: "Business & Impact, Aligned",
			accent: 'secondary',
			description: "Business impact and social impact aren't separate at WinVinaya — they fund each other. The AI products and accessibility services we deliver to clients are what sustain the training and community programs that employ the very people who help build them."
		}
	]
};
