import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { toMediaUrl } from '../../services/apiClient';
import { getReadingTime, getExcerpt } from '../../utils/readingTime';
import type { CaseStudy } from '../../models/caseStudy';

interface CaseStudyCardProps {
	caseStudy: CaseStudy;
}

const formatDate = (iso: string) =>
	new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy }) => {
	return (
		<Box
			component={RouterLink}
			to={`/resources/case-studies/${caseStudy.slug}`}
			sx={{
				display: 'flex',
				flexDirection: 'column',
				height: '100%',
				textDecoration: 'none',
				color: 'inherit',
				'&:hover img': { transform: 'scale(1.04)' },
				'&:hover .case-study-title': { color: 'primary.main' },
				transition: 'all 0.3s ease',
			}}
		>
			<Box sx={{ borderRadius: 1.5, overflow: 'hidden', mb: 2.5, aspectRatio: '16/10', bgcolor: 'grey.100' }}>
				<Box
					component="img"
					src={toMediaUrl(caseStudy.featured_image ?? '')}
					alt={caseStudy.title}
					sx={{
						width: '100%',
						height: '100%',
						objectFit: 'cover',
						display: 'block',
						transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
					}}
				/>
			</Box>

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
				{(caseStudy.industry ?? 'Case Study').toUpperCase()} / {formatDate(caseStudy.created_at)} · {getReadingTime(caseStudy.content)}
			</Typography>

			<Typography
				className="case-study-title"
				variant="h5"
				sx={{
					fontWeight: 800,
					mb: 1,
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
				{caseStudy.title}
			</Typography>

			{caseStudy.client_name && (
				<Typography variant="body2" sx={{ fontWeight: 700, color: 'text.secondary', mb: 1 }}>
					{caseStudy.client_name}
				</Typography>
			)}

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
				{getExcerpt(caseStudy.summary, caseStudy.content)}
			</Typography>
		</Box>
	);
};

export default CaseStudyCard;
