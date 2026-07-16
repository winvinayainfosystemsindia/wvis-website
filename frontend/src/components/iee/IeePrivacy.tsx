import React from 'react';
import { Box, Container, Typography, Grid, Paper, Stack, alpha, useTheme } from '@mui/material';
import { GppGood } from '@mui/icons-material';
import { IEE_PRIVACY } from '../../data/iee/ieeData';

const IeePrivacy: React.FC = () => {
	const theme = useTheme();

	return (
		<Box sx={{ py: 15, position: 'relative', overflow: 'hidden' }}>
			{/* Dark Mode Accents */}
			<Box
				sx={{
					position: 'absolute',
					bottom: '-10%',
					left: '-5%',
					width: '400px',
					height: '400px',
					borderRadius: '50%',
					background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.2)} 0%, transparent 70%)`,
					filter: 'blur(80px)',
				}}
			/>

			<Container maxWidth="lg">
				<Grid container spacing={10} alignItems="center">
					<Grid size={{ xs: 12, md: 5 }}>
						<Stack spacing={3}>
							<Box
								sx={{
									display: 'inline-flex',
									width: 'fit-content',
									p: 1.5,
									borderRadius: 2,
									bgcolor: alpha('#fff', 0.1),
									color: 'primary.light'
								}}
							>
								<GppGood fontSize="large" />
							</Box>
							<Typography variant="h2" sx={{ fontWeight: 600 }}>
								{IEE_PRIVACY.title}
							</Typography>
							<Typography variant="h6" sx={{ opacity: 0.7, fontWeight: 400, lineHeight: 1.6 }}>
								We understand that your financial documents are sensitive. WVIS is built on a foundation of data sovereignty and absolute privacy.
							</Typography>
						</Stack>
					</Grid>

					<Grid size={{ xs: 12, md: 7 }}>
						<Grid container spacing={4}>
							{IEE_PRIVACY.items.map((item, index) => (
								<Grid size={{ xs: 12, sm: 6 }} key={index}>
									<Paper
										elevation={0}
										sx={{
											p: 4,
											height: '100%',
											borderRadius: 4,
											bgcolor: alpha('#fff', 0.03),
											border: '1px solid',
											borderColor: alpha('#fff', 0.1),
											color: 'white'
										}}
									>
										<Box sx={{ color: 'primary.light', mb: 2 }}>
											{item.icon}
										</Box>
										<Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 600, mb: 1.5 }}>
											{item.title}
										</Typography>
										<Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 500, opacity: 0.6, lineHeight: 1.8 }}>
											{item.description}
										</Typography>
									</Paper>
								</Grid>
							))}
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default IeePrivacy;
