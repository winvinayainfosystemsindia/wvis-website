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
} from '@mui/material';
import { getApiErrorMessage } from '../../services/apiClient';
import { createJobOpening, updateJobOpening } from '../../services/adminJobOpeningService';
import { departments, jobTypes } from '../../data/careers/openPositionsData';
import type { JobOpening } from '../../models/jobOpening';

interface JobOpeningFormDialogProps {
	open: boolean;
	jobOpening: JobOpening | null;
	onClose: () => void;
	onSaved: () => void;
}

const JobOpeningFormDialog: React.FC<JobOpeningFormDialogProps> = ({ open, jobOpening, onClose, onSaved }) => {
	const isEditing = Boolean(jobOpening);

	const [title, setTitle] = useState('');
	const [department, setDepartment] = useState('');
	const [location, setLocation] = useState('');
	const [jobType, setJobType] = useState('');
	const [description, setDescription] = useState('');
	const [isActive, setIsActive] = useState(true);
	const [submitting, setSubmitting] = useState(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (!open) return;
		setError(null);
		if (jobOpening) {
			setTitle(jobOpening.title);
			setDepartment(jobOpening.department);
			setLocation(jobOpening.location);
			setJobType(jobOpening.job_type);
			setDescription(jobOpening.description);
			setIsActive(jobOpening.is_active);
		} else {
			setTitle('');
			setDepartment('');
			setLocation('');
			setJobType('');
			setDescription('');
			setIsActive(true);
		}
	}, [open, jobOpening]);

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		if (!title.trim()) {
			setError('Please enter a title.');
			return;
		}
		if (!department) {
			setError('Please select a department.');
			return;
		}
		if (!location.trim()) {
			setError('Please enter a location.');
			return;
		}
		if (!jobType) {
			setError('Please select a job type.');
			return;
		}
		if (!description.trim()) {
			setError('Please write a description.');
			return;
		}

		setSubmitting(true);
		setError(null);
		try {
			const payload = {
				title,
				department,
				location,
				job_type: jobType,
				description,
				is_active: isActive,
			};
			if (isEditing && jobOpening) {
				await updateJobOpening(jobOpening.id, payload);
			} else {
				await createJobOpening(payload);
			}
			onSaved();
		} catch (err) {
			setError(getApiErrorMessage(err, 'Something went wrong while saving this role.'));
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
			<DialogTitle sx={{ fontWeight: 800 }}>{isEditing ? 'Edit Role' : 'New Role'}</DialogTitle>
			<Box component="form" onSubmit={handleSubmit}>
				<DialogContent>
					<Stack spacing={3}>
						<TextField label="Title" fullWidth required value={title} onChange={(e) => setTitle(e.target.value)} />

						<FormControl fullWidth required>
							<InputLabel id="job-opening-department-label">Department</InputLabel>
							<Select
								labelId="job-opening-department-label"
								label="Department"
								value={department}
								onChange={(e) => setDepartment(e.target.value)}
							>
								{departments.map((option) => (
									<MenuItem key={option} value={option}>
										{option}
									</MenuItem>
								))}
							</Select>
						</FormControl>

						<TextField
							label="Location"
							fullWidth
							required
							placeholder="e.g. Bengaluru · Hybrid"
							value={location}
							onChange={(e) => setLocation(e.target.value)}
						/>

						<FormControl fullWidth required>
							<InputLabel id="job-opening-type-label">Job Type</InputLabel>
							<Select
								labelId="job-opening-type-label"
								label="Job Type"
								value={jobType}
								onChange={(e) => setJobType(e.target.value)}
							>
								{jobTypes.map((option) => (
									<MenuItem key={option} value={option}>
										{option}
									</MenuItem>
								))}
							</Select>
						</FormControl>

						<TextField
							label="Description"
							fullWidth
							required
							multiline
							minRows={4}
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>

						<FormControlLabel
							control={<Switch checked={isActive} onChange={(e) => setIsActive(e.target.checked)} />}
							label="Active (visible on the public Careers page)"
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
						{submitting ? 'Saving…' : isEditing ? 'Save Changes' : 'Create Role'}
					</Button>
				</DialogActions>
			</Box>
		</Dialog>
	);
};

export default JobOpeningFormDialog;
