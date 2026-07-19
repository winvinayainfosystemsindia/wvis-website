import { createSubmissionSlice } from './createSubmissionSlice';
import { submitDemoRequest } from '../services/demoRequestService';
import { listAllDemoRequests, setDemoRequestProcessed, deleteDemoRequest } from '../services/adminDemoRequestService';
import type { DemoRequestPayload, DemoRequestResponse } from '../models/demoRequest';

const demoRequestSubmissionSlice = createSubmissionSlice<DemoRequestResponse, DemoRequestPayload>({
	name: 'demoRequests',
	submit: submitDemoRequest,
	fetchAdmin: listAllDemoRequests,
	setProcessed: setDemoRequestProcessed,
	remove: deleteDemoRequest,
});

export const {
	submit: submitDemoRequestThunk,
	fetchAdmin: fetchDemoRequestsAdmin,
	setProcessed: setDemoRequestProcessedThunk,
	remove: removeDemoRequestThunk,
} = demoRequestSubmissionSlice.thunks;

export const { resetSubmitStatus: resetDemoRequestSubmitStatus } = demoRequestSubmissionSlice.actions;

export default demoRequestSubmissionSlice.reducer;
