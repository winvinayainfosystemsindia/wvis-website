import React, { useCallback, useEffect, useState } from 'react';
import {
	Box,
	Stack,
	Typography,
	Table,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
	Chip,
	IconButton,
	Switch,
	Alert,
	CircularProgress,
	Tooltip,
} from '@mui/material';
import { Visibility, Delete } from '@mui/icons-material';
import AdminLayout from '../../layouts/AdminLayout';
import ContactDetailsDialog from '../../components/admin/ContactDetailsDialog';
import { listAllContacts, setContactProcessed, deleteContact } from '../../services/adminContactService';
import { getApiErrorMessage } from '../../services/apiClient';
import type { ContactResponse } from '../../models/contact';

const formatDate = (iso: string) => new Date(iso).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });

const ContactsManager: React.FC = () => {
	const [contacts, setContacts] = useState<ContactResponse[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [viewing, setViewing] = useState<ContactResponse | null>(null);
	const [busyId, setBusyId] = useState<number | null>(null);

	const fetchContacts = useCallback(async () => {
		setLoading(true);
		setError(null);
		try {
			const data = await listAllContacts();
			setContacts(data);
		} catch (err) {
			setError(getApiErrorMessage(err, 'Unable to load contact enquiries.'));
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		fetchContacts();
	}, [fetchContacts]);

	const handleToggleProcessed = async (contact: ContactResponse) => {
		setBusyId(contact.id);
		try {
			await setContactProcessed(contact.id, !contact.is_processed);
			await fetchContacts();
		} catch (err) {
			setError(getApiErrorMessage(err, 'Unable to update status.'));
		} finally {
			setBusyId(null);
		}
	};

	const handleDelete = async (contact: ContactResponse) => {
		if (!window.confirm(`Delete the enquiry from "${contact.full_name}"? This cannot be undone.`)) return;
		setBusyId(contact.id);
		try {
			await deleteContact(contact.id);
			await fetchContacts();
		} catch (err) {
			setError(getApiErrorMessage(err, 'Unable to delete enquiry.'));
		} finally {
			setBusyId(null);
		}
	};

	return (
		<AdminLayout>
			<Stack sx={{ mb: 4 }}>
				<Typography variant="h4" sx={{ fontWeight: 800 }}>
					Contact Enquiries
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Everything submitted through the public Contact Us form.
				</Typography>
			</Stack>

			{error && (
				<Alert severity="error" sx={{ mb: 3 }}>
					{error}
				</Alert>
			)}

			{loading ? (
				<Stack alignItems="center" sx={{ py: 8 }}>
					<CircularProgress />
				</Stack>
			) : contacts.length === 0 ? (
				<Alert severity="info">No contact enquiries yet.</Alert>
			) : (
				<Box sx={{ border: 1, borderColor: 'divider', borderRadius: 3, overflow: 'hidden', bgcolor: 'background.paper' }}>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>Name</TableCell>
								<TableCell>Email</TableCell>
								<TableCell>Subject</TableCell>
								<TableCell>Received</TableCell>
								<TableCell>Status</TableCell>
								<TableCell align="right">Actions</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{contacts.map((contact) => (
								<TableRow key={contact.id} hover>
									<TableCell sx={{ fontWeight: 600 }}>{contact.full_name}</TableCell>
									<TableCell>{contact.email}</TableCell>
									<TableCell>{contact.subject || 'General Enquiry'}</TableCell>
									<TableCell>{formatDate(contact.created_at)}</TableCell>
									<TableCell>
										<Stack direction="row" spacing={1} alignItems="center">
											<Switch
												size="small"
												checked={contact.is_processed}
												disabled={busyId === contact.id}
												onChange={() => handleToggleProcessed(contact)}
											/>
											<Chip
												size="small"
												label={contact.is_processed ? 'Reviewed' : 'New'}
												color={contact.is_processed ? 'success' : 'warning'}
												variant={contact.is_processed ? 'filled' : 'outlined'}
											/>
										</Stack>
									</TableCell>
									<TableCell align="right">
										<Tooltip title="View">
											<IconButton size="small" onClick={() => setViewing(contact)} disabled={busyId === contact.id}>
												<Visibility fontSize="small" />
											</IconButton>
										</Tooltip>
										<Tooltip title="Delete">
											<IconButton size="small" onClick={() => handleDelete(contact)} disabled={busyId === contact.id}>
												<Delete fontSize="small" />
											</IconButton>
										</Tooltip>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</Box>
			)}

			<ContactDetailsDialog contact={viewing} onClose={() => setViewing(null)} />
		</AdminLayout>
	);
};

export default ContactsManager;
