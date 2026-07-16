import React from 'react';
import { Box, Container, Typography, Grid, useTheme, alpha } from '@mui/material';
import { IEE_TECH_SPECS } from '../../data/iee/ieeData';

const IeeAccuracy: React.FC = () => {
	const theme = useTheme();

	return (
		<Box
			sx={{
				py: 12,
				bgcolor: alpha(theme.palette.primary.main, 0.02),
				borderTop: `1px solid ${theme.palette.divider}`,
				borderBottom: `1px solid ${theme.palette.divider}`
			}}
		>
			<Container maxWidth="lg">
				<Grid container spacing={4} alignItems="center" justifyContent="center">
					<Grid size={{ xs: 12, md: 4 }}>
						<Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
							<Typography variant="h2" sx={{ fontWeight: 900, color: 'primary.main', mb: 1 }}>
								90%
							</Typography>
							<Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
								Field Accuracy
							</Typography>
							<Typography variant="body1" color="text.secondary">
								Optimized specifically for regional Indian invoice formats, GST structures, and handwritten notes.
							</Typography>
						</Box>
					</Grid>

					<Grid size={{ xs: 12, md: 8 }}>
						<Box
							sx={{
								display: 'flex',
								flexWrap: 'wrap',
								gap: 3,
								justifyContent: { xs: 'center', md: 'flex-end' }
							}}
						>
							{IEE_TECH_SPECS.map((spec, index) => (
								<Box
									key={index}
									sx={{
										p: 3,
										borderRadius: 2,
										bgcolor: 'white',
										minWidth: 200,
										boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
										border: `1px solid ${theme.palette.divider}`
									}}
								>
									<Typography variant="caption" sx={{ color: 'text.disabled', fontWeight: 700, textTransform: 'uppercase' }}>
										{spec.label}
									</Typography>
									<Typography variant="h6" sx={{ fontWeight: 700, mt: 1 }}>
										{spec.value}
									</Typography>
								</Box>
							))}
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default IeeAccuracy;
