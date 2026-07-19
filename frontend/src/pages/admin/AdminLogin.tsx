import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import {
	Box,
	Paper,
	Stack,
	TextField,
	Button,
	Typography,
	Alert,
	CircularProgress,
} from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { authSucceeded } from '../../store/authSlice';
import { login, getMe } from '../../services/authService';
import { setToken } from '../../services/tokenStore';
import { getApiErrorMessage } from '../../services/apiClient';

const AdminLogin: React.FC = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const isAuthenticated = useAppSelector((state) => state.auth.status === 'authenticated');

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [submitting, setSubmitting] = useState(false);
	const [error, setError] = useState<string | null>(null);

	if (isAuthenticated) {
		return <Navigate to="/admin/newsletters" replace />;
	}

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		setSubmitting(true);
		setError(null);
		try {
			const { access_token } = await login(email, password);
			setToken(access_token);
			const user = await getMe();
			dispatch(authSucceeded(user));
			navigate('/admin/newsletters');
		} catch (err) {
			setError(getApiErrorMessage(err, 'Login failed. Please check your credentials and try again.'));
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<Box
			sx={{
				minHeight: '100vh',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				bgcolor: 'background.light',
				p: 2,
			}}
		>
			<Paper
				component="form"
				onSubmit={handleSubmit}
				elevation={2}
				sx={{ p: { xs: 4, md: 5 }, borderRadius: 4, width: '100%', maxWidth: 420 }}
			>
				<Stack alignItems="center" spacing={1} sx={{ mb: 4 }}>
					<Box
						component="img"
						src="/images/winvinayainfosystems_fulllogo.png"
						alt="WinVinaya InfoSystems"
						sx={{ height: 40, width: 'auto', mb: 1 }}
					/>
					<Typography variant="h5" sx={{ fontWeight: 800 }}>
						Admin Login
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Sign in to manage newsletters
					</Typography>
				</Stack>

				<Stack spacing={3}>
					<TextField
						label="Email"
						type="email"
						fullWidth
						required
						autoFocus
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<TextField
						label="Password"
						type="password"
						fullWidth
						required
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					{error && <Alert severity="error">{error}</Alert>}

					<Button
						type="submit"
						variant="contained"
						size="large"
						disabled={submitting}
						startIcon={submitting ? <CircularProgress size={18} color="inherit" /> : <LockOutlined />}
						sx={{ borderRadius: 2 }}
					>
						{submitting ? 'Signing in…' : 'Sign In'}
					</Button>
				</Stack>
			</Paper>
		</Box>
	);
};

export default AdminLogin;
