import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import WhoWeAre from '../pages/WhoWeAre';
import NotFound from '../pages/common/NotFound';
import Maintenance from '../pages/common/Maintenance';
import TermsOfService from '../pages/policy/TermsOfService';
import PrivacyPolicy from '../pages/policy/PrivacyPolicy';
// import OurTeam from '../pages/OurTeam';
import Careers from '../pages/Careers';
import NammAcademy from '../pages/products/NammAcademy';
import AiInvoiceExtraction from '../pages/products/AiInvoiceExtraction';
import A11ySenseAI from '../pages/products/A11ySenseAI';
import WinVinayaMIS from '../pages/products/WinVinayaMIS';
import ServiceDetail from '../pages/services/ServiceDetail';
import Contact from '../pages/Contact';
import Demo from '../pages/Demo';
import Newsletter from '../pages/resources/Newsletter';
import Blog from '../pages/resources/Blog';
import BlogDetail from '../pages/resources/BlogDetail';
import CaseStudies from '../pages/resources/CaseStudies';
import CaseStudyDetail from '../pages/resources/CaseStudyDetail';
import MarketingPitch from '../pages/resources/MarketingPitch';
import AdminLogin from '../pages/admin/AdminLogin';
import NewsletterManager from '../pages/admin/NewsletterManager';
import BlogManager from '../pages/admin/BlogManager';
import CaseStudyManager from '../pages/admin/CaseStudyManager';
import MarketingPitchManager from '../pages/admin/MarketingPitchManager';
import ContactsManager from '../pages/admin/ContactsManager';
import DemoRequestsManager from '../pages/admin/DemoRequestsManager';
import JobOpeningManager from '../pages/admin/JobOpeningManager';
import ProtectedRoute from '../components/admin/ProtectedRoute';

const AppRouter: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/who-we-are" element={<WhoWeAre />} />
			{/* <Route path="/our-team" element={<OurTeam />} /> */}
			<Route path="/careers" element={<Careers />} />
			<Route path="/products/nammacademy" element={<NammAcademy />} />
			<Route path="/products/invoice-intelligence" element={<AiInvoiceExtraction />} />
			<Route path="/products/invoice-extraction" element={<AiInvoiceExtraction />} />
			<Route path="/products/a11ysense-ai" element={<A11ySenseAI />} />
			<Route path="/products/winvinaya-mis" element={<WinVinayaMIS />} />
			<Route path="/services/:serviceId" element={<ServiceDetail />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/demo" element={<Demo />} />
			<Route path="/resources/newsletter" element={<Newsletter />} />
			<Route path="/resources/blog" element={<Blog />} />
			<Route path="/resources/blog/:slug" element={<BlogDetail />} />
			<Route path="/resources/case-studies" element={<CaseStudies />} />
			<Route path="/resources/case-studies/:slug" element={<CaseStudyDetail />} />
			<Route path="/resources/marketing-pitch" element={<MarketingPitch />} />
			<Route path="/admin/login" element={<AdminLogin />} />
			<Route
				path="/admin/newsletters"
				element={
					<ProtectedRoute>
						<NewsletterManager />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/admin/blogs"
				element={
					<ProtectedRoute>
						<BlogManager />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/admin/case-studies"
				element={
					<ProtectedRoute>
						<CaseStudyManager />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/admin/marketing-pitches"
				element={
					<ProtectedRoute>
						<MarketingPitchManager />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/admin/demo-requests"
				element={
					<ProtectedRoute>
						<DemoRequestsManager />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/admin/contacts"
				element={
					<ProtectedRoute>
						<ContactsManager />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/admin/job-openings"
				element={
					<ProtectedRoute>
						<JobOpeningManager />
					</ProtectedRoute>
				}
			/>
			<Route path="/terms-of-service" element={<TermsOfService />} />
			<Route path="/privacy-policy" element={<PrivacyPolicy />} />
			<Route path="/maintenance" element={<Maintenance />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default AppRouter;
