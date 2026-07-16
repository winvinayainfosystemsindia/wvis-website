import React from 'react';
import { Grid } from '@mui/material';
import { EXPERTS_DATA, type TeamMember } from '../../data/team/teamData';
import SectionTitle from './SectionTitle';
import MemberCard from './MemberCard';

interface ExpertsSectionProps {
	onMemberClick: (member: TeamMember) => void;
}

const ExpertsSection: React.FC<ExpertsSectionProps> = ({ onMemberClick }) => {
	return (
		<>
			<SectionTitle title="Our Experts" subtitle="The architects and engineers building our future." />
			<Grid container spacing={4} justifyContent="center" sx={{ mb: 12 }}>
				{EXPERTS_DATA.map((member) => (
					<Grid size={{ xs: 12, sm: 6, md: 4 }} key={member.id}>
						<MemberCard member={member} onClick={onMemberClick} />
					</Grid>
				))}
			</Grid>
		</>
	);
};

export default ExpertsSection;
