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
import { Add, Edit, Delete, TrendingUp } from '@mui/icons-material';
import AdminLayout from '../../layouts/AdminLayout';
import CaseStudyFormDialog from '../../components/admin/CaseStudyFormDialog';
import { listAllCaseStudies, updateCaseStudy, deleteCaseStudy } from '../../services/adminCaseStudyService';
import { toMediaUrl, getApiErrorMessage } from '../../services/apiClient';
import type { CaseStudy } from '../../models/caseStudy';

const formatDate = (iso: string) => new Date(iso).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });

const CaseStudyManager: React.FC = () => {
	const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [dialogOpen, setDialogOpen] = useState(false);
	const [editing, setEditing] = useState<CaseStudy | null>(null);
	const [busyId, setBusyId] = useState<number | null>(null);

	const fetchCaseStudies = useCallback(async () => {
		setLoading(true);
		setError(null);
		try {
			const data = await listAllCaseStudies();
			setCaseStudies(data);
		} catch (err) {
			setError(getApiErrorMessage(err, 'Unable to load case studies.'));
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		fetchCaseStudies();
	}, [fetchCaseStudies]);

	const openCreateDialog = () => {
		setEditing(null);
		setDialogOpen(true);
	};

	const openEditDialog = (caseStudy: CaseStudy) => {
		setEditing(caseStudy);
		setDialogOpen(true);
	};

	const handleSaved = () => {
		setDialogOpen(false);
		fetchCaseStudies();
	};

	const handleTogglePublish = async (caseStudy: CaseStudy) => {
		setBusyId(caseStudy.id);
		try {
			await updateCaseStudy(caseStudy.id, { is_published: !caseStudy.is_published });
			await fetchCaseStudies();
		} catch (err) {
			setError(getApiErrorMessage(err, 'Unable to update status.'));
		} finally {
			setBusyId(null);
		}
	};

	const handleDelete = async (caseStudy: CaseStudy) => {
		if (!window.confirm(`Delete "${caseStudy.title}"? This cannot be undone.`)) return;
		setBusyId(caseStudy.id);
		try {
			await deleteCaseStudy(caseStudy.id);
			await fetchCaseStudies();
		} catch (err) {
			setError(getApiErrorMessage(err, 'Unable to delete case study.'));
		} finally {
			setBusyId(null);
		}
	};

	return (
		<AdminLayout>
			<Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
				<Box>
					<Typography variant="h4" sx={{ fontWeight: 800 }}>
						Case Studies
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Manage success stories shown on the public Case Studies page.
					</Typography>
				</Box>
				<Button variant="contained" startIcon={<Add />} onClick={openCreateDialog} sx={{ borderRadius: 2 }}>
					New Case Study
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
			) : caseStudies.length === 0 ? (
				<Alert severity="info">No case studies yet — create your first one.</Alert>
			) : (
				<Box sx={{ border: 1, borderColor: 'divider', borderRadius: 3, overflow: 'hidden', bgcolor: 'background.paper' }}>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>Image</TableCell>
								<TableCell>Title</TableCell>
								<TableCell>Client</TableCell>
								<TableCell>Industry</TableCell>
								<TableCell>Created</TableCell>
								<TableCell>Status</TableCell>
								<TableCell align="right">Actions</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{caseStudies.map((caseStudy) => (
								<TableRow key={caseStudy.id} hover>
									<TableCell>
										{caseStudy.featured_image ? (
											<Avatar src={toMediaUrl(caseStudy.featured_image)} variant="rounded" sx={{ width: 48, height: 48 }} />
										) : (
											<Avatar variant="rounded" sx={{ width: 48, height: 48, bgcolor: 'action.hover' }}>
												<TrendingUp fontSize="small" color="disabled" />
											</Avatar>
										)}
									</TableCell>
									<TableCell sx={{ fontWeight: 600, maxWidth: 280 }}>{caseStudy.title}</TableCell>
									<TableCell>{caseStudy.client_name || '—'}</TableCell>
									<TableCell>
										{caseStudy.industry ? <Chip size="small" label={caseStudy.industry} /> : <Typography variant="caption" color="text.secondary">—</Typography>}
									</TableCell>
									<TableCell>{formatDate(caseStudy.created_at)}</TableCell>
									<TableCell>
										<Stack direction="row" spacing={1} alignItems="center">
											<Switch
												size="small"
												checked={caseStudy.is_published}
												disabled={busyId === caseStudy.id}
												onChange={() => handleTogglePublish(caseStudy)}
											/>
											<Chip
												size="small"
												label={caseStudy.is_published ? 'Published' : 'Draft'}
												color={caseStudy.is_published ? 'success' : 'default'}
												variant={caseStudy.is_published ? 'filled' : 'outlined'}
											/>
										</Stack>
									</TableCell>
									<TableCell align="right">
										<Tooltip title="Edit">
											<IconButton size="small" onClick={() => openEditDialog(caseStudy)} disabled={busyId === caseStudy.id}>
												<Edit fontSize="small" />
											</IconButton>
										</Tooltip>
										<Tooltip title="Delete">
											<IconButton size="small" onClick={() => handleDelete(caseStudy)} disabled={busyId === caseStudy.id}>
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

			<CaseStudyFormDialog
				open={dialogOpen}
				caseStudy={editing}
				onClose={() => setDialogOpen(false)}
				onSaved={handleSaved}
			/>
		</AdminLayout>
	);
};

export default CaseStudyManager;
