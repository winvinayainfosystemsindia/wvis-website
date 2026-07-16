import React from 'react';
import {
	Box,
	Container,
	Typography,
	Grid,
	Button,
	useTheme,
	alpha,
	useMediaQuery,
} from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { aiInnovationData } from '../../data/home/aiInnovationData';

const AIInnovation: React.FC = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));

	const getFeatureColors = (index: number) => {
		switch (index) {
			case 0:
				return {
					color: theme.palette.primary.main,
					accent: alpha(theme.palette.primary.main, 0.08),
				};
			case 1:
				return {
					color: theme.palette.secondary.main,
					accent: alpha(theme.palette.secondary.main, 0.08),
				};
			case 2:
				return {
					color: theme.palette.custom.invoiceIntel,
					accent: alpha(theme.palette.custom.invoiceIntel, 0.08),
				};
			case 3:
				return {
					color: theme.palette.info.main,
					accent: alpha(theme.palette.info.main, 0.08),
				};
			default:
				return {
					color: theme.palette.primary.main,
					accent: alpha(theme.palette.primary.main, 0.08),
				};
		}
	};

	return (
		<Box
			component="section"
			id="ai-innovation-section"
			aria-labelledby="ai-innovation-title"
			sx={{
				py: isMobile ? 6 : 12,
				bgcolor: 'background.light',
				position: 'relative',
				overflow: 'hidden',
			}}
		>
			{/* Background blobs */}
			<Box
				sx={{
					position: 'absolute',
					top: -250,
					right: -250,
					width: 600,
					height: 600,
					borderRadius: '50%',
					background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.07)} 0%, transparent 70%)`,
					filter: 'blur(100px)',
					pointerEvents: 'none',
				}}
			/>
			<Box
				sx={{
					position: 'absolute',
					bottom: -200,
					left: -200,
					width: 500,
					height: 500,
					borderRadius: '50%',
					background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.06)} 0%, transparent 70%)`,
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
							color: 'primary.main',
							fontWeight: 700,
							letterSpacing: 2,
							mb: 1,
							display: 'block',
						}}
					>
						{aiInnovationData.header.overline}
					</Typography>
					<Typography
						variant="h2"
						id="ai-innovation-title"
						sx={{
							fontSize: { xs: '2rem', md: '2.75rem' },
							fontWeight: 700,
							mb: 2,
						}}
					>
						{aiInnovationData.header.title.main}{' '}
						<Box component="span" className="gradient-text">
							{aiInnovationData.header.title.gradient}
						</Box>
					</Typography>
					<Typography
						sx={{
							...theme.typography.navLink,
							color: 'text.secondary',
							maxWidth: '700px',
							mx: 'auto',
							lineHeight: 1.7,
						}}
					>
						{aiInnovationData.header.description}
					</Typography>
				</Box>

				{/* AI Feature Cards */}
				<Grid container spacing={3} sx={{ mb: 6 }}>
					{aiInnovationData.features.map((feature, index) => {
						const colors = getFeatureColors(index);
						return (
							<Grid size={{ xs: 12, sm: 6 }} key={index}>
								<Box
									sx={{
										p: { xs: 3, md: 4 },
										borderRadius: 3,
										border: `1px solid ${theme.palette.divider}`,
										bgcolor: 'background.paper',
										height: '100%',
										transition: 'all 0.3s ease-in-out',
										'&:hover': {
											transform: 'translateY(-8px)',
											borderColor: colors.color,
											boxShadow: `0 12px 32px ${alpha(colors.color, 0.18)}`,
											'& .ai-icon-box': {
												transform: 'scale(1.1) rotate(5deg)',
											},
										},
									}}
								>
									{/* Icon */}
									<Box
										className="ai-icon-box"
										sx={{
											width: 60,
											height: 60,
											borderRadius: 2.5,
											background: colors.accent,
											color: colors.color,
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											mb: 2.5,
											transition: 'transform 0.3s ease',
										}}
									>
										{feature.icon}
									</Box>

									<Typography
										variant="h5"
										component="h3"
										sx={{ fontWeight: 700, mb: 1.5 }}
									>
										{feature.title}
									</Typography>
									<Typography
										variant="body1"
										sx={{
											color: 'text.secondary',
											lineHeight: 1.75,
										}}
									>
										{feature.description}
									</Typography>
								</Box>
							</Grid>
						);
					})}
				</Grid>

				{/* CTA */}
				<Box sx={{ textAlign: 'center' }}>
					<Button
						component={Link}
						to={aiInnovationData.cta.link}
						variant="contained"
						size="large"
						endIcon={<ArrowForward />}
						sx={{
							px: 4,
							py: 1.75,
							fontSize: '1rem',
							fontWeight: 700,
							borderRadius: 2,
							boxShadow: 'none',
							'&:hover': {
								boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.3)}`,
								transform: 'translateY(-2px)',
							},
							transition: 'all 0.3s ease',
						}}
					>
						{aiInnovationData.cta.text}
					</Button>
				</Box>
			</Container>
		</Box>
	);
};

export default AIInnovation;
