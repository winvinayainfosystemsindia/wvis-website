export interface PageHeaderContent {
	title: string;
	subtitle: string;
}

export const PAGE_HEADERS: Record<string, PageHeaderContent> = {
	ourTeam: {
		title: "Our Talented Team",
		subtitle: "Meet the dedicated professionals driving innovation and excellence at WinVinaya InfoSystems. Our diverse team of experts is committed to delivering inclusive and world-class solutions."
	},
	services: {
		title: "Innovative Services",
		subtitle: "Empowering businesses through cutting-edge technology and inclusive digital solutions tailored to your unique needs."
	},
	aboutUs: {
		title: "About WinVinaya",
		subtitle: "A social enterprise dedicated to creating inclusive employment opportunities and delivering high-quality IT services."
	},
	nammAcademy: {
		title: "Inclusive Digital Learning",
		subtitle: "Empowering everyone with industry-curated courses, accessible tech education, and the first-of-its-kind ISL video tutorials."
	},
	whoWeAre: {
		title: "Who We Are",
		subtitle: "Discover the heart of WinVinaya InfoSystems—a dedicated team of visionaries, engineers, and inclusion advocates working together to architect a world where technology empowers every individual, regardless of their background or ability."
	}
};
