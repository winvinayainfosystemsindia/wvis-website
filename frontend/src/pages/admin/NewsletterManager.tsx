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
import NewsletterFormDialog from '../../components/admin/NewsletterFormDialog';
import { listAllNewsletters, updateNewsletter, deleteNewsletter } from '../../services/adminNewsletterService';
import { toMediaUrl, getApiErrorMessage } from '../../services/apiClient';
import type { NewsletterIssue } from '../../models/newsletter';

const formatDate = (iso: string) => new Date(iso).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });

const NewsletterManager: React.FC = () => {
	const [issues, setIssues] = useState<NewsletterIssue[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [dialogOpen, setDialogOpen] = useState(false);
	const [editingIssue, setEditingIssue] = useState<NewsletterIssue | null>(null);
	const [busyId, setBusyId] = useState<number | null>(null);

	const fetchIssues = useCallback(async () => {
		setLoading(true);
		setError(null);
		try {
			const data = await listAllNewsletters();
			setIssues(data);
		} catch (err) {
			setError(getApiErrorMessage(err, 'Unable to load newsletters.'));
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		fetchIssues();
	}, [fetchIssues]);

	const openCreateDialog = () => {
		setEditingIssue(null);
		setDialogOpen(true);
	};

	const openEditDialog = (issue: NewsletterIssue) => {
		setEditingIssue(issue);
		setDialogOpen(true);
	};

	const handleSaved = () => {
		setDialogOpen(false);
		fetchIssues();
	};

	const handleTogglePublish = async (issue: NewsletterIssue) => {
		setBusyId(issue.id);
		try {
			await updateNewsletter(issue.id, { is_published: !issue.is_published });
			await fetchIssues();
		} catch (err) {
			setError(getApiErrorMessage(err, 'Unable to update newsletter status.'));
		} finally {
			setBusyId(null);
		}
	};

	const handleDelete = async (issue: NewsletterIssue) => {
		if (!window.confirm(`Delete "${issue.title}"? This cannot be undone.`)) return;
		setBusyId(issue.id);
		try {
			await deleteNewsletter(issue.id);
			await fetchIssues();
		} catch (err) {
			setError(getApiErrorMessage(err, 'Unable to delete newsletter.'));
		} finally {
			setBusyId(null);
		}
	};

	return (
		<AdminLayout>
			<Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
				<Box>
					<Typography variant="h4" sx={{ fontWeight: 800 }}>
						Newsletters
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Manage newsletter issues shown on the public Resources page.
					</Typography>
				</Box>
				<Button variant="contained" startIcon={<Add />} onClick={openCreateDialog} sx={{ borderRadius: 2 }}>
					New Newsletter
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
			) : issues.length === 0 ? (
				<Alert severity="info">No newsletters yet — create your first one.</Alert>
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
							{issues.map((issue) => (
								<TableRow key={issue.id} hover>
									<TableCell>
										<Avatar src={toMediaUrl(issue.cover_image_path)} variant="rounded" sx={{ width: 48, height: 48 }} />
									</TableCell>
									<TableCell sx={{ fontWeight: 600, maxWidth: 320 }}>{issue.title}</TableCell>
									<TableCell>{formatDate(issue.published_date)}</TableCell>
									<TableCell>
										<Stack direction="row" spacing={1} alignItems="center">
											<Switch
												size="small"
												checked={issue.is_published}
												disabled={busyId === issue.id}
												onChange={() => handleTogglePublish(issue)}
											/>
											<Chip
												size="small"
												label={issue.is_published ? 'Published' : 'Draft'}
												color={issue.is_published ? 'success' : 'default'}
												variant={issue.is_published ? 'filled' : 'outlined'}
											/>
										</Stack>
									</TableCell>
									<TableCell align="right">
										<Tooltip title="Edit">
											<IconButton size="small" onClick={() => openEditDialog(issue)} disabled={busyId === issue.id}>
												<Edit fontSize="small" />
											</IconButton>
										</Tooltip>
										<Tooltip title="Delete">
											<IconButton size="small" onClick={() => handleDelete(issue)} disabled={busyId === issue.id}>
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

			<NewsletterFormDialog
				open={dialogOpen}
				issue={editingIssue}
				onClose={() => setDialogOpen(false)}
				onSaved={handleSaved}
			/>
		</AdminLayout>
	);
};

export default NewsletterManager;
