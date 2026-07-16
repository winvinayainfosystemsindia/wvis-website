export interface TeamMember {
	id: string;
	name: string;
	role: string;
	image: string;
	bio?: string;
	socialLinks?: {
		linkedin?: string;
		email?: string;
		twitter?: string;
		instagram?: string;
	};
}

export const LEADERSHIP_DATA: TeamMember[] = [
	{
		id: 'l1',
		name: 'Sivasankar Jayagopal',
		role: 'Founder & Chairman',
		image: '/images/teams/leadership/sivasankar_jayagopal.png',
		bio: 'A recognized IT thought leader with 30+ years of expertise, has held key roles at Keane (NTT Data), Adobe, and Microsoft, driving benchmarking and global engagements.',
		socialLinks: {
			linkedin: 'https://linkedin.com',
			email: 'mailto:shiva@example.com',
			instagram: 'https://instagram.com'
		}
	},
	{
		id: 'l2',
		name: 'Seethalakshmi Kupuraj',
		role: 'Co-Founder & Director',
		image: '/images/teams/leadership/akila_sankar.png',
		bio: 'An expert in disability support, child development, neurodiversity, soft skills, and Indian Sign Language, with 17+ years of experience.',
		socialLinks: {
			linkedin: 'https://linkedin.com',
			email: 'mailto:akila@example.com',
			instagram: 'https://instagram.com'
		}
	},
	{
		id: 'l3',
		name: 'Baskaran Arumugam',
		role: 'Director - Products',
		image: '/images/teams/leadership/baskaran_arumugam.png',
		bio: 'An IT expert with 27+ years of experience, specializes in software design, testing, automation, and Agile project management, with domain expertise across cloud telephony and medical devices',
		socialLinks: {
			linkedin: 'https://linkedin.com',
			email: 'mailto:baskeran@example.com',
			instagram: 'https://instagram.com'
		}
	},
	{
		id: 'l4',
		name: 'Aravindan G',
		role: 'Director - Business Intelligence',
		image: '/images/teams/leadership/aravindan_ganesamoorthy.png',
		bio: 'A Power BI expert with 22+ years of IT experience, has shaped Microsofts data-driven culture, trained top corporates, and specializes in CIO and Engineering dashboards.',
		socialLinks: {
			linkedin: 'https://linkedin.com',
			email: 'mailto:aravindan@example.com',
			instagram: 'https://instagram.com'
		}
	},
];

export const EXPERTS_DATA: TeamMember[] = [
	{
		id: 'e2',
		name: 'Dharanidaran Annadurai',
		role: 'Technical Lead & Architect',
		image: '/images/teams/experts/dharanidaran_annadurai.png',
		bio: 'Specializing in full-stack architecture and scalable solutions, identifying innovative technologies to solve business challenges.',
		socialLinks: { linkedin: 'https://linkedin.com' }
	},
	{
		id: 'e3',
		name: 'Arun Kumar',
		role: 'Senior Accessibility Engineer',
		image: '/images/teams/experts/arun_kumar.png',
		bio: 'Championing digital inclusivity with deep expertise in WCAG compliance, ensuring technology is accessible to everyone.',
		socialLinks: { linkedin: 'https://linkedin.com' }
	},
	{
		id: 'e4',
		name: 'Dharanipathy',
		role: 'Junior Software Engineer',
		image: '/images/teams/experts/dharanipathy.png',
		bio: 'Passionate developer focusing on efficient code and innovative problem-solving in web application development.',
		socialLinks: { linkedin: 'https://linkedin.com' }
	},
];

export const CONSULTANTS_DATA: TeamMember[] = [
	{
		id: 'c1',
		name: 'Divya C K',
		role: 'Power BI Consultant',
		image: '/images/teams/consultants/divya_ck.png',
		bio: 'Translating data into actionable insights through advanced Power BI visualization and analytics strategies.',
		socialLinks: { linkedin: 'https://linkedin.com' }
	},
];
