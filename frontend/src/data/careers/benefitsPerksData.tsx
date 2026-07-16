import {
	HealthAndSafety,
	Home,
	MenuBook,
	Accessible,
	BeachAccess,
	SupervisorAccount,
	FamilyRestroom,
	VolunteerActivism
} from '@mui/icons-material';

export interface BenefitItem {
	label: string;
	icon: typeof HealthAndSafety;
}

export const benefitsPerksHeader = {
	overline: "BENEFITS & PERKS",
	title: {
		main: "Taken Care Of,",
		accent: "So You Can Focus"
	}
};

export const benefitsPerksData: BenefitItem[] = [
	{ label: "Health insurance for you & family", icon: HealthAndSafety },
	{ label: "Flexible & remote-friendly work", icon: Home },
	{ label: "Learning & development budget", icon: MenuBook },
	{ label: "Assistive tech & accommodations", icon: Accessible },
	{ label: "Generous paid time off", icon: BeachAccess },
	{ label: "Dedicated onboarding mentor", icon: SupervisorAccount },
	{ label: "Inclusive parental leave", icon: FamilyRestroom },
	{ label: "Paid community volunteering days", icon: VolunteerActivism }
];
