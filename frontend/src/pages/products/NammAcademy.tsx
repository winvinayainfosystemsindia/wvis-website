import React from 'react';
import { Box } from '@mui/material';
import MainLayout from '../../components/layout/MainLayout';
import AcademyHero from '../../components/academy/AcademyHero';
import AcademyExplore from '../../components/academy/AcademyExplore';
import AcademyISL from '../../components/academy/AcademyISL';
import AcademyCompiler from '../../components/academy/AcademyCompiler';
import AcademyEnterprise from '../../components/academy/AcademyEnterprise';
import AcademyCta from '../../components/academy/AcademyCta';

const NammAcademy: React.FC = () => {

	return (
		<MainLayout>
			<Box sx={{ bgcolor: 'background.default' }}>
				{/* High-Fidelity modular components */}
				<AcademyHero />
				<AcademyExplore />
				<AcademyISL />
				<AcademyCompiler />
				<AcademyEnterprise />
				<AcademyCta />
			</Box>
		</MainLayout>
	);
};

export default NammAcademy;
