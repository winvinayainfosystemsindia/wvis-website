import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createContentSlice } from './createContentSlice';
import { getApiErrorMessage } from '../services/apiClient';
import { getPublishedNewsletters, subscribeToNewsletter } from '../services/newsletterService';
import { listAllNewsletters, createNewsletter, updateNewsletter, deleteNewsletter } from '../services/adminNewsletterService';
import type { NewsletterIssue, NewsletterFormPayload } from '../models/newsletter';

const newsletterContentSlice = createContentSlice<NewsletterIssue, NewsletterFormPayload, Partial<NewsletterFormPayload>>({
	name: 'newsletters',
	fetchPublic: getPublishedNewsletters,
	fetchAdmin: listAllNewsletters,
	create: createNewsletter,
	update: updateNewsletter,
	remove: deleteNewsletter,
});

export const {
	fetchPublic: fetchNewslettersPublic,
	fetchAdmin: fetchNewslettersAdmin,
	create: createNewsletterThunk,
	update: updateNewsletterThunk,
	remove: removeNewsletterThunk,
} = newsletterContentSlice.thunks;

export default newsletterContentSlice.reducer;

// --- Newsletter email subscribe (a public "communications" action, not CRUD content) ---

type AsyncStatus = 'idle' | 'loading' | 'succeeded' | 'failed';

interface NewsletterSubscribeState {
	status: AsyncStatus;
	error: string | null;
}

const subscribeInitialState: NewsletterSubscribeState = { status: 'idle', error: null };

export const subscribeToNewsletterThunk = createAsyncThunk(
	'newsletterSubscribe/subscribe',
	async (email: string, { rejectWithValue }) => {
		try {
			await subscribeToNewsletter(email);
		} catch (err) {
			return rejectWithValue(getApiErrorMessage(err, 'Unable to subscribe right now. Please try again.'));
		}
	}
);

const newsletterSubscribeSlice = createSlice({
	name: 'newsletterSubscribe',
	initialState: subscribeInitialState,
	reducers: {
		resetSubscribeStatus: (state) => {
			state.status = 'idle';
			state.error = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(subscribeToNewsletterThunk.pending, (state) => {
				state.status = 'loading';
				state.error = null;
			})
			.addCase(subscribeToNewsletterThunk.fulfilled, (state) => {
				state.status = 'succeeded';
			})
			.addCase(subscribeToNewsletterThunk.rejected, (state, action) => {
				state.status = 'failed';
				state.error = (action.payload as string) ?? 'Something went wrong.';
			});
	},
});

export const { resetSubscribeStatus } = newsletterSubscribeSlice.actions;
export const newsletterSubscribeReducer = newsletterSubscribeSlice.reducer;
