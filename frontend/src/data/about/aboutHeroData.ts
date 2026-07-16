export interface AboutHeroData {
	overline: string;
	title: {
		main: string;
		gradient: string;
	};
	description: string;
	paragraphs: string[];
	backgroundImage: string;
}

export const aboutHeroData: AboutHeroData = {
	overline: "AI-DRIVEN. ACCESSIBILITY-FIRST. IMPACT-DRIVEN.",
	title: {
		main: "Building Technology",
		gradient: "for Every Ability"
	},
	description: "WinVinaya InfoSystems is a social-impact IT enterprise where AI innovation meets accessibility. We build enterprise-grade software and AI solutions while training and employing persons with disabilities — because for us, business success and social impact are the same goal.",
	paragraphs: [
		"We work at the intersection of AI, accessibility, and empowerment. Every product we build — from AI-powered accessibility audits to enterprise software — is designed to remove barriers, not create new ones.",
		"But technology is only half the story. We run structured training programs that turn skills into real, sustainable careers for persons with disabilities, and we're building a strong, connected community across every kind of disability.",
		"For us, real impact isn't a line item — it's the life of a person with a disability who now has a career, a community, and a future they helped build."
	],
	backgroundImage: "/images/about/hero_banner.png"
};
