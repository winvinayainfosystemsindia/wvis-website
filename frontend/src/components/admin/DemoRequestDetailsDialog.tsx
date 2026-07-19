import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Stack, Typography, Divider, Grid } from '@mui/material';
import type { DemoRequestResponse } from '../../models/demoRequest';

interface DemoRequestDetailsDialogProps {
	demoRequest: DemoRequestResponse | null;
	onClose: () => void;
}

const formatDateTime = (iso: string) => new Date(iso).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' });

const Field: React.FC<{ label: string; value: React.ReactNode }> = ({ label, value }) => (
	<Stack spacing={0.25}>
		<Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5 }}>
			{label}
		</Typography>
		<Typography variant="body2">{value || '—'}</Typography>
	</Stack>
);

const DemoRequestDetailsDialog: React.FC<DemoRequestDetailsDialogProps> = ({ demoRequest, onClose }) => {
	return (
		<Dialog open={Boolean(demoRequest)} onClose={onClose} maxWidth="sm" fullWidth>
			<DialogTitle sx={{ fontWeight: 800 }}>Demo Request</DialogTitle>
			{demoRequest && (
				<DialogContent>
					<Stack spacing={2.5} divider={<Divider />}>
						<Field label="Received" value={formatDateTime(demoRequest.created_at)} />
						<Grid container spacing={2}>
							<Grid size={{ xs: 6 }}>
								<Field label="Full Name" value={demoRequest.full_name} />
							</Grid>
							<Grid size={{ xs: 6 }}>
								<Field label="Work Email" value={demoRequest.work_email} />
							</Grid>
							<Grid size={{ xs: 6 }}>
								<Field label="Phone" value={demoRequest.phone} />
							</Grid>
							<Grid size={{ xs: 6 }}>
								<Field label="Job Title" value={demoRequest.job_title} />
							</Grid>
							<Grid size={{ xs: 6 }}>
								<Field label="Company" value={demoRequest.company_name} />
							</Grid>
							<Grid size={{ xs: 6 }}>
								<Field label="Company Size" value={demoRequest.company_size} />
							</Grid>
							<Grid size={{ xs: 6 }}>
								<Field label="Product Interest" value={demoRequest.product_interest} />
							</Grid>
							<Grid size={{ xs: 6 }}>
								<Field label="Preferred Date" value={demoRequest.preferred_date} />
							</Grid>
						</Grid>
						<Field
							label="Notes"
							value={<Typography variant="body2" sx={{ whiteSpace: 'pre-wrap' }}>{demoRequest.message || '—'}</Typography>}
						/>
					</Stack>
				</DialogContent>
			)}
			<DialogActions sx={{ px: 3, pb: 3 }}>
				<Button onClick={onClose}>Close</Button>
			</DialogActions>
		</Dialog>
	);
};

export default DemoRequestDetailsDialog;
