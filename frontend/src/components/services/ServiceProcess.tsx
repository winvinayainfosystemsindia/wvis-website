import React from 'react';
import { Box, Container, Typography, Grid, useTheme, alpha } from '@mui/material';

interface ProcessStep {
	step: string;
	title: string;
	description: string;
}

interface ServiceProcessProps {
	process: ProcessStep[];
	accentColor: string;
}

const ServiceProcess: React.FC<ServiceProcessProps> = ({ process, accentColor }) => {
	const theme = useTheme();
	const baseColor = accentColor || theme.palette.primary.main;

	return (
		<Box sx={{ py: { xs: 8, md: 10 }, bgcolor: 'background.paper' }}>
			<Container maxWidth="lg">
				<Box sx={{ textAlign: 'center', mb: 8 }}>
					<Typography variant="overline" sx={{ color: baseColor, fontWeight: 700, letterSpacing: 1.5, mb: 1.5, display: 'block' }}>
						METHODOLOGY
					</Typography>
					<Typography variant="h2" sx={{ fontWeight: 700, mb: 2, fontSize: { xs: '1.75rem', md: '2.5rem' } }}>
						How We Deliver Results
					</Typography>
				</Box>

				<Grid container spacing={3}>
					{process.map((step, index) => (
						<Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
							<Box
								sx={{
									p: 3,
									height: '100%',
									borderLeft: `3px solid ${baseColor}`,
									bgcolor: alpha(baseColor, 0.01),
									boxShadow: '0 2px 10px rgba(0,0,0,0.01)',
									borderRadius: '0 12px 12px 0',
									border: `1px solid ${theme.palette.divider}`,
									borderLeftWidth: 0,
									position: 'relative',
									transition: 'all 0.3s ease',
									'&:hover': {
										bgcolor: alpha(baseColor, 0.03),
										transform: 'translateY(-2px)'
									}
								}}
							>
								<Typography variant="h3" sx={{ opacity: 0.12, fontWeight: 900, mb: 1, color: baseColor }}>
									{step.step}
								</Typography>
								<Typography variant="h5" sx={{ fontWeight: 750, mb: 1.5, color: 'text.primary', fontSize: '1.05rem' }}>
									{step.title}
								</Typography>
								<Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65, fontSize: '0.825rem' }}>
									{step.description}
								</Typography>
							</Box>
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
};

export default ServiceProcess;
