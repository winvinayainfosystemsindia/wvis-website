import React from 'react';
import {
	Box,
	Container,
	Typography,
	Grid,
	Stack,
	useTheme,
	alpha,
	useMediaQuery,
} from '@mui/material';
import { ArrowForward, CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { whoWeHelpData } from '../../data/home/whoWeHelpData';

const WhoWeHelp: React.FC = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));

	const getSegmentColors = (id: string) => {
		switch (id) {
			case 'enterprise':
				return {
					accent: theme.palette.secondary.main,
					bg: alpha(theme.palette.secondary.main, 0.05),
					border: alpha(theme.palette.secondary.main, 0.15),
				};
			case 'ngo':
				return {
					accent: theme.palette.success.main,
					bg: alpha(theme.palette.success.main, 0.05),
					border: alpha(theme.palette.success.main, 0.15),
				};
			case 'learners':
				return {
					accent: theme.palette.primary.main,
					bg: alpha(theme.palette.primary.main, 0.05),
					border: alpha(theme.palette.primary.main, 0.15),
				};
			default:
				return {
					accent: theme.palette.primary.main,
					bg: alpha(theme.palette.primary.main, 0.05),
					border: alpha(theme.palette.primary.main, 0.15),
				};
		}
	};

	return (
		<Box
			component="section"
			id="who-we-help-section"
			aria-labelledby="who-we-help-title"
			sx={{
				py: isMobile ? 6 : 12,
				bgcolor: 'background.default',
				position: 'relative',
				overflow: 'hidden',
			}}
		>
			{/* Subtle background */}
			<Box
				sx={{
					position: 'absolute',
					top: '20%',
					right: '-15%',
					width: 600,
					height: 600,
					borderRadius: '50%',
					background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.05)} 0%, transparent 70%)`,
					filter: 'blur(120px)',
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
							color: 'primary.main',
							fontWeight: 700,
							letterSpacing: 2,
							mb: 1,
							display: 'block',
						}}
					>
						{whoWeHelpData.header.overline}
					</Typography>
					<Typography
						variant="h2"
						id="who-we-help-title"
						sx={{
							fontSize: { xs: '2rem', md: '2.75rem' },
							fontWeight: 700,
							mb: 2,
						}}
					>
						{whoWeHelpData.header.title.main}{' '}
						<Box component="span" className="gradient-text">
							{whoWeHelpData.header.title.gradient}
						</Box>
					</Typography>
					<Typography
						sx={{
							...theme.typography.navLink,
							color: 'text.secondary',
							maxWidth: '660px',
							mx: 'auto',
							lineHeight: 1.75,
						}}
					>
						{whoWeHelpData.header.description}
					</Typography>
				</Box>

				{/* Segment Cards */}
				<Grid container spacing={3}>
					{whoWeHelpData.segments.map((segment) => {
						const colors = getSegmentColors(segment.id);
						return (
							<Grid size={{ xs: 12, md: 4 }} key={segment.id}>
								<Box
									sx={{
										height: '100%',
										p: { xs: 3.5, md: 4 },
										borderRadius: 3,
										border: `1.5px solid ${colors.border}`,
										bgcolor: colors.bg,
										display: 'flex',
										flexDirection: 'column',
										transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
										'&:hover': {
											transform: 'translateY(-8px)',
											boxShadow: `0 16px 40px ${alpha(colors.accent, 0.12)}`,
											borderColor: colors.accent,
											bgcolor: alpha(colors.accent, 0.04),
										},
									}}
								>
									{/* Emoji + Label */}
									<Stack direction="row" spacing={1.5} alignItems="center" mb={2}>
										<Typography sx={{ fontSize: '2rem', lineHeight: 1 }} aria-hidden="true">
											{segment.emoji}
										</Typography>
										<Typography
											variant="overline"
											component="span"
											sx={{
												color: colors.accent,
												fontWeight: 700,
												letterSpacing: 1,
												fontSize: '0.7rem',
											}}
										>
											{segment.label}
										</Typography>
									</Stack>

									{/* Tagline */}
									<Typography
										variant="h5"
										component="h3"
										sx={{
											fontWeight: 700,
											mb: 2,
											fontSize: { xs: '1.15rem', md: '1.25rem' },
											lineHeight: 1.35,
										}}
									>
										{segment.tagline}
									</Typography>

									{/* Challenge */}
									<Typography
										variant="body2"
										sx={{
											color: 'text.secondary',
											lineHeight: 1.75,
											mb: 3,
											flexGrow: 1,
										}}
									>
										{segment.challenge}
									</Typography>

									{/* How We Help List */}
									<Stack spacing={1.25} mb={3.5} component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
										{segment.howWeHelp.map((item, idx) => (
											<Stack
												key={idx}
												direction="row"
												spacing={1.25}
												alignItems="flex-start"
												component="li"
											>
												<CheckCircle
													sx={{
														fontSize: 17,
														color: colors.accent,
														mt: 0.2,
														flexShrink: 0,
													}}
												/>
												<Typography
													variant="body2"
													sx={{ color: 'text.primary', fontSize: '0.875rem' }}
												>
													{item}
												</Typography>
											</Stack>
										))}
									</Stack>

									{/* CTA Link */}
									<Box
										component={Link}
										to={segment.ctaLink}
										sx={{
											display: 'inline-flex',
											alignItems: 'center',
											gap: 0.5,
											color: colors.accent,
											textDecoration: 'none',
											fontWeight: 700,
											fontSize: '0.9rem',
											mt: 'auto',
											'&:hover': { textDecoration: 'underline' },
										}}
									>
										{segment.ctaText}
										<ArrowForward sx={{ fontSize: 16 }} />
									</Box>
								</Box>
							</Grid>
						);
					})}
				</Grid>
			</Container>
		</Box>
	);
};

export default WhoWeHelp;
