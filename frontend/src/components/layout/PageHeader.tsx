import React from 'react';
import { Box, Typography, Container, useTheme } from '@mui/material';

interface PageHeaderProps {
	title: string;
	subtitle: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
	const theme = useTheme();

	return (
		<Box
			sx={{
				pt: { xs: 8, md: 10 },
				pb: { xs: 6, md: 8 },
				textAlign: 'center',
				position: 'relative',
				overflow: 'hidden'
			}}
		>
			<Container maxWidth="md">
				<Typography
					variant="h2"
					sx={{
						fontWeight: 600,
						mb: 2,
						letterSpacing: '-0.02em',
						...theme.utils.gradientText,
						fontSize: { xs: '2.5rem', md: '3.5rem' },
						lineHeight: 1.2,
					}}
				>
					{title}
				</Typography>

				<Typography
					variant="body1"
					color="text.secondary"
					sx={{
						maxWidth: '700px',
						mx: 'auto',
						fontSize: { xs: '1rem', md: '1.25rem' },
						lineHeight: 1.6,
						fontWeight: 400
					}}
				>
					{subtitle}
				</Typography>

				{/* Decorative element */}
				<Box
					sx={{
						width: 80,
						height: 4,
						background: theme.gradients.freshworks,
						borderRadius: 2,
						mx: 'auto',
						mt: 4,
						opacity: 0.8
					}}
				/>
			</Container>

			{/* Subtle Background Glow */}
			<Box
				sx={{
					position: 'absolute',
					top: '-20%',
					left: '50%',
					transform: 'translateX(-50%)',
					width: '100%',
					height: '100%',
					background: `radial-gradient(circle, ${theme.palette.primary.main}08 0%, transparent 70%)`,
					zIndex: -1,
					pointerEvents: 'none'
				}}
			/>
		</Box>
	);
};

export default PageHeader;
