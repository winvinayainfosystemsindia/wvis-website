import React from 'react';
import { Grid } from '@mui/material';
import { LEADERSHIP_DATA, type TeamMember } from '../../data/team/teamData';
import SectionTitle from './SectionTitle';
import MemberCard from './MemberCard';

interface LeadershipSectionProps {
	onMemberClick: (member: TeamMember) => void;
}

const LeadershipSection: React.FC<LeadershipSectionProps> = ({ onMemberClick }) => {
	return (
		<>
			<SectionTitle title="Leadership" subtitle="Guiding our vision with decades of industry expertise." />
			<Grid container spacing={4} sx={{ mb: 12 }}>
				{LEADERSHIP_DATA.map((member) => (
					<Grid size={{ xs: 12, sm: 6, md: 3 }} key={member.id}>
						<MemberCard member={member} onClick={onMemberClick} />
					</Grid>
				))}
			</Grid>
		</>
	);
};

export default LeadershipSection;
