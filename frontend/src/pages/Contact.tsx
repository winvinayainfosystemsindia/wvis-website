import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import MainLayout from '../components/layout/MainLayout';
import PageHeader from '../components/layout/PageHeader';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';

const Contact: React.FC = () => {
	return (
		<MainLayout>
			<PageHeader
				title="Let's Start a Conversation"
				subtitle="Have a question about our services, a project in mind, or just want to say hello? Our team is here to help — reach out and we'll get back to you within one business day."
			/>

			<Box component="section" sx={{ pb: { xs: 8, md: 12 } }}>
				<Container maxWidth="lg">
					<Grid container spacing={{ xs: 5, md: 6 }}>
						<Grid size={{ xs: 12, md: 4 }}>
							<ContactInfo />
						</Grid>
						<Grid size={{ xs: 12, md: 8 }}>
							<ContactForm />
						</Grid>
					</Grid>
				</Container>
			</Box>
		</MainLayout>
	);
};

export default Contact;
