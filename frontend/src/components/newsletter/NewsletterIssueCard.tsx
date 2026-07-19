import React from 'react';
import { Box, Typography } from '@mui/material';
import { toMediaUrl } from '../../services/apiClient';
import type { NewsletterIssue } from '../../models/newsletter';

interface NewsletterIssueCardProps {
	issue: NewsletterIssue;
}

const formatDate = (iso: string) =>
	new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

const getReadingTime = (description: string | null) => {
	if (!description) return '5 min read';
	const words = description.trim().split(/\s+/).length;
	const time = Math.max(3, Math.ceil(words / 150));
	return `${time + 2} min read`;
};

const NewsletterIssueCard: React.FC<NewsletterIssueCardProps> = ({ issue }) => {
	const readingTime = getReadingTime(issue.description);

	return (
		<Box
			component="a"
			href={toMediaUrl(issue.pdf_path)}
			target="_blank"
			rel="noopener noreferrer"
			sx={{
				display: 'flex',
				flexDirection: 'column',
				height: '100%',
				textDecoration: 'none',
				color: 'inherit',
				'&:hover img': { transform: 'scale(1.04)' },
				'&:hover .issue-title': { color: 'primary.main' },
				transition: 'all 0.3s ease',
			}}
		>
			{/* Card Image */}
			<Box sx={{ borderRadius: 1.5, overflow: 'hidden', mb: 2.5, aspectRatio: '16/10', bgcolor: 'grey.100' }}>
				<Box
					component="img"
					src={toMediaUrl(issue.cover_image_path)}
					alt={issue.title}
					sx={{
						width: '100%',
						height: '100%',
						objectFit: 'cover',
						display: 'block',
						transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
					}}
				/>
			</Box>

			{/* Metadata Row */}
			<Typography
				variant="caption"
				sx={{
					color: 'primary.main',
					fontWeight: 700,
					letterSpacing: 1.5,
					mb: 1,
					display: 'block',
					textTransform: 'uppercase',
					fontSize: '0.725rem',
				}}
			>
				ACCESSIBILITY / {formatDate(issue.published_date)} • {readingTime}
			</Typography>

			{/* Title */}
			<Typography
				className="issue-title"
				variant="h5"
				sx={{
					fontWeight: 800,
					mb: 1.5,
					lineHeight: 1.3,
					fontSize: '1.25rem',
					color: 'text.primary',
					transition: 'color 0.2s ease',
					display: '-webkit-box',
					WebkitLineClamp: 2,
					WebkitBoxOrient: 'vertical',
					overflow: 'hidden',
				}}
			>
				{issue.title}
			</Typography>

			{/* Description Excerpt */}
			{issue.description && (
				<Typography
					variant="body2"
					sx={{
						color: 'text.secondary',
						lineHeight: 1.6,
						display: '-webkit-box',
						WebkitLineClamp: 3,
						WebkitBoxOrient: 'vertical',
						overflow: 'hidden',
						opacity: 0.85,
					}}
				>
					{issue.description}
				</Typography>
			)}
		</Box>
	);
};

export default NewsletterIssueCard;
