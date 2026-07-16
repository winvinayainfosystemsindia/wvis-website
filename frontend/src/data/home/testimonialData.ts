export interface Testimonial {
    quote: string;
    author: string;
    role: string;
    company: string;
    rating: number;
    avatar?: string;
}

export const testimonialData = {
    header: {
        title: {
            main: "Voices of",
            gradient: "Success"
        },
        description: "Hear from the organizations we've partnered with to create impactful and inclusive digital solutions."
    },
    testimonials: [
        {
            quote: "WinVinaya's commitment to accessibility and quality is unparalleled. They didn't just build a solution; they built an inclusive experience for all our users.",
            author: "Sarah Johnson",
            role: "Director of Digital Transformation",
            company: "Global Tech Solutions",
            rating: 5,
        },
        {
            quote: "The AI implementation provided by WinVinaya streamlined our operations and reduced manual effort by 40%. Their technical expertise is truly world-class.",
            author: "Michael Chen",
            role: "CTO",
            company: "FinStream Inc.",
            rating: 5,
        },
        {
            quote: "Partnering with an organization that values diversity as much as excellence has been a game-changer for our CSR and technical goals.",
            author: "Anita Rao",
            role: "Head of Social Impact",
            company: "EduCare Foundation",
            rating: 5,
        }
    ] as Testimonial[]
};
