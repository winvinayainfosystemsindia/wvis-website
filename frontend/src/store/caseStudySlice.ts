import { createContentSlice } from './createContentSlice';
import { getPublishedCaseStudies, getCaseStudyBySlug } from '../services/caseStudyService';
import { listAllCaseStudies, createCaseStudy, updateCaseStudy, deleteCaseStudy } from '../services/adminCaseStudyService';
import type { CaseStudy, CaseStudyPayload } from '../models/caseStudy';

const caseStudyContentSlice = createContentSlice<CaseStudy, CaseStudyPayload, CaseStudyPayload>({
	name: 'caseStudies',
	fetchPublic: getPublishedCaseStudies,
	fetchBySlug: getCaseStudyBySlug,
	fetchAdmin: listAllCaseStudies,
	create: createCaseStudy,
	update: updateCaseStudy,
	remove: deleteCaseStudy,
});

export const {
	fetchPublic: fetchCaseStudiesPublic,
	fetchBySlug: fetchCaseStudyBySlug,
	fetchAdmin: fetchCaseStudiesAdmin,
	create: createCaseStudyThunk,
	update: updateCaseStudyThunk,
	remove: removeCaseStudyThunk,
} = caseStudyContentSlice.thunks;

export const { clearDetail: clearCaseStudyDetail } = caseStudyContentSlice.actions;

export default caseStudyContentSlice.reducer;
