import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, useTheme, alpha } from '@mui/material';
import { CheckCircleOutline } from '@mui/icons-material';

interface BenefitItem {
	title: string;
	description: string;
}

interface ServiceOverviewProps {
	benefits: BenefitItem[];
	accentColor: string;
}

const ServiceOverview: React.FC<ServiceOverviewProps> = ({ benefits, accentColor }) => {
	const theme = useTheme();
	const baseColor = accentColor || theme.palette.primary.main;

	return (
		<Box sx={{ py: { xs: 8, md: 10 }, bgcolor: 'background.paper' }}>
			<Container maxWidth="lg">
				<Box sx={{ textAlign: 'center', mb: 6 }}>
					<Typography variant="overline" sx={{ color: baseColor, fontWeight: 700, letterSpacing: 1.5, mb: 1.5, display: 'block' }}>
						KEY ADVANTAGES
					</Typography>
					<Typography variant="h2" sx={{ fontWeight: 700, mb: 2, fontSize: { xs: '1.75rem', md: '2.5rem' } }}>
						Why Choose This Solution
					</Typography>
				</Box>

				<Grid container spacing={4}>
					{benefits.map((benefit, index) => (
						<Grid size={{ xs: 12, md: 4 }} key={index}>
							<Card
								sx={{
									height: '100%',
									borderRadius: 4,
									border: `1px solid ${theme.palette.divider}`,
									boxShadow: 'none',
									background: `linear-gradient(180deg, ${alpha(baseColor, 0.01)} 0%, ${alpha(baseColor, 0.03)} 100%)`,
									transition: 'all 0.3s ease',
									'&:hover': {
										borderColor: baseColor,
										boxShadow: `0 12px 30px ${alpha(baseColor, 0.08)}`,
										transform: 'translateY(-4px)'
									}
								}}
							>
								<CardContent sx={{ p: 4, display: 'flex', flexDirection: 'column', height: '100%' }}>
									<Box sx={{ color: baseColor, mb: 2, display: 'flex' }}>
										<CheckCircleOutline sx={{ fontSize: '2rem' }} />
									</Box>
									<Typography variant="h5" sx={{ fontWeight: 800, mb: 1.5, color: 'text.primary', fontSize: '1.15rem' }}>
										{benefit.title}
									</Typography>
									<Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, fontSize: '0.875rem' }}>
										{benefit.description}
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
};

export default ServiceOverview;
