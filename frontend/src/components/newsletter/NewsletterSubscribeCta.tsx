import React, { useState } from 'react';
import { Box, Container, Typography, Stack, TextField, Button, Alert, CircularProgress, Grid, useTheme } from '@mui/material';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { subscribeToNewsletterThunk } from '../../store/newsletterSlice';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const NewsletterSubscribeCta: React.FC = () => {
	const theme = useTheme();
	const dispatch = useAppDispatch();
	const [email, setEmail] = useState('');
	const [submitting, setSubmitting] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [subscribed, setSubscribed] = useState(false);

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		if (!EMAIL_REGEX.test(email)) {
			setError('Please enter a valid email address.');
			return;
		}
		setSubmitting(true);
		setError(null);
		try {
			await dispatch(subscribeToNewsletterThunk(email)).unwrap();
			setSubscribed(true);
			setEmail('');
		} catch (err) {
			setError(err as string);
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<Box
			component="section"
			sx={{
				py: { xs: 8, md: 12 },
				position: 'relative',
				overflow: 'hidden',
				bgcolor: '#07061A', // deep dark blue/black background matching screenshot
				borderTop: `1px solid ${theme.palette.divider}`,
			}}
		>
			{/* Decorative lines like in the screenshot */}
			<Box
				sx={{
					position: 'absolute',
					top: 0,
					right: 0,
					width: '100%',
					height: '100%',
					pointerEvents: 'none',
					opacity: 0.05,
					zIndex: 0,
				}}
			>
				<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
					<line x1="10%" y1="0" x2="100%" y2="90%" stroke="#FFFFFF" strokeWidth="2" />
					<line x1="25%" y1="0" x2="100%" y2="75%" stroke="#FFFFFF" strokeWidth="2" />
					<line x1="40%" y1="0" x2="100%" y2="60%" stroke="#FFFFFF" strokeWidth="2" />
				</svg>
			</Box>

			<Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
				<Grid container spacing={{ xs: 4, lg: 8 }} alignItems="center">
					{/* Left block: Stay Informed & Title */}
					<Grid size={{ xs: 12, md: 7 }}>
						<Typography
							variant="overline"
							sx={{
								color: '#10B981', // green stay informed tag
								fontWeight: 700,
								letterSpacing: 2,
								mb: 2,
								display: 'block',
								fontSize: '0.8rem',
							}}
						>
							STAY INFORMED
						</Typography>
						<Typography
							variant="h2"
							sx={{
								color: 'common.white',
								fontSize: { xs: '2rem', sm: '2.5rem', md: '3.25rem' },
								fontWeight: 800,
								lineHeight: 1.15,
								letterSpacing: '-0.02em',
								maxWidth: 620,
							}}
						>
							Deep analysis delivered directly to your inbox every Thursday.
						</Typography>
					</Grid>

					{/* Right block: Form & Subtitle */}
					<Grid size={{ xs: 12, md: 5 }}>
						{subscribed ? (
							<Alert
								severity="success"
								sx={{
									bgcolor: 'rgba(16, 185, 129, 0.1)',
									color: '#10B981',
									border: '1px solid rgba(16, 185, 129, 0.2)',
									borderRadius: 1,
								}}
							>
								You're subscribed — thanks for joining!
							</Alert>
						) : (
							<Box component="form" onSubmit={handleSubmit}>
								<Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 2 }}>
									<TextField
										type="email"
										placeholder="Enter your email address"
										fullWidth
										required
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										disabled={submitting}
										variant="outlined"
										InputProps={{
											sx: {
												color: 'common.white',
												bgcolor: 'rgba(255, 255, 255, 0.04)',
												borderRadius: 1,
												fontSize: '0.95rem',
												'& fieldset': {
													borderColor: 'rgba(255, 255, 255, 0.15)',
													borderWidth: '1px',
												},
												'&:hover fieldset': {
													borderColor: 'rgba(255, 255, 255, 0.35)',
												},
												'&.Mui-focused fieldset': {
													borderColor: 'primary.light',
													borderWidth: '1px',
												},
											},
										}}
									/>
									<Button
										type="submit"
										variant="contained"
										disabled={submitting}
										sx={{
											bgcolor: '#FFFFFF',
											color: '#07061A',
											px: 4.5,
											py: 1.75,
											borderRadius: 1,
											fontWeight: 700,
											textTransform: 'uppercase',
											letterSpacing: 1.5,
											fontSize: '0.85rem',
											whiteSpace: 'nowrap',
											boxShadow: 'none',
											minWidth: { sm: 140 },
											'&:hover': {
												bgcolor: 'rgba(255, 255, 255, 0.9)',
												boxShadow: 'none',
											},
											'&.Mui-disabled': {
												bgcolor: 'rgba(255, 255, 255, 0.3)',
												color: 'rgba(0, 0, 0, 0.5)',
											},
										}}
									>
										{submitting ? <CircularProgress size={20} color="inherit" /> : 'Subscribe'}
									</Button>
								</Stack>
								<Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.5)', display: 'block' }}>
									100% spam free. Unsubscribe anytime with one click.
								</Typography>
								{error && (
									<Alert
										severity="error"
										sx={{
											mt: 2,
											bgcolor: 'rgba(239, 68, 68, 0.1)',
											color: '#EF4444',
											border: '1px solid rgba(239, 68, 68, 0.2)',
											borderRadius: 1,
										}}
									>
										{error}
									</Alert>
								)}
							</Box>
						)}
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default NewsletterSubscribeCta;
