import apiClient from './apiClient';
import type { MarketingPitch } from '../models/marketingPitch';

export const getPublishedMarketingPitches = async (): Promise<MarketingPitch[]> => {
	const { data } = await apiClient.get<MarketingPitch[]>('/marketing-pitches/');
	return data;
};
