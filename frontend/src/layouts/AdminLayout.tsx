import React, { type ReactNode } from 'react';
import { useNavigate, useLocation, Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, Container, Chip, Stack, alpha, useTheme } from '@mui/material';
import { Logout, Newspaper, Article, RocketLaunch, MailOutline } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { loggedOut } from '../store/authSlice';
import { clearToken } from '../services/tokenStore';

interface AdminLayoutProps {
	children: ReactNode;
}

const NAV_LINKS = [
	{ label: 'Newsletters', path: '/admin/newsletters', icon: <Newspaper fontSize="small" /> },
	{ label: 'Blogs', path: '/admin/blogs', icon: <Article fontSize="small" /> },
	{ label: 'Demo Requests', path: '/admin/demo-requests', icon: <RocketLaunch fontSize="small" /> },
	{ label: 'Contacts', path: '/admin/contacts', icon: <MailOutline fontSize="small" /> },
];

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
	const theme = useTheme();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const location = useLocation();
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
				<Stack direction="row" spacing={0.5} sx={{ px: 3, pb: 1 }}>
					{NAV_LINKS.map((link) => {
						const active = location.pathname.startsWith(link.path);
						return (
							<Button
								key={link.path}
								component={RouterLink}
								to={link.path}
								startIcon={link.icon}
								size="small"
								sx={{
									px: 2,
									borderRadius: 2,
									fontWeight: 600,
									color: active ? 'primary.main' : 'text.secondary',
									bgcolor: active ? alpha(theme.palette.primary.main, 0.08) : 'transparent',
									'&:hover': { bgcolor: alpha(theme.palette.primary.main, 0.06) },
								}}
							>
								{link.label}
							</Button>
						);
					})}
				</Stack>
			</AppBar>
			<Container maxWidth="lg" sx={{ py: 4 }}>
				{children}
			</Container>
		</Box>
	);
};

export default AdminLayout;
