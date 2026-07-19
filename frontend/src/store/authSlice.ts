import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { login, getMe } from '../services/authService';
import { setToken, getToken, clearToken } from '../services/tokenStore';
import { getApiErrorMessage } from '../services/apiClient';
import type { AdminUser } from '../models/user';

type AuthStatus = 'idle' | 'loading' | 'authenticated' | 'unauthenticated';

interface AuthState {
	user: AdminUser | null;
	status: AuthStatus;
	error: string | null;
}

const initialState: AuthState = {
	user: null,
	status: 'idle',
	error: null,
};

export const loginThunk = createAsyncThunk(
	'auth/login',
	async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
		try {
			const { access_token } = await login(email, password);
			setToken(access_token);
			return await getMe();
		} catch (err) {
			return rejectWithValue(getApiErrorMessage(err, 'Login failed. Please check your credentials and try again.'));
		}
	}
);

export const fetchMeThunk = createAsyncThunk('auth/fetchMe', async (_: void, { rejectWithValue }) => {
	const token = getToken();
	if (!token) {
		return rejectWithValue('Not authenticated');
	}
	try {
		return await getMe();
	} catch (err) {
		clearToken();
		return rejectWithValue(getApiErrorMessage(err, 'Session expired. Please sign in again.'));
	}
});

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
			state.error = null;
		},
		authFailed: (state) => {
			state.user = null;
			state.status = 'unauthenticated';
		},
		loggedOut: (state) => {
			state.user = null;
			state.status = 'unauthenticated';
			state.error = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(loginThunk.pending, (state) => {
				state.status = 'loading';
				state.error = null;
			})
			.addCase(loginThunk.fulfilled, (state, action) => {
				state.user = action.payload;
				state.status = 'authenticated';
				state.error = null;
			})
			.addCase(loginThunk.rejected, (state, action) => {
				state.status = 'unauthenticated';
				state.error = (action.payload as string) ?? 'Login failed.';
			})
			.addCase(fetchMeThunk.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchMeThunk.fulfilled, (state, action) => {
				state.user = action.payload;
				state.status = 'authenticated';
				state.error = null;
			})
			.addCase(fetchMeThunk.rejected, (state) => {
				state.user = null;
				state.status = 'unauthenticated';
			});
	},
});

export const { authLoading, authSucceeded, authFailed, loggedOut } = authSlice.actions;
export default authSlice.reducer;
