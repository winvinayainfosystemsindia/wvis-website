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
import DemoRequestDetailsDialog from '../../components/admin/DemoRequestDetailsDialog';
import { listAllDemoRequests, setDemoRequestProcessed, deleteDemoRequest } from '../../services/adminDemoRequestService';
import { getApiErrorMessage } from '../../services/apiClient';
import type { DemoRequestResponse } from '../../models/demoRequest';

const formatDate = (iso: string) => new Date(iso).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });

const DemoRequestsManager: React.FC = () => {
	const [demoRequests, setDemoRequests] = useState<DemoRequestResponse[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [viewing, setViewing] = useState<DemoRequestResponse | null>(null);
	const [busyId, setBusyId] = useState<number | null>(null);

	const fetchDemoRequests = useCallback(async () => {
		setLoading(true);
		setError(null);
		try {
			const data = await listAllDemoRequests();
			setDemoRequests(data);
		} catch (err) {
			setError(getApiErrorMessage(err, 'Unable to load demo requests.'));
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		fetchDemoRequests();
	}, [fetchDemoRequests]);

	const handleToggleProcessed = async (demoRequest: DemoRequestResponse) => {
		setBusyId(demoRequest.id);
		try {
			await setDemoRequestProcessed(demoRequest.id, !demoRequest.is_processed);
			await fetchDemoRequests();
		} catch (err) {
			setError(getApiErrorMessage(err, 'Unable to update status.'));
		} finally {
			setBusyId(null);
		}
	};

	const handleDelete = async (demoRequest: DemoRequestResponse) => {
		if (!window.confirm(`Delete the demo request from "${demoRequest.full_name}"? This cannot be undone.`)) return;
		setBusyId(demoRequest.id);
		try {
			await deleteDemoRequest(demoRequest.id);
			await fetchDemoRequests();
		} catch (err) {
			setError(getApiErrorMessage(err, 'Unable to delete demo request.'));
		} finally {
			setBusyId(null);
		}
	};

	return (
		<AdminLayout>
			<Stack sx={{ mb: 4 }}>
				<Typography variant="h4" sx={{ fontWeight: 800 }}>
					Demo Requests
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Everything submitted through the public Request a Demo form.
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
			) : demoRequests.length === 0 ? (
				<Alert severity="info">No demo requests yet.</Alert>
			) : (
				<Box sx={{ border: 1, borderColor: 'divider', borderRadius: 3, overflow: 'hidden', bgcolor: 'background.paper' }}>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>Name</TableCell>
								<TableCell>Company</TableCell>
								<TableCell>Work Email</TableCell>
								<TableCell>Received</TableCell>
								<TableCell>Status</TableCell>
								<TableCell align="right">Actions</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{demoRequests.map((demoRequest) => (
								<TableRow key={demoRequest.id} hover>
									<TableCell sx={{ fontWeight: 600 }}>{demoRequest.full_name}</TableCell>
									<TableCell>{demoRequest.company_name}</TableCell>
									<TableCell>{demoRequest.work_email}</TableCell>
									<TableCell>{formatDate(demoRequest.created_at)}</TableCell>
									<TableCell>
										<Stack direction="row" spacing={1} alignItems="center">
											<Switch
												size="small"
												checked={demoRequest.is_processed}
												disabled={busyId === demoRequest.id}
												onChange={() => handleToggleProcessed(demoRequest)}
											/>
											<Chip
												size="small"
												label={demoRequest.is_processed ? 'Reviewed' : 'New'}
												color={demoRequest.is_processed ? 'success' : 'warning'}
												variant={demoRequest.is_processed ? 'filled' : 'outlined'}
											/>
										</Stack>
									</TableCell>
									<TableCell align="right">
										<Tooltip title="View">
											<IconButton size="small" onClick={() => setViewing(demoRequest)} disabled={busyId === demoRequest.id}>
												<Visibility fontSize="small" />
											</IconButton>
										</Tooltip>
										<Tooltip title="Delete">
											<IconButton size="small" onClick={() => handleDelete(demoRequest)} disabled={busyId === demoRequest.id}>
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

			<DemoRequestDetailsDialog demoRequest={viewing} onClose={() => setViewing(null)} />
		</AdminLayout>
	);
};

export default DemoRequestsManager;
