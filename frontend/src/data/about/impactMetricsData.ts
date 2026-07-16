import { Users, Accessibility, ShieldCheck, Compass, type LucideIcon } from 'lucide-react';

export type ImpactAccent = 'primary' | 'secondary' | 'info' | 'success';

export interface ImpactStat {
	value: string;
	label: string;
	/** Explicit icon reference — no guessing an icon from the label text. */
	icon: LucideIcon;
	/** Semantic theme palette key — resolved to real colors via theme.palette[accent]. */
	accent: ImpactAccent;
}

export const impactMetricsHeader = {
	overline: "OUR GLOBAL IMPACT",
	title: {
		main: "Driving Change Through",
		accent: "Numbers"
	},
	description: "Our metrics reflect our commitment to excellence, inclusion, and the transformative power of digital accessibility."
};

export const impactMetricsData: ImpactStat[] = [
	{ value: "500+", label: "PwD Trained & Empowered", icon: Users, accent: 'primary' },
	{ value: "60%+", label: "Inclusive Hiring", icon: Accessibility, accent: 'secondary' },
	{ value: "100%", label: "WCAG Accessibility Compliance", icon: ShieldCheck, accent: 'info' },
	{ value: "Community First", label: "Our North Star", icon: Compass, accent: 'success' }
];
