import React, { type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, Container, Chip } from '@mui/material';
import { Logout } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { loggedOut } from '../store/authSlice';
import { clearToken } from '../services/tokenStore';

interface AdminLayoutProps {
	children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const user = useAppSelector((state) => state.auth.user);

	const handleLogout = () => {
		clearToken();
		dispatch(loggedOut());
		navigate('/admin/login');
	};

	return (
		<Box sx={{ minHeight: '100vh', bgcolor: 'background.light' }}>
			<AppBar position="static" elevation={0} sx={{ bgcolor: 'background.paper', borderBottom: 1, borderColor: 'divider' }}>
				<Toolbar>
					<Typography variant="h6" sx={{ fontWeight: 800, color: 'text.primary', flexGrow: 1 }}>
						WinVinaya Admin
					</Typography>
					{user && <Chip label={user.full_name || user.username} size="small" sx={{ mr: 2 }} />}
					<Button color="inherit" onClick={handleLogout} startIcon={<Logout />} sx={{ color: 'text.secondary' }}>
						Logout
					</Button>
				</Toolbar>
			</AppBar>
			<Container maxWidth="lg" sx={{ py: 4 }}>
				{children}
			</Container>
		</Box>
	);
};

export default AdminLayout;
