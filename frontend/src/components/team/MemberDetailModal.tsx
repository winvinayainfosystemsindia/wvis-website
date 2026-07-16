import React from 'react';
import { Dialog, Box, IconButton, Grid, Typography, Divider, Stack, alpha, useTheme } from '@mui/material';
import { Close, LinkedIn, Email, Twitter, Instagram } from '@mui/icons-material';
import type { TeamMember } from '../../data/team/teamData';

interface MemberDetailModalProps {
	open: boolean;
	onClose: () => void;
	member: TeamMember | null;
}

const MemberDetailModal: React.FC<MemberDetailModalProps> = ({ open, onClose, member }) => {
	const theme = useTheme();
	if (!member) return null;

	return (
		<Dialog
			open={open}
			onClose={onClose}
			maxWidth="md"
			fullWidth
			PaperProps={{
				sx: {
					borderRadius: 3,
					overflow: 'hidden',
					maxWidth: 900,
					boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
				}
			}}
		>
			<Box sx={{ position: 'relative' }}>
				<IconButton
					onClick={onClose}
					sx={{
						position: 'absolute',
						right: 16,
						top: 16,
						zIndex: 10,
						bgcolor: 'background.paper',
						color: 'text.secondary',
						boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
						'&:hover': {
							bgcolor: 'grey.100',
							color: 'text.primary'
						}
					}}
				>
					<Close />
				</IconButton>

				<Grid container>
					{/* Left Side: Image */}
					<Grid size={{ xs: 12, md: 5 }} sx={{ bgcolor: 'grey.50', p: 0 }}>
						<Box
							component="img"
							src={member.image}
							alt={member.name}
							sx={{
								width: '100%',
								height: '100%',
								minHeight: { xs: 300, md: 450 },
								objectFit: 'cover',
								display: 'block'
							}}
						/>
					</Grid>

					{/* Right Side: Content */}
					<Grid size={{ xs: 12, md: 7 }}>
						<Box sx={{ p: { xs: 4, md: 6 }, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
							<Box sx={{ minHeight: '2.5rem', display: 'flex', alignItems: 'flex-start', width: '100%' }}>
								<Typography variant="h5" sx={{
									fontWeight: 600,
									mb: 0.5,
									fontSize: '1.25rem',
									lineHeight: 1.2
								}}>
									{member.name}
								</Typography>
							</Box>
							<Typography
								variant="subtitle1"
								sx={{
									fontWeight: 600,
									mb: 3,
									textTransform: 'uppercase',
									fontSize: '0.875rem',
									letterSpacing: '0.05em',
									color: 'primary.main',
									width: 'fit-content'
								}}
							>
								{member.role}
							</Typography>

							<Divider sx={{ mb: 3, borderColor: alpha(theme.palette.divider, 0.6) }} />

							<Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: '1.05rem', lineHeight: 1.8, mb: 4 }}>
								{member.bio || "A valued expert contributing to our mission of excellence and inclusion."}
							</Typography>

							{/* Social Links */}
							{member.socialLinks && (
								<Box sx={{ mt: 'auto' }}>
									<Typography
										variant="subtitle2"
										sx={{
											mb: 2,
											fontWeight: 700,
											color: 'text.secondary',
											textTransform: 'uppercase',
											letterSpacing: '0.1em',
											fontSize: '0.75rem'
										}}
									>
										Connect with {member.name.split(' ')[0]}
									</Typography>
									<Stack direction="row" spacing={2} alignItems="center">
										{member.socialLinks.linkedin && (
											<IconButton
												component="a"
												href={member.socialLinks.linkedin}
												target="_blank"
												size="medium"
												sx={{
													border: '1px solid',
													borderColor: alpha('#0077b5', 0.2),
													color: '#0077b5',
													transition: 'all 0.2s',
													'&:hover': {
														bgcolor: alpha('#0077b5', 0.1),
														borderColor: '#0077b5',
														transform: 'translateY(-2px)'
													}
												}}
											>
												<LinkedIn />
											</IconButton>
										)}
										{member.socialLinks.email && (
											<IconButton
												component="a"
												href={member.socialLinks.email}
												size="medium"
												sx={{
													border: '1px solid',
													borderColor: alpha(theme.palette.text.secondary, 0.2),
													color: 'text.secondary',
													transition: 'all 0.2s',
													'&:hover': {
														bgcolor: alpha(theme.palette.text.secondary, 0.1),
														borderColor: 'text.primary',
														color: 'text.primary',
														transform: 'translateY(-2px)'
													}
												}}
											>
												<Email />
											</IconButton>
										)}
										{member.socialLinks.twitter && (
											<IconButton
												component="a"
												href={member.socialLinks.twitter}
												target="_blank"
												size="medium"
												sx={{
													border: '1px solid',
													borderColor: alpha('#1DA1F2', 0.2),
													color: '#1DA1F2',
													transition: 'all 0.2s',
													'&:hover': {
														bgcolor: alpha('#1DA1F2', 0.1),
														borderColor: '#1DA1F2',
														transform: 'translateY(-2px)'
													}
												}}
											>
												<Twitter />
											</IconButton>
										)}
										{member.socialLinks.instagram && (
											<IconButton
												component="a"
												href={member.socialLinks.instagram}
												target="_blank"
												size="medium"
												sx={{
													border: '1px solid',
													borderColor: alpha('#E4405F', 0.2),
													color: '#E4405F',
													transition: 'all 0.2s',
													'&:hover': {
														bgcolor: alpha('#E4405F', 0.1),
														borderColor: '#E4405F',
														transform: 'translateY(-2px)'
													}
												}}
											>
												<Instagram />
											</IconButton>
										)}
									</Stack>
								</Box>
							)}
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Dialog>
	);
};

export default MemberDetailModal;
