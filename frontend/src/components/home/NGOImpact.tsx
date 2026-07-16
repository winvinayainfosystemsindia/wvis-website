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
import { ArrowForward, FormatQuote } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { ngoImpactData } from '../../data/home/ngoImpactData';

const NGOImpact: React.FC = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));

	const getServiceColor = (colorHex: string) => {
		switch (colorHex.toLowerCase()) {
			case '#0891b2':
				return theme.palette.info.main;
			case '#8512e0':
				return theme.palette.primary.main;
			case '#002fff':
				return theme.palette.secondary.main;
			case '#f59e0b':
				return theme.palette.warning.main;
			case '#ef4444':
				return theme.palette.error.main;
			default:
				return theme.palette.primary.main;
		}
	};

	return (
		<Box
			component="section"
			id="ngo-impact-section"
			aria-labelledby="ngo-impact-title"
			sx={{
				py: isMobile ? 6 : 12,
				bgcolor: 'background.default',
				position: 'relative',
				overflow: 'hidden',
			}}
		>
			{/* Soft background decoration */}
			<Box
				sx={{
					position: 'absolute',
					top: '5%',
					right: '-10%',
					width: 600,
					height: 600,
					borderRadius: '50%',
					background: `radial-gradient(circle, ${alpha(theme.palette.warning.main, 0.06)} 0%, transparent 70%)`,
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
							color: 'warning.dark',
							fontWeight: 700,
							letterSpacing: 2,
							mb: 1,
							display: 'block',
						}}
					>
						{ngoImpactData.header.overline}
					</Typography>
					<Typography
						variant="h2"
						id="ngo-impact-title"
						sx={{
							fontSize: { xs: '2rem', md: '2.75rem' },
							fontWeight: 700,
							mb: 2,
						}}
					>
						{ngoImpactData.header.title.main}{' '}
						<Box component="span" className="gradient-text">
							{ngoImpactData.header.title.gradient}
						</Box>
					</Typography>
					<Typography
						sx={{
							...theme.typography.navLink,
							color: 'text.secondary',
							maxWidth: '680px',
							mx: 'auto',
							lineHeight: 1.7,
						}}
					>
						{ngoImpactData.header.description}
					</Typography>
				</Box>

				<Grid container spacing={4} alignItems="stretch">
					{/* Left: Mission quote */}
					<Grid size={{ xs: 12, md: 4 }}>
						<Box
							sx={{
								p: 4,
								borderRadius: 3,
								background: `linear-gradient(135deg, ${alpha(theme.palette.warning.main, 0.08)} 0%, ${alpha(theme.palette.warning.main, 0.03)} 100%)`,
								border: `1px solid ${alpha(theme.palette.warning.main, 0.18)}`,
								height: '100%',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
							}}
						>
							<Box>
								<FormatQuote
									sx={{ fontSize: 48, color: alpha(theme.palette.warning.main, 0.3), mb: 2 }}
								/>
								<Typography
									variant="body1"
									sx={{
										fontStyle: 'italic',
										lineHeight: 1.8,
										color: 'text.primary',
										mb: 3,
										fontSize: '1rem',
									}}
								>
									{ngoImpactData.mission.quote}
								</Typography>
								<Typography
									variant="body2"
									sx={{
										color: 'warning.dark',
										fontWeight: 600,
									}}
								>
									{ngoImpactData.mission.author}
								</Typography>
							</Box>

							<Button
								component={Link}
								to={ngoImpactData.ctaBanner.link}
								variant="contained"
								endIcon={<ArrowForward />}
								sx={{
									mt: 4,
									bgcolor: 'warning.main',
									color: 'warning.contrastText',
									fontWeight: 700,
									alignSelf: 'flex-start',
									'&:hover': {
										bgcolor: 'warning.dark',
										transform: 'translateY(-2px)',
										boxShadow: `0 8px 20px ${alpha(theme.palette.warning.main, 0.35)}`,
									},
									transition: 'all 0.3s ease',
								}}
							>
								{ngoImpactData.ctaBanner.cta}
							</Button>
						</Box>
					</Grid>

					{/* Right: Service tiles */}
					<Grid size={{ xs: 12, md: 8 }}>
						<Grid container spacing={2.5}>
							{ngoImpactData.services.map((service, index) => {
								const sColor = getServiceColor(service.color);
								return (
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
													borderColor: sColor,
													transform: 'translateY(-4px)',
													boxShadow: `0 8px 24px ${alpha(sColor, 0.12)}`,
													'& .ngo-icon': {
														color: sColor,
														transform: 'scale(1.15)',
													},
												},
											}}
										>
											<Stack direction="row" spacing={2} alignItems="flex-start">
												<Box
													className="ngo-icon"
													sx={{
														color: alpha(sColor, 0.5),
														transition: 'all 0.3s ease',
														flexShrink: 0,
														'& svg': { fontSize: 28 },
													}}
												>
													{service.icon}
												</Box>
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
								);
							})}
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default NGOImpact;
