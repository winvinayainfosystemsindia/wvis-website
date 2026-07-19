import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import MainLayout from '../components/layout/MainLayout';
import PageHeader from '../components/layout/PageHeader';
import DemoBenefits from '../components/demo/DemoBenefits';
import DemoRequestForm from '../components/demo/DemoRequestForm';

const Demo: React.FC = () => {
	return (
		<MainLayout>
			<PageHeader
				title="See WinVinaya in Action"
				subtitle="Book a personalised, no-pressure walkthrough of our accessibility, automation, and inclusive-tech solutions with one of our specialists."
			/>

			<Box component="section" sx={{ pb: { xs: 8, md: 12 } }}>
				<Container maxWidth="lg">
					<Grid container spacing={{ xs: 5, md: 6 }}>
						<Grid size={{ xs: 12, md: 4 }}>
							<DemoBenefits />
						</Grid>
						<Grid size={{ xs: 12, md: 8 }}>
							<DemoRequestForm />
						</Grid>
					</Grid>
				</Container>
			</Box>
		</MainLayout>
	);
};

export default Demo;
