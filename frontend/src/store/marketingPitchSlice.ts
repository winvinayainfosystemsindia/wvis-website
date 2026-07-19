import { createContentSlice } from './createContentSlice';
import { getPublishedMarketingPitches } from '../services/marketingPitchService';
import {
	listAllMarketingPitches,
	createMarketingPitch,
	updateMarketingPitch,
	deleteMarketingPitch,
} from '../services/adminMarketingPitchService';
import type { MarketingPitch, MarketingPitchFormPayload } from '../models/marketingPitch';

const marketingPitchContentSlice = createContentSlice<
	MarketingPitch,
	MarketingPitchFormPayload,
	Partial<MarketingPitchFormPayload>
>({
	name: 'marketingPitches',
	fetchPublic: getPublishedMarketingPitches,
	fetchAdmin: listAllMarketingPitches,
	create: createMarketingPitch,
	update: updateMarketingPitch,
	remove: deleteMarketingPitch,
});

export const {
	fetchPublic: fetchMarketingPitchesPublic,
	fetchAdmin: fetchMarketingPitchesAdmin,
	create: createMarketingPitchThunk,
	update: updateMarketingPitchThunk,
	remove: removeMarketingPitchThunk,
} = marketingPitchContentSlice.thunks;

export default marketingPitchContentSlice.reducer;
