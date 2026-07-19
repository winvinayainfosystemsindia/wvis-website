import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Alert, CircularProgress, Typography, Stack, Button, MenuItem, Select, useTheme, alpha } from '@mui/material';
import { TrendingUp } from '@mui/icons-material';
import MainLayout from '../../components/layout/MainLayout';
import CaseStudyCard from '../../components/caseStudy/CaseStudyCard';
import CaseStudyHero from '../../components/caseStudy/CaseStudyHero';
import { getPublishedCaseStudies } from '../../services/caseStudyService';
import { getApiErrorMessage } from '../../services/apiClient';
import type { CaseStudy } from '../../models/caseStudy';

const CaseStudies: React.FC = () => {
	const theme = useTheme();
	const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [currentPage, setCurrentPage] = useState(1);
	const [sortBy, setSortBy] = useState<'newest' | 'oldest'>('newest');

	useEffect(() => {
		let isMounted = true;
		(async () => {
			try {
				const data = await getPublishedCaseStudies();
				if (isMounted) setCaseStudies(data);
			} catch (err) {
				if (isMounted) setError(getApiErrorMessage(err, 'Unable to load case studies right now.'));
			} finally {
				if (isMounted) setLoading(false);
			}
		})();
		return () => {
			isMounted = false;
		};
	}, []);

	useEffect(() => {
		setCurrentPage(1);
	}, [caseStudies, sortBy]);

	const featured = [...caseStudies].sort(
		(a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
	)[0];

	const archive = [...caseStudies].sort((a, b) => {
		const dateA = new Date(a.created_at).getTime();
		const dateB = new Date(b.created_at).getTime();
		return sortBy === 'newest' ? dateB - dateA : dateA - dateB;
	});

	const itemsPerPage = 6;
	const totalPages = Math.max(1, Math.ceil(archive.length / itemsPerPage));
	const startIndex = (currentPage - 1) * itemsPerPage;
	const paginatedCaseStudies = archive.slice(startIndex, startIndex + itemsPerPage);

	return (
		<MainLayout>
			{loading && (
				<Stack alignItems="center" justifyContent="center" sx={{ py: 20 }}>
					<CircularProgress />
				</Stack>
			)}

			{!loading && error && (
				<Container maxWidth="lg" sx={{ py: 10 }}>
					<Alert severity="error">{error}</Alert>
				</Container>
			)}

			{!loading && !error && caseStudies.length === 0 && (
				<Container maxWidth="sm" sx={{ py: { xs: 10, md: 14 } }}>
					<Stack
						alignItems="center"
						spacing={2}
						sx={{
							py: 8,
							px: 4,
							textAlign: 'center',
							borderRadius: 2,
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
							<TrendingUp sx={{ fontSize: 28, color: 'primary.main' }} />
						</Box>
						<Typography variant="h6" sx={{ fontWeight: 700 }}>
							No case studies published yet
						</Typography>
						<Typography variant="body2" color="text.secondary" sx={{ maxWidth: 380 }}>
							Check back soon — our client success stories will appear here as soon as they're published.
						</Typography>
					</Stack>
				</Container>
			)}

			{!loading && !error && caseStudies.length > 0 && featured && (
				<>
					<Box component="section" sx={{ pt: { xs: 6, md: 10 }, pb: { xs: 8, md: 12 } }}>
						<Container maxWidth="lg">
							<CaseStudyHero caseStudy={featured} />
						</Container>
					</Box>

					{archive.length > 0 && (
						<Box
							component="section"
							sx={{
								py: { xs: 8, md: 12 },
								bgcolor: 'background.light',
								position: 'relative',
								overflow: 'hidden',
								borderTop: `1px solid ${theme.palette.divider}`,
							}}
						>
							<Box
								sx={{
									position: 'absolute',
									top: '-10%',
									right: '-5%',
									width: 500,
									height: 500,
									borderRadius: '50%',
									background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.04)} 0%, transparent 65%)`,
									filter: 'blur(100px)',
									pointerEvents: 'none',
								}}
							/>

							<Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
								<Stack
									direction={{ xs: 'column', md: 'row' }}
									justifyContent="space-between"
									alignItems={{ xs: 'flex-start', md: 'flex-end' }}
									spacing={3}
									sx={{ mb: { xs: 6, md: 8 } }}
								>
									<Box>
										<Typography variant="h3" sx={{ fontWeight: 800, mb: 2.5, letterSpacing: '-0.02em', color: 'text.primary' }}>
											Success Stories
										</Typography>
										<Box sx={{ borderLeft: '3px solid', borderColor: 'primary.main', pl: 3, py: 0.5, maxWidth: 680 }}>
											<Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
												Real-world results from clients who partnered with WinVinaya to build more accessible, inclusive digital experiences.
											</Typography>
										</Box>
									</Box>

									<Stack direction="row" spacing={1} alignItems="center" sx={{ alignSelf: { xs: 'flex-start', md: 'flex-end' }, minWidth: 160 }}>
										<Typography variant="caption" sx={{ fontWeight: 700, color: 'text.secondary', letterSpacing: 1 }}>
											SORT BY
										</Typography>
										<Select
											value={sortBy}
											onChange={(e) => setSortBy(e.target.value as 'newest' | 'oldest')}
											variant="standard"
											disableUnderline
											sx={{
												fontWeight: 800,
												fontSize: '0.8rem',
												color: 'text.primary',
												textTransform: 'uppercase',
												cursor: 'pointer',
												'& .MuiSelect-select': { py: 0.5, pr: '20px !important' },
											}}
										>
											<MenuItem value="newest" sx={{ textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: 700 }}>Newest First</MenuItem>
											<MenuItem value="oldest" sx={{ textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: 700 }}>Oldest First</MenuItem>
										</Select>
									</Stack>
								</Stack>

								<Grid container spacing={4}>
									{paginatedCaseStudies.map((caseStudy) => (
										<Grid key={caseStudy.id} size={{ xs: 12, sm: 6, md: 4 }}>
											<CaseStudyCard caseStudy={caseStudy} />
										</Grid>
									))}
								</Grid>

								{totalPages > 1 && (
									<Stack direction="row" justifyContent="center" alignItems="center" spacing={3} sx={{ mt: 8, pt: 4, borderTop: '1px solid', borderColor: 'divider' }}>
										<Button
											disabled={currentPage === 1}
											onClick={() => setCurrentPage((prev) => prev - 1)}
											sx={{
												color: 'text.primary',
												fontWeight: 700,
												letterSpacing: 1.5,
												fontSize: '0.8rem',
												textTransform: 'uppercase',
												'&:hover': { bgcolor: 'transparent', color: 'primary.main' },
												'&.Mui-disabled': { color: 'text.disabled' },
											}}
										>
											&larr; Prev
										</Button>

										<Stack direction="row" spacing={1.5} alignItems="center">
											{Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
												const isActive = page === currentPage;
												return (
													<Box
														key={page}
														onClick={() => setCurrentPage(page)}
														sx={{
															cursor: 'pointer',
															px: 1.75,
															py: 0.75,
															fontWeight: 700,
															fontSize: '0.85rem',
															color: isActive ? 'primary.main' : 'text.secondary',
															border: isActive ? '1px solid' : '1px solid transparent',
															borderColor: isActive ? 'primary.main' : 'transparent',
															borderRadius: 1,
															transition: 'all 0.2s ease',
															bgcolor: isActive ? alpha(theme.palette.primary.main, 0.04) : 'transparent',
															'&:hover': { color: 'primary.main', bgcolor: alpha(theme.palette.primary.main, 0.02) },
														}}
													>
														{String(page).padStart(2, '0')}
													</Box>
												);
											})}
										</Stack>

										<Button
											disabled={currentPage === totalPages}
											onClick={() => setCurrentPage((prev) => prev + 1)}
											sx={{
												color: 'text.primary',
												fontWeight: 700,
												letterSpacing: 1.5,
												fontSize: '0.8rem',
												textTransform: 'uppercase',
												'&:hover': { bgcolor: 'transparent', color: 'primary.main' },
												'&.Mui-disabled': { color: 'text.disabled' },
											}}
										>
											Next &rarr;
										</Button>
									</Stack>
								)}
							</Container>
						</Box>
					)}
				</>
			)}
		</MainLayout>
	);
};

export default CaseStudies;
