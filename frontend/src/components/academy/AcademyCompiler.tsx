import React from 'react';
import {
	Box,
	Container,
	Typography,
	Grid,
	Button,
	alpha,
	useTheme
} from '@mui/material';
import TerminalAnimation from './TerminalAnimation';

const AcademyCompiler: React.FC = () => {
	const theme = useTheme();

	return (
		<Box sx={{ py: { xs: 10, md: 15 }, bgcolor: alpha(theme.palette.primary.main, 0.02) }}>
			<Container maxWidth="lg">
				<Grid container spacing={8} alignItems="center" direction={{ xs: 'column-reverse', md: 'row' }}>
					{/* Left Column: Animation */}
					<Grid size={{ xs: 12, md: 7 }}>
						<TerminalAnimation />
					</Grid>

					{/* Right Column: Text */}
					<Grid size={{ xs: 12, md: 5 }}>
						<Typography variant="h2" sx={{ fontWeight: 600, mb: 3 }}>
							Built-in <br />
							<Box component="span" sx={{ ...theme.utils.gradientText }}>Code Compiler</Box>
						</Typography>
						<Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.25rem', lineHeight: 1.8, mb: 4 }}>
							Bridge the gap between theory and practice. Our platform includes an integrated environment to write, run, and debug code without leaving your browser.
						</Typography>
						<Button
							variant="outlined"
							size="large"
							sx={{
								borderColor: theme.palette.primary.main,
								color: theme.palette.primary.main,
								'&:hover': {
									borderColor: theme.palette.primary.dark,
									bgcolor: alpha(theme.palette.primary.main, 0.04)
								}
							}}
						>
							See Playground
						</Button>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default AcademyCompiler;
