import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Stack, alpha, useTheme } from '@mui/material';
import { PictureAsPdf, CalendarMonth } from '@mui/icons-material';
import { toMediaUrl } from '../../services/apiClient';
import type { NewsletterIssue } from '../../models/newsletter';

interface NewsletterIssueCardProps {
	issue: NewsletterIssue;
}

const formatDate = (iso: string) =>
	new Date(iso).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });

const NewsletterIssueCard: React.FC<NewsletterIssueCardProps> = ({ issue }) => {
	const theme = useTheme();

	return (
		<Card
			elevation={0}
			sx={{
				borderRadius: 4,
				overflow: 'hidden',
				border: '1px solid',
				borderColor: 'divider',
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				transition: 'all 0.3s ease',
				'&:hover': {
					transform: 'translateY(-5px)',
					boxShadow: `0 20px 40px ${alpha(theme.palette.primary.main, 0.08)}`,
					borderColor: 'primary.main',
				},
			}}
		>
			<CardMedia
				component="img"
				height="220"
				image={toMediaUrl(issue.cover_image_path)}
				alt={issue.title}
				sx={{ objectFit: 'cover' }}
			/>
			<CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
				<Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1.5, color: 'text.secondary' }}>
					<CalendarMonth fontSize="small" />
					<Typography variant="caption" sx={{ fontWeight: 600 }}>
						{formatDate(issue.published_date)}
					</Typography>
				</Stack>

				<Typography variant="h6" sx={{ fontWeight: 800, mb: 1.5, lineHeight: 1.3 }}>
					{issue.title}
				</Typography>

				{issue.description && (
					<Typography
						variant="body2"
						color="text.secondary"
						sx={{
							mb: 3,
							flexGrow: 1,
							display: '-webkit-box',
							WebkitLineClamp: 3,
							WebkitBoxOrient: 'vertical',
							overflow: 'hidden',
						}}
					>
						{issue.description}
					</Typography>
				)}

				<Button
					variant="outlined"
					startIcon={<PictureAsPdf />}
					href={toMediaUrl(issue.pdf_path)}
					target="_blank"
					rel="noopener noreferrer"
					sx={{ mt: 'auto', alignSelf: 'flex-start', borderRadius: 2 }}
				>
					Download PDF
				</Button>
			</CardContent>
		</Card>
	);
};

export default NewsletterIssueCard;
