import React from 'react';
import {
	Box,
	Container,
	Typography,
	Grid,
	Button,
	Paper,
	alpha,
	useTheme
} from '@mui/material';
import { NAMM_ACADEMY_ENTERPRISE } from '../../data/academy/nammAcademyData';

const AcademyEnterprise: React.FC = () => {
	const theme = useTheme();

	return (
		<Box sx={{ py: { xs: 10, md: 15 }, bgcolor: 'background.paper', borderTop: `1px solid ${theme.palette.divider}` }}>
			<Container maxWidth="lg">
				<Grid container spacing={8} alignItems="center">
					<Grid size={{ xs: 12, md: 5 }}>
						<Typography variant="h2" sx={{ fontWeight: 800, mb: 3 }}>
							Built for the <br />
							<Box component="span" sx={{ ...theme.utils.gradientText }}>Enterprise</Box>
						</Typography>
						<Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.125rem', lineHeight: 1.8, mb: 4 }}>
							We provide robust solutions for B2B customers, ensuring that inclusivity and learning are integrated seamlessly into your corporate ecosystem.
						</Typography>
						<Button variant="contained" size="large" color="primary" sx={{ bgcolor: 'primary.main', '&:hover': { bgcolor: 'primary.dark' } }}>
							Contact Sales
						</Button>
					</Grid>
					<Grid size={{ xs: 12, md: 7 }}>
						<Grid container spacing={3}>
							{NAMM_ACADEMY_ENTERPRISE.map((item, index) => (
								<Grid size={{ xs: 12, sm: 6 }} key={index}>
									<Paper
										elevation={0}
										sx={{
											p: 3,
											borderRadius: 2,
											background: theme.palette.mode === 'dark' ? alpha(theme.palette.primary.main, 0.05) : '#f8f9fa',
											border: `1px solid ${theme.palette.divider}`,
											display: 'flex',
											flexDirection: 'column',
											gap: 1.5,
											height: '100%'
										}}
									>
										<Box sx={{ color: 'primary.main', display: 'flex' }}>
											{item.icon}
										</Box>
										<Typography variant="h6" sx={{ fontWeight: 700 }}>{item.title}</Typography>
										<Typography variant="body2" color="text.secondary">{item.description}</Typography>
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

export default AcademyEnterprise;
