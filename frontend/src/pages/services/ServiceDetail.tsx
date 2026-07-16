import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Box } from '@mui/material';
import MainLayout from '../../components/layout/MainLayout';
import { SERVICES_DATA } from '../../data/shared/servicesData';
import ServiceHero from '../../components/services/ServiceHero';
import ServiceOverview from '../../components/services/ServiceOverview';
import ServiceFeatures from '../../components/services/ServiceFeatures';
import ServiceProcess from '../../components/services/ServiceProcess';
import ServiceCta from '../../components/services/ServiceCta';
import ServiceMetrics from '../../components/services/ServiceMetrics';
import ServiceExpertise from '../../components/services/ServiceExpertise';
import ServiceFaq from '../../components/services/ServiceFaq';

const ServiceDetail: React.FC = () => {
	const { serviceId } = useParams<{ serviceId: string }>();

	// If no serviceId is provided or it doesn't exist in data, redirect to maintenance or not found
	if (!serviceId || !SERVICES_DATA[serviceId]) {
		return <Navigate to="/maintenance" replace />;
	}

	const data = SERVICES_DATA[serviceId];

	return (
		<MainLayout>
			<Box sx={{ bgcolor: 'background.default' }}>
				{/* 1. Dynamic Hero */}
				<ServiceHero
					title={data.title}
					category={data.category}
					description={data.description}
					longDescription={data.longDescription}
					accentColor={data.accentColor}
					image={data.image}
				/>

				{/* 2. Key Metrics & Counters */}
				<ServiceMetrics
					metrics={data.metrics}
					accentColor={data.accentColor}
				/>

				{/* 3. Dynamic Overview & Benefits */}
				<ServiceOverview
					benefits={data.benefits}
					accentColor={data.accentColor}
				/>

				{/* 4. Dynamic Features list */}
				<ServiceFeatures
					features={data.features}
					accentColor={data.accentColor}
				/>

				{/* 5. Tool Stack & Technical Standards */}
				<ServiceExpertise
					tools={data.tools}
					accentColor={data.accentColor}
				/>

				{/* 6. Dynamic Methodology Process */}
				<ServiceProcess
					process={data.process}
					accentColor={data.accentColor}
				/>

				{/* 7. Frequently Asked Questions */}
				<ServiceFaq
					faqs={data.faqs}
					accentColor={data.accentColor}
				/>

				{/* 8. Dynamic CTA */}
				<ServiceCta
					title={data.title}
					accentColor={data.accentColor}
				/>
			</Box>
		</MainLayout>
	);
};

export default ServiceDetail;
