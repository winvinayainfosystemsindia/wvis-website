import React from 'react';
import {
	Box,
	Container,
	Typography,
	Grid,
	Card,
	CardContent,
	Button,
	Stack,
	Divider,
	useTheme,
	alpha
} from '@mui/material';
import {
	Groups,
	Dashboard,
	School,
	AssignmentInd,
	AutoGraph,
	ArrowForward,
	Work
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import MainLayout from '../../components/layout/MainLayout';

const WinVinayaMIS: React.FC = () => {
	const theme = useTheme();

	const features = [
		{
			title: 'End-to-End Tracking',
			description: 'Manage candidate profiles from initial contact, counselling, batch allocations, to training completion.',
			icon: <AssignmentInd fontSize="large" color="secondary" />
		},
		{
			title: 'Batch & Schedule Engine',
			description: 'Schedule batches, track student attendance, assign trainers, and organize curriculum milestones smoothly.',
			icon: <School fontSize="large" color="secondary" />
		},
		{
			title: 'Placement Management',
			description: 'Coordinate with corporate hiring partners, manage interview schedules, track selections, and post-placement status.',
			icon: <Work fontSize="large" color="secondary" />
		},
		{
			title: 'Role-Based Dashboards',
			description: 'Custom dashboards for Administrators, Program Managers, Trainers, and Placement Officers with secure RBAC.',
			icon: <Dashboard fontSize="large" color="secondary" />
		}
	];

	const lifecycleSteps = [
		{ step: '01', title: 'Enrollment', desc: 'Candidate registration, profile creation, and skill-fit counseling.' },
		{ step: '02', title: 'Training & Attendance', desc: 'Batch mapping, curriculum scheduling, daily attendance tracking, and trainer logs.' },
		{ step: '03', title: 'Assessments', desc: 'Conducting periodic quizzes, evaluations, and projects to verify industry readiness.' },
		{ step: '04', title: 'Placement & Feedback', desc: 'Interview scheduling, placement records, and employer feedback logs.' }
	];

	return (
		<MainLayout>
			<Box sx={{ bgcolor: 'background.default' }}>
				{/* 1. HERO SECTION */}
				<Box
					sx={{
						pt: { xs: 12, md: 16 },
						pb: { xs: 8, md: 12 },
						position: 'relative',
						overflow: 'hidden',
						background: `radial-gradient(circle at 90% 10%, ${alpha(theme.palette.secondary.main, 0.05)} 0%, transparent 40%)`
					}}
				>
					<Container maxWidth="lg">
						<Grid container spacing={6} alignItems="center">
							<Grid size={{ xs: 12, md: 7 }}>
								<Stack spacing={3}>
									<Box
										sx={{
											display: 'inline-flex',
											alignItems: 'center',
											gap: 1,
											px: 2,
											py: 0.75,
											borderRadius: '100px',
											bgcolor: alpha(theme.palette.secondary.main, 0.08),
											color: 'secondary.main',
											alignSelf: 'flex-start',
											border: `1px solid ${alpha(theme.palette.secondary.main, 0.15)}`
										}}
									>
										<Groups fontSize="small" />
										<Typography variant="caption" sx={{ fontWeight: 700, letterSpacing: 0.5 }}>
											CANDIDATE LIFECYCLE MANAGEMENT
										</Typography>
									</Box>

									<Typography
										variant="h1"
										sx={{
											fontSize: { xs: '2.5rem', md: '3.75rem' },
											fontWeight: 800,
											lineHeight: 1.1,
											letterSpacing: '-0.02em'
										}}
									>
										Streamline Your{' '}
										<Box component="span" className="gradient-text" sx={{ backgroundImage: theme.gradients.freshworks }}>
											Program Lifecycle
										</Box>
									</Typography>

									<Typography
										variant="body1"
										color="text.secondary"
										sx={{ fontSize: { xs: '1rem', md: '1.2rem' }, lineHeight: 1.8, maxWidth: '600px' }}
									>
										WinVinaya MIS is our custom-built candidate lifecycle management application. It provides complete operational visibility, helping training institutes, NGOs, and corporations track candidates from enrollment to employment.
									</Typography>

									<Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ pt: 1 }}>
										<Button
											component={Link}
											to="/contact"
											variant="contained"
											size="large"
											endIcon={<ArrowForward />}
											sx={{
												bgcolor: 'secondary.main',
												color: 'white',
												fontWeight: 700,
												px: 4,
												py: 1.75,
												borderRadius: 2,
												boxShadow: 'none',
												'&:hover': {
													boxShadow: `0 8px 24px ${alpha(theme.palette.secondary.main, 0.3)}`,
													transform: 'translateY(-2px)'
												},
												transition: 'all 0.3s'
											}}
										>
											Request a Demo
										</Button>
										<Button
											component={Link}
											to="/contact"
											variant="outlined"
											size="large"
											sx={{
												borderColor: theme.palette.divider,
												color: 'text.secondary',
												fontWeight: 700,
												px: 4,
												py: 1.75,
												borderRadius: 2,
												'&:hover': {
													borderColor: theme.palette.text.primary,
													bgcolor: alpha(theme.palette.text.primary, 0.02),
													transform: 'translateY(-2px)'
												},
												transition: 'all 0.3s'
											}}
										>
											Contact Sales
										</Button>
									</Stack>
								</Stack>
							</Grid>

							<Grid size={{ xs: 12, md: 5 }}>
								<Box
									sx={{
										p: 4,
										borderRadius: 4,
										bgcolor: 'background.paper',
										border: `2px solid ${theme.palette.divider}`,
										boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
										position: 'relative',
										'&::before': {
											content: '""',
											position: 'absolute',
											top: -10,
											right: -10,
											width: '100%',
											height: '100%',
											border: `1.5px dashed ${alpha(theme.palette.secondary.main, 0.3)}`,
											borderRadius: 4,
											zIndex: -1,
											pointerEvents: 'none'
										}
									}}
								>
									<Typography variant="h5" sx={{ fontWeight: 700, mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
										<AutoGraph color="secondary" /> Operational Statistics
									</Typography>
									<Divider sx={{ mb: 3 }} />
									<Grid container spacing={3}>
										<Grid size={{ xs: 6 }}>
											<Typography variant="h3" color="secondary.main" sx={{ fontWeight: 800 }}>10k+</Typography>
											<Typography variant="body2" color="text.secondary">Candidates Tracked</Typography>
										</Grid>
										<Grid size={{ xs: 6 }}>
											<Typography variant="h3" color="secondary.main" sx={{ fontWeight: 800 }}>98%</Typography>
											<Typography variant="body2" color="text.secondary">Placement Success</Typography>
										</Grid>
										<Grid size={{ xs: 6 }}>
											<Typography variant="h3" color="secondary.main" sx={{ fontWeight: 800 }}>500+</Typography>
											<Typography variant="body2" color="text.secondary">Active Batches</Typography>
										</Grid>
										<Grid size={{ xs: 6 }}>
											<Typography variant="h3" color="secondary.main" sx={{ fontWeight: 800 }}>50+</Typography>
											<Typography variant="body2" color="text.secondary">Corporate Partners</Typography>
										</Grid>
									</Grid>
								</Box>
							</Grid>
						</Grid>
					</Container>
				</Box>

				{/* 2. CORE CAPABILITIES */}
				<Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.light' }}>
					<Container maxWidth="lg">
						<Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
							<Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 600, letterSpacing: 2, mb: 1, display: 'block' }}>
								KEY CAPABILITIES
							</Typography>
							<Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
								Designed for Modern Program Operations
							</Typography>
							<Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
								Explore the features that replace fragmented worksheets and drive training operations from a unified cloud system.
							</Typography>
						</Box>

						<Grid container spacing={4}>
							{features.map((feature, i) => (
								<Grid size={{ xs: 12, sm: 6 }} key={i}>
									<Card
										sx={{
											height: '100%',
											borderRadius: 3,
											border: `1.5px solid ${theme.palette.divider}`,
											boxShadow: 'none',
											transition: 'all 0.3s ease',
											'&:hover': {
												borderColor: theme.palette.secondary.main,
												boxShadow: '0 10px 24px rgba(0,47,255,0.06)',
												transform: 'translateY(-4px)'
											}
										}}
									>
										<CardContent sx={{ p: 4 }}>
											<Box sx={{ mb: 2, p: 1.5, display: 'inline-flex', borderRadius: 2, bgcolor: alpha(theme.palette.secondary.main, 0.07) }}>
												{feature.icon}
											</Box>
											<Typography variant="h4" sx={{ fontSize: '1.25rem', fontWeight: 700, mb: 1.5 }}>
												{feature.title}
											</Typography>
											<Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
												{feature.description}
											</Typography>
										</CardContent>
									</Card>
								</Grid>
							))}
						</Grid>
					</Container>
				</Box>

				{/* 3. LIFECYCLE FLOW */}
				<Box sx={{ py: { xs: 8, md: 12 } }}>
					<Container maxWidth="lg">
						<Box sx={{ textAlign: 'center', mb: 8 }}>
							<Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
								Candidate Lifecycle Stepper
							</Typography>
							<Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
								Seamless transition through every critical milestone of training, tracking progress at each stage.
							</Typography>
						</Box>

						<Grid container spacing={3}>
							{lifecycleSteps.map((step, idx) => (
								<Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
									<Box
										sx={{
											p: 3,
											height: '100%',
											borderLeft: `3px solid ${theme.palette.secondary.main}`,
											bgcolor: 'background.paper',
											boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
											borderRadius: '0 12px 12px 0',
											position: 'relative'
										}}
									>
										<Typography variant="h3" color="secondary.main" sx={{ opacity: 0.15, fontWeight: 900, mb: 1 }}>
											{step.step}
										</Typography>
										<Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>
											{step.title}
										</Typography>
										<Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
											{step.desc}
										</Typography>
									</Box>
								</Grid>
							))}
						</Grid>
					</Container>
				</Box>

				{/* 4. CTA BANNER */}
				<Box
					sx={{
						py: 10,
						textAlign: 'center',
						background: theme.gradients.banner,
						color: 'white'
					}}
				>
					<Container maxWidth="md">
						<Typography variant="h2" sx={{ fontWeight: 800, mb: 3 }}>
							Transform Candidate Management
						</Typography>

						<Typography
							variant="h5"
							sx={{ mb: 6, opacity: 0.9, fontWeight: 400 }}
						>
							Say goodbye to spreadsheets and coordinate training operations effortlessly with WinVinaya MIS.
						</Typography>

						<Stack direction="row" spacing={3} justifyContent="center">
							<Button
								component={Link}
								to="/contact"
								variant="contained"
								size="large"
								sx={{
									bgcolor: 'white',
									color: 'primary.main',
									fontWeight: 700,
									px: 4,
									py: 1.75,
									borderRadius: 2,
									'&:hover': { bgcolor: alpha('#fff', 0.9) }
								}}
							>
								Request a Live Demo
							</Button>
						</Stack>
					</Container>
				</Box>
			</Box>
		</MainLayout>
	);
};

export default WinVinayaMIS;
