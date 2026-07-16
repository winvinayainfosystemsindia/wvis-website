import React from 'react';
import { Box, Container, Typography, Button, Stack, useTheme, alpha } from '@mui/material';
import { Link } from 'react-router-dom';

interface ServiceCtaProps {
	title: string;
	accentColor: string;
}

const ServiceCta: React.FC<ServiceCtaProps> = ({ title, accentColor }) => {
	const theme = useTheme();
	const baseColor = accentColor || theme.palette.primary.main;

	return (
		<Box
			sx={{
				py: 10,
				textAlign: 'center',
				background: `linear-gradient(135deg, ${baseColor} 0%, ${theme.palette.secondary.main} 100%)`,
				color: 'white',
				position: 'relative',
				overflow: 'hidden'
			}}
		>
			<Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
				<Typography variant="h2" sx={{ fontWeight: 800, mb: 3, fontSize: { xs: '2rem', md: '2.75rem' } }}>
					Ready to Transform Your Operations?
				</Typography>

				<Typography
					variant="h5"
					sx={{ mb: 6, opacity: 0.9, fontWeight: 400, fontSize: { xs: '1rem', md: '1.25rem' } }}
				>
					Contact our expert team to learn more about how our {title} services can benefit your organization.
				</Typography>

				<Stack direction="row" spacing={3} justifyContent="center">
					<Button
						component={Link}
						to="/contact"
						variant="contained"
						size="large"
						sx={{
							bgcolor: 'white',
							color: baseColor,
							fontWeight: 700,
							px: 4,
							py: 1.75,
							borderRadius: 2,
							'&:hover': {
								bgcolor: alpha('#fff', 0.95),
								transform: 'translateY(-2px)'
							},
							transition: 'all 0.2s ease'
						}}
					>
						Get Started Today
					</Button>
				</Stack>
			</Container>

			{/* Decorative background overlay */}
			<Box sx={{
				position: 'absolute',
				top: '-30%',
				left: '50%',
				transform: 'translateX(-50%)',
				width: '100%',
				height: '200%',
				background: `radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 60%)`,
				pointerEvents: 'none'
			}} />
		</Box>
	);
};

export default ServiceCta;
