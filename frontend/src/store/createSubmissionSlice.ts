import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getApiErrorMessage } from '../services/apiClient';

type AsyncStatus = 'idle' | 'loading' | 'succeeded' | 'failed';

export interface SubmissionState<T> {
	submitStatus: AsyncStatus;
	submitError: string | null;
	adminItems: T[];
	adminStatus: AsyncStatus;
	adminError: string | null;
}

const initialSubmissionState = <T>(): SubmissionState<T> => ({
	submitStatus: 'idle',
	submitError: null,
	adminItems: [],
	adminStatus: 'idle',
	adminError: null,
});

interface SubmissionSliceConfig<T extends { id: number }, TSubmitPayload> {
	name: string;
	submit: (payload: TSubmitPayload) => Promise<T>;
	fetchAdmin: () => Promise<T[]>;
	setProcessed: (id: number, isProcessed: boolean) => Promise<T>;
	remove: (id: number) => Promise<void>;
}

// See createContentSlice.ts for why reducers cast the draft via `unknown` once.
export const createSubmissionSlice = <T extends { id: number }, TSubmitPayload>(
	config: SubmissionSliceConfig<T, TSubmitPayload>
) => {
	const { name } = config;

	const submit = createAsyncThunk(`${name}/submit`, async (payload: TSubmitPayload, { rejectWithValue }) => {
		try {
			return await config.submit(payload);
		} catch (err) {
			return rejectWithValue(getApiErrorMessage(err, 'Something went wrong while sending this. Please try again.'));
		}
	});

	const fetchAdmin = createAsyncThunk(`${name}/fetchAdmin`, async (_: void, { rejectWithValue }) => {
		try {
			return await config.fetchAdmin();
		} catch (err) {
			return rejectWithValue(getApiErrorMessage(err, `Unable to load ${name}.`));
		}
	});

	const setProcessed = createAsyncThunk(
		`${name}/setProcessed`,
		async ({ id, isProcessed }: { id: number; isProcessed: boolean }, { rejectWithValue }) => {
			try {
				return await config.setProcessed(id, isProcessed);
			} catch (err) {
				return rejectWithValue(getApiErrorMessage(err, 'Unable to update status.'));
			}
		}
	);

	const remove = createAsyncThunk(`${name}/remove`, async (id: number, { rejectWithValue }) => {
		try {
			await config.remove(id);
			return id;
		} catch (err) {
			return rejectWithValue(getApiErrorMessage(err, 'Unable to delete this entry.'));
		}
	});

	const slice = createSlice({
		name,
		initialState: initialSubmissionState<T>(),
		reducers: {
			resetSubmitStatus: (draft) => {
				const state = draft as unknown as SubmissionState<T>;
				state.submitStatus = 'idle';
				state.submitError = null;
			},
		},
		extraReducers: (builder) => {
			builder
				.addCase(submit.pending, (draft) => {
					const state = draft as unknown as SubmissionState<T>;
					state.submitStatus = 'loading';
					state.submitError = null;
				})
				.addCase(submit.fulfilled, (draft) => {
					const state = draft as unknown as SubmissionState<T>;
					state.submitStatus = 'succeeded';
				})
				.addCase(submit.rejected, (draft, action) => {
					const state = draft as unknown as SubmissionState<T>;
					state.submitStatus = 'failed';
					state.submitError = (action.payload as string) ?? 'Something went wrong.';
				})
				.addCase(fetchAdmin.pending, (draft) => {
					const state = draft as unknown as SubmissionState<T>;
					state.adminStatus = 'loading';
					state.adminError = null;
				})
				.addCase(fetchAdmin.fulfilled, (draft, action) => {
					const state = draft as unknown as SubmissionState<T>;
					state.adminStatus = 'succeeded';
					state.adminItems = action.payload;
				})
				.addCase(fetchAdmin.rejected, (draft, action) => {
					const state = draft as unknown as SubmissionState<T>;
					state.adminStatus = 'failed';
					state.adminError = (action.payload as string) ?? 'Something went wrong.';
				})
				.addCase(setProcessed.fulfilled, (draft, action) => {
					const state = draft as unknown as SubmissionState<T>;
					const updated = action.payload;
					const index = state.adminItems.findIndex((item) => item.id === updated.id);
					if (index !== -1) state.adminItems[index] = updated;
				})
				.addCase(remove.fulfilled, (draft, action) => {
					const state = draft as unknown as SubmissionState<T>;
					state.adminItems = state.adminItems.filter((item) => item.id !== action.payload);
				});
		},
	});

	return {
		reducer: slice.reducer,
		actions: slice.actions,
		thunks: { submit, fetchAdmin, setProcessed, remove },
	};
};
