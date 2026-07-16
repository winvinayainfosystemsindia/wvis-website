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
	AccessibilityNew,
	BugReport,
	Speed,
	AutoAwesome,
	Shield,
	CheckCircle,
	Description,
	ArrowForward
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import MainLayout from '../../components/layout/MainLayout';

const A11ySenseAI: React.FC = () => {
	const theme = useTheme();

	const features = [
		{
			title: 'Automated WCAG Scanning',
			description: 'Scans your complete website structure, DOM tree, and stylesheets instantly to identify WCAG 2.1 & 2.2 violations.',
			icon: <BugReport fontSize="large" color="primary" />
		},
		{
			title: 'Real-time Accessibility Score',
			description: 'Receive an immediate digital health score based on critical parameters like contrast, alt text, screen reader tags, and keyboard access.',
			icon: <Speed fontSize="large" color="primary" />
		},
		{
			title: 'AI Remediation Assistance',
			description: 'Our proprietary AI doesn\'t just find bugs - it provides developers with precise, contextual source-code suggestions to fix errors.',
			icon: <AutoAwesome fontSize="large" color="primary" />
		},
		{
			title: 'Detailed Audits & Reports',
			description: 'Generate compliance-ready PDF and Excel reports mapping all findings directly to official WCAG success criteria for auditing.',
			icon: <Description fontSize="large" color="primary" />
		}
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
						background: `radial-gradient(circle at 10% 20%, ${alpha(theme.palette.primary.main, 0.05)} 0%, transparent 40%)`
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
											bgcolor: alpha(theme.palette.primary.main, 0.08),
											color: 'primary.main',
											alignSelf: 'flex-start',
											border: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`
										}}
									>
										<AccessibilityNew fontSize="small" />
										<Typography variant="caption" sx={{ fontWeight: 700, letterSpacing: 0.5 }}>
											AI-POWERED ACCESSIBILITY
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
										Build Inclusive{' '}
										<Box component="span" className="gradient-text">
											Web Experiences
										</Box>
									</Typography>

									<Typography
										variant="body1"
										color="text.secondary"
										sx={{ fontSize: { xs: '1rem', md: '1.2rem' }, lineHeight: 1.8, maxWidth: '600px' }}
									>
										A11ySense AI is our advanced accessibility auditing platform designed to scan, diagnose, and guide remediation of digital spaces—making the web accessible to everyone, everywhere.
									</Typography>

									<Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ pt: 1 }}>
										<Button
											component={Link}
											to="/contact"
											variant="contained"
											size="large"
											endIcon={<ArrowForward />}
											sx={{
												bgcolor: 'primary.main',
												color: 'white',
												fontWeight: 700,
												px: 4,
												py: 1.75,
												borderRadius: 2,
												boxShadow: 'none',
												'&:hover': {
													boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.3)}`,
													transform: 'translateY(-2px)'
												},
												transition: 'all 0.3s'
											}}
										>
											Schedule an Audit Scan
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
											Request Live Demo
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
											border: `1.5px dashed ${alpha(theme.palette.primary.main, 0.3)}`,
											borderRadius: 4,
											zIndex: -1,
											pointerEvents: 'none'
										}
									}}
								>
									<Typography variant="h5" sx={{ fontWeight: 700, mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
										<Shield color="success" /> Audit Health Score
									</Typography>
									<Divider sx={{ mb: 3 }} />
									<Stack spacing={2.5}>
										<Box>
											<Stack direction="row" justifyContent="space-between" sx={{ mb: 1 }}>
												<Typography variant="body2" sx={{ fontWeight: 600 }}>Contrast & Readability</Typography>
												<Typography variant="body2" color="success.main" sx={{ fontWeight: 700 }}>96%</Typography>
											</Stack>
											<Box sx={{ width: '100%', height: 8, bgcolor: alpha(theme.palette.divider, 0.6), borderRadius: 4, overflow: 'hidden' }}>
												<Box sx={{ width: '96%', height: '100%', bgcolor: 'success.main' }} />
											</Box>
										</Box>
										<Box>
											<Stack direction="row" justifyContent="space-between" sx={{ mb: 1 }}>
												<Typography variant="body2" sx={{ fontWeight: 600 }}>Screen Reader Accessibility (ARIA)</Typography>
												<Typography variant="body2" color="success.main" sx={{ fontWeight: 700 }}>92%</Typography>
											</Stack>
											<Box sx={{ width: '100%', height: 8, bgcolor: alpha(theme.palette.divider, 0.6), borderRadius: 4, overflow: 'hidden' }}>
												<Box sx={{ width: '92%', height: '100%', bgcolor: 'success.main' }} />
											</Box>
										</Box>
										<Box>
											<Stack direction="row" justifyContent="space-between" sx={{ mb: 1 }}>
												<Typography variant="body2" sx={{ fontWeight: 600 }}>Keyboard Navigation</Typography>
												<Typography variant="body2" color="warning.main" sx={{ fontWeight: 700 }}>82%</Typography>
											</Stack>
											<Box sx={{ width: '100%', height: 8, bgcolor: alpha(theme.palette.divider, 0.6), borderRadius: 4, overflow: 'hidden' }}>
												<Box sx={{ width: '82%', height: '100%', bgcolor: 'warning.main' }} />
											</Box>
										</Box>
										<Box>
											<Stack direction="row" justifyContent="space-between" sx={{ mb: 1 }}>
												<Typography variant="body2" sx={{ fontWeight: 600 }}>Semantic HTML Layout</Typography>
												<Typography variant="body2" color="success.main" sx={{ fontWeight: 700 }}>94%</Typography>
											</Stack>
											<Box sx={{ width: '100%', height: 8, bgcolor: alpha(theme.palette.divider, 0.6), borderRadius: 4, overflow: 'hidden' }}>
												<Box sx={{ width: '94%', height: '100%', bgcolor: 'success.main' }} />
											</Box>
										</Box>
									</Stack>
								</Box>
							</Grid>
						</Grid>
					</Container>
				</Box>

				{/* 2. CORE CAPABILITIES */}
				<Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.light' }}>
					<Container maxWidth="lg">
						<Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
							<Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 600, letterSpacing: 2, mb: 1, display: 'block' }}>
								PLATFORM CAPABILITIES
							</Typography>
							<Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
								Features Tailored for Accessibility Auditing
							</Typography>
							<Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
								Explore how A11ySense AI scans, categorizes, and guides remediation workflows to comply with WCAG 2.1 AA benchmarks.
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
												borderColor: theme.palette.primary.main,
												boxShadow: '0 10px 24px rgba(133,18,224,0.06)',
												transform: 'translateY(-4px)'
											}
										}}
									>
										<CardContent sx={{ p: 4 }}>
											<Box sx={{ mb: 2, p: 1.5, display: 'inline-flex', borderRadius: 2, bgcolor: alpha(theme.palette.primary.main, 0.07) }}>
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

				{/* 3. COMPLIANCE BENEFITS */}
				<Box sx={{ py: { xs: 8, md: 12 } }}>
					<Container maxWidth="md">
						<Box sx={{ textAlign: 'center', mb: 6 }}>
							<Typography variant="h3" sx={{ fontWeight: 700, mb: 3 }}>
								Why A11ySense AI is Indispensable
							</Typography>
						</Box>

						<Stack spacing={4}>
							{[
								{
									title: 'Legal Protection & Audits',
									desc: 'Ensure compliance with digital inclusion legislation such as ADA (Americans with Disabilities Act), Section 508, and EU Web Accessibility guidelines, mitigating risk of litigation.'
								},
								{
									title: 'Boost SEO & User Retention',
									desc: 'Search engines reward clean semantic HTML structure. Accessibility optimization significantly enhances usability and boosts search visibility.'
								},
								{
									title: 'Broaden Audience Reach',
									desc: 'Over 15% of the global population has some form of disability. By designing an accessible digital storefront, you open your business to millions of underserved users.'
								}
							].map((item, idx) => (
								<Stack key={idx} direction="row" spacing={3} alignItems="flex-start">
									<CheckCircle color="success" sx={{ fontSize: 24, mt: 0.5 }} />
									<Box>
										<Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>{item.title}</Typography>
										<Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>{item.desc}</Typography>
									</Box>
								</Stack>
							))}
						</Stack>
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
							Achieve Perfect WCAG Compliance
						</Typography>

						<Typography
							variant="h5"
							sx={{ mb: 6, opacity: 0.9, fontWeight: 400 }}
						>
							Request a customized scan report for your website today and start your journey towards digital accessibility.
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
								Get Free Audit Quote
							</Button>
						</Stack>
					</Container>
				</Box>
			</Box>
		</MainLayout>
	);
};

export default A11ySenseAI;
