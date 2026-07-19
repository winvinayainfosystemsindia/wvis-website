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
	Avatar,
	Chip,
	IconButton,
	Switch,
	Alert,
	CircularProgress,
	Tooltip,
} from '@mui/material';
import { Add, Edit, Delete } from '@mui/icons-material';
import AdminLayout from '../../layouts/AdminLayout';
import MarketingPitchFormDialog from '../../components/admin/MarketingPitchFormDialog';
import { listAllMarketingPitches, updateMarketingPitch, deleteMarketingPitch } from '../../services/adminMarketingPitchService';
import { toMediaUrl, getApiErrorMessage } from '../../services/apiClient';
import type { MarketingPitch } from '../../models/marketingPitch';

const formatDate = (iso: string) => new Date(iso).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });

const MarketingPitchManager: React.FC = () => {
	const [pitches, setPitches] = useState<MarketingPitch[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [dialogOpen, setDialogOpen] = useState(false);
	const [editingPitch, setEditingPitch] = useState<MarketingPitch | null>(null);
	const [busyId, setBusyId] = useState<number | null>(null);

	const fetchPitches = useCallback(async () => {
		setLoading(true);
		setError(null);
		try {
			const data = await listAllMarketingPitches();
			setPitches(data);
		} catch (err) {
			setError(getApiErrorMessage(err, 'Unable to load marketing pitches.'));
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		fetchPitches();
	}, [fetchPitches]);

	const openCreateDialog = () => {
		setEditingPitch(null);
		setDialogOpen(true);
	};

	const openEditDialog = (pitch: MarketingPitch) => {
		setEditingPitch(pitch);
		setDialogOpen(true);
	};

	const handleSaved = () => {
		setDialogOpen(false);
		fetchPitches();
	};

	const handleTogglePublish = async (pitch: MarketingPitch) => {
		setBusyId(pitch.id);
		try {
			await updateMarketingPitch(pitch.id, { is_published: !pitch.is_published });
			await fetchPitches();
		} catch (err) {
			setError(getApiErrorMessage(err, 'Unable to update status.'));
		} finally {
			setBusyId(null);
		}
	};

	const handleDelete = async (pitch: MarketingPitch) => {
		if (!window.confirm(`Delete "${pitch.title}"? This cannot be undone.`)) return;
		setBusyId(pitch.id);
		try {
			await deleteMarketingPitch(pitch.id);
			await fetchPitches();
		} catch (err) {
			setError(getApiErrorMessage(err, 'Unable to delete marketing pitch.'));
		} finally {
			setBusyId(null);
		}
	};

	return (
		<AdminLayout>
			<Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
				<Box>
					<Typography variant="h4" sx={{ fontWeight: 800 }}>
						Marketing Pitch
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Manage pitch decks shown on the public Marketing Pitch page.
					</Typography>
				</Box>
				<Button variant="contained" startIcon={<Add />} onClick={openCreateDialog} sx={{ borderRadius: 2 }}>
					New Pitch
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
			) : pitches.length === 0 ? (
				<Alert severity="info">No marketing pitches yet — create your first one.</Alert>
			) : (
				<Box sx={{ border: 1, borderColor: 'divider', borderRadius: 3, overflow: 'hidden', bgcolor: 'background.paper' }}>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>Cover</TableCell>
								<TableCell>Title</TableCell>
								<TableCell>Published Date</TableCell>
								<TableCell>Status</TableCell>
								<TableCell align="right">Actions</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{pitches.map((pitch) => (
								<TableRow key={pitch.id} hover>
									<TableCell>
										<Avatar src={toMediaUrl(pitch.cover_image_path)} variant="rounded" sx={{ width: 48, height: 48 }} />
									</TableCell>
									<TableCell sx={{ fontWeight: 600, maxWidth: 320 }}>{pitch.title}</TableCell>
									<TableCell>{formatDate(pitch.published_date)}</TableCell>
									<TableCell>
										<Stack direction="row" spacing={1} alignItems="center">
											<Switch
												size="small"
												checked={pitch.is_published}
												disabled={busyId === pitch.id}
												onChange={() => handleTogglePublish(pitch)}
											/>
											<Chip
												size="small"
												label={pitch.is_published ? 'Published' : 'Draft'}
												color={pitch.is_published ? 'success' : 'default'}
												variant={pitch.is_published ? 'filled' : 'outlined'}
											/>
										</Stack>
									</TableCell>
									<TableCell align="right">
										<Tooltip title="Edit">
											<IconButton size="small" onClick={() => openEditDialog(pitch)} disabled={busyId === pitch.id}>
												<Edit fontSize="small" />
											</IconButton>
										</Tooltip>
										<Tooltip title="Delete">
											<IconButton size="small" onClick={() => handleDelete(pitch)} disabled={busyId === pitch.id}>
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

			<MarketingPitchFormDialog
				open={dialogOpen}
				pitch={editingPitch}
				onClose={() => setDialogOpen(false)}
				onSaved={handleSaved}
			/>
		</AdminLayout>
	);
};

export default MarketingPitchManager;
