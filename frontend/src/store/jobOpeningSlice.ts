import { createContentSlice } from './createContentSlice';
import { getActiveJobOpenings } from '../services/jobOpeningService';
import { listAllJobOpenings, createJobOpening, updateJobOpening, deleteJobOpening } from '../services/adminJobOpeningService';
import type { JobOpening, JobOpeningPayload } from '../models/jobOpening';

const jobOpeningContentSlice = createContentSlice<JobOpening, JobOpeningPayload, JobOpeningPayload>({
	name: 'jobOpenings',
	fetchPublic: getActiveJobOpenings,
	fetchAdmin: listAllJobOpenings,
	create: createJobOpening,
	update: updateJobOpening,
	remove: deleteJobOpening,
});

export const {
	fetchPublic: fetchJobOpeningsPublic,
	fetchAdmin: fetchJobOpeningsAdmin,
	create: createJobOpeningThunk,
	update: updateJobOpeningThunk,
	remove: removeJobOpeningThunk,
} = jobOpeningContentSlice.thunks;

export default jobOpeningContentSlice.reducer;
