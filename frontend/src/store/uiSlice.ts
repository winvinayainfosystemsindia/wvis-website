import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface UIState {
	mobileMenuOpen: boolean;
	isLoading: boolean;
}

const initialState: UIState = {
	mobileMenuOpen: false,
	isLoading: false,
};

const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		toggleMobileMenu: (state) => {
			state.mobileMenuOpen = !state.mobileMenuOpen;
		},
		setMobileMenu: (state, action: PayloadAction<boolean>) => {
			state.mobileMenuOpen = action.payload;
		},
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
	},
});

export const { toggleMobileMenu, setMobileMenu, setLoading } = uiSlice.actions;
export default uiSlice.reducer;
