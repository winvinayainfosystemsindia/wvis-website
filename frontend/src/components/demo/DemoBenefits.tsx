import React from 'react';
import { Stack, Box, Typography, useTheme } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { DEMO_BENEFITS } from '../../data/demo/demoData';

const DemoBenefits: React.FC = () => {
	const theme = useTheme();

	return (
		<Box>
			<Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
				What to expect
			</Typography>
			<Stack spacing={3}>
				{DEMO_BENEFITS.map((benefit) => (
					<Stack key={benefit.title} direction="row" spacing={2} alignItems="flex-start">
						<CheckCircle sx={{ color: theme.palette.primary.main, mt: '2px' }} />
						<Box>
							<Typography sx={{ fontWeight: 700, mb: 0.5 }}>{benefit.title}</Typography>
							<Typography variant="body2" color="text.secondary">
								{benefit.description}
							</Typography>
						</Box>
					</Stack>
				))}
			</Stack>
		</Box>
	);
};

export default DemoBenefits;
