import React from 'react';
import { Box, Container, Typography, Chip, useTheme, alpha } from '@mui/material';
import { ConstructionOutlined } from '@mui/icons-material';

interface ServiceExpertiseProps {
	tools: string[];
	accentColor: string;
}

const ServiceExpertise: React.FC<ServiceExpertiseProps> = ({ tools, accentColor }) => {
	const theme = useTheme();
	const baseColor = accentColor || theme.palette.primary.main;

	if (!tools || tools.length === 0) return null;

	return (
		<Box sx={{ py: { xs: 8, md: 10 }, bgcolor: 'background.light', borderTop: `1px solid ${theme.palette.divider}`, borderBottom: `1px solid ${theme.palette.divider}` }}>
			<Container maxWidth="md">
				<Box sx={{ textAlign: 'center', mb: 5 }}>
					<Box sx={{ display: 'inline-flex', p: 1.5, borderRadius: '50%', bgcolor: alpha(baseColor, 0.08), color: baseColor, mb: 2 }}>
						<ConstructionOutlined sx={{ fontSize: '2rem' }} />
					</Box>
					<Typography variant="h3" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: '1.75rem', md: '2.25rem' } }}>
						Technology Stack & Standards
					</Typography>
					<Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto', fontSize: '0.925rem', lineHeight: 1.6 }}>
						We employ industry-leading frameworks, cloud services, and standards to deliver secure, accessible, and high-performance solutions.
					</Typography>
				</Box>

				<Box
					sx={{
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'center',
						gap: 2,
						px: { xs: 2, md: 6 }
					}}
				>
					{tools.map((tool, index) => (
						<Chip
							key={index}
							label={tool}
							sx={{
								fontSize: { xs: '0.85rem', md: '0.95rem' },
								fontWeight: 705,
								py: 3,
								px: 2.5,
								borderRadius: 3,
								border: `1.5px solid ${alpha(baseColor, 0.15)}`,
								bgcolor: alpha(baseColor, 0.02),
								color: 'text.primary',
								boxShadow: 'none',
								transition: 'all 0.2s ease',
								'&:hover': {
									bgcolor: alpha(baseColor, 0.08),
									borderColor: baseColor,
									transform: 'translateY(-2px)'
								}
							}}
						/>
					))}
				</Box>
			</Container>
		</Box>
	);
};

export default ServiceExpertise;
