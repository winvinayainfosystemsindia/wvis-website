import React from 'react';
import { Grid } from '@mui/material';
import { CONSULTANTS_DATA, type TeamMember } from '../../data/team/teamData';
import SectionTitle from './SectionTitle';
import MemberCard from './MemberCard';

interface ConsultantsSectionProps {
	onMemberClick: (member: TeamMember) => void;
}

const ConsultantsSection: React.FC<ConsultantsSectionProps> = ({ onMemberClick }) => {
	return (
		<>
			<SectionTitle title="Consultants" subtitle="Specialized advisors bringing deep domain knowledge." />
			<Grid container spacing={4} justifyContent="center">
				{CONSULTANTS_DATA.map((member) => (
					<Grid size={{ xs: 12, sm: 6, md: 4 }} key={member.id}>
						<MemberCard member={member} onClick={onMemberClick} />
					</Grid>
				))}
			</Grid>
		</>
	);
};

export default ConsultantsSection;
