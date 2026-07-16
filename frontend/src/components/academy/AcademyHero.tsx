import React from 'react';
import {
	Box,
	Container,
	Typography,
	Grid,
	Button,
	Stack,
	Link,
	useTheme
} from '@mui/material';
import { ArrowForwardIos } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const AcademyHero: React.FC = () => {
	const theme = useTheme();

	return (
		<Box sx={{ py: { xs: 8, md: 12 }, overflow: 'hidden' }}>
			<Container maxWidth="lg">
				<Grid container spacing={6} alignItems="center">
					{/* Left Content */}
					<Grid size={{ xs: 12, md: 6 }}>
						<Box sx={{ maxWidth: 500 }}>
							<Typography variant="h1" sx={{ fontWeight: 500, mb: 1, fontSize: { xs: '2.5rem', md: '3.5rem' }, lineHeight: 1.1 }}>WinVinaya's</Typography>
							<Typography
								variant="h1"
								sx={{
									fontWeight: 600,
									...theme.utils.gradientText,
									mb: 3,
									fontSize: { xs: '2.5rem', md: '3.5rem' },
									lineHeight: 1.1
								}}
							>
								NammAcademy
							</Typography>
							<Typography
								variant="body1"
								sx={{
									fontSize: '1.25rem',
									color: theme.palette.text.secondary,
									mb: 5,
									lineHeight: 1.6
								}}
							>
								Learn at your own pace through a simple and structured e-learning platform designed for
								skill-based growth. Explore online courses that focus on practical understanding and real-world
								relevance, making learning effective and easy to follow.
							</Typography>
							<Stack direction="row" spacing={3} alignItems="center">
								<Button
									variant="contained"
									size="large"
									component={RouterLink}
									to="/nammacademy/enroll"
									sx={{
										bgcolor: theme.palette.primary.main,
										borderRadius: theme.shape.borderRadius,
										px: 4,
										py: 1.5,
										fontSize: '1rem',
										fontWeight: 700,
										textTransform: 'none',
										'&:hover': { bgcolor: theme.palette.primary.dark }
									}}
								>
									Enroll now
								</Button>
								<Link
									component={RouterLink}
									to="/login"
									sx={{
										color: theme.palette.primary.main,
										fontWeight: 700,
										display: 'inline-flex',
										alignItems: 'center',
										textDecoration: 'none',
										'&:hover': { textDecoration: 'underline' }
									}}
								>
									Log in <ArrowForwardIos sx={{ fontSize: 12, ml: 1 }} />
								</Link>
							</Stack>
						</Box>
					</Grid>

					{/* Right Images */}
					<Grid size={{ xs: 12, md: 6 }}>
						<Box sx={{ position: 'relative', height: { xs: 400, md: 500 }, display: 'flex', justifyContent: 'center' }}>
							{/* Image 1 (Left/Higher) */}
							<Box
								sx={{
									position: 'absolute',
									left: { xs: '10%', md: '0' },
									top: '0',
									width: { xs: '45%', md: '240px' },
									height: { xs: '80%', md: '450px' },
									borderRadius: '40px',
									overflow: 'hidden',
									boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
									zIndex: 1
								}}
							>
								<Box
									component="img"
									src="/images/academy/hero_man.png"
									alt="Learning at NammAcademy"
									sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
								/>
							</Box>

							{/* Image 2 (Right/Lower) */}
							<Box
								sx={{
									position: 'absolute',
									right: { xs: '10%', md: '0' },
									bottom: '0',
									width: { xs: '45%', md: '240px' },
									height: { xs: '80%', md: '450px' },
									borderRadius: '40px',
									overflow: 'hidden',
									boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
									zIndex: 1
								}}
							>
								<Box
									component="img"
									src="/images/academy/hero_woman.png"
									alt="Learning at NammAcademy"
									sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
								/>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default AcademyHero;
