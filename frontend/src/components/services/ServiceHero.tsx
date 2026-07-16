import React from 'react';
import { Box, Container, Typography, Grid, Button, Stack, useTheme, alpha } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import ServiceIllustration from './ServiceIllustration';

interface ServiceHeroProps {
	title: string;
	category: string;
	description: string;
	longDescription: string;
	accentColor: string;
	image: string;
}

const ServiceHero: React.FC<ServiceHeroProps> = ({
	title,
	category,
	description,
	longDescription,
	accentColor,
	image
}) => {
	const theme = useTheme();
	const baseColor = accentColor || theme.palette.primary.main;

	return (
		<Box
			sx={{
				pt: { xs: 12, md: 16 },
				pb: { xs: 8, md: 12 },
				position: 'relative',
				overflow: 'hidden',
				background: `radial-gradient(circle at 10% 20%, ${alpha(baseColor, 0.04)} 0%, transparent 40%)`
			}}
		>
			<Container maxWidth="lg">
				<Grid container spacing={6} alignItems="center">
					{/* Left: Content Column */}
					<Grid size={{ xs: 12, md: 7 }}>
						<Stack spacing={3}>
							<Box
								sx={{
									display: 'inline-flex',
									alignItems: 'center',
									gap: 1,
									px: 2.2,
									py: 0.8,
									borderRadius: '100px',
									bgcolor: alpha(baseColor, 0.08),
									color: baseColor,
									alignSelf: 'flex-start',
									border: `1px solid ${alpha(baseColor, 0.15)}`
								}}
							>
								<Typography variant="caption" sx={{ fontWeight: 700, letterSpacing: 1.2, textTransform: 'uppercase', fontSize: '0.725rem' }}>
									{category}
								</Typography>
							</Box>

							<Typography
								variant="h1"
								sx={{
									fontSize: { xs: '2.5rem', md: '3.5rem' },
									fontWeight: 800,
									lineHeight: 1.15,
									letterSpacing: '-0.02em',
									color: 'text.primary'
								}}
							>
								{title.split(' ').map((word, i, arr) => (
									<React.Fragment key={i}>
										{i === arr.length - 1 ? (
											<Box
												component="span"
												sx={{
													backgroundImage: `linear-gradient(135deg, ${baseColor} 0%, ${theme.palette.secondary.main} 100%)`,
													WebkitBackgroundClip: 'text',
													WebkitTextFillColor: 'transparent',
													backgroundClip: 'text',
													display: 'inline-block'
												}}
											>
												{word}
											</Box>
										) : (
											word + ' '
										)}
									</React.Fragment>
								))}
							</Typography>

							<Typography
								variant="body1"
								color="text.secondary"
								sx={{
									fontSize: { xs: '1.05rem', md: '1.15rem' },
									lineHeight: 1.8,
									fontWeight: 400
								}}
							>
								{longDescription || description}
							</Typography>

							<Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ pt: 1.5 }}>
								<Button
									component={Link}
									to="/contact"
									variant="contained"
									size="large"
									endIcon={<ArrowForward />}
									sx={{
										bgcolor: baseColor,
										color: 'white',
										fontWeight: 700,
										px: 4,
										py: 1.75,
										borderRadius: 2,
										boxShadow: 'none',
										'&:hover': {
											bgcolor: baseColor,
											filter: 'brightness(0.9)',
											boxShadow: `0 8px 24px ${alpha(baseColor, 0.35)}`,
											transform: 'translateY(-2px)'
										},
										transition: 'all 0.3s'
									}}
								>
									Request Consultation
								</Button>
								<Button
									component={Link}
									to="/contact"
									variant="outlined"
									size="large"
									sx={{
										borderColor: theme.palette.divider,
										color: 'text.secondary',
										fontWeight: 700,
										px: 4,
										py: 1.75,
										borderRadius: 2,
										'&:hover': {
											borderColor: theme.palette.text.primary,
											bgcolor: alpha(theme.palette.text.primary, 0.02),
											transform: 'translateY(-2px)'
										},
										transition: 'all 0.3s'
									}}
								>
									Contact Team
								</Button>
							</Stack>
						</Stack>
					</Grid>

					{/* Right: Graphic Illustration Column */}
					<Grid size={{ xs: 12, md: 5 }}>
						<ServiceIllustration type={image} accentColor={baseColor} />
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default ServiceHero;
