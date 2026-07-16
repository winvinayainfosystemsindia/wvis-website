import React from 'react';
import {
	Box,
	Container,
	Typography,
	Grid,
	Button,
	Stack,
	useTheme,
	alpha,
	useMediaQuery,
} from '@mui/material';
import { CheckCircle, ArrowForward } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { accessibilityData } from '../../data/home/accessibilityData';

const AccessibilitySection: React.FC = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));

	return (
		<Box
			component="section"
			id="accessibility-section"
			aria-labelledby="accessibility-title"
			sx={{
				py: isMobile ? 6 : 12,
				bgcolor: 'background.default',
				position: 'relative',
				overflow: 'hidden',
			}}
		>
			{/* Background decoration */}
			<Box
				sx={{
					position: 'absolute',
					top: '50%',
					left: -300,
					transform: 'translateY(-50%)',
					width: 600,
					height: 600,
					borderRadius: '50%',
					background: `radial-gradient(circle, ${alpha(theme.palette.success.main, 0.07)} 0%, transparent 70%)`,
					filter: 'blur(100px)',
					pointerEvents: 'none',
				}}
			/>

			<Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
				{/* Section Header */}
				<Box sx={{ textAlign: 'center', mb: isMobile ? 5 : 8 }}>
					<Typography
						variant="overline"
						component="span"
						sx={{
							color: 'success.dark',
							fontWeight: 700,
							letterSpacing: 2,
							mb: 1,
							display: 'block',
						}}
					>
						{accessibilityData.header.overline}
					</Typography>
					<Typography
						variant="h2"
						id="accessibility-title"
						sx={{
							fontSize: { xs: '2rem', md: '2.75rem' },
							fontWeight: 700,
							mb: 2,
						}}
					>
						{accessibilityData.header.title.main}{' '}
						<Box component="span" className="gradient-text">
							{accessibilityData.header.title.gradient}
						</Box>
					</Typography>
					<Typography
						sx={{
							...theme.typography.navLink,
							color: 'text.secondary',
							maxWidth: '740px',
							mx: 'auto',
							lineHeight: 1.7,
						}}
					>
						{accessibilityData.header.description}
					</Typography>
				</Box>

				<Grid container spacing={isMobile ? 3 : 4} alignItems="stretch">
					{/* Left: Why It Matters */}
					<Grid size={{ xs: 12, md: 4 }}>
						<Box
							sx={{
								p: 4,
								borderRadius: 3,
								background: `linear-gradient(135deg, ${alpha(theme.palette.success.main, 0.08)} 0%, ${alpha(theme.palette.success.main, 0.03)} 100%)`,
								border: `1px solid ${alpha(theme.palette.success.main, 0.2)}`,
								height: '100%',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
							}}
						>
							<Box>
								<Typography
									variant="h5"
									component="h3"
									sx={{ fontWeight: 700, mb: 3, color: 'success.dark' }}
								>
									Why It Matters
								</Typography>
								<Stack spacing={3}>
									{accessibilityData.whyItMatters.map((item, index) => (
										<Box key={index}>
											<Typography
												sx={{
													fontSize: '2rem',
													fontWeight: 800,
													color: 'success.dark',
													lineHeight: 1.1,
												}}
											>
												{item.stat}
											</Typography>
											<Typography
												variant="body2"
												sx={{ color: 'text.secondary', lineHeight: 1.6 }}
											>
												{item.context}
											</Typography>
										</Box>
									))}
								</Stack>
							</Box>

							<Button
								component={Link}
								to={accessibilityData.cta.link}
								variant="contained"
								endIcon={<ArrowForward />}
								sx={{
									mt: 4,
									bgcolor: 'success.main',
									color: 'success.contrastText',
									fontWeight: 700,
									alignSelf: 'flex-start',
									'&:hover': {
										bgcolor: 'success.dark',
										transform: 'translateY(-2px)',
										boxShadow: `0 8px 20px ${alpha(theme.palette.success.main, 0.35)}`,
									},
									transition: 'all 0.3s ease',
								}}
							>
								{accessibilityData.cta.text}
							</Button>
						</Box>
					</Grid>

					{/* Right: Service List */}
					<Grid size={{ xs: 12, md: 8 }}>
						<Grid container spacing={2.5}>
							{accessibilityData.services.map((service, index) => (
								<Grid size={{ xs: 12, sm: 6 }} key={index}>
									<Box
										sx={{
											p: 3,
											borderRadius: 2.5,
											border: `1px solid ${theme.palette.divider}`,
											bgcolor: 'background.paper',
											height: '100%',
											transition: 'all 0.3s ease',
											'&:hover': {
												borderColor: 'success.main',
												transform: 'translateY(-4px)',
												boxShadow: `0 8px 24px ${alpha(theme.palette.success.main, 0.1)}`,
											},
										}}
									>
										<Stack direction="row" spacing={1.5} alignItems="flex-start">
											<CheckCircle
												sx={{
													fontSize: 22,
													color: 'success.main',
													flexShrink: 0,
													mt: 0.25,
												}}
											/>
											<Box>
												<Typography
													variant="subtitle1"
													component="h3"
													sx={{ fontWeight: 700, mb: 0.5 }}
												>
													{service.title}
												</Typography>
												<Typography
													variant="body2"
													sx={{ color: 'text.secondary', lineHeight: 1.6 }}
												>
													{service.description}
												</Typography>
											</Box>
										</Stack>
									</Box>
								</Grid>
							))}
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default AccessibilitySection;
