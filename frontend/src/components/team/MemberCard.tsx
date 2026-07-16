import React from 'react';
import { Card, Box, CardContent, Typography, alpha, useTheme } from '@mui/material';
import { type TeamMember } from '../../data/team/teamData';

interface MemberCardProps {
	member: TeamMember;
	onClick: (member: TeamMember) => void;
}

const MemberCard: React.FC<MemberCardProps> = ({ member, onClick }) => {
	const theme = useTheme();

	return (
		<Card
			onClick={() => onClick(member)}
			sx={{
				height: '100%',
				position: 'relative',
				overflow: 'hidden',
				borderRadius: 4,
				cursor: 'pointer',
				transition: 'all 0.3s ease-out',
				bgcolor: 'background.paper',
				border: '1px solid',
				borderColor: 'divider',
				boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.01), 0 2px 4px -1px rgba(0, 0, 0, 0.01)',
				display: 'flex',
				flexDirection: 'column',
				'&:hover': {
					transform: 'translateY(-6px)',
					boxShadow: `0 20px 25px -5px ${alpha(theme.palette.primary.main, 0.1)}, 0 10px 10px -5px ${alpha(theme.palette.primary.main, 0.04)}`,
					borderColor: alpha(theme.palette.primary.main, 0.3),
					'& .member-image': {
						transform: 'scale(1.03)',
					}
				}
			}}
		>
			<Box sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', flexGrow: 1 }}>
				{/* Image Container - Rounded Square */}
				<Box
					sx={{
						position: 'relative',
						mb: 3,
						width: 180,
						height: 180,
						borderRadius: 4,
						overflow: 'hidden',
						boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
					}}
				>
					<Box
						component="img"
						src={member.image}
						alt={member.name}
						className="member-image"
						sx={{
							width: '100%',
							height: '100%',
							objectFit: 'cover',
							transition: 'transform 0.5s ease',
							bgcolor: 'grey.100',
							display: 'block'
						}}
					/>
				</Box>

				<CardContent sx={{ p: '0 !important', width: '100%', flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
					{/* Name Container - Fixed Min Height for Alignment */}
					<Box sx={{ minHeight: '2.5rem', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', width: '100%' }}>
						<Typography variant="h5" sx={{
							fontWeight: 700,
							mb: 0.5,
							fontSize: '1.25rem',
							lineHeight: 1.2
						}}>
							{member.name}
						</Typography>
					</Box>

					{/* Role Container - Fixed Min Height for Alignment */}
					<Box sx={{ minHeight: '2rem', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', width: '100%', mb: 1 }}>
						<Typography
							variant="body2"
							sx={{
								fontWeight: 600,
								textTransform: 'uppercase',
								fontSize: '0.75rem',
								letterSpacing: '0.05em',
								color: 'primary.main',
							}}
						>
							{member.role}
						</Typography>
					</Box>
				</CardContent>
			</Box>
		</Card>
	);
};

export default MemberCard;
