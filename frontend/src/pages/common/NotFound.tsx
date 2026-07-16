import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../../components/layout/MainLayout';
import { Home as HomeIcon } from '@mui/icons-material';

const NotFound: React.FC = () => {
	const navigate = useNavigate();

	return (
		<MainLayout>
			<Container maxWidth="md" sx={{ py: 20, textAlign: 'center' }}>
				<Typography
					variant="h1"
					sx={{
						fontSize: { xs: '6rem', md: '10rem' },
						fontWeight: 900,
						color: 'primary.main',
						opacity: 0.1,
						position: 'absolute',
						left: '50%',
						transform: 'translateX(-50%)',
						zIndex: 0,
						userSelect: 'none'
					}}
				>
					404
				</Typography>
				<Box sx={{ position: 'relative', zIndex: 1 }}>
					<Typography variant="h2" sx={{ fontWeight: 800, mb: 2 }}>
						Oops! Page Not Found
					</Typography>
					<Typography variant="h5" color="text.secondary" sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}>
						The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
					</Typography>
					<Button
						variant="contained"
						size="large"
						startIcon={<HomeIcon />}
						onClick={() => navigate('/')}
						sx={{ px: 4, py: 2 }}
					>
						Back to Home
					</Button>
				</Box>
			</Container>
		</MainLayout>
	);
};

export default NotFound;
