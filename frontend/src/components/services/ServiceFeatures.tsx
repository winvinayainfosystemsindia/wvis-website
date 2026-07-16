import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, useTheme, alpha } from '@mui/material';
import { StarBorderOutlined } from '@mui/icons-material';

interface FeatureItem {
	title: string;
	description: string;
}

interface ServiceFeaturesProps {
	features: FeatureItem[];
	accentColor: string;
}

const ServiceFeatures: React.FC<ServiceFeaturesProps> = ({ features, accentColor }) => {
	const theme = useTheme();
	const baseColor = accentColor || theme.palette.primary.main;

	return (
		<Box sx={{ py: { xs: 8, md: 10 }, bgcolor: 'background.light' }}>
			<Container maxWidth="lg">
				<Box sx={{ textAlign: 'center', mb: 8 }}>
					<Typography variant="overline" sx={{ color: baseColor, fontWeight: 700, letterSpacing: 1.5, mb: 1.5, display: 'block' }}>
						CAPABILITIES
					</Typography>
					<Typography variant="h2" sx={{ fontWeight: 700, mb: 2, fontSize: { xs: '1.75rem', md: '2.5rem' } }}>
						Features & Core Deliverables
					</Typography>
				</Box>

				<Grid container spacing={4}>
					{features.map((feature, index) => (
						<Grid size={{ xs: 12, sm: 6 }} key={index}>
							<Card
								sx={{
									height: '100%',
									borderRadius: 4,
									border: `1px solid ${theme.palette.divider}`,
									boxShadow: 'none',
									bgcolor: 'background.paper',
									transition: 'all 0.3s ease',
									'&:hover': {
										borderColor: baseColor,
										boxShadow: `0 10px 25px ${alpha(baseColor, 0.05)}`,
										transform: 'translateY(-2px)'
									}
								}}
							>
								<CardContent sx={{ p: 4, display: 'flex', gap: 2.5, alignItems: 'flex-start' }}>
									<Box sx={{
										p: 1.5,
										borderRadius: 2,
										bgcolor: alpha(baseColor, 0.08),
										color: baseColor,
										display: 'flex',
										flexShrink: 0
									}}>
										<StarBorderOutlined sx={{ fontSize: '1.5rem' }} />
									</Box>
									<Box>
										<Typography variant="h5" sx={{ fontWeight: 800, mb: 1, color: 'text.primary', fontSize: '1.1rem' }}>
											{feature.title}
										</Typography>
										<Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, fontSize: '0.875rem' }}>
											{feature.description}
										</Typography>
									</Box>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
};

export default ServiceFeatures;
