import React from 'react';
import { Box, Typography, Stack, alpha, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { getReadingTime } from '../../utils/readingTime';
import type { BlogPost } from '../../models/blog';

interface MustReadListProps {
	posts: BlogPost[];
}

const MustReadList: React.FC<MustReadListProps> = ({ posts }) => {
	const theme = useTheme();

	if (posts.length === 0) return null;

	return (
		<Box sx={{ border: `1px solid ${alpha(theme.palette.divider, 0.8)}`, borderRadius: 3, p: 3 }}>
			<Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 1.5, mb: 2, display: 'block' }}>
				Must Read
			</Typography>

			<Stack spacing={2.5} divider={<Box sx={{ borderBottom: `1px solid ${alpha(theme.palette.divider, 0.6)}` }} />}>
				{posts.map((post, index) => (
					<Stack
						key={post.id}
						component={RouterLink}
						to={`/resources/blog/${post.slug}`}
						direction="row"
						spacing={1.5}
						sx={{ textDecoration: 'none', color: 'inherit', '&:hover .must-read-title': { color: 'primary.main' } }}
					>
						<Typography sx={{ fontWeight: 800, fontSize: '1.1rem', color: alpha(theme.palette.text.primary, 0.2), lineHeight: 1.3 }}>
							{String(index + 1).padStart(2, '0')}
						</Typography>
						<Box>
							<Typography
								className="must-read-title"
								sx={{ fontWeight: 700, fontSize: '0.9rem', lineHeight: 1.35, mb: 0.5, transition: 'color 0.2s ease' }}
							>
								{post.title}
							</Typography>
							<Typography variant="caption" color="text.secondary">
								{(post.category ?? 'Insights')} · {getReadingTime(post.content)}
							</Typography>
						</Box>
					</Stack>
				))}
			</Stack>
		</Box>
	);
};

export default MustReadList;
