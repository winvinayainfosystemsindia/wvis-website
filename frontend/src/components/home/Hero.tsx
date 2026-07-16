import React from 'react';
import {
	Box,
	Container,
	Typography,
	Button,
	Stack,
	IconButton,
	useTheme,
	alpha,
	useMediaQuery,
} from '@mui/material';
import { ArrowForward, KeyboardArrowDown, AutoAwesome } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import TrustedCompanies from './TrustedCompanies';
import { heroData } from '../../data/home/heroData';

const Hero: React.FC = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	const scrollToNextSection = () => {
		const hero = document.getElementById('home-hero');
		const next = hero?.nextElementSibling as HTMLElement | null;
		if (!next) return;
		const navbar = document.querySelector('.MuiAppBar-root') as HTMLElement | null;
		const offset = navbar?.getBoundingClientRect().height ?? (isMobile ? 64 : 72);
		const top = next.getBoundingClientRect().top + window.scrollY - offset;
		window.scrollTo({ top, behavior: 'smooth' });
	};

	return (
		<Box
			id="home-hero"
			component="section"
			aria-label="Introduction & Overview"
			sx={{
				position: 'relative',
				display: 'flex',
				flexDirection: 'column',
				minHeight: { xs: 'calc(100vh - 64px)', lg: 'calc(100vh - 72px)' },
				overflow: 'hidden',
			}}
		>
			{/* Background Blobs */}
			<Box
				sx={{
					position: 'absolute',
					top: -300,
					left: -300,
					width: 600,
					height: 600,
					borderRadius: '50%',
					background: `radial-gradient(circle, ${alpha(theme.palette.info.light ?? '#39f6fd', 0.25)} 0%, ${alpha(theme.palette.info.light ?? '#39f6fd', 0.08)} 60%, transparent 100%)`,
					filter: 'blur(150px)',
					opacity: 0.8,
					pointerEvents: 'none',
					zIndex: 0,
				}}
			/>
			<Box
				sx={{
					position: 'absolute',
					top: -100,
					right: -200,
					width: 600,
					height: 600,
					borderRadius: '50%',
					background: `radial-gradient(circle, ${alpha(theme.palette.primary.light, 0.2)} 0%, ${alpha(theme.palette.primary.light, 0.06)} 60%, transparent 100%)`,
					filter: 'blur(150px)',
					opacity: 0.9,
					pointerEvents: 'none',
					zIndex: 0,
				}}
			/>

			<Box
				sx={{
					flexGrow: 1,
					display: 'flex',
					flexDirection: 'column',
					position: 'relative',
					zIndex: 1,
					pt: { xs: 6, md: 8 },
				}}
			>
				<Box
					sx={{
						flexGrow: 1,
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
					}}
				>
					<Container maxWidth="lg">
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								textAlign: 'center',
							}}
						>
							<Box
								component={Link}
								to={heroData.badge.link}
								className="animate-fade-in-down"
								aria-label={`Announcement: ${heroData.badge.text}`}
								sx={{
									display: 'inline-flex',
									alignItems: 'center',
									gap: 1,
									px: 2,
									py: 0.75,
									mb: 3,
									borderRadius: '100px',
									textDecoration: 'none',
									bgcolor: alpha(theme.palette.primary.main, 0.08),
									border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
									transition: 'all 0.25s ease',
									'&:hover': {
										bgcolor: alpha(theme.palette.primary.main, 0.14),
										borderColor: theme.palette.primary.main,
										transform: 'translateY(-1px)',
									},
								}}
							>
								<AutoAwesome sx={{ fontSize: 16, color: 'primary.main' }} />
								<Typography
									sx={{
										fontSize: '0.8125rem',
										fontWeight: 600,
										color: 'primary.main',
										letterSpacing: 0.2,
									}}
								>
									{heroData.badge.text}
								</Typography>
								<ArrowForward sx={{ fontSize: 14, color: 'primary.main' }} />
							</Box>

							<Typography
								variant="h1"
								sx={{
									fontSize: { xs: '2.5rem', md: '3.75rem' },
									fontWeight: 500,
									lineHeight: 1.2,
									letterSpacing: '-0.02em',
									mb: 3,
									maxWidth: '900px',
								}}
							>
								{heroData.title.main}{' '}
								<Box
									component="span"
									className="gradient-text"
								>
									{heroData.title.gradient}
								</Box>{' '}
								{heroData.title.suffix}
							</Typography>

							<Typography
								sx={{
									...theme.typography.navLink,
									color: 'text.secondary',
									lineHeight: 1.75,
									mb: 4,
									maxWidth: '800px',
								}}
							>
								{heroData.description}
							</Typography>

							<Stack
								direction={isMobile ? 'column' : 'row'}
								spacing={2}
								sx={{ mb: 4 }}
							>
								<Button
									variant="contained"
									component={Link}
									to={heroData.cta.primary.link}
									endIcon={<ArrowForward />}
									sx={{
										...theme.typography.navButton,
										bgcolor: 'primary.main',
										color: 'primary.contrastText',
										px: 3,
										py: 1.5,
										borderRadius: '6px',
										boxShadow: 'none',
										'&:hover': {
											bgcolor: 'primary.dark',
											boxShadow: `0 4px 12px ${alpha(theme.palette.primary.main, 0.3)}`,
										},
									}}
								>
									{heroData.cta.primary.text}
								</Button>

								<Button
									variant="text"
									component={Link}
									to={heroData.cta.secondary.link}
									endIcon={<ArrowForward />}
									sx={{
										...theme.typography.navButton,
										color: 'primary.main',
										px: 3,
										py: 1.5,
										'&:hover': {
											bgcolor: alpha(theme.palette.primary.main, 0.04),
										},
									}}
								>
									{heroData.cta.secondary.text}
								</Button>
							</Stack>
						</Box>
					</Container>
				</Box>

				<TrustedCompanies />
			</Box>

			{/* Scroll-down indicator */}
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					position: 'relative',
					zIndex: 1,
					pb: { xs: 2, md: 3 },
				}}
			>
				<IconButton
					onClick={scrollToNextSection}
					aria-label="Scroll to next section"
					className="animate-bounce"
					sx={{
						border: `1.5px solid ${theme.palette.divider}`,
						color: 'primary.main',
						bgcolor: 'background.paper',
						'&:hover': {
							bgcolor: 'action.hover',
							borderColor: 'primary.main',
						},
					}}
				>
					<KeyboardArrowDown />
				</IconButton>
			</Box>
		</Box>
	);
};

export default Hero;
