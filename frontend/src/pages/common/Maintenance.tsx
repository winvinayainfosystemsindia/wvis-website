import React from 'react';
import { Container, Typography, Box, Paper, alpha } from '@mui/material';
import { Engineering } from '@mui/icons-material';

const Maintenance: React.FC = () => {
	return (
		<Box
			sx={{
				minHeight: '100vh',
				display: 'flex',
				alignItems: 'center',
				bgcolor: 'background.default'
			}}
		>
			<Container maxWidth="sm">
				<Paper
					elevation={0}
					sx={{
						p: 6,
						textAlign: 'center',
						borderRadius: 6,
						border: '1px solid',
						borderColor: 'divider',
						background: (theme) => `linear-gradient(135deg, #fff 0%, ${alpha(theme.palette.primary.main, 0.02)} 100%)`
					}}
				>
					<Box
						sx={{
							width: 80,
							height: 80,
							borderRadius: '50%',
							bgcolor: alpha('#FF9A16', 0.1),
							color: '#FF9A16',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							mx: 'auto',
							mb: 4
						}}
					>
						<Engineering sx={{ fontSize: 48 }} />
					</Box>
					<Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>
						Under Maintenance
					</Typography>
					<Typography color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
						We're currently performing scheduled maintenance to improve our services. We'll be back online shortly. Thank you for your patience!
					</Typography>
					<Typography variant="body2" sx={{ mt: 4, fontWeight: 700, color: 'primary.main' }}>
						Estimated time: ~30 minutes
					</Typography>
				</Paper>
			</Container>
		</Box>
	);
};

export default Maintenance;
