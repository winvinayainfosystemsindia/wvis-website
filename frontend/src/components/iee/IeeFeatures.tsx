import React from 'react';
import { Box, Container, Typography, Grid, Paper, useTheme, alpha } from '@mui/material';
import { IEE_FEATURES } from '../../data/iee/ieeData';

const IeeFeatures: React.FC = () => {
	const theme = useTheme();

	return (
		<Box sx={{ py: 15, bgcolor: 'background.paper' }}>
			<Container maxWidth="lg">
				<Box textAlign="center" mb={10}>
					<Typography variant="h2" sx={{ fontWeight: 600, mb: 3 }}>
						Document Intelligence Redefined
					</Typography>
					<Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto', fontWeight: 400 }}>
						Engineered to handle the complexity of regional variants, structured layouts, and unstructured data streams.
					</Typography>
				</Box>

				<Grid container spacing={4}>
					{IEE_FEATURES.map((feature, index) => (
						<Grid size={{ xs: 12, md: 4 }} key={index}>
							<Paper
								elevation={0}
								sx={{
									p: 5,
									height: '100%',
									borderRadius: 4,
									border: `1px solid ${theme.palette.divider}`,
									transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
									position: 'relative',
									overflow: 'hidden',
									'&:hover': {
										transform: 'translateY(-10px)',
										boxShadow: `0 30px 60px ${alpha(feature.color, 0.1)}`,
										borderColor: feature.color,
										'& .icon-bg': {
											transform: 'scale(1.2) rotate(10deg)',
											color: feature.color
										}
									}
								}}
							>
								<Box
									className="icon-bg"
									sx={{
										width: 60,
										height: 60,
										borderRadius: 2,
										bgcolor: alpha(feature.color, 0.1),
										color: feature.color,
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										mb: 4,
										transition: 'all 0.3s ease',
										'& svg': { fontSize: 32 }
									}}
								>
									{feature.icon}
								</Box>
								<Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
									{feature.title}
								</Typography>
								<Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
									{feature.description}
								</Typography>
							</Paper>
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
};

export default IeeFeatures;
