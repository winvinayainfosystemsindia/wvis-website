import React, { useCallback, useEffect, useState } from 'react';
import {
	Box,
	Stack,
	Typography,
	Button,
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
import { Add, Edit, Delete } from '@mui/icons-material';
import AdminLayout from '../../layouts/AdminLayout';
import JobOpeningFormDialog from '../../components/admin/JobOpeningFormDialog';
import { listAllJobOpenings, updateJobOpening, deleteJobOpening } from '../../services/adminJobOpeningService';
import { getApiErrorMessage } from '../../services/apiClient';
import type { JobOpening } from '../../models/jobOpening';

const formatDate = (iso: string) => new Date(iso).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });

const JobOpeningManager: React.FC = () => {
	const [jobOpenings, setJobOpenings] = useState<JobOpening[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [dialogOpen, setDialogOpen] = useState(false);
	const [editing, setEditing] = useState<JobOpening | null>(null);
	const [busyId, setBusyId] = useState<number | null>(null);

	const fetchJobOpenings = useCallback(async () => {
		setLoading(true);
		setError(null);
		try {
			const data = await listAllJobOpenings();
			setJobOpenings(data);
		} catch (err) {
			setError(getApiErrorMessage(err, 'Unable to load open roles.'));
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		fetchJobOpenings();
	}, [fetchJobOpenings]);

	const openCreateDialog = () => {
		setEditing(null);
		setDialogOpen(true);
	};

	const openEditDialog = (jobOpening: JobOpening) => {
		setEditing(jobOpening);
		setDialogOpen(true);
	};

	const handleSaved = () => {
		setDialogOpen(false);
		fetchJobOpenings();
	};

	const handleToggleActive = async (jobOpening: JobOpening) => {
		setBusyId(jobOpening.id);
		try {
			await updateJobOpening(jobOpening.id, { is_active: !jobOpening.is_active });
			await fetchJobOpenings();
		} catch (err) {
			setError(getApiErrorMessage(err, 'Unable to update status.'));
		} finally {
			setBusyId(null);
		}
	};

	const handleDelete = async (jobOpening: JobOpening) => {
		if (!window.confirm(`Delete "${jobOpening.title}"? This cannot be undone.`)) return;
		setBusyId(jobOpening.id);
		try {
			await deleteJobOpening(jobOpening.id);
			await fetchJobOpenings();
		} catch (err) {
			setError(getApiErrorMessage(err, 'Unable to delete this role.'));
		} finally {
			setBusyId(null);
		}
	};

	return (
		<AdminLayout>
			<Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
				<Box>
					<Typography variant="h4" sx={{ fontWeight: 800 }}>
						Open Positions
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Manage roles shown on the public Careers page.
					</Typography>
				</Box>
				<Button variant="contained" startIcon={<Add />} onClick={openCreateDialog} sx={{ borderRadius: 2 }}>
					New Role
				</Button>
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
			) : jobOpenings.length === 0 ? (
				<Alert severity="info">No open roles yet — create your first one.</Alert>
			) : (
				<Box sx={{ border: 1, borderColor: 'divider', borderRadius: 3, overflow: 'hidden', bgcolor: 'background.paper' }}>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>Title</TableCell>
								<TableCell>Department</TableCell>
								<TableCell>Location</TableCell>
								<TableCell>Type</TableCell>
								<TableCell>Created</TableCell>
								<TableCell>Status</TableCell>
								<TableCell align="right">Actions</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{jobOpenings.map((jobOpening) => (
								<TableRow key={jobOpening.id} hover>
									<TableCell sx={{ fontWeight: 600, maxWidth: 280 }}>{jobOpening.title}</TableCell>
									<TableCell>
										<Chip size="small" label={jobOpening.department} />
									</TableCell>
									<TableCell>{jobOpening.location}</TableCell>
									<TableCell>{jobOpening.job_type}</TableCell>
									<TableCell>{formatDate(jobOpening.created_at)}</TableCell>
									<TableCell>
										<Stack direction="row" spacing={1} alignItems="center">
											<Switch
												size="small"
												checked={jobOpening.is_active}
												disabled={busyId === jobOpening.id}
												onChange={() => handleToggleActive(jobOpening)}
											/>
											<Chip
												size="small"
												label={jobOpening.is_active ? 'Active' : 'Inactive'}
												color={jobOpening.is_active ? 'success' : 'default'}
												variant={jobOpening.is_active ? 'filled' : 'outlined'}
											/>
										</Stack>
									</TableCell>
									<TableCell align="right">
										<Tooltip title="Edit">
											<IconButton size="small" onClick={() => openEditDialog(jobOpening)} disabled={busyId === jobOpening.id}>
												<Edit fontSize="small" />
											</IconButton>
										</Tooltip>
										<Tooltip title="Delete">
											<IconButton size="small" onClick={() => handleDelete(jobOpening)} disabled={busyId === jobOpening.id}>
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

			<JobOpeningFormDialog
				open={dialogOpen}
				jobOpening={editing}
				onClose={() => setDialogOpen(false)}
				onSaved={handleSaved}
			/>
		</AdminLayout>
	);
};

export default JobOpeningManager;
