import React, { useState } from 'react';
import {
	Box,
	Paper,
	Stack,
	TextField,
	MenuItem,
	Button,
	Typography,
	Alert,
	CircularProgress,
	useTheme,
	alpha,
} from '@mui/material';
import { RocketLaunch } from '@mui/icons-material';
import { PRODUCT_INTEREST_OPTIONS, COMPANY_SIZE_OPTIONS } from '../../data/demo/demoData';
import { submitDemoRequest } from '../../services/demoRequestService';
import { getApiErrorMessage } from '../../services/apiClient';
import type { DemoRequestFormValues, DemoRequestPayload } from '../../models/demoRequest';

const INITIAL_VALUES: DemoRequestFormValues = {
	full_name: '',
	work_email: '',
	phone: '',
	company_name: '',
	job_title: '',
	company_size: '',
	product_interest: PRODUCT_INTEREST_OPTIONS[0],
	preferred_date: '',
	message: '',
};

type RequiredField = 'full_name' | 'work_email' | 'company_name';
type FormErrors = Partial<Record<RequiredField, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validate = (values: DemoRequestFormValues): FormErrors => {
	const errors: FormErrors = {};
	if (!values.full_name.trim()) errors.full_name = 'Please enter your full name.';
	if (!values.work_email.trim()) {
		errors.work_email = 'Please enter your work email.';
	} else if (!EMAIL_REGEX.test(values.work_email)) {
		errors.work_email = 'Please enter a valid email address.';
	}
	if (!values.company_name.trim()) errors.company_name = 'Please enter your company name.';
	return errors;
};

const todayISO = () => new Date().toISOString().split('T')[0];

const DemoRequestForm: React.FC = () => {
	const theme = useTheme();
	const [values, setValues] = useState<DemoRequestFormValues>(INITIAL_VALUES);
	const [errors, setErrors] = useState<FormErrors>({});
	const [submitting, setSubmitting] = useState(false);
	const [submitError, setSubmitError] = useState<string | null>(null);
	const [submitted, setSubmitted] = useState(false);

	const REQUIRED_FIELDS: RequiredField[] = ['full_name', 'work_email', 'company_name'];

	const handleChange = (field: keyof DemoRequestFormValues) => (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setValues((prev) => ({ ...prev, [field]: event.target.value }));
		if ((REQUIRED_FIELDS as string[]).includes(field)) {
			setErrors((prev) => ({ ...prev, [field as RequiredField]: undefined }));
		}
	};

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		const validationErrors = validate(values);
		setErrors(validationErrors);
		if (Object.keys(validationErrors).length > 0) return;

		setSubmitting(true);
		setSubmitError(null);
		try {
			const payload: DemoRequestPayload = {
				full_name: values.full_name.trim(),
				work_email: values.work_email.trim(),
				company_name: values.company_name.trim(),
				phone: values.phone.trim() || undefined,
				job_title: values.job_title.trim() || undefined,
				company_size: values.company_size || undefined,
				product_interest: values.product_interest || undefined,
				preferred_date: values.preferred_date || undefined,
				message: values.message.trim() || undefined,
			};
			await submitDemoRequest(payload);
			setSubmitted(true);
			setValues(INITIAL_VALUES);
		} catch (error) {
			setSubmitError(getApiErrorMessage(error, 'Something went wrong while sending your request. Please try again.'));
		} finally {
			setSubmitting(false);
		}
	};

	if (submitted) {
		return (
			<Paper elevation={2} sx={{ p: { xs: 4, md: 6 }, borderRadius: 4, textAlign: 'center' }}>
				<Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
					Request received! 🚀
				</Typography>
				<Typography color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
					Thanks for your interest — a member of our team will reach out to schedule your personalised demo
					within one business day.
				</Typography>
				<Button variant="outlined" onClick={() => setSubmitted(false)}>
					Submit another request
				</Button>
			</Paper>
		);
	}

	return (
		<Paper
			component="form"
			noValidate
			onSubmit={handleSubmit}
			elevation={2}
			sx={{
				p: { xs: 3, md: 5 },
				borderRadius: 4,
				border: `1px solid ${alpha(theme.palette.divider, 0.6)}`,
			}}
		>
			<Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
				Request a Demo
			</Typography>
			<Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
				Tell us a little about your organisation and we'll set up a session tailored to your needs.
			</Typography>

			<Stack spacing={3}>
				<Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
					<TextField
						label="Full Name"
						fullWidth
						required
						value={values.full_name}
						onChange={handleChange('full_name')}
						error={Boolean(errors.full_name)}
						helperText={errors.full_name}
					/>
					<TextField
						label="Work Email"
						type="email"
						fullWidth
						required
						value={values.work_email}
						onChange={handleChange('work_email')}
						error={Boolean(errors.work_email)}
						helperText={errors.work_email}
					/>
				</Stack>

				<Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
					<TextField
						label="Phone Number"
						fullWidth
						value={values.phone}
						onChange={handleChange('phone')}
					/>
					<TextField
						label="Job Title"
						fullWidth
						value={values.job_title}
						onChange={handleChange('job_title')}
					/>
				</Stack>

				<Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
					<TextField
						label="Company Name"
						fullWidth
						required
						value={values.company_name}
						onChange={handleChange('company_name')}
						error={Boolean(errors.company_name)}
						helperText={errors.company_name}
					/>
					<TextField
						select
						label="Company Size"
						fullWidth
						value={values.company_size}
						onChange={handleChange('company_size')}
					>
						{COMPANY_SIZE_OPTIONS.map((option) => (
							<MenuItem key={option} value={option}>
								{option}
							</MenuItem>
						))}
					</TextField>
				</Stack>

				<Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
					<TextField
						select
						label="Product of Interest"
						fullWidth
						value={values.product_interest}
						onChange={handleChange('product_interest')}
					>
						{PRODUCT_INTEREST_OPTIONS.map((option) => (
							<MenuItem key={option} value={option}>
								{option}
							</MenuItem>
						))}
					</TextField>
					<TextField
						label="Preferred Date"
						type="date"
						fullWidth
						slotProps={{ inputLabel: { shrink: true }, htmlInput: { min: todayISO() } }}
						value={values.preferred_date}
						onChange={handleChange('preferred_date')}
					/>
				</Stack>

				<TextField
					label="Anything specific you'd like us to cover?"
					fullWidth
					multiline
					minRows={4}
					value={values.message}
					onChange={handleChange('message')}
				/>

				{submitError && <Alert severity="error">{submitError}</Alert>}

				<Box>
					<Button
						type="submit"
						variant="contained"
						size="large"
						disabled={submitting}
						endIcon={submitting ? <CircularProgress size={18} color="inherit" /> : <RocketLaunch />}
						sx={{ px: 5, borderRadius: 2 }}
					>
						{submitting ? 'Submitting…' : 'Request Demo'}
					</Button>
				</Box>
			</Stack>
		</Paper>
	);
};

export default DemoRequestForm;
