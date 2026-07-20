import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './uiSlice';
import authReducer from './authSlice';
import blogReducer from './blogSlice';
import newsletterReducer, { newsletterSubscribeReducer } from './newsletterSlice';
import caseStudyReducer from './caseStudySlice';
import marketingPitchReducer from './marketingPitchSlice';
import contactReducer from './contactSlice';
import demoRequestReducer from './demoRequestSlice';
import jobOpeningReducer from './jobOpeningSlice';

export const store = configureStore({
	reducer: {
		ui: uiReducer,
		auth: authReducer,
		blogs: blogReducer,
		newsletters: newsletterReducer,
		newsletterSubscribe: newsletterSubscribeReducer,
		caseStudies: caseStudyReducer,
		marketingPitches: marketingPitchReducer,
		contacts: contactReducer,
		demoRequests: demoRequestReducer,
		jobOpenings: jobOpeningReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
