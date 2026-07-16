import React from 'react';
import { Box, Container, Typography, Stack, Button, alpha, useTheme } from '@mui/material';

const AcademyCta: React.FC = () => {
	const theme = useTheme();

	return (
		<Box
			sx={{
				py: 10,
				textAlign: 'center',
				background: theme.gradients.banner,
				color: 'white'
			}}
		>
			<Container maxWidth="md">
				<Typography variant="h2" sx={{ fontWeight: 800, mb: 3 }}>
					Ready to Start Your Journey?
				</Typography>

				<Typography
					variant="h5"
					sx={{ mb: 6, opacity: 0.9, fontWeight: 400 }}
				>
					Join thousands of learners mastering technology with NammAcademy.
				</Typography>

				<Stack direction="row" spacing={3} justifyContent="center">
					<Button
						variant="contained"
						size="large"
						sx={{
							bgcolor: 'white',
							color: 'primary.main',
							fontWeight: 700,
							'&:hover': { bgcolor: alpha('#fff', 0.9) }
						}}
					>
						Get Started for Free
					</Button>

					<Button
						variant="outlined"
						size="large"
						sx={{
							color: 'white',
							borderColor: 'white',
							fontWeight: 700,
							'&:hover': {
								borderColor: 'white',
								bgcolor: alpha('#fff', 0.1)
							}
						}}
					>
						View All Courses
					</Button>
				</Stack>
			</Container>
		</Box>
	);
};

export default AcademyCta;
