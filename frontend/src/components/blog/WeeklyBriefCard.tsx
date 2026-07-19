import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Alert, CircularProgress, useTheme } from '@mui/material';
import { subscribeToNewsletter } from '../../services/newsletterService';
import { getApiErrorMessage } from '../../services/apiClient';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const WeeklyBriefCard: React.FC = () => {
	const theme = useTheme();
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
			await subscribeToNewsletter(email);
			setSubscribed(true);
			setEmail('');
		} catch (err) {
			setError(getApiErrorMessage(err, 'Unable to subscribe right now.'));
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<Box sx={{ bgcolor: '#0B0A23', borderRadius: 3, p: 3.5, color: 'common.white' }}>
			<Typography variant="overline" sx={{ color: theme.palette.primary.light, fontWeight: 700, letterSpacing: 1.5 }}>
				The Weekly Brief
			</Typography>
			<Typography sx={{ fontWeight: 700, fontSize: '1.1rem', mt: 1, mb: 1.5, lineHeight: 1.35 }}>
				Critical analysis delivered to your inbox every Monday.
			</Typography>

			{subscribed ? (
				<Alert severity="success" sx={{ bgcolor: 'rgba(16,185,129,0.12)', color: '#34D399', border: '1px solid rgba(16,185,129,0.25)' }}>
					You're subscribed!
				</Alert>
			) : (
				<Box component="form" onSubmit={handleSubmit}>
					<TextField
						type="email"
						placeholder="Email address"
						fullWidth
						required
						size="small"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						disabled={submitting}
						sx={{
							mb: 1.5,
							'& .MuiOutlinedInput-root': {
								color: 'common.white',
								bgcolor: 'rgba(255,255,255,0.05)',
								'& fieldset': { borderColor: 'rgba(255,255,255,0.15)' },
								'&:hover fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
								'&.Mui-focused fieldset': { borderColor: 'primary.light' },
							},
						}}
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						disabled={submitting}
						sx={{
							bgcolor: 'common.white',
							color: '#0B0A23',
							fontWeight: 700,
							boxShadow: 'none',
							'&:hover': { bgcolor: 'grey.200', boxShadow: 'none' },
						}}
					>
						{submitting ? <CircularProgress size={18} color="inherit" /> : 'Subscribe'}
					</Button>
					{error && (
						<Alert severity="error" sx={{ mt: 1.5, bgcolor: 'rgba(239,68,68,0.1)', color: '#F87171', border: '1px solid rgba(239,68,68,0.2)' }}>
							{error}
						</Alert>
					)}
				</Box>
			)}
		</Box>
	);
};

export default WeeklyBriefCard;
