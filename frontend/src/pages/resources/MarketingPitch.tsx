import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Alert, CircularProgress, Typography, Stack, useTheme, alpha } from '@mui/material';
import { RocketLaunch } from '@mui/icons-material';
import MainLayout from '../../components/layout/MainLayout';
import PageHeader from '../../components/layout/PageHeader';
import MarketingPitchCard from '../../components/marketingPitch/MarketingPitchCard';
import { getPublishedMarketingPitches } from '../../services/marketingPitchService';
import { getApiErrorMessage } from '../../services/apiClient';
import type { MarketingPitch as MarketingPitchModel } from '../../models/marketingPitch';

const MarketingPitch: React.FC = () => {
	const theme = useTheme();
	const [pitches, setPitches] = useState<MarketingPitchModel[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		let isMounted = true;
		(async () => {
			try {
				const data = await getPublishedMarketingPitches();
				if (isMounted) setPitches(data);
			} catch (err) {
				if (isMounted) setError(getApiErrorMessage(err, 'Unable to load marketing pitches right now.'));
			} finally {
				if (isMounted) setLoading(false);
			}
		})();
		return () => {
			isMounted = false;
		};
	}, []);

	return (
		<MainLayout>
			<PageHeader
				title="Marketing Pitch"
				subtitle="An overview of our services, mission, and client offerings — download the latest pitch deck to share with your team."
			/>

			<Box component="section" sx={{ pb: { xs: 8, md: 12 } }}>
				<Container maxWidth="lg">
					{loading && (
						<Stack alignItems="center" sx={{ py: 8 }}>
							<CircularProgress />
						</Stack>
					)}

					{!loading && error && <Alert severity="error">{error}</Alert>}

					{!loading && !error && pitches.length === 0 && (
						<Stack
							alignItems="center"
							spacing={2}
							sx={{
								py: 8,
								px: 4,
								textAlign: 'center',
								borderRadius: 4,
								border: `1px dashed ${alpha(theme.palette.divider, 0.8)}`,
								bgcolor: 'background.light',
							}}
						>
							<Box
								sx={{
									width: 64,
									height: 64,
									borderRadius: '50%',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									bgcolor: alpha(theme.palette.primary.main, 0.08),
								}}
							>
								<RocketLaunch sx={{ fontSize: 28, color: 'primary.main' }} />
							</Box>
							<Typography variant="h6" sx={{ fontWeight: 700 }}>
								No pitch decks published yet
							</Typography>
							<Typography variant="body2" color="text.secondary" sx={{ maxWidth: 380 }}>
								Check back soon — our latest pitch deck will appear here as soon as it's published.
							</Typography>
						</Stack>
					)}

					{!loading && !error && pitches.length > 0 && (
						<Grid container spacing={4}>
							{pitches.map((pitch) => (
								<Grid key={pitch.id} size={{ xs: 12, sm: 6, md: 4 }}>
									<MarketingPitchCard pitch={pitch} />
								</Grid>
							))}
						</Grid>
					)}
				</Container>
			</Box>
		</MainLayout>
	);
};

export default MarketingPitch;
