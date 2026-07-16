import React, { useState } from 'react';
import { Container, Box, useTheme, alpha } from '@mui/material';
import MainLayout from '../components/layout/MainLayout';
import { type TeamMember } from '../data/team/teamData';
import LeadershipSection from '../components/team/LeadershipSection';
import ExpertsSection from '../components/team/ExpertsSection';
import ConsultantsSection from '../components/team/ConsultantsSection';
import MemberDetailModal from '../components/team/MemberDetailModal';
import PageHeader from '../components/layout/PageHeader';
import { PAGE_HEADERS } from '../data/shared/pageHeaderData';

const OurTeam: React.FC = () => {
	const theme = useTheme();
	const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

	const handleMemberClick = (member: TeamMember) => {
		setSelectedMember(member);
	};

	const handleCloseModal = () => {
		setSelectedMember(null);
	};

	return (
		<MainLayout>
			<Box sx={{
				py: { xs: 8, md: 5 },
				background: `linear-gradient(180deg, ${theme.palette.background.default} 0%, ${alpha(theme.palette.primary.main, 0.02)} 100%)`
			}}>
				<Container maxWidth="lg">
					{/* Page Header */}
					<PageHeader
						title={PAGE_HEADERS.ourTeam.title}
						subtitle={PAGE_HEADERS.ourTeam.subtitle}
					/>

					{/* Leadership Section */}
					<LeadershipSection onMemberClick={handleMemberClick} />

					{/* Experts Section */}
					<ExpertsSection onMemberClick={handleMemberClick} />

					{/* Consultants Section */}
					<ConsultantsSection onMemberClick={handleMemberClick} />
				</Container>
			</Box>

			{/* Member Detail Modal */}
			<MemberDetailModal
				open={Boolean(selectedMember)}
				onClose={handleCloseModal}
				member={selectedMember}
			/>
		</MainLayout>
	);
};

export default OurTeam;
