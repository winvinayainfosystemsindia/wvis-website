import React from 'react';
import {
	Box,
	Container,
	Typography,
	Grid,
	Stack,
	Button,
	Paper,
	useTheme
} from '@mui/material';
import { PlayCircleOutline, ArrowForward } from '@mui/icons-material';

const AcademyISL: React.FC = () => {
	const theme = useTheme();

	return (
		<Box sx={{ py: { xs: 10, md: 15 }, position: 'relative', overflow: 'hidden' }}>
			<Container maxWidth="lg">
				<Grid container spacing={8} alignItems="center">
					<Grid size={{ xs: 12, md: 6 }}>
						<Typography variant="h2" sx={{ fontWeight: 600, mb: 3 }}>
							Learning Without <br />
							<Box component="span" sx={{ ...theme.utils.gradientText }}>Linguistic Barriers</Box>
						</Typography>
						<Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.25rem', lineHeight: 1.8, mb: 4 }}>
							We are proud to be the only platform offering comprehensive technology courses with <Box component="span" sx={{ fontWeight: 700 }}>Indian Sign Language (ISL)</Box> video support. Our mission is to ensure that deep technical knowledge is accessible to everyone.
						</Typography>
						<Stack direction="row" spacing={2}>
							<Button variant="contained" size="large" endIcon={<ArrowForward />}>
								Explore ISL Courses
							</Button>
						</Stack>
					</Grid>
					<Grid size={{ xs: 12, md: 6 }}>
						<Box sx={{ position: 'relative' }}>
							<Paper
								elevation={0}
								sx={{
									borderRadius: 4,
									overflow: 'hidden',
									border: `1px solid ${theme.palette.divider}`,
									boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
									aspectRatio: '16/9',
									bgcolor: 'grey.900',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center'
								}}
							>
								<Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(0,0,0,0.3)', zIndex: 1 }} />
								<Box
									component="img"
									src="/images/academy/explore_courses.png"
									sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
								/>
								<PlayCircleOutline sx={{ position: 'absolute', fontSize: 80, color: 'white', opacity: 0.8, zIndex: 2, cursor: 'pointer', '&:hover': { transform: 'scale(1.1)', opacity: 1 }, transition: 'all 0.3s' }} />
							</Paper>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default AcademyISL;
