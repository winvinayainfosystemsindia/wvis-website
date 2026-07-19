import React, { useEffect, useState } from 'react';
import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Stack,
	TextField,
	Button,
	FormControlLabel,
	Switch,
	Alert,
	CircularProgress,
	Box,
	Typography,
	Avatar,
} from '@mui/material';
import { CloudUpload, PictureAsPdf } from '@mui/icons-material';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { createNewsletterThunk, updateNewsletterThunk } from '../../store/newsletterSlice';
import { toMediaUrl } from '../../services/apiClient';
import type { NewsletterIssue } from '../../models/newsletter';

interface NewsletterFormDialogProps {
	open: boolean;
	issue: NewsletterIssue | null;
	onClose: () => void;
	onSaved: () => void;
}

const todayISO = () => new Date().toISOString().split('T')[0];

const MAX_DESCRIPTION_WORDS = 250;

const countWords = (text: string): number => {
	const trimmed = text.trim();
	return trimmed ? trimmed.split(/\s+/).length : 0;
};

const NewsletterFormDialog: React.FC<NewsletterFormDialogProps> = ({ open, issue, onClose, onSaved }) => {
	const dispatch = useAppDispatch();
	const isEditing = Boolean(issue);

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [publishedDate, setPublishedDate] = useState(todayISO());
	const [isPublished, setIsPublished] = useState(false);
	const [coverImage, setCoverImage] = useState<File | null>(null);
	const [pdfFile, setPdfFile] = useState<File | null>(null);
	const [submitting, setSubmitting] = useState(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (!open) return;
		setError(null);
		setCoverImage(null);
		setPdfFile(null);
		if (issue) {
			setTitle(issue.title);
			setDescription(issue.description ?? '');
			setPublishedDate(issue.published_date);
			setIsPublished(issue.is_published);
		} else {
			setTitle('');
			setDescription('');
			setPublishedDate(todayISO());
			setIsPublished(false);
		}
	}, [open, issue]);

	const [coverObjectUrl, setCoverObjectUrl] = useState<string | null>(null);

	useEffect(() => {
		if (!coverImage) {
			setCoverObjectUrl(null);
			return;
		}
		const url = URL.createObjectURL(coverImage);
		setCoverObjectUrl(url);
		return () => URL.revokeObjectURL(url);
	}, [coverImage]);

	const coverPreviewUrl = coverObjectUrl ?? (issue ? toMediaUrl(issue.cover_image_path) : null);

	const descriptionWordCount = countWords(description);
	const isDescriptionTooLong = descriptionWordCount > MAX_DESCRIPTION_WORDS;

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		if (!title.trim()) {
			setError('Please enter a title.');
			return;
		}
		if (!isEditing && (!coverImage || !pdfFile)) {
			setError('Please select both a cover image and a PDF file.');
			return;
		}
		if (isDescriptionTooLong) {
			setError(`Description is too long — keep it under ${MAX_DESCRIPTION_WORDS} words.`);
			return;
		}

		setSubmitting(true);
		setError(null);
		try {
			if (isEditing && issue) {
				await dispatch(
					updateNewsletterThunk({
						id: issue.id,
						payload: {
							title,
							description,
							published_date: publishedDate,
							is_published: isPublished,
							coverImage,
							pdfFile,
						},
					})
				).unwrap();
			} else {
				await dispatch(
					createNewsletterThunk({
						title,
						description,
						published_date: publishedDate,
						is_published: isPublished,
						coverImage,
						pdfFile,
					})
				).unwrap();
			}
			onSaved();
		} catch (err) {
			setError(err as string);
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
			<DialogTitle sx={{ fontWeight: 800 }}>{isEditing ? 'Edit Newsletter' : 'New Newsletter'}</DialogTitle>
			<Box component="form" onSubmit={handleSubmit}>
				<DialogContent>
					<Stack spacing={3}>
						<TextField
							label="Title"
							fullWidth
							required
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
						<TextField
							label="Description"
							fullWidth
							multiline
							minRows={3}
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							error={isDescriptionTooLong}
							helperText={`${descriptionWordCount} / ${MAX_DESCRIPTION_WORDS} words`}
						/>
						<TextField
							label="Published Date"
							type="date"
							fullWidth
							required
							slotProps={{ inputLabel: { shrink: true } }}
							value={publishedDate}
							onChange={(e) => setPublishedDate(e.target.value)}
						/>

						<Stack direction="row" spacing={2} alignItems="center">
							{coverPreviewUrl && (
								<Avatar src={coverPreviewUrl} variant="rounded" sx={{ width: 64, height: 64 }} />
							)}
							<Button component="label" variant="outlined" startIcon={<CloudUpload />} sx={{ borderRadius: 2 }}>
								{coverImage ? coverImage.name : isEditing ? 'Replace Cover Image' : 'Upload Cover Image'}
								<input
									type="file"
									hidden
									accept="image/png,image/jpeg,image/webp"
									onChange={(e) => setCoverImage(e.target.files?.[0] ?? null)}
								/>
							</Button>
						</Stack>

						<Stack direction="row" spacing={2} alignItems="center">
							<Button component="label" variant="outlined" startIcon={<PictureAsPdf />} sx={{ borderRadius: 2 }}>
								{pdfFile ? pdfFile.name : isEditing ? 'Replace PDF' : 'Upload PDF'}
								<input type="file" hidden accept="application/pdf" onChange={(e) => setPdfFile(e.target.files?.[0] ?? null)} />
							</Button>
							{isEditing && !pdfFile && (
								<Typography variant="caption" color="text.secondary">
									Current file kept unless replaced
								</Typography>
							)}
						</Stack>

						<FormControlLabel
							control={<Switch checked={isPublished} onChange={(e) => setIsPublished(e.target.checked)} />}
							label="Published (visible on the public newsletters page)"
						/>

						{error && <Alert severity="error">{error}</Alert>}
					</Stack>
				</DialogContent>
				<DialogActions sx={{ px: 3, pb: 3 }}>
					<Button onClick={onClose} disabled={submitting}>
						Cancel
					</Button>
					<Button
						type="submit"
						variant="contained"
						disabled={submitting}
						startIcon={submitting ? <CircularProgress size={18} color="inherit" /> : undefined}
						sx={{ borderRadius: 2 }}
					>
						{submitting ? 'Saving…' : isEditing ? 'Save Changes' : 'Create Newsletter'}
					</Button>
				</DialogActions>
			</Box>
		</Dialog>
	);
};

export default NewsletterFormDialog;
