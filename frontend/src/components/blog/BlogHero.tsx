import React from 'react';
import { Box, Typography, Stack, Button, useTheme, alpha } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { toMediaUrl } from '../../services/apiClient';
import { getReadingTime, getExcerpt } from '../../utils/readingTime';
import type { BlogPost } from '../../models/blog';

interface BlogHeroProps {
	post: BlogPost;
}

const formatDate = (iso: string) =>
	new Date(iso).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });

const BlogHero: React.FC<BlogHeroProps> = ({ post }) => {
	const theme = useTheme();

	return (
		<Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 4, md: 7 }} alignItems="center">
			<Box sx={{ flex: { md: '0 0 44%' }, order: { xs: 2, md: 1 } }}>
				<Typography
					variant="overline"
					sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2, mb: 2, display: 'block' }}
				>
					{(post.category ?? 'Insights').toUpperCase()}
				</Typography>

				<Typography
					variant="h3"
					component="h1"
					sx={{
						fontWeight: 800,
						mb: 2.5,
						lineHeight: 1.15,
						letterSpacing: '-0.02em',
						fontSize: { xs: '2rem', md: '2.75rem' },
					}}
				>
					{post.title}
				</Typography>

				<Typography sx={{ color: 'text.secondary', lineHeight: 1.75, mb: 3, fontSize: '1.05rem' }}>
					{getExcerpt(post.summary, post.content, 220)}
				</Typography>

				<Typography variant="body2" color="text.secondary" sx={{ mb: 3.5, fontWeight: 500 }}>
					{formatDate(post.created_at)} · {getReadingTime(post.content)}
				</Typography>

				<Button
					component={RouterLink}
					to={`/resources/blog/${post.slug}`}
					variant="outlined"
					endIcon={<ArrowForward />}
					sx={{
						px: 3.5,
						py: 1.25,
						borderRadius: 1,
						fontWeight: 700,
						textTransform: 'uppercase',
						letterSpacing: 1,
						fontSize: '0.8rem',
						borderWidth: 1.5,
						'&:hover': {
							borderWidth: 1.5,
							bgcolor: alpha(theme.palette.primary.main, 0.05),
						},
					}}
				>
					Read Article
				</Button>
			</Box>

			<Box sx={{ flex: { md: '0 0 52%' }, order: { xs: 1, md: 2 }, width: '100%' }}>
				<Box
					component="img"
					src={toMediaUrl(post.featured_image ?? '')}
					alt={post.title}
					sx={{
						width: '100%',
						height: { xs: 240, sm: 320, md: 400 },
						objectFit: 'cover',
						borderRadius: 3,
						boxShadow: `0 20px 50px ${alpha(theme.palette.common.black, 0.15)}`,
						display: 'block',
						bgcolor: 'action.hover',
					}}
				/>
			</Box>
		</Stack>
	);
};

export default BlogHero;
