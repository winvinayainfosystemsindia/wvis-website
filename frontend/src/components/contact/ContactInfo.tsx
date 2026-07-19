import React from 'react';
import { Box, Stack, Typography, useTheme, alpha } from '@mui/material';
import { Email, Phone, LocationOn, Schedule } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { CONTACT_INFO, type ContactInfoItem } from '../../data/contact/contactInfoData';

const ICONS: Record<ContactInfoItem['icon'], React.ReactNode> = {
	email: <Email />,
	phone: <Phone />,
	location: <LocationOn />,
	time: <Schedule />,
};

const ContactInfo: React.FC = () => {
	const theme = useTheme();

	return (
		<Stack spacing={3}>
			{CONTACT_INFO.map((item) => (
				<Stack key={item.title} direction="row" spacing={2} alignItems="flex-start">
					<Box
						sx={{
							width: 48,
							height: 48,
							flexShrink: 0,
							borderRadius: 2,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							background: theme.gradients.freshworks,
							color: '#fff',
						}}
					>
						{ICONS[item.icon]}
					</Box>
					<Box>
						<Typography sx={{ fontWeight: 700, mb: 0.5 }}>{item.title}</Typography>
						{item.lines.map((line) => (
							<Typography key={line} variant="body2" color="text.secondary">
								{line}
							</Typography>
						))}
					</Box>
				</Stack>
			))}

			<Box
				sx={{
					mt: 2,
					p: 3,
					borderRadius: 3,
					border: `1px solid ${alpha(theme.palette.divider, 0.6)}`,
					bgcolor: alpha(theme.palette.primary.main, 0.03),
				}}
			>
				<Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
					Looking for a live walkthrough of our products instead? {' '}
					<Box component={RouterLink} to="/demo" sx={{ color: 'primary.main', fontWeight: 600, textDecoration: 'none' }}>
						Request a demo
					</Box>{' '}
					and our team will set up a personalised session.
				</Typography>
			</Box>
		</Stack>
	);
};

export default ContactInfo;
