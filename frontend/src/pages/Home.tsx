import MainLayout from '../components/layout/MainLayout';
import Hero from '../components/home/Hero';
import WhoWeHelp from '../components/home/WhoWeHelp';
import OurSolutions from '../components/home/OurSolutions';
import AccessibilitySection from '../components/home/AccessibilitySection';
import AIInnovation from '../components/home/AIInnovation';
import NGOImpact from '../components/home/NGOImpact';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ClientTestimonials from '../components/home/ClientTestimonials';
import CTASection from '../components/home/CTASection';

const Home = () => {
	return (
		<MainLayout>
			{/* 1. Hero — Hook with mission + CTAs (TrustedBy logo strip embedded inside) */}
			<Hero />

			{/* 2. Who We Help — 3 audience personas (Enterprise · NGO · Learners) */}
			<WhoWeHelp />

			{/* 3. Our Solutions — Story-driven product narratives */}
			<OurSolutions />

			{/* 4. Accessibility & Compliance */}
			<AccessibilitySection />

			{/* 5. AI & Innovation */}
			<AIInnovation />

			{/* 6. NGO & Social Impact */}
			<NGOImpact />

			{/* 7. Why WinVinaya? — Differentiators & honest stats */}
			<WhyChooseUs />

			{/* 8. Client Testimonials */}
			<ClientTestimonials />

			{/* 9. Final CTA */}
			<CTASection />
		</MainLayout>
	);
};

export default Home;
