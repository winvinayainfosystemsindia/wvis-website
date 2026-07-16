import React from 'react';
import { Box } from '@mui/material';
import MainLayout from '../../components/layout/MainLayout';
import IeeHero from '../../components/iee/IeeHero';
import IeeFeatures from '../../components/iee/IeeFeatures';
import IeeAccuracy from '../../components/iee/IeeAccuracy';
import IeeAutomationProcess from '../../components/iee/IeeAutomationProcess';
import IeePrivacy from '../../components/iee/IeePrivacy';
import AcademyCta from '../../components/academy/AcademyCta';

const AiInvoiceExtraction: React.FC = () => {
	return (
		<MainLayout>
			<Box sx={{ bgcolor: 'background.default' }}>
				<IeeHero />
				<IeeAccuracy />
				<IeeFeatures />
				<IeeAutomationProcess />
				<IeePrivacy />
				{/* Reusing common CTA component for standard feel */}
				<AcademyCta />
			</Box>
		</MainLayout>
	);
};

export default AiInvoiceExtraction;
