import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Stack, Typography, Divider } from '@mui/material';
import type { ContactResponse } from '../../models/contact';

interface ContactDetailsDialogProps {
	contact: ContactResponse | null;
	onClose: () => void;
}

const formatDateTime = (iso: string) => new Date(iso).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' });

const Field: React.FC<{ label: string; value: React.ReactNode }> = ({ label, value }) => (
	<Stack spacing={0.25}>
		<Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5 }}>
			{label}
		</Typography>
		<Typography variant="body2">{value}</Typography>
	</Stack>
);

const ContactDetailsDialog: React.FC<ContactDetailsDialogProps> = ({ contact, onClose }) => {
	return (
		<Dialog open={Boolean(contact)} onClose={onClose} maxWidth="sm" fullWidth>
			<DialogTitle sx={{ fontWeight: 800 }}>Contact Enquiry</DialogTitle>
			{contact && (
				<DialogContent>
					<Stack spacing={2.5} divider={<Divider />}>
						<Field label="Received" value={formatDateTime(contact.created_at)} />
						<Field label="Full Name" value={contact.full_name} />
						<Field label="Email" value={contact.email} />
						<Field label="Subject" value={contact.subject || 'General Enquiry'} />
						<Field label="Message" value={<Typography variant="body2" sx={{ whiteSpace: 'pre-wrap' }}>{contact.message}</Typography>} />
					</Stack>
				</DialogContent>
			)}
			<DialogActions sx={{ px: 3, pb: 3 }}>
				<Button onClick={onClose}>Close</Button>
			</DialogActions>
		</Dialog>
	);
};

export default ContactDetailsDialog;
