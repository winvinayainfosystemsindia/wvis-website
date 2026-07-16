import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import WhoWeAre from '../pages/WhoWeAre';
import NotFound from '../pages/common/NotFound';
import Maintenance from '../pages/common/Maintenance';
import TermsOfService from '../pages/policy/TermsOfService';
import PrivacyPolicy from '../pages/policy/PrivacyPolicy';
import OurTeam from '../pages/OurTeam';
import Careers from '../pages/Careers';
import NammAcademy from '../pages/products/NammAcademy';
import AiInvoiceExtraction from '../pages/products/AiInvoiceExtraction';
import A11ySenseAI from '../pages/products/A11ySenseAI';
import WinVinayaMIS from '../pages/products/WinVinayaMIS';
import ServiceDetail from '../pages/services/ServiceDetail';

const AppRouter: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/who-we-are" element={<WhoWeAre />} />
			<Route path="/our-team" element={<OurTeam />} />
			<Route path="/careers" element={<Careers />} />
			<Route path="/products/nammacademy" element={<NammAcademy />} />
			<Route path="/products/invoice-intelligence" element={<AiInvoiceExtraction />} />
			<Route path="/products/invoice-extraction" element={<AiInvoiceExtraction />} />
			<Route path="/products/a11ysense-ai" element={<A11ySenseAI />} />
			<Route path="/products/winvinaya-mis" element={<WinVinayaMIS />} />
			<Route path="/services/:serviceId" element={<ServiceDetail />} />
			<Route path="/terms-of-service" element={<TermsOfService />} />
			<Route path="/privacy-policy" element={<PrivacyPolicy />} />
			<Route path="/maintenance" element={<Maintenance />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default AppRouter;
