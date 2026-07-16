import React from 'react';
import { Box, Typography } from '@mui/material';

interface SectionTitleProps {
	title: string;
	subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => (
	<Box sx={{ mb: 8, textAlign: 'center', position: 'relative' }}>
		<Typography variant="h3" component="h2" sx={{ fontWeight: 700, mb: 1.5, letterSpacing: '-0.01em' }}>
			{title}
		</Typography>
		{subtitle && (
			<Typography variant="h6" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', fontWeight: 400, opacity: 0.85 }}>
				{subtitle}
			</Typography>
		)}
		<Box sx={{
			width: 40,
			height: 4,
			background: (theme) => theme.gradients.freshworks,
			mx: 'auto',
			mt: 2.5,
			borderRadius: 4
		}} />
	</Box>
);

export default SectionTitle;
