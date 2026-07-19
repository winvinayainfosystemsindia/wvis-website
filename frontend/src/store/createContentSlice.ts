import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getApiErrorMessage } from '../services/apiClient';

type AsyncStatus = 'idle' | 'loading' | 'succeeded' | 'failed';

export interface ContentState<T> {
	publicItems: T[];
	publicStatus: AsyncStatus;
	publicError: string | null;
	publicDetail: T | null;
	publicDetailStatus: AsyncStatus;
	publicDetailError: string | null;
	adminItems: T[];
	adminStatus: AsyncStatus;
	adminError: string | null;
}

const initialContentState = <T>(): ContentState<T> => ({
	publicItems: [],
	publicStatus: 'idle',
	publicError: null,
	publicDetail: null,
	publicDetailStatus: 'idle',
	publicDetailError: null,
	adminItems: [],
	adminStatus: 'idle',
	adminError: null,
});

interface ContentSliceConfig<T extends { id: number }, TCreatePayload, TUpdatePayload> {
	name: string;
	fetchPublic: () => Promise<T[]>;
	fetchBySlug?: (slug: string) => Promise<T>;
	fetchAdmin: () => Promise<T[]>;
	create: (payload: TCreatePayload) => Promise<T>;
	update: (id: number, payload: TUpdatePayload) => Promise<T>;
	remove: (id: number) => Promise<void>;
}

/**
 * Immer's generic Draft<T> mapping fights an unconstrained generic T here (it can't
 * rule out T being primitive-shaped), so reducers cast the incoming draft state back
 * to the plain interface once via `unknown` rather than fighting Draft<T> per-field.
 */
export const createContentSlice = <T extends { id: number }, TCreatePayload, TUpdatePayload>(
	config: ContentSliceConfig<T, TCreatePayload, TUpdatePayload>
) => {
	const { name } = config;

	const fetchPublic = createAsyncThunk(`${name}/fetchPublic`, async (_: void, { rejectWithValue }) => {
		try {
			return await config.fetchPublic();
		} catch (err) {
			return rejectWithValue(getApiErrorMessage(err, `Unable to load ${name}.`));
		}
	});

	const fetchBySlug = createAsyncThunk(`${name}/fetchBySlug`, async (slug: string, { rejectWithValue }) => {
		try {
			if (!config.fetchBySlug) throw new Error(`fetchBySlug not configured for ${name}`);
			return await config.fetchBySlug(slug);
		} catch (err) {
			return rejectWithValue(getApiErrorMessage(err, 'This item could not be found.'));
		}
	});

	const fetchAdmin = createAsyncThunk(`${name}/fetchAdmin`, async (_: void, { rejectWithValue }) => {
		try {
			return await config.fetchAdmin();
		} catch (err) {
			return rejectWithValue(getApiErrorMessage(err, `Unable to load ${name}.`));
		}
	});

	const create = createAsyncThunk(`${name}/create`, async (payload: TCreatePayload, { rejectWithValue }) => {
		try {
			return await config.create(payload);
		} catch (err) {
			return rejectWithValue(getApiErrorMessage(err, `Something went wrong while creating this ${name}.`));
		}
	});

	const update = createAsyncThunk(
		`${name}/update`,
		async ({ id, payload }: { id: number; payload: TUpdatePayload }, { rejectWithValue }) => {
			try {
				return await config.update(id, payload);
			} catch (err) {
				return rejectWithValue(getApiErrorMessage(err, `Something went wrong while updating this ${name}.`));
			}
		}
	);

	const remove = createAsyncThunk(`${name}/remove`, async (id: number, { rejectWithValue }) => {
		try {
			await config.remove(id);
			return id;
		} catch (err) {
			return rejectWithValue(getApiErrorMessage(err, `Unable to delete this ${name}.`));
		}
	});

	const slice = createSlice({
		name,
		initialState: initialContentState<T>(),
		reducers: {
			clearDetail: (draft) => {
				const state = draft as unknown as ContentState<T>;
				state.publicDetail = null;
				state.publicDetailStatus = 'idle';
				state.publicDetailError = null;
			},
		},
		extraReducers: (builder) => {
			builder
				.addCase(fetchPublic.pending, (draft) => {
					const state = draft as unknown as ContentState<T>;
					state.publicStatus = 'loading';
					state.publicError = null;
				})
				.addCase(fetchPublic.fulfilled, (draft, action) => {
					const state = draft as unknown as ContentState<T>;
					state.publicStatus = 'succeeded';
					state.publicItems = action.payload;
				})
				.addCase(fetchPublic.rejected, (draft, action) => {
					const state = draft as unknown as ContentState<T>;
					state.publicStatus = 'failed';
					state.publicError = (action.payload as string) ?? 'Something went wrong.';
				})
				.addCase(fetchBySlug.pending, (draft) => {
					const state = draft as unknown as ContentState<T>;
					state.publicDetailStatus = 'loading';
					state.publicDetailError = null;
				})
				.addCase(fetchBySlug.fulfilled, (draft, action) => {
					const state = draft as unknown as ContentState<T>;
					state.publicDetailStatus = 'succeeded';
					state.publicDetail = action.payload;
				})
				.addCase(fetchBySlug.rejected, (draft, action) => {
					const state = draft as unknown as ContentState<T>;
					state.publicDetailStatus = 'failed';
					state.publicDetailError = (action.payload as string) ?? 'Something went wrong.';
				})
				.addCase(fetchAdmin.pending, (draft) => {
					const state = draft as unknown as ContentState<T>;
					state.adminStatus = 'loading';
					state.adminError = null;
				})
				.addCase(fetchAdmin.fulfilled, (draft, action) => {
					const state = draft as unknown as ContentState<T>;
					state.adminStatus = 'succeeded';
					state.adminItems = action.payload;
				})
				.addCase(fetchAdmin.rejected, (draft, action) => {
					const state = draft as unknown as ContentState<T>;
					state.adminStatus = 'failed';
					state.adminError = (action.payload as string) ?? 'Something went wrong.';
				})
				.addCase(create.fulfilled, (draft, action) => {
					const state = draft as unknown as ContentState<T>;
					state.adminItems.unshift(action.payload);
				})
				.addCase(update.fulfilled, (draft, action) => {
					const state = draft as unknown as ContentState<T>;
					const updated = action.payload;
					const index = state.adminItems.findIndex((item) => item.id === updated.id);
					if (index !== -1) state.adminItems[index] = updated;
				})
				.addCase(remove.fulfilled, (draft, action) => {
					const state = draft as unknown as ContentState<T>;
					state.adminItems = state.adminItems.filter((item) => item.id !== action.payload);
				});
		},
	});

	return {
		reducer: slice.reducer,
		actions: slice.actions,
		thunks: { fetchPublic, fetchBySlug, fetchAdmin, create, update, remove },
	};
};
