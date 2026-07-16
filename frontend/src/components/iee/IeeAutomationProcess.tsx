import React from 'react';
import { Box, Container, Typography, Stack, Grid, useTheme, Paper, alpha } from '@mui/material';
import InvoiceAutomationFlow from './InvoiceAutomationFlow';
import { Terminal, NotificationsActive, Speed } from '@mui/icons-material';

const IeeAutomationProcess: React.FC = () => {
	const theme = useTheme();

	return (
		<Box sx={{ py: 15, bgcolor: '#fcfdff' }}>
			<Container maxWidth="lg">
				<Box textAlign="center" mb={8}>
					<Typography variant="h2" sx={{ fontWeight: 600, mb: 3 }}>
						Distributed Processing Pipeline
					</Typography>
					<Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto', fontWeight: 400 }}>
						High-performance Celery workers process your bulk folders asynchronously, ensuring scalability for enterprise-grade workloads.
					</Typography>
				</Box>

				{/* Automation Flow Visual */}
				<Box sx={{ mb: 10 }}>
					<InvoiceAutomationFlow />
				</Box>

				<Grid container spacing={4}>
					<Grid size={{ xs: 12, md: 4 }}>
						<Paper elevation={0} sx={{ p: 4, borderRadius: 3, bgcolor: alpha(theme.palette.primary.main, 0.03), border: '1px solid', borderColor: alpha(theme.palette.primary.main, 0.05) }}>
							<Stack spacing={2}>
								<Terminal color="primary" />
								<Typography variant="h6" fontWeight={700}>Celery Backend</Typography>
								<Typography variant="body2" color="text.secondary">
									Our distributed worker architecture ensures that even massive batch uploads are processed without lag or downtime.
								</Typography>
							</Stack>
						</Paper>
					</Grid>
					<Grid size={{ xs: 12, md: 4 }}>
						<Paper elevation={0} sx={{ p: 4, borderRadius: 3, bgcolor: alpha(theme.palette.primary.main, 0.03), border: '1px solid', borderColor: alpha(theme.palette.primary.main, 0.05) }}>
							<Stack spacing={2}>
								<Speed color="primary" />
								<Typography variant="h6" fontWeight={700}>Batch Excellence</Typography>
								<Typography variant="body2" color="text.secondary">
									Upload entire directories. Our system classifies cada document, extracts items, and prepares them for final human review.
								</Typography>
							</Stack>
						</Paper>
					</Grid>
					<Grid size={{ xs: 12, md: 4 }}>
						<Paper elevation={0} sx={{ p: 4, borderRadius: 3, bgcolor: alpha(theme.palette.primary.main, 0.03), border: '1px solid', borderColor: alpha(theme.palette.primary.main, 0.05) }}>
							<Stack spacing={2}>
								<NotificationsActive color="primary" />
								<Typography variant="h6" fontWeight={700}>Email Insight</Typography>
								<Typography variant="body2" color="text.secondary">
									No need to wait. Close your browser and we'll notify you the moment your extraction results are ready for download.
								</Typography>
							</Stack>
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default IeeAutomationProcess;
