import React from 'react';
import { Box, Typography, alpha, useTheme } from '@mui/material';
import {
	Dashboard as DbIcon,
	Code as CodeIcon,
	BugReport as BugIcon,
	AccessibilityNew as A11yIcon,
	AutoAwesome as AiIcon,
	Terminal as TermIcon,
	Assessment as GraphIcon
} from '@mui/icons-material';

interface ServiceIllustrationProps {
	type: string;
	accentColor: string;
}

const ServiceIllustration: React.FC<ServiceIllustrationProps> = ({ type, accentColor }) => {
	const theme = useTheme();
	const baseColor = accentColor || theme.palette.primary.main;

	// Render a specific visual layout based on the illustration slug
	const renderContent = () => {
		switch (type) {
			case 'power-platform':
				return (
					<Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
						{/* Mock Dashboard Window */}
						<Box sx={{
							position: 'absolute',
							top: '15%',
							left: '10%',
							width: '80%',
							height: '70%',
							bgcolor: 'background.paper',
							borderRadius: 3,
							border: `2px solid ${theme.palette.divider}`,
							boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
							p: 2,
							overflow: 'hidden'
						}}>
							<Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
								<Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#ef4444' }} />
								<Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#eab308' }} />
								<Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#22c55e' }} />
							</Box>
							<Box sx={{ display: 'flex', gap: 2, height: '80%' }}>
								<Box sx={{ width: '30%', height: '100%', bgcolor: alpha(baseColor, 0.05), borderRadius: 2, p: 1 }}>
									<Box sx={{ width: '80%', height: 12, bgcolor: alpha(baseColor, 0.2), mb: 1, borderRadius: 1 }} />
									<Box sx={{ width: '50%', height: 8, bgcolor: alpha(baseColor, 0.1), borderRadius: 1 }} />
								</Box>
								<Box sx={{ width: '70%', display: 'flex', flexDirection: 'column', gap: 1.5 }}>
									<Box sx={{ display: 'flex', gap: 1.5, height: '50%' }}>
										<Box sx={{ flex: 1, bgcolor: alpha(baseColor, 0.05), borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
											<GraphIcon sx={{ color: baseColor, fontSize: '2.5rem' }} />
										</Box>
										<Box sx={{ flex: 1, bgcolor: alpha(baseColor, 0.05), borderRadius: 2, display: 'flex', flexDirection: 'column', p: 1, justifyContent: 'space-around' }}>
											<Box sx={{ width: '90%', height: 8, bgcolor: alpha(baseColor, 0.2), borderRadius: 1 }} />
											<Box sx={{ width: '70%', height: 8, bgcolor: alpha(baseColor, 0.2), borderRadius: 1 }} />
										</Box>
									</Box>
									<Box sx={{ flex: 1, bgcolor: alpha(baseColor, 0.05), borderRadius: 2, p: 1.5 }}>
										<Box sx={{ display: 'flex', alignItems: 'flex-end', height: '100%', gap: 1.5 }}>
											<Box sx={{ width: 16, height: '40%', bgcolor: baseColor, borderRadius: '4px 4px 0 0' }} />
											<Box sx={{ width: 16, height: '75%', bgcolor: baseColor, borderRadius: '4px 4px 0 0', opacity: 0.8 }} />
											<Box sx={{ width: 16, height: '90%', bgcolor: baseColor, borderRadius: '4px 4px 0 0', opacity: 0.6 }} />
											<Box sx={{ width: 16, height: '60%', bgcolor: baseColor, borderRadius: '4px 4px 0 0', opacity: 0.4 }} />
										</Box>
									</Box>
								</Box>
							</Box>
						</Box>
					</Box>
				);

			case 'qa-testing':
				return (
					<Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
						{/* Automated Code Runner Mock */}
						<Box sx={{
							position: 'absolute',
							top: '15%',
							left: '10%',
							width: '80%',
							height: '70%',
							bgcolor: '#0f172a',
							borderRadius: 3,
							boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
							p: 2,
							fontFamily: 'monospace',
							color: '#38bdf8',
							overflow: 'hidden',
							border: '1px solid #334155'
						}}>
							<Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, borderBottom: '1px solid #334155', pb: 1 }}>
								<Typography variant="caption" sx={{ color: '#94a3b8', fontWeight: 'bold' }}>playwright-test.spec.ts</Typography>
								<Box sx={{ display: 'flex', gap: 0.5 }}>
									<Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#ef4444' }} />
									<Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#eab308' }} />
									<Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#22c55e' }} />
								</Box>
							</Box>
							<Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, fontSize: '0.75rem' }}>
								<Box sx={{ color: '#4ade80' }}>✓ test('should load dashboard links') - 120ms</Box>
								<Box sx={{ color: '#4ade80' }}>✓ test('should submit compliance form') - 450ms</Box>
								<Box sx={{ color: '#fb7185', display: 'flex', alignItems: 'center', gap: 1 }}>
									<span>✗ test('should verify ARIA tags') - 80ms</span>
									<BugIcon sx={{ fontSize: '0.9rem', color: '#f43f5e' }} />
								</Box>
								<Box sx={{ pl: 2, color: '#f43f5e' }}>AssertionError: expected "element" to be visible</Box>
								<Box sx={{ color: '#38bdf8', mt: 1 }}>Running regression tests...</Box>
							</Box>
						</Box>
					</Box>
				);

			case 'custom-app-dev':
				return (
					<Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
						{/* Development Stack Visual */}
						<Box sx={{
							position: 'absolute',
							top: '20%',
							left: '8%',
							width: '70%',
							height: '60%',
							bgcolor: 'background.paper',
							borderRadius: 3,
							border: `2px solid ${theme.palette.divider}`,
							boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
							p: 2,
							zIndex: 2
						}}>
							<Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
								<CodeIcon color="primary" />
								<Box sx={{ width: '60%', height: 10, bgcolor: 'divider', borderRadius: 1 }} />
							</Box>
							<Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
								<Box sx={{ width: '90%', height: 8, bgcolor: alpha(baseColor, 0.1), borderRadius: 1 }} />
								<Box sx={{ width: '80%', height: 8, bgcolor: alpha(baseColor, 0.1), borderRadius: 1 }} />
								<Box sx={{ width: '95%', height: 8, bgcolor: alpha(baseColor, 0.1), borderRadius: 1 }} />
							</Box>
						</Box>
						<Box sx={{
							position: 'absolute',
							top: '30%',
							right: '8%',
							width: '50%',
							height: '50%',
							bgcolor: alpha(baseColor, 0.05),
							borderRadius: 3,
							border: `2px dashed ${alpha(baseColor, 0.3)}`,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							zIndex: 1
						}}>
							<TermIcon sx={{ color: baseColor, fontSize: '2.5rem', opacity: 0.7 }} />
						</Box>
					</Box>
				);

			case 'a11y-audit':
				return (
					<Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
						{/* Accessibility Scanner Showcase */}
						<Box sx={{
							position: 'absolute',
							top: '15%',
							left: '12%',
							width: '76%',
							height: '70%',
							bgcolor: 'background.paper',
							borderRadius: 4,
							border: `2.5px solid ${baseColor}`,
							boxShadow: `0 20px 40px ${alpha(baseColor, 0.1)}`,
							p: 2.5,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center'
						}}>
							<Box sx={{
								p: 2,
								borderRadius: '50%',
								bgcolor: alpha(baseColor, 0.1),
								color: baseColor,
								mb: 2,
								display: 'flex'
							}}>
								<A11yIcon sx={{ fontSize: '3rem' }} />
							</Box>
							<Typography sx={{ fontWeight: 'bold', color: 'text.primary', mb: 0.5 }}>WCAG 2.1 AA Compliant</Typography>
							<Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem', textAlign: 'center' }}>No contrast, ARIA, or keyboard navigation issues found.</Typography>
						</Box>
					</Box>
				);

			case 'ai-applications':
			case 'agentic-ai':
				return (
					<Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
						{/* Neural Network Nodes */}
						<Box sx={{
							position: 'absolute',
							top: '15%',
							left: '15%',
							width: '70%',
							height: '70%',
							bgcolor: 'background.paper',
							borderRadius: '50%',
							border: `2px solid ${theme.palette.divider}`,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							boxShadow: '0 20px 45px rgba(0,0,0,0.06)'
						}}>
							<Box sx={{
								width: '80%',
								height: '80%',
								borderRadius: '50%',
								bgcolor: alpha(baseColor, 0.05),
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								position: 'relative'
							}}>
								<AiIcon sx={{ color: baseColor, fontSize: '3.5rem' }} />
								{/* Pulse Rings */}
								<Box sx={{
									position: 'absolute',
									top: '-5%',
									left: '-5%',
									right: '-5%',
									bottom: '-5%',
									border: `1px solid ${alpha(baseColor, 0.2)}`,
									borderRadius: '50%',
									animation: 'pulse 3s infinite linear'
								}} />
							</Box>
						</Box>
					</Box>
				);

			default:
				// Premium Abstract Geometric Art for generic services
				return (
					<Box sx={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
						<Box sx={{
							position: 'relative',
							width: '70%',
							height: '70%',
							borderRadius: 5,
							background: `linear-gradient(135deg, ${alpha(baseColor, 0.8)} 0%, ${alpha(theme.palette.secondary.main, 0.8)} 100%)`,
							boxShadow: `0 25px 50px ${alpha(baseColor, 0.25)}`,
							overflow: 'hidden'
						}}>
							{/* Floating glassmorphism element inside */}
							<Box sx={{
								position: 'absolute',
								top: '20%',
								left: '20%',
								width: '60%',
								height: '60%',
								bgcolor: 'rgba(255, 255, 255, 0.15)',
								backdropFilter: 'blur(10px)',
								borderRadius: 4,
								border: '1px solid rgba(255, 255, 255, 0.2)',
								boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								color: '#fff'
							}}>
								<DbIcon sx={{ fontSize: '3rem' }} />
							</Box>
							<Box sx={{
								position: 'absolute',
								bottom: -30,
								right: -30,
								width: 120,
								height: 120,
								borderRadius: '50%',
								bgcolor: 'rgba(255, 255, 255, 0.1)'
							}} />
						</Box>
					</Box>
				);
		}
	};

	return (
		<Box sx={{
			width: '100%',
			height: { xs: 260, md: 360 },
			bgcolor: alpha(baseColor, 0.02),
			border: `1px solid ${theme.palette.divider}`,
			borderRadius: 5,
			overflow: 'hidden',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			position: 'relative',
			'&::after': {
				content: '""',
				position: 'absolute',
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				borderRadius: 5,
				background: `radial-gradient(circle at 50% 50%, transparent 60%, ${alpha(baseColor, 0.04)} 100%)`,
				pointerEvents: 'none'
			}
		}}>
			{renderContent()}
		</Box>
	);
};

export default ServiceIllustration;
