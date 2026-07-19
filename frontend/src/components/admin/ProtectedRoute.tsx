import React, { useEffect, type ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { authLoading, authSucceeded, authFailed } from '../../store/authSlice';
import { getMe } from '../../services/authService';
import { getToken, clearToken } from '../../services/tokenStore';

interface ProtectedRouteProps {
	children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
	const dispatch = useAppDispatch();
	const { user, status } = useAppSelector((state) => state.auth);

	useEffect(() => {
		if (status !== 'idle') return;

		const token = getToken();
		if (!token) {
			dispatch(authFailed());
			return;
		}

		dispatch(authLoading());
		getMe()
			.then((me) => dispatch(authSucceeded(me)))
			.catch(() => {
				clearToken();
				dispatch(authFailed());
			});
	}, [status, dispatch]);

	if (status === 'idle' || status === 'loading') {
		return (
			<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
				<CircularProgress />
			</Box>
		);
	}

	if (status !== 'authenticated' || !user) {
		return <Navigate to="/admin/login" replace />;
	}

	return <>{children}</>;
};

export default ProtectedRoute;
