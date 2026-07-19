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
import { Add, Edit, Delete, Article } from '@mui/icons-material';
import AdminLayout from '../../layouts/AdminLayout';
import BlogFormDialog from '../../components/admin/BlogFormDialog';
import { listAllBlogs, updateBlog, deleteBlog } from '../../services/adminBlogService';
import { toMediaUrl, getApiErrorMessage } from '../../services/apiClient';
import type { BlogPost } from '../../models/blog';

const formatDate = (iso: string) => new Date(iso).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });

const BlogManager: React.FC = () => {
	const [blogs, setBlogs] = useState<BlogPost[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [dialogOpen, setDialogOpen] = useState(false);
	const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
	const [busyId, setBusyId] = useState<number | null>(null);

	const fetchBlogs = useCallback(async () => {
		setLoading(true);
		setError(null);
		try {
			const data = await listAllBlogs();
			setBlogs(data);
		} catch (err) {
			setError(getApiErrorMessage(err, 'Unable to load blog posts.'));
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		fetchBlogs();
	}, [fetchBlogs]);

	const openCreateDialog = () => {
		setEditingBlog(null);
		setDialogOpen(true);
	};

	const openEditDialog = (blog: BlogPost) => {
		setEditingBlog(blog);
		setDialogOpen(true);
	};

	const handleSaved = () => {
		setDialogOpen(false);
		fetchBlogs();
	};

	const handleTogglePublish = async (blog: BlogPost) => {
		setBusyId(blog.id);
		try {
			await updateBlog(blog.id, { is_published: !blog.is_published });
			await fetchBlogs();
		} catch (err) {
			setError(getApiErrorMessage(err, 'Unable to update post status.'));
		} finally {
			setBusyId(null);
		}
	};

	const handleDelete = async (blog: BlogPost) => {
		if (!window.confirm(`Delete "${blog.title}"? This cannot be undone.`)) return;
		setBusyId(blog.id);
		try {
			await deleteBlog(blog.id);
			await fetchBlogs();
		} catch (err) {
			setError(getApiErrorMessage(err, 'Unable to delete post.'));
		} finally {
			setBusyId(null);
		}
	};

	return (
		<AdminLayout>
			<Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
				<Box>
					<Typography variant="h4" sx={{ fontWeight: 800 }}>
						Blog Posts
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Manage articles shown on the public Blog page.
					</Typography>
				</Box>
				<Button variant="contained" startIcon={<Add />} onClick={openCreateDialog} sx={{ borderRadius: 2 }}>
					New Post
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
			) : blogs.length === 0 ? (
				<Alert severity="info">No blog posts yet — create your first one.</Alert>
			) : (
				<Box sx={{ border: 1, borderColor: 'divider', borderRadius: 3, overflow: 'hidden', bgcolor: 'background.paper' }}>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>Image</TableCell>
								<TableCell>Title</TableCell>
								<TableCell>Category</TableCell>
								<TableCell>Created</TableCell>
								<TableCell>Status</TableCell>
								<TableCell align="right">Actions</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{blogs.map((blog) => (
								<TableRow key={blog.id} hover>
									<TableCell>
										{blog.featured_image ? (
											<Avatar src={toMediaUrl(blog.featured_image)} variant="rounded" sx={{ width: 48, height: 48 }} />
										) : (
											<Avatar variant="rounded" sx={{ width: 48, height: 48, bgcolor: 'action.hover' }}>
												<Article fontSize="small" color="disabled" />
											</Avatar>
										)}
									</TableCell>
									<TableCell sx={{ fontWeight: 600, maxWidth: 320 }}>{blog.title}</TableCell>
									<TableCell>
										{blog.category ? <Chip size="small" label={blog.category} /> : <Typography variant="caption" color="text.secondary">—</Typography>}
									</TableCell>
									<TableCell>{formatDate(blog.created_at)}</TableCell>
									<TableCell>
										<Stack direction="row" spacing={1} alignItems="center">
											<Switch
												size="small"
												checked={blog.is_published}
												disabled={busyId === blog.id}
												onChange={() => handleTogglePublish(blog)}
											/>
											<Chip
												size="small"
												label={blog.is_published ? 'Published' : 'Draft'}
												color={blog.is_published ? 'success' : 'default'}
												variant={blog.is_published ? 'filled' : 'outlined'}
											/>
										</Stack>
									</TableCell>
									<TableCell align="right">
										<Tooltip title="Edit">
											<IconButton size="small" onClick={() => openEditDialog(blog)} disabled={busyId === blog.id}>
												<Edit fontSize="small" />
											</IconButton>
										</Tooltip>
										<Tooltip title="Delete">
											<IconButton size="small" onClick={() => handleDelete(blog)} disabled={busyId === blog.id}>
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

			<BlogFormDialog
				open={dialogOpen}
				blog={editingBlog}
				onClose={() => setDialogOpen(false)}
				onSaved={handleSaved}
			/>
		</AdminLayout>
	);
};

export default BlogManager;
