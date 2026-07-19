import React, { useEffect, useMemo, useState } from 'react';
import { Box, Container, Grid, Alert, CircularProgress, Typography, Stack, Pagination, useTheme, alpha } from '@mui/material';
import { Article as ArticleIcon } from '@mui/icons-material';
import MainLayout from '../../components/layout/MainLayout';
import BlogHero from '../../components/blog/BlogHero';
import BlogPostCard from '../../components/blog/BlogPostCard';
import WeeklyBriefCard from '../../components/blog/WeeklyBriefCard';
import MustReadList from '../../components/blog/MustReadList';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { fetchBlogsPublic } from '../../store/blogSlice';

const ALL_LABEL = 'All';
const POSTS_PER_PAGE = 6;

const Blog: React.FC = () => {
	const theme = useTheme();
	const dispatch = useAppDispatch();
	const posts = useAppSelector((state) => state.blogs.publicItems);
	const status = useAppSelector((state) => state.blogs.publicStatus);
	const error = useAppSelector((state) => state.blogs.publicError);
	const loading = status === 'idle' || status === 'loading';
	const [activeCategory, setActiveCategory] = useState(ALL_LABEL);
	const [page, setPage] = useState(1);

	useEffect(() => {
		dispatch(fetchBlogsPublic());
	}, [dispatch]);

	const featured = posts[0];
	const mustRead = posts.slice(1, 4);

	const categories = useMemo(
		() => [ALL_LABEL, ...Array.from(new Set(posts.map((p) => p.category).filter((c): c is string => Boolean(c))))],
		[posts]
	);

	const filtered = useMemo(
		() => (activeCategory === ALL_LABEL ? posts : posts.filter((p) => p.category === activeCategory)),
		[posts, activeCategory]
	);

	const pageCount = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE));
	const pagedPosts = filtered.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

	const handleCategoryChange = (category: string) => {
		setActiveCategory(category);
		setPage(1);
	};

	return (
		<MainLayout>
			{loading && (
				<Stack alignItems="center" sx={{ py: 10 }}>
					<CircularProgress />
				</Stack>
			)}

			{!loading && error && (
				<Container maxWidth="lg" sx={{ py: 8 }}>
					<Alert severity="error">{error}</Alert>
				</Container>
			)}

			{!loading && !error && posts.length === 0 && (
				<Container maxWidth="sm" sx={{ py: { xs: 10, md: 14 } }}>
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
							<ArticleIcon sx={{ fontSize: 28, color: 'primary.main' }} />
						</Box>
						<Typography variant="h6" sx={{ fontWeight: 700 }}>
							No articles published yet
						</Typography>
						<Typography variant="body2" color="text.secondary" sx={{ maxWidth: 380 }}>
							Check back soon — our latest insights and stories will appear here as soon as they're published.
						</Typography>
					</Stack>
				</Container>
			)}

			{!loading && !error && featured && (
				<>
					<Box component="section" sx={{ pt: { xs: 5, md: 8 }, pb: { xs: 6, md: 8 } }}>
						<Container maxWidth="lg">
							<BlogHero post={featured} />
						</Container>
					</Box>

					<Box component="section" sx={{ pb: { xs: 8, md: 12 } }}>
						<Container maxWidth="lg">
							<Grid container spacing={{ xs: 6, md: 6 }}>
								<Grid size={{ xs: 12, md: 8 }}>
									<Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1 }}>
										<Typography variant="h5" sx={{ fontWeight: 800 }}>
											Latest Despatches
										</Typography>
									</Stack>

									{categories.length > 1 && (
										<Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 4 }}>
											{categories.map((category) => {
												const isActive = activeCategory === category;
												return (
													<Box
														key={category}
														onClick={() => handleCategoryChange(category)}
														sx={{
															px: 2,
															py: 0.6,
															borderRadius: '100px',
															cursor: 'pointer',
															border: '1.5px solid',
															borderColor: isActive ? 'primary.main' : theme.palette.divider,
															bgcolor: isActive ? alpha(theme.palette.primary.main, 0.08) : 'transparent',
															transition: 'all 0.2s ease',
															'&:hover': { borderColor: 'primary.main' },
														}}
													>
														<Typography
															sx={{
																fontSize: '0.8rem',
																fontWeight: 600,
																color: isActive ? 'primary.main' : 'text.secondary',
															}}
														>
															{category}
														</Typography>
													</Box>
												);
											})}
										</Stack>
									)}

									{pagedPosts.length === 0 ? (
										<Alert severity="info">No articles in this category yet.</Alert>
									) : (
										<Grid container spacing={4}>
											{pagedPosts.map((post) => (
												<Grid key={post.id} size={{ xs: 12, sm: 6 }}>
													<BlogPostCard post={post} />
												</Grid>
											))}
										</Grid>
									)}

									{pageCount > 1 && (
										<Stack alignItems="center" sx={{ mt: 5 }}>
											<Pagination
												count={pageCount}
												page={page}
												onChange={(_, value) => setPage(value)}
												color="primary"
												shape="rounded"
											/>
										</Stack>
									)}
								</Grid>

								<Grid size={{ xs: 12, md: 4 }}>
									<Stack spacing={4} sx={{ position: { md: 'sticky' }, top: { md: 96 } }}>
										<WeeklyBriefCard />
										<MustReadList posts={mustRead} />
									</Stack>
								</Grid>
							</Grid>
						</Container>
					</Box>
				</>
			)}
		</MainLayout>
	);
};

export default Blog;
