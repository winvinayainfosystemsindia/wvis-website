import React from 'react';
import {
	Box,
	Container,
	Typography,
	Paper,
	Stack,
	TextField,
	Button,
	alpha,
} from '@mui/material';
import { Send } from '@mui/icons-material';

const NewsletterCard: React.FC = () => {
	return (
		<Container maxWidth="xl" sx={{ mb: -10, position: 'relative', zIndex: 10 }}>
			<Paper
				elevation={4}
				sx={{
					p: { xs: 6, md: 8 },
					borderRadius: 6,
					bgcolor: 'primary.main',
					color: '#fff',
					background: 'linear-gradient(135deg, #6F2F9F 0%, #12344D 100%)',
					position: 'relative',
					overflow: 'hidden'
				}}
			>
				{/* Background shapes */}
				<Box sx={{
					position: 'absolute',
					top: -100,
					right: -100,
					width: 300,
					height: 300,
					borderRadius: '50%',
					background: alpha('#fff', 0.05),
				}} />

				<Stack
					direction={{ xs: 'column', lg: 'row' }}
					spacing={6}
					alignItems="center"
					justifyContent="space-between"
				>
					<Box sx={{ maxWidth: 600 }}>
						<Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>
							Stay Updated with <br />
							<Box component="span" sx={{ color: 'secondary.main' }}>Our Journey</Box>
						</Typography>
						<Typography sx={{ color: alpha('#fff', 0.7), fontSize: '1.2rem' }}>
							Subscribe to our newsletter to receive the latest updates, stories of impact, and tech insights.
						</Typography>
					</Box>

					<Paper
						sx={{
							p: 1,
							borderRadius: 3,
							display: 'flex',
							width: '100%',
							maxWidth: 500,
							bgcolor: alpha('#fff', 0.1),
							backdropFilter: 'blur(10px)',
							border: '1px solid',
							borderColor: alpha('#fff', 0.2)
						}}
						elevation={0}
					>
						<TextField
							placeholder="Enter your email"
							variant="standard"
							fullWidth
							InputProps={{
								disableUnderline: true,
								sx: {
									color: '#fff',
									px: 2,
									'&::placeholder': { color: alpha('#fff', 0.5), opacity: 1 }
								}
							}}
						/>
						<Button
							variant="contained"
							color="secondary"
							size="large"
							sx={{ px: 4, borderRadius: 2 }}
							endIcon={<Send />}
						>
							Subscribe
						</Button>
					</Paper>
				</Stack>
			</Paper>
		</Container>
	);
};

export default NewsletterCard;
