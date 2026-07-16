import React from 'react';
import { Box, CircularProgress, Typography, alpha } from '@mui/material';

const LoadingSpinner: React.FC = () => {
	return (
		<Box
			sx={{
				height: '100vh',
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				bgcolor: alpha('#fff', 0.8),
				backdropFilter: 'blur(10px)',
				position: 'fixed',
				top: 0,
				left: 0,
				zIndex: 9999
			}}
		>
			<Box sx={{ position: 'relative', display: 'flex', mb: 3 }}>
				<CircularProgress
					variant="determinate"
					sx={{ color: (theme) => alpha(theme.palette.primary.main, 0.1) }}
					size={80}
					thickness={4}
					value={100}
				/>
				<CircularProgress
					variant="indeterminate"
					disableShrink
					sx={{
						color: 'primary.main',
						animationDuration: '550ms',
						position: 'absolute',
						left: 0,
						'& .MuiCircularProgress-circle': {
							strokeLinecap: 'round',
						},
					}}
					size={80}
					thickness={4}
				/>
			</Box>
			<Typography
				variant="h6"
				sx={{
					fontWeight: 700,
					color: 'primary.main',
					letterSpacing: 1,
					textTransform: 'uppercase'
				}}
			>
				Loading...
			</Typography>
		</Box>
	);
};

export default LoadingSpinner;
