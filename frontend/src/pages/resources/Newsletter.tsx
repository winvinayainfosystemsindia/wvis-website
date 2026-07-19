import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Alert, CircularProgress, Typography, Stack } from '@mui/material';
import { MailOutline } from '@mui/icons-material';
import MainLayout from '../../components/layout/MainLayout';
import PageHeader from '../../components/layout/PageHeader';
import NewsletterIssueCard from '../../components/newsletter/NewsletterIssueCard';
import { getPublishedNewsletters } from '../../services/newsletterService';
import { getApiErrorMessage } from '../../services/apiClient';
import type { NewsletterIssue } from '../../models/newsletter';

const Newsletter: React.FC = () => {
	const [issues, setIssues] = useState<NewsletterIssue[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		let isMounted = true;
		(async () => {
			try {
				const data = await getPublishedNewsletters();
				if (isMounted) setIssues(data);
			} catch (err) {
				if (isMounted) setError(getApiErrorMessage(err, 'Unable to load newsletters right now.'));
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
				title="Newsletters"
				subtitle="Monthly updates on digital accessibility trends, inclusion initiatives, and what's new at WinVinaya InfoSystems."
			/>

			<Box component="section" sx={{ pb: { xs: 8, md: 12 } }}>
				<Container maxWidth="lg">
					{loading && (
						<Stack alignItems="center" sx={{ py: 8 }}>
							<CircularProgress />
						</Stack>
					)}

					{!loading && error && <Alert severity="error">{error}</Alert>}

					{!loading && !error && issues.length === 0 && (
						<Stack alignItems="center" spacing={2} sx={{ py: 10, textAlign: 'center' }}>
							<MailOutline sx={{ fontSize: 56, color: 'text.disabled' }} />
							<Typography variant="h6" color="text.secondary">
								No newsletters published yet
							</Typography>
							<Typography variant="body2" color="text.secondary" sx={{ maxWidth: 420 }}>
								Check back soon — our latest updates and stories will appear here as soon as they're published.
							</Typography>
						</Stack>
					)}

					{!loading && !error && issues.length > 0 && (
						<Grid container spacing={4}>
							{issues.map((issue) => (
								<Grid key={issue.id} size={{ xs: 12, sm: 6, md: 4 }}>
									<NewsletterIssueCard issue={issue} />
								</Grid>
							))}
						</Grid>
					)}
				</Container>
			</Box>
		</MainLayout>
	);
};

export default Newsletter;
