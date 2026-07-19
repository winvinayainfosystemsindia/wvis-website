import React from 'react';
import { Box, Typography, Button, Grid, useTheme, alpha } from '@mui/material';
import { toMediaUrl } from '../../services/apiClient';
import type { NewsletterIssue } from '../../models/newsletter';

interface LatestNewsletterFeatureProps {
	issue: NewsletterIssue;
}

const formatHeroDate = (iso: string) => {
	const d = new Date(iso);
	const day = String(d.getDate()).padStart(2, '0');
	const month = String(d.getMonth() + 1).padStart(2, '0');
	const year = d.getFullYear();
	return `${day}.${month}.${year}`;
};

const getReadingTime = (description: string | null) => {
	if (!description) return '5 min read';
	const words = description.trim().split(/\s+/).length;
	const time = Math.max(3, Math.ceil(words / 150));
	return `${time + 2} min read`;
};

const LatestNewsletterFeature: React.FC<LatestNewsletterFeatureProps> = ({ issue }) => {
	const theme = useTheme();

	return (
		<Grid container spacing={{ xs: 4, md: 8 }} alignItems="stretch">
			{/* Left Column: Details */}
			<Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
				<Box>
					<Typography
						variant="overline"
						sx={{
							color: 'primary.main',
							fontWeight: 700,
							letterSpacing: 2,
							mb: 1.5,
							display: 'block',
							fontSize: '0.8rem',
						}}
					>
						NEW ISSUE | DIGITAL ACCESSIBILITY
					</Typography>

					<Typography
						variant="h1"
						sx={{
							fontWeight: 800,
							mb: 3,
							lineHeight: 1.15,
							letterSpacing: '-0.02em',
							color: 'text.primary',
							fontSize: { xs: '2.25rem', sm: '2.75rem', md: '3.5rem' },
						}}
					>
						{issue.title}
					</Typography>

					<Box sx={{ borderBottom: '1px solid', borderColor: 'divider', my: 3 }} />

					<Grid container spacing={3} sx={{ mb: 3 }}>
						<Grid size={{ xs: 6 }}>
							<Typography
								variant="caption"
								sx={{
									color: 'text.secondary',
									fontWeight: 700,
									letterSpacing: 1.5,
									display: 'block',
								}}
							>
								PUBLISHED
							</Typography>
							<Typography variant="body1" sx={{ fontWeight: 700, color: 'text.primary', mt: 0.5 }}>
								{formatHeroDate(issue.published_date)}
							</Typography>
						</Grid>
						<Grid size={{ xs: 6 }}>
							<Typography
								variant="caption"
								sx={{
									color: 'text.secondary',
									fontWeight: 700,
									letterSpacing: 1.5,
									display: 'block',
								}}
							>
								READING TIME
							</Typography>
							<Typography variant="body1" sx={{ fontWeight: 700, color: 'text.primary', mt: 0.5 }}>
								{getReadingTime(issue.description)}
							</Typography>
						</Grid>
					</Grid>

					{issue.description && (
						<Box
							sx={{
								borderLeft: '3px solid',
								borderColor: 'primary.main',
								pl: 3,
								my: 4,
							}}
						>
							<Typography
								variant="body1"
								sx={{
									color: 'text.secondary',
									fontStyle: 'italic',
									lineHeight: 1.75,
									fontSize: '1.05rem',
								}}
							>
								{issue.description}
							</Typography>
						</Box>
					)}

					<Box sx={{ mt: 4 }}>
						<Button
							component="a"
							href={toMediaUrl(issue.pdf_path)}
							target="_blank"
							rel="noopener noreferrer"
							variant="contained"
							sx={{
								bgcolor: 'text.primary',
								color: 'background.paper',
								px: 4.5,
								py: 1.75,
								borderRadius: 1,
								fontWeight: 700,
								textTransform: 'uppercase',
								letterSpacing: 1.5,
								fontSize: '0.85rem',
								boxShadow: 'none',
								'&:hover': {
									bgcolor: 'primary.main',
									transform: 'translateY(-2px)',
									boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.25)}`,
								},
								transition: 'all 0.3s ease',
							}}
						>
							Read the Full Story
						</Button>
					</Box>
				</Box>
			</Grid>

			{/* Right Column: Image */}
			<Grid size={{ xs: 12, md: 6 }}>
				<Box sx={{ position: 'relative', height: '100%', minHeight: { xs: 350, sm: 450, md: 550 } }}>
					<Box
						component="img"
						src={toMediaUrl(issue.cover_image_path)}
						alt={issue.title}
						sx={{
							width: '100%',
							height: '100%',
							maxHeight: { xs: 450, md: 600 },
							objectFit: 'cover',
							borderRadius: 2,
							boxShadow: `0 24px 64px ${alpha(theme.palette.common.black, 0.08)}`,
							display: 'block',
						}}
					/>

					{/* Translucent overlay caption */}
					<Box
						sx={{
							position: 'absolute',
							bottom: 24,
							right: 24,
							left: { xs: 24, sm: 'auto' },
							bgcolor: 'rgba(7, 6, 36, 0.85)',
							color: 'common.white',
							p: 2.5,
							backdropFilter: 'blur(8px)',
							borderRadius: 1,
							borderLeft: '4px solid',
							borderColor: 'primary.main',
							maxWidth: { sm: 340 },
							boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
						}}
					>
						<Typography
							variant="caption"
							sx={{
								display: 'block',
								color: 'primary.light',
								fontWeight: 700,
								mb: 0.5,
								letterSpacing: 1,
								fontSize: '0.7rem',
								textTransform: 'uppercase',
							}}
						>
							Featured Cover
						</Typography>
						<Typography variant="body2" sx={{ display: 'block', opacity: 0.9, lineHeight: 1.4, fontWeight: 500 }}>
							Visual preview for {issue.title}
						</Typography>
					</Box>
				</Box>
			</Grid>
		</Grid>
	);
};

export default LatestNewsletterFeature;
