import React from 'react';
import { Box, Container, Typography, Button, Stack, useTheme, alpha } from '@mui/material';
import { ArrowForward, Bolt } from '@mui/icons-material';
import { IEE_HERO } from '../../data/iee/ieeData';

const IeeHero: React.FC = () => {
	const theme = useTheme();

	return (
		<Box
			sx={{
				pt: { xs: 2, md: 10 },
				pb: { xs: 8, md: 12 },
				position: 'relative',
				overflow: 'hidden',
				background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${alpha(theme.palette.primary.main, 0.05)} 100%)`
			}}
		>
			{/* Background Accent */}
			<Box
				sx={{
					position: 'absolute',
					top: '-10%',
					right: '-5%',
					width: '600px',
					height: '600px',
					borderRadius: '50%',
					background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.15)} 0%, transparent 70%)`,
					filter: 'blur(100px)',
					zIndex: 0
				}}
			/>

			<Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
				<Stack spacing={4} alignItems="center" textAlign="center">
					<Box
						sx={{
							display: 'inline-flex',
							alignItems: 'center',
							gap: 1,
							px: 2,
							py: 0.5,
							borderRadius: 10,
							bgcolor: alpha(theme.palette.primary.main, 0.1),
							color: 'primary.main',
							mb: 2
						}}
					>
						<Bolt fontSize="small" />
						<Typography variant="caption" sx={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1.5 }}>
							Proprietary AI Model
						</Typography>
					</Box>

					<Typography
						variant="h1"
						sx={{
							fontWeight: 500,
							fontSize: { xs: '2.5rem', md: '4.5rem' },
							lineHeight: 1.1,
							maxWidth: 900,
							color: 'text.primary'
						}}
					>
						<Box component="span" sx={{ ...theme.utils.gradientText }}>AI-Powered</Box> Invoice Extraction
					</Typography>

					<Typography
						variant="h5"
						color="text.secondary"
						sx={{ maxWidth: 800, fontWeight: 400, lineHeight: 1.6 }}
					>
						{IEE_HERO.subtitle}
					</Typography>

					<Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ mt: 2 }}>
						<Button
							variant="contained"
							size="large"
							endIcon={<ArrowForward />}
							sx={{ px: 4, py: 1.8, borderRadius: 2 }}
						>
							Request Technical Demo
						</Button>
						<Button
							variant="outlined"
							size="large"
							sx={{ px: 4, py: 1.8, borderRadius: 2, borderWidth: 2 }}
						>
							View Case Studies
						</Button>
					</Stack>

					{/* Screenshot Mockup */}
					<Box
						sx={{
							width: '100%',
							maxWidth: 1000,
							maxHeight: 500,
							borderRadius: 4,
							overflow: 'hidden',
							boxShadow: '0 40px 100px rgba(0,0,0,0.15)',
							border: `1px solid ${theme.palette.divider}`,
							bgcolor: 'white'
						}}
					>
						<Box
							component="img"
							src="/images/iee/dashboard_mockup.png"
							alt="IEE Dashboard Mockup"
							sx={{ width: '100%', height: 'auto', display: 'block' }}
						/>
					</Box>
				</Stack>
			</Container>
		</Box>
	);
};

export default IeeHero;
