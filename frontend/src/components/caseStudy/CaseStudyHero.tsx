import React from 'react';
import { Box, Typography, Button, Grid, useTheme, alpha } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { toMediaUrl } from '../../services/apiClient';
import { getReadingTime, getExcerpt } from '../../utils/readingTime';
import type { CaseStudy } from '../../models/caseStudy';

interface CaseStudyHeroProps {
	caseStudy: CaseStudy;
}

const CaseStudyHero: React.FC<CaseStudyHeroProps> = ({ caseStudy }) => {
	const theme = useTheme();

	return (
		<Grid container spacing={{ xs: 4, md: 8 }} alignItems="stretch">
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
						CASE STUDY {caseStudy.industry ? `| ${caseStudy.industry.toUpperCase()}` : ''}
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
						{caseStudy.title}
					</Typography>

					<Box sx={{ borderBottom: '1px solid', borderColor: 'divider', my: 3 }} />

					<Grid container spacing={3} sx={{ mb: 3 }}>
						<Grid size={{ xs: 6 }}>
							<Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 700, letterSpacing: 1.5, display: 'block' }}>
								CLIENT
							</Typography>
							<Typography variant="body1" sx={{ fontWeight: 700, color: 'text.primary', mt: 0.5 }}>
								{caseStudy.client_name || 'Confidential'}
							</Typography>
						</Grid>
						<Grid size={{ xs: 6 }}>
							<Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 700, letterSpacing: 1.5, display: 'block' }}>
								READING TIME
							</Typography>
							<Typography variant="body1" sx={{ fontWeight: 700, color: 'text.primary', mt: 0.5 }}>
								{getReadingTime(caseStudy.content)}
							</Typography>
						</Grid>
					</Grid>

					<Box sx={{ borderLeft: '3px solid', borderColor: 'primary.main', pl: 3, my: 4 }}>
						<Typography variant="body1" sx={{ color: 'text.secondary', fontStyle: 'italic', lineHeight: 1.75, fontSize: '1.05rem' }}>
							{getExcerpt(caseStudy.summary, caseStudy.content, 220)}
						</Typography>
					</Box>

					<Box sx={{ mt: 4 }}>
						<Button
							component={RouterLink}
							to={`/resources/case-studies/${caseStudy.slug}`}
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

			<Grid size={{ xs: 12, md: 6 }}>
				<Box sx={{ position: 'relative', height: '100%', minHeight: { xs: 350, sm: 450, md: 550 } }}>
					<Box
						component="img"
						src={toMediaUrl(caseStudy.featured_image ?? '')}
						alt={caseStudy.title}
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
				</Box>
			</Grid>
		</Grid>
	);
};

export default CaseStudyHero;
