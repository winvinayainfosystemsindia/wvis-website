import React, { useEffect, useState } from 'react';
import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Stack,
	TextField,
	Select,
	MenuItem,
	InputLabel,
	FormControl,
	Button,
	FormControlLabel,
	Switch,
	Alert,
	CircularProgress,
	Box,
	Typography,
	Avatar,
} from '@mui/material';
import { CloudUpload } from '@mui/icons-material';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { toMediaUrl, getApiErrorMessage } from '../../services/apiClient';
import { createCaseStudy, updateCaseStudy } from '../../services/adminCaseStudyService';
import { stripHtml, isRichTextEmpty } from '../../utils/richText';
import { INDUSTRIES } from '../../data/shared/industries';
import type { CaseStudy } from '../../models/caseStudy';

interface CaseStudyFormDialogProps {
	open: boolean;
	caseStudy: CaseStudy | null;
	onClose: () => void;
	onSaved: () => void;
}

const MAX_SUMMARY_WORDS = 60;

const countWords = (html: string): number => {
	const trimmed = stripHtml(html).trim();
	return trimmed ? trimmed.split(/\s+/).length : 0;
};

const SUMMARY_TOOLBAR = [['bold', 'italic', 'underline'], ['link'], ['clean']];
const CONTENT_TOOLBAR = [
	[{ header: [2, 3, false] }],
	['bold', 'italic', 'underline', 'strike'],
	[{ list: 'ordered' }, { list: 'bullet' }],
	['blockquote', 'link'],
	['clean'],
];

const editorSx = {
	'& .ql-toolbar': { borderRadius: '8px 8px 0 0', borderColor: 'rgba(0,0,0,0.23)' },
	'& .ql-container': { borderRadius: '0 0 8px 8px', borderColor: 'rgba(0,0,0,0.23)', fontSize: '1rem' },
};

const CaseStudyFormDialog: React.FC<CaseStudyFormDialogProps> = ({ open, caseStudy, onClose, onSaved }) => {
	const isEditing = Boolean(caseStudy);

	const [title, setTitle] = useState('');
	const [summary, setSummary] = useState('');
	const [content, setContent] = useState('');
	const [industry, setIndustry] = useState('');
	const [clientName, setClientName] = useState('');
	const [isPublished, setIsPublished] = useState(false);
	const [featuredImage, setFeaturedImage] = useState<File | null>(null);
	const [submitting, setSubmitting] = useState(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (!open) return;
		setError(null);
		setFeaturedImage(null);
		if (caseStudy) {
			setTitle(caseStudy.title);
			setSummary(caseStudy.summary ?? '');
			setContent(caseStudy.content);
			setIndustry(caseStudy.industry ?? '');
			setClientName(caseStudy.client_name ?? '');
			setIsPublished(caseStudy.is_published);
		} else {
			setTitle('');
			setSummary('');
			setContent('');
			setIndustry('');
			setClientName('');
			setIsPublished(false);
		}
	}, [open, caseStudy]);

	const [imageObjectUrl, setImageObjectUrl] = useState<string | null>(null);

	useEffect(() => {
		if (!featuredImage) {
			setImageObjectUrl(null);
			return;
		}
		const url = URL.createObjectURL(featuredImage);
		setImageObjectUrl(url);
		return () => URL.revokeObjectURL(url);
	}, [featuredImage]);

	const imagePreviewUrl = imageObjectUrl ?? (caseStudy?.featured_image ? toMediaUrl(caseStudy.featured_image) : null);

	const summaryWordCount = countWords(summary);
	const isSummaryTooLong = summaryWordCount > MAX_SUMMARY_WORDS;

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		if (!title.trim()) {
			setError('Please enter a title.');
			return;
		}
		if (isRichTextEmpty(content)) {
			setError('Please write the case study content.');
			return;
		}
		if (isSummaryTooLong) {
			setError(`Summary is too long — keep it under ${MAX_SUMMARY_WORDS} words.`);
			return;
		}

		setSubmitting(true);
		setError(null);
		try {
			const payload = {
				title,
				summary,
				content,
				industry,
				client_name: clientName,
				is_published: isPublished,
				featuredImage,
			};
			if (isEditing && caseStudy) {
				await updateCaseStudy(caseStudy.id, payload);
			} else {
				await createCaseStudy(payload);
			}
			onSaved();
		} catch (err) {
			setError(getApiErrorMessage(err, 'Something went wrong while saving the case study.'));
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
			<DialogTitle sx={{ fontWeight: 800 }}>{isEditing ? 'Edit Case Study' : 'New Case Study'}</DialogTitle>
			<Box component="form" onSubmit={handleSubmit}>
				<DialogContent>
					<Stack spacing={3}>
						<TextField label="Title" fullWidth required value={title} onChange={(e) => setTitle(e.target.value)} />

						<TextField
							label="Client Name"
							fullWidth
							placeholder="e.g. Acme Retail Co."
							value={clientName}
							onChange={(e) => setClientName(e.target.value)}
						/>

						<FormControl fullWidth>
							<InputLabel id="case-study-industry-label">Industry</InputLabel>
							<Select
								labelId="case-study-industry-label"
								label="Industry"
								value={industry}
								displayEmpty
								onChange={(e) => setIndustry(e.target.value)}
							>
								<MenuItem value="">
									<em>None</em>
								</MenuItem>
								{INDUSTRIES.map((option) => (
									<MenuItem key={option} value={option}>
										{option}
									</MenuItem>
								))}
							</Select>
						</FormControl>

						<Box>
							<Typography variant="body2" sx={{ fontWeight: 600, mb: 0.75 }}>
								Summary
							</Typography>
							<Box sx={editorSx}>
								<ReactQuill
									theme="snow"
									value={summary}
									onChange={setSummary}
									modules={{ toolbar: SUMMARY_TOOLBAR }}
									placeholder="A short excerpt shown on case study cards…"
								/>
							</Box>
							<Typography
								variant="caption"
								color={isSummaryTooLong ? 'error' : 'text.secondary'}
								sx={{ display: 'block', mt: 0.5 }}
							>
								{summaryWordCount} / {MAX_SUMMARY_WORDS} words
							</Typography>
						</Box>

						<Box>
							<Typography variant="body2" sx={{ fontWeight: 600, mb: 0.75 }}>
								Content
							</Typography>
							<Box sx={editorSx}>
								<ReactQuill
									theme="snow"
									value={content}
									onChange={setContent}
									modules={{ toolbar: CONTENT_TOOLBAR }}
									placeholder="Write the full case study…"
									style={{ minHeight: 220 }}
								/>
							</Box>
						</Box>

						<Stack direction="row" spacing={2} alignItems="center">
							{imagePreviewUrl && (
								<Avatar src={imagePreviewUrl} variant="rounded" sx={{ width: 64, height: 64 }} />
							)}
							<Button component="label" variant="outlined" startIcon={<CloudUpload />} sx={{ borderRadius: 2 }}>
								{featuredImage ? featuredImage.name : isEditing ? 'Replace Featured Image' : 'Upload Featured Image'}
								<input
									type="file"
									hidden
									accept="image/png,image/jpeg,image/webp"
									onChange={(e) => setFeaturedImage(e.target.files?.[0] ?? null)}
								/>
							</Button>
							{isEditing && !featuredImage && (
								<Typography variant="caption" color="text.secondary">
									Current image kept unless replaced
								</Typography>
							)}
						</Stack>

						<FormControlLabel
							control={<Switch checked={isPublished} onChange={(e) => setIsPublished(e.target.checked)} />}
							label="Published (visible on the public case studies page)"
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
						{submitting ? 'Saving…' : isEditing ? 'Save Changes' : 'Create Case Study'}
					</Button>
				</DialogActions>
			</Box>
		</Dialog>
	);
};

export default CaseStudyFormDialog;
