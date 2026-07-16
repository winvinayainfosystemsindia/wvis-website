import React from 'react';
import { Box, Container, Typography, Grid, Paper, useTheme, alpha } from '@mui/material';

interface MetricItem {
	value: string;
	label: string;
}

interface ServiceMetricsProps {
	metrics: MetricItem[];
	accentColor: string;
}

const ServiceMetrics: React.FC<ServiceMetricsProps> = ({ metrics, accentColor }) => {
	const theme = useTheme();
	const baseColor = accentColor || theme.palette.primary.main;

	if (!metrics || metrics.length === 0) return null;

	return (
		<Box sx={{ py: 6, bgcolor: 'background.default', position: 'relative', zIndex: 2, mt: -6 }}>
			<Container maxWidth="lg">
				<Paper
					elevation={0}
					sx={{
						p: { xs: 4, md: 5 },
						borderRadius: 5,
						border: `1px solid ${theme.palette.divider}`,
						background: `linear-gradient(135deg, ${alpha(baseColor, 0.02)} 0%, ${alpha(baseColor, 0.05)} 100%)`,
						backdropFilter: 'blur(20px)',
						boxShadow: `0 15px 35px ${alpha(baseColor, 0.03)}`
					}}
				>
					<Grid container spacing={4} justifyContent="space-around" alignItems="center">
						{metrics.map((metric, index) => (
							<Grid
								size={{ xs: 12, sm: 4 }}
								key={index}
								sx={{
									textAlign: 'center',
									borderRight: {
										xs: 'none',
										sm: index < metrics.length - 1 ? `1px solid ${alpha(theme.palette.divider, 0.8)}` : 'none'
									},
									borderBottom: {
										xs: index < metrics.length - 1 ? `1px solid ${alpha(theme.palette.divider, 0.8)}` : 'none',
										sm: 'none'
									},
									pb: { xs: 3, sm: 0 },
									mb: { xs: 3, sm: 0 }
								}}
							>
								<Typography
									variant="h2"
									sx={{
										fontWeight: 900,
										fontSize: { xs: '2.5rem', md: '3.5rem' },
										lineHeight: 1,
										letterSpacing: '-0.02em',
										backgroundImage: `linear-gradient(135deg, ${baseColor} 0%, ${theme.palette.secondary.main} 100%)`,
										WebkitBackgroundClip: 'text',
										WebkitTextFillColor: 'transparent',
										backgroundClip: 'text',
										mb: 1.5,
										display: 'inline-block'
									}}
								>
									{metric.value}
								</Typography>
								<Typography
									variant="subtitle2"
									sx={{
										color: 'text.secondary',
										fontWeight: 700,
										letterSpacing: 1.1,
										textTransform: 'uppercase',
										fontSize: '0.75rem',
										px: 2
									}}
								>
									{metric.label}
								</Typography>
							</Grid>
						))}
					</Grid>
				</Paper>
			</Container>
		</Box>
	);
};

export default ServiceMetrics;
