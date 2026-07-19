import React from 'react';
import { Box, Typography } from '@mui/material';
import { PictureAsPdf } from '@mui/icons-material';
import { toMediaUrl } from '../../services/apiClient';
import type { MarketingPitch } from '../../models/marketingPitch';

interface MarketingPitchCardProps {
	pitch: MarketingPitch;
}

const formatDate = (iso: string) =>
	new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

const MarketingPitchCard: React.FC<MarketingPitchCardProps> = ({ pitch }) => {
	return (
		<Box
			component="a"
			href={toMediaUrl(pitch.pdf_path)}
			target="_blank"
			rel="noopener noreferrer"
			sx={{
				display: 'flex',
				flexDirection: 'column',
				height: '100%',
				textDecoration: 'none',
				color: 'inherit',
				'&:hover img': { transform: 'scale(1.04)' },
				'&:hover .pitch-title': { color: 'primary.main' },
				transition: 'all 0.3s ease',
			}}
		>
			<Box sx={{ borderRadius: 1.5, overflow: 'hidden', mb: 2.5, aspectRatio: '16/10', bgcolor: 'grey.100' }}>
				<Box
					component="img"
					src={toMediaUrl(pitch.cover_image_path)}
					alt={pitch.title}
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
					display: 'flex',
					alignItems: 'center',
					gap: 0.5,
					textTransform: 'uppercase',
					fontSize: '0.725rem',
				}}
			>
				<PictureAsPdf sx={{ fontSize: 14 }} /> PITCH DECK / {formatDate(pitch.published_date)}
			</Typography>

			<Typography
				className="pitch-title"
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
				{pitch.title}
			</Typography>

			{pitch.description && (
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
					{pitch.description}
				</Typography>
			)}
		</Box>
	);
};

export default MarketingPitchCard;
