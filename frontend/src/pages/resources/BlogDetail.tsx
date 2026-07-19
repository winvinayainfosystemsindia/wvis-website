import React, { useEffect } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { Box, Container, Typography, Stack, Alert, CircularProgress, Button, alpha, useTheme } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import DOMPurify from 'dompurify';
import MainLayout from '../../components/layout/MainLayout';
import { toMediaUrl } from '../../services/apiClient';
import { getReadingTime } from '../../utils/readingTime';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { fetchBlogBySlug, clearBlogDetail } from '../../store/blogSlice';

const formatDate = (iso: string) =>
	new Date(iso).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });

const BlogDetail: React.FC = () => {
	const { slug } = useParams<{ slug: string }>();
	const theme = useTheme();
	const dispatch = useAppDispatch();
	const post = useAppSelector((state) => state.blogs.publicDetail);
	const status = useAppSelector((state) => state.blogs.publicDetailStatus);
	const error = useAppSelector((state) => state.blogs.publicDetailError);
	const loading = status === 'idle' || status === 'loading';

	useEffect(() => {
		if (!slug) return;
		dispatch(fetchBlogBySlug(slug));
		return () => {
			dispatch(clearBlogDetail());
		};
	}, [slug, dispatch]);

	if (loading) {
		return (
			<MainLayout>
				<Stack alignItems="center" sx={{ py: 10 }}>
					<CircularProgress />
				</Stack>
			</MainLayout>
		);
	}

	if (error || !post) {
		return (
			<MainLayout>
				<Container maxWidth="sm" sx={{ py: 10 }}>
					<Alert severity="error" sx={{ mb: 3 }}>
						{error ?? 'Article not found.'}
					</Alert>
					<Button component={RouterLink} to="/resources/blog" startIcon={<ArrowBack />}>
						Back to Blog
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
						to="/resources/blog"
						startIcon={<ArrowBack />}
						sx={{ mb: 3, color: 'text.secondary', fontWeight: 600 }}
					>
						Back to Blog
					</Button>

					<Typography
						variant="overline"
						sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2, mb: 1.5, display: 'block' }}
					>
						{(post.category ?? 'Insights').toUpperCase()}
					</Typography>

					<Typography
						variant="h3"
						component="h1"
						sx={{ fontWeight: 800, mb: 2, lineHeight: 1.2, fontSize: { xs: '2rem', md: '2.75rem' } }}
					>
						{post.title}
					</Typography>

					<Typography variant="body2" color="text.secondary" sx={{ mb: 4, fontWeight: 500 }}>
						{formatDate(post.created_at)} · {getReadingTime(post.content)}
					</Typography>

					{post.featured_image && (
						<Box
							component="img"
							src={toMediaUrl(post.featured_image)}
							alt={post.title}
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
						dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}
					/>
				</Container>
			</Box>
		</MainLayout>
	);
};

export default BlogDetail;
