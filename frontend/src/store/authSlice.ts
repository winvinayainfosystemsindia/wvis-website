import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { AdminUser } from '../models/user';

type AuthStatus = 'idle' | 'loading' | 'authenticated' | 'unauthenticated';

interface AuthState {
	user: AdminUser | null;
	status: AuthStatus;
}

const initialState: AuthState = {
	user: null,
	status: 'idle',
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		authLoading: (state) => {
			state.status = 'loading';
		},
		authSucceeded: (state, action: PayloadAction<AdminUser>) => {
			state.user = action.payload;
			state.status = 'authenticated';
		},
		authFailed: (state) => {
			state.user = null;
			state.status = 'unauthenticated';
		},
		loggedOut: (state) => {
			state.user = null;
			state.status = 'unauthenticated';
		},
	},
});

export const { authLoading, authSucceeded, authFailed, loggedOut } = authSlice.actions;
export default authSlice.reducer;
