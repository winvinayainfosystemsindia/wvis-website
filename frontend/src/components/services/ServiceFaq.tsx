import React from 'react';
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails, useTheme, alpha } from '@mui/material';
import { ExpandMore, HelpOutline } from '@mui/icons-material';

interface FaqItem {
	question: string;
	answer: string;
}

interface ServiceFaqProps {
	faqs: FaqItem[];
	accentColor: string;
}

const ServiceFaq: React.FC<ServiceFaqProps> = ({ faqs, accentColor }) => {
	const theme = useTheme();
	const baseColor = accentColor || theme.palette.primary.main;

	if (!faqs || faqs.length === 0) return null;

	return (
		<Box sx={{ py: { xs: 8, md: 10 }, bgcolor: 'background.default' }}>
			<Container maxWidth="md">
				<Box sx={{ textAlign: 'center', mb: 6 }}>
					<Box sx={{ display: 'inline-flex', p: 1.5, borderRadius: '50%', bgcolor: alpha(baseColor, 0.08), color: baseColor, mb: 2 }}>
						<HelpOutline sx={{ fontSize: '2rem' }} />
					</Box>
					<Typography variant="h3" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: '1.75rem', md: '2.25rem' } }}>
						Frequently Asked Questions
					</Typography>
					<Typography variant="body1" color="text.secondary" sx={{ fontSize: '0.925rem' }}>
						Have questions about this service? Here are answers to common queries from our clients.
					</Typography>
				</Box>

				<Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
					{faqs.map((faq, index) => (
						<Accordion
							key={index}
							elevation={0}
							disableGutters
							sx={{
								borderRadius: 3,
								border: `1px solid ${theme.palette.divider}`,
								'&::before': { display: 'none' }, // Remove default line separator
								bgcolor: 'background.paper',
								overflow: 'hidden',
								transition: 'all 0.3s ease',
								'&:hover': {
									borderColor: baseColor,
									boxShadow: `0 8px 20px ${alpha(baseColor, 0.03)}`
								}
							}}
						>
							<AccordionSummary
								expandIcon={<ExpandMore sx={{ color: baseColor }} />}
								sx={{
									px: 3,
									py: 1,
									'&.Mui-expanded': {
										borderBottom: `1px solid ${theme.palette.divider}`,
										bgcolor: alpha(baseColor, 0.01)
									}
								}}
							>
								<Typography sx={{ fontWeight: 750, color: 'text.primary', fontSize: '0.975rem' }}>
									{faq.question}
								</Typography>
							</AccordionSummary>
							<AccordionDetails sx={{ p: 3, bgcolor: 'background.paper' }}>
								<Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, fontSize: '0.875rem' }}>
									{faq.answer}
								</Typography>
							</AccordionDetails>
						</Accordion>
					))}
				</Box>
			</Container>
		</Box>
	);
};

export default ServiceFaq;
