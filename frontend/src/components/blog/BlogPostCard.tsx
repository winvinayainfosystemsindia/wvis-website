import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { toMediaUrl } from '../../services/apiClient';
import { getReadingTime, getExcerpt } from '../../utils/readingTime';
import type { BlogPost } from '../../models/blog';

interface BlogPostCardProps {
	post: BlogPost;
}

const formatDate = (iso: string) =>
	new Date(iso).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
	return (
		<Box
			component={RouterLink}
			to={`/resources/blog/${post.slug}`}
			sx={{
				display: 'block',
				textDecoration: 'none',
				color: 'inherit',
				'&:hover img': { transform: 'scale(1.03)' },
				'&:hover .post-title': { color: 'primary.main' },
			}}
		>
			<Box sx={{ borderRadius: 2, overflow: 'hidden', mb: 2, bgcolor: 'action.hover' }}>
				<Box
					component="img"
					src={toMediaUrl(post.featured_image ?? '')}
					alt={post.title}
					sx={{ width: '100%', height: 180, objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
				/>
			</Box>

			<Typography
				variant="overline"
				sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 1.2, display: 'block', mb: 0.5, fontSize: '0.7rem' }}
			>
				{(post.category ?? 'Insights').toUpperCase()}
			</Typography>

			<Typography
				className="post-title"
				variant="subtitle1"
				sx={{
					fontWeight: 700,
					mb: 1,
					lineHeight: 1.35,
					fontSize: '1.05rem',
					transition: 'color 0.2s ease',
					display: '-webkit-box',
					WebkitLineClamp: 2,
					WebkitBoxOrient: 'vertical',
					overflow: 'hidden',
				}}
			>
				{post.title}
			</Typography>

			<Typography
				variant="body2"
				sx={{
					color: 'text.secondary',
					lineHeight: 1.6,
					mb: 1.25,
					display: '-webkit-box',
					WebkitLineClamp: 2,
					WebkitBoxOrient: 'vertical',
					overflow: 'hidden',
				}}
			>
				{getExcerpt(post.summary, post.content)}
			</Typography>

			<Stack direction="row" spacing={0.75} alignItems="center" sx={{ color: 'text.disabled' }}>
				<Typography variant="caption">{formatDate(post.created_at)}</Typography>
				<Typography variant="caption">·</Typography>
				<Typography variant="caption">{getReadingTime(post.content)}</Typography>
			</Stack>
		</Box>
	);
};

export default BlogPostCard;
