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
import { Send } from '@mui/icons-material';
import { CONTACT_SUBJECTS } from '../../data/contact/contactInfoData';
import { submitContactForm } from '../../services/contactService';
import { getApiErrorMessage } from '../../services/apiClient';
import type { ContactFormValues } from '../../models/contact';

const INITIAL_VALUES: ContactFormValues = {
	full_name: '',
	email: '',
	subject: CONTACT_SUBJECTS[0],
	message: '',
};

type FormErrors = Partial<Record<keyof ContactFormValues, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validate = (values: ContactFormValues): FormErrors => {
	const errors: FormErrors = {};
	if (!values.full_name.trim()) errors.full_name = 'Please enter your full name.';
	if (!values.email.trim()) {
		errors.email = 'Please enter your email address.';
	} else if (!EMAIL_REGEX.test(values.email)) {
		errors.email = 'Please enter a valid email address.';
	}
	if (!values.message.trim()) errors.message = 'Please tell us how we can help.';
	else if (values.message.trim().length < 10) errors.message = 'Please provide a few more details (min. 10 characters).';
	return errors;
};

const ContactForm: React.FC = () => {
	const theme = useTheme();
	const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
	const [errors, setErrors] = useState<FormErrors>({});
	const [submitting, setSubmitting] = useState(false);
	const [submitError, setSubmitError] = useState<string | null>(null);
	const [submitted, setSubmitted] = useState(false);

	const handleChange = (field: keyof ContactFormValues) => (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setValues((prev) => ({ ...prev, [field]: event.target.value }));
		setErrors((prev) => ({ ...prev, [field]: undefined }));
	};

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		const validationErrors = validate(values);
		setErrors(validationErrors);
		if (Object.keys(validationErrors).length > 0) return;

		setSubmitting(true);
		setSubmitError(null);
		try {
			await submitContactForm(values);
			setSubmitted(true);
			setValues(INITIAL_VALUES);
		} catch (error) {
			setSubmitError(getApiErrorMessage(error, 'Something went wrong while sending your message. Please try again.'));
		} finally {
			setSubmitting(false);
		}
	};

	if (submitted) {
		return (
			<Paper
				elevation={2}
				sx={{ p: { xs: 4, md: 6 }, borderRadius: 4, textAlign: 'center' }}
			>
				<Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
					Thank you! 🎉
				</Typography>
				<Typography color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
					Your message has been received. Our team will get back to you within one business day.
				</Typography>
				<Button variant="outlined" onClick={() => setSubmitted(false)}>
					Send another message
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
				Send us a message
			</Typography>
			<Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
				Fill out the form below and our team will respond as soon as possible.
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
						label="Email Address"
						type="email"
						fullWidth
						required
						value={values.email}
						onChange={handleChange('email')}
						error={Boolean(errors.email)}
						helperText={errors.email}
					/>
				</Stack>

				<TextField
					select
					label="Subject"
					fullWidth
					value={values.subject}
					onChange={handleChange('subject')}
				>
					{CONTACT_SUBJECTS.map((subject) => (
						<MenuItem key={subject} value={subject}>
							{subject}
						</MenuItem>
					))}
				</TextField>

				<TextField
					label="Message"
					fullWidth
					required
					multiline
					minRows={5}
					value={values.message}
					onChange={handleChange('message')}
					error={Boolean(errors.message)}
					helperText={errors.message ?? 'Tell us a bit about your enquiry.'}
				/>

				{submitError && <Alert severity="error">{submitError}</Alert>}

				<Box>
					<Button
						type="submit"
						variant="contained"
						size="large"
						disabled={submitting}
						endIcon={submitting ? <CircularProgress size={18} color="inherit" /> : <Send />}
						sx={{ px: 5, borderRadius: 2 }}
					>
						{submitting ? 'Sending…' : 'Send Message'}
					</Button>
				</Box>
			</Stack>
		</Paper>
	);
};

export default ContactForm;
