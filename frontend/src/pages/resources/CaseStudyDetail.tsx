import React, { useEffect, useState } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { Box, Container, Typography, Stack, Alert, CircularProgress, Button, Chip, alpha, useTheme } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import DOMPurify from 'dompurify';
import MainLayout from '../../components/layout/MainLayout';
import { getCaseStudyBySlug } from '../../services/caseStudyService';
import { toMediaUrl, getApiErrorMessage } from '../../services/apiClient';
import { getReadingTime } from '../../utils/readingTime';
import type { CaseStudy } from '../../models/caseStudy';

const formatDate = (iso: string) =>
	new Date(iso).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });

const CaseStudyDetail: React.FC = () => {
	const { slug } = useParams<{ slug: string }>();
	const theme = useTheme();
	const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (!slug) return;
		let isMounted = true;
		(async () => {
			setLoading(true);
			setError(null);
			try {
				const data = await getCaseStudyBySlug(slug);
				if (isMounted) setCaseStudy(data);
			} catch (err) {
				if (isMounted) setError(getApiErrorMessage(err, 'This case study could not be found.'));
			} finally {
				if (isMounted) setLoading(false);
			}
		})();
		return () => {
			isMounted = false;
		};
	}, [slug]);

	if (loading) {
		return (
			<MainLayout>
				<Stack alignItems="center" sx={{ py: 10 }}>
					<CircularProgress />
				</Stack>
			</MainLayout>
		);
	}

	if (error || !caseStudy) {
		return (
			<MainLayout>
				<Container maxWidth="sm" sx={{ py: 10 }}>
					<Alert severity="error" sx={{ mb: 3 }}>
						{error ?? 'Case study not found.'}
					</Alert>
					<Button component={RouterLink} to="/resources/case-studies" startIcon={<ArrowBack />}>
						Back to Case Studies
					</Button>
				</Container>
			</MainLayout>
		);
	}

	return (
		<MainLayout>
			<Box component="article" sx={{ py: { xs: 5, md: 8 } }}>
				<Container maxWidth="md">
					<Button
						component={RouterLink}
						to="/resources/case-studies"
						startIcon={<ArrowBack />}
						sx={{ mb: 3, color: 'text.secondary', fontWeight: 600 }}
					>
						Back to Case Studies
					</Button>

					<Typography
						variant="overline"
						sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2, mb: 1.5, display: 'block' }}
					>
						{(caseStudy.industry ?? 'Case Study').toUpperCase()}
					</Typography>

					<Typography
						variant="h3"
						component="h1"
						sx={{ fontWeight: 800, mb: 2, lineHeight: 1.2, fontSize: { xs: '2rem', md: '2.75rem' } }}
					>
						{caseStudy.title}
					</Typography>

					<Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 4, flexWrap: 'wrap', gap: 1 }}>
						<Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
							{formatDate(caseStudy.created_at)} · {getReadingTime(caseStudy.content)}
						</Typography>
						{caseStudy.client_name && (
							<Chip size="small" label={`Client: ${caseStudy.client_name}`} sx={{ fontWeight: 600 }} />
						)}
					</Stack>

					{caseStudy.featured_image && (
						<Box
							component="img"
							src={toMediaUrl(caseStudy.featured_image)}
							alt={caseStudy.title}
							sx={{
								width: '100%',
								maxHeight: 480,
								objectFit: 'cover',
								borderRadius: 3,
								mb: 5,
								boxShadow: `0 20px 50px ${alpha(theme.palette.common.black, 0.12)}`,
							}}
						/>
					)}

					<Box
						sx={{
							fontSize: '1.05rem',
							lineHeight: 1.9,
							color: 'text.primary',
							'& p': { mb: 2.5 },
							'& h2': { fontWeight: 800, fontSize: '1.5rem', mt: 4, mb: 2 },
							'& h3': { fontWeight: 700, fontSize: '1.25rem', mt: 3, mb: 1.5 },
							'& ul, & ol': { mb: 2.5, pl: 3 },
							'& li': { mb: 1 },
							'& blockquote': {
								borderLeft: '4px solid',
								borderColor: 'primary.main',
								bgcolor: alpha(theme.palette.primary.main, 0.04),
								pl: 3,
								py: 1.5,
								my: 3,
								fontStyle: 'italic',
								color: 'text.secondary',
							},
							'& a': { color: 'primary.main', fontWeight: 600 },
							'& strong': { fontWeight: 700 },
						}}
						dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(caseStudy.content) }}
					/>
				</Container>
			</Box>
		</MainLayout>
	);
};

export default CaseStudyDetail;
