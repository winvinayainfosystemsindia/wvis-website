import React, { useState } from 'react';
import {
	Box,
	Container,
	Typography,
	Grid,
	Button,
	Stack,
	Chip,
	Divider,
	useTheme,
	alpha,
	useMediaQuery,
} from '@mui/material';
import { ArrowForward, CheckCircle, AutoAwesome } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { ourSolutionsData } from '../../data/home/ourSolutionsData';

const OurSolutions: React.FC = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));
	const [activeIndex, setActiveIndex] = useState(0);
	const active = ourSolutionsData.products[activeIndex];

	const getProductAccentColor = (id: string) => {
		switch (id) {
			case 'a11ysense':
				return theme.palette.custom.a11ySense;
			case 'mis':
				return theme.palette.custom.winVinayaMis;
			case 'nammacademy':
				return theme.palette.primary.main;
			case 'invoice':
				return theme.palette.custom.invoiceIntel;
			default:
				return theme.palette.primary.main;
		}
	};

	const activeAccent = getProductAccentColor(active.id);

	return (
		<Box
			component="section"
			id="our-solutions-section"
			aria-labelledby="our-solutions-title"
			sx={{
				py: isMobile ? 6 : 12,
				bgcolor: 'background.light',
				position: 'relative',
				overflow: 'hidden',
			}}
		>
			{/* Ambient glow that shifts per product */}
			<Box
				sx={{
					position: 'absolute',
					top: '20%',
					right: '-10%',
					width: 700,
					height: 700,
					borderRadius: '50%',
					background: `radial-gradient(circle, ${alpha(activeAccent, 0.08)} 0%, transparent 65%)`,
					filter: 'blur(120px)',
					transition: 'all 0.6s ease',
					pointerEvents: 'none',
				}}
			/>
			<Box
				sx={{
					position: 'absolute',
					bottom: '-10%',
					left: '-5%',
					width: 500,
					height: 500,
					borderRadius: '50%',
					background: `radial-gradient(circle, ${alpha(activeAccent, 0.05)} 0%, transparent 70%)`,
					filter: 'blur(100px)',
					transition: 'all 0.6s ease',
					pointerEvents: 'none',
				}}
			/>

			<Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>

				{/* Section Header */}
				<Box sx={{ textAlign: 'center', mb: isMobile ? 4 : 7 }}>
					<Typography
						variant="overline"
						component="span"
						sx={{ color: 'primary.main', fontWeight: 600, letterSpacing: 2, mb: 1, display: 'block' }}
					>
						{ourSolutionsData.header.overline}
					</Typography>
					<Typography
						variant="h2"
						id="our-solutions-title"
						sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, fontWeight: 600, mb: 2 }}
					>
						{ourSolutionsData.header.title.main}{' '}
						<Box component="span" className="gradient-text">
							{ourSolutionsData.header.title.gradient}
						</Box>
					</Typography>
					<Typography
						sx={{
							...theme.typography.navLink,
							color: 'text.secondary',
							maxWidth: '560px',
							mx: 'auto',
							lineHeight: 1.75,
						}}
					>
						{ourSolutionsData.header.description}
					</Typography>
				</Box>

				{/* Horizontal Tab Selector */}
				<Stack
					direction="row"
					justifyContent="center"
					role="tablist"
					aria-label="Our Solutions Tabs"
					sx={{ mb: { xs: 4, md: 6 }, flexWrap: 'wrap', gap: 1.5 }}
				>
					{ourSolutionsData.products.map((product, index) => {
						const accent = getProductAccentColor(product.id);
						return (
							<Box
								key={product.id}
								onClick={() => setActiveIndex(index)}
								onKeyDown={(e) => {
									if (e.key === 'Enter' || e.key === ' ') {
										e.preventDefault();
										setActiveIndex(index);
									}
								}}
								tabIndex={0}
								role="tab"
								aria-selected={activeIndex === index}
								aria-label={`Solution: ${product.label}`}
								sx={{
									px: { xs: 2.5, md: 3.5 },
									py: 1.25,
									borderRadius: '10px',
									cursor: 'pointer',
									border: '1.5px solid',
									borderColor: activeIndex === index ? accent : theme.palette.divider,
									bgcolor: activeIndex === index ? alpha(accent, 0.08) : 'background.paper',
									transition: 'all 0.3s ease',
									'&:focus-visible': {
										outline: `2px solid ${accent}`,
										outlineOffset: '2px',
									},
									'&:hover': {
										borderColor: accent,
										bgcolor: alpha(accent, 0.05),
									},
								}}
							>
								<Typography
									sx={{
										fontWeight: 600,
										fontSize: { xs: '0.85rem', md: '0.9rem' },
										color: activeIndex === index ? accent : 'text.secondary',
										transition: 'color 0.3s ease',
										whiteSpace: 'nowrap',
									}}
								>
									{product.label}
								</Typography>
							</Box>
						);
					})}
				</Stack>

				{/* ── Main Content Panel ── */}
				<Box
					sx={{
						borderRadius: 4,
						overflow: 'hidden',
						border: `1px solid ${alpha(activeAccent, 0.18)}`,
						boxShadow: `0 4px 40px ${alpha(activeAccent, 0.1)}`,
						transition: 'box-shadow 0.5s ease, border-color 0.5s ease',
						bgcolor: 'background.paper',
					}}
				>
					{/* Thin accent top bar */}
					<Box
						sx={{
							height: 4,
							background: `linear-gradient(90deg, ${activeAccent}, ${alpha(activeAccent, 0.25)})`,
							transition: 'background 0.5s ease',
						}}
					/>

					<Grid container sx={{ minHeight: isMobile ? 'auto' : 640 }}>
						{/* ─── LEFT: Story + features ─── */}
						<Grid
							size={{ xs: 12, md: 7 }}
							sx={{
								p: { xs: 4, md: 5.5 },
								borderRight: { md: `1px solid ${theme.palette.divider}` },
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
							}}
						>
							<Chip
								label={active.tag}
								size="small"
								sx={{
									alignSelf: 'flex-start',
									bgcolor: alpha(activeAccent, 0.09),
									color: activeAccent,
									fontWeight: 600,
									fontSize: '0.7rem',
									letterSpacing: 0.5,
									mb: 3,
									border: `1px solid ${alpha(activeAccent, 0.2)}`,
								}}
							/>

							<Typography
								variant="h4"
								component="h3"
								sx={{
									fontWeight: 600,
									mb: 2,
									fontSize: { xs: '1.35rem', md: '1.7rem' },
									lineHeight: 1.3,
									letterSpacing: '-0.01em',
								}}
							>
								{active.hook}
							</Typography>

							<Typography
								variant="body1"
								sx={{ color: 'text.secondary', lineHeight: 1.85, mb: 3.5, fontSize: '0.975rem' }}
							>
								{active.story}
							</Typography>

							<Divider sx={{ mb: 3, opacity: 0.5 }} />

							<Stack spacing={1.5} component="ul" sx={{ mb: 4, listStyle: 'none', p: 0, m: 0 }}>
								{active.features.map((f, i) => (
									<Stack key={i} direction="row" spacing={1.5} alignItems="flex-start" component="li">
										<CheckCircle
											sx={{ fontSize: 18, color: activeAccent, mt: 0.15, flexShrink: 0, transition: 'color 0.3s' }}
										/>
										<Typography variant="body2" sx={{ lineHeight: 1.65, fontSize: '0.9125rem' }}>
											{f}
										</Typography>
									</Stack>
								))}
							</Stack>

							<Button
								component={Link}
								to={active.ctaLink}
								variant="contained"
								endIcon={<ArrowForward />}
								sx={{
									alignSelf: 'flex-start',
									bgcolor: activeAccent,
									color: 'primary.contrastText',
									fontWeight: 600,
									px: 3,
									py: 1.25,
									borderRadius: 2,
									fontSize: '0.9rem',
									boxShadow: 'none',
									'&:hover': {
										bgcolor: activeAccent,
										filter: 'brightness(0.88)',
										transform: 'translateY(-2px)',
										boxShadow: `0 8px 24px ${alpha(activeAccent, 0.38)}`,
									},
									transition: 'all 0.3s ease',
								}}
							>
								{active.ctaText}
							</Button>
						</Grid>

						{/* ─── RIGHT: Visual showcase panel ─── */}
						<Grid
							size={{ xs: 12, md: 5 }}
							sx={{
								p: { xs: 4, md: 5 },
								display: 'flex',
								flexDirection: 'column',
								gap: 2.5,
								bgcolor: alpha(activeAccent, 0.025),
								transition: 'background 0.5s ease',
								position: 'relative',
								overflow: 'hidden',
							}}
						>
							{/* Decorative background circles */}
							<Box
								sx={{
									position: 'absolute',
									bottom: -80,
									right: -80,
									width: 240,
									height: 240,
									borderRadius: '50%',
									border: `40px solid ${alpha(activeAccent, 0.06)}`,
									transition: 'border-color 0.5s ease',
									pointerEvents: 'none',
								}}
							/>
							<Box
								sx={{
									position: 'absolute',
									top: -60,
									left: -60,
									width: 160,
									height: 160,
									borderRadius: '50%',
									border: `30px solid ${alpha(activeAccent, 0.04)}`,
									transition: 'border-color 0.5s ease',
									pointerEvents: 'none',
								}}
							/>

							{/* ── Primary Stat Card ── */}
							<Box
								sx={{
									p: { xs: 3.5, md: 4 },
									borderRadius: 3,
									background: `linear-gradient(135deg, ${alpha(activeAccent, 0.12)} 0%, ${alpha(activeAccent, 0.04)} 100%)`,
									border: `1px solid ${alpha(activeAccent, 0.2)}`,
									textAlign: 'center',
									position: 'relative',
									zIndex: 1,
									transition: 'all 0.4s ease',
									flexGrow: 1,
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								{/* Pill label at top */}
								<Box
									sx={{
										px: 1.75,
										py: 0.4,
										borderRadius: '100px',
										bgcolor: alpha(activeAccent, 0.12),
										border: `1px solid ${alpha(activeAccent, 0.25)}`,
										mb: 3,
										display: 'inline-flex',
										alignItems: 'center',
										gap: 0.75,
									}}
								>
									<AutoAwesome sx={{ fontSize: 13, color: activeAccent }} />
									<Typography
										sx={{
											fontSize: '0.7rem',
											fontWeight: 600,
											color: activeAccent,
											letterSpacing: 0.5,
											textTransform: 'uppercase',
										}}
									>
										{active.label}
									</Typography>
								</Box>

								<Typography
									sx={{
										fontSize: { xs: '3.5rem', md: '5rem' },
										fontWeight: 600,
										color: activeAccent,
										lineHeight: 1,
										letterSpacing: '-0.03em',
										mb: 1,
										transition: 'color 0.3s ease',
									}}
								>
									{active.stat.value}
								</Typography>
								<Typography
									sx={{
										fontSize: '0.95rem',
										color: 'text.secondary',
										fontWeight: 500,
									}}
								>
									{active.stat.label}
								</Typography>
							</Box>

							{/* ── Secondary Stats Row ── */}
							<Stack direction="row" spacing={2} sx={{ position: 'relative', zIndex: 1 }}>
								{active.secondaryStats.map((s, i) => (
									<Box
										key={i}
										sx={{
											flex: 1,
											p: 2.5,
											borderRadius: 2.5,
											textAlign: 'center',
											bgcolor: 'background.paper',
											border: `1px solid ${theme.palette.divider}`,
											transition: 'all 0.3s ease',
											'&:hover': {
												borderColor: alpha(activeAccent, 0.4),
												boxShadow: `0 4px 16px ${alpha(activeAccent, 0.1)}`,
											},
										}}
									>
										<Typography
											sx={{
												fontSize: '1.15rem',
												fontWeight: 600,
												color: activeAccent,
												lineHeight: 1.2,
												mb: 0.5,
												transition: 'color 0.3s',
											}}
										>
											{s.value}
										</Typography>
										<Typography
											sx={{ fontSize: '0.72rem', color: 'text.secondary', fontWeight: 500 }}
										>
											{s.label}
										</Typography>
									</Box>
								))}
							</Stack>

							{/* ── Badge Strip ── */}
							<Box
								sx={{
									px: 2.5,
									py: 1.5,
									borderRadius: 2,
									bgcolor: alpha(activeAccent, 0.06),
									border: `1px dashed ${alpha(activeAccent, 0.25)}`,
									display: 'flex',
									alignItems: 'center',
									gap: 1,
									position: 'relative',
									zIndex: 1,
									transition: 'all 0.3s',
								}}
							>
								<Box
									sx={{
										width: 8,
										height: 8,
										borderRadius: '50%',
										bgcolor: activeAccent,
										flexShrink: 0,
										boxShadow: `0 0 8px ${activeAccent}`,
									}}
								/>
								<Typography
									sx={{
										fontSize: '0.8rem',
										color: activeAccent,
										fontWeight: 600,
										letterSpacing: 0.2,
									}}
								>
									{active.badge}
								</Typography>
							</Box>

							{/* Dot indicators */}
							<Stack 
								direction="row" 
								spacing={1} 
								justifyContent="center" 
								role="tablist"
								aria-label="Solution Slide Indicators"
								sx={{ position: 'relative', zIndex: 1 }}
							>
								{ourSolutionsData.products.map((p, i) => (
									<Box
										key={p.id}
										onClick={() => setActiveIndex(i)}
										onKeyDown={(e) => {
											if (e.key === 'Enter' || e.key === ' ') {
												e.preventDefault();
												setActiveIndex(i);
											}
										}}
										tabIndex={0}
										role="tab"
										aria-selected={i === activeIndex}
										aria-label={`Go to slide ${i + 1}`}
										sx={{
											width: i === activeIndex ? 24 : 8,
											height: 8,
											borderRadius: '100px',
											bgcolor: i === activeIndex ? activeAccent : alpha(activeAccent, 0.2),
											cursor: 'pointer',
											transition: 'all 0.35s ease',
											'&:focus-visible': {
												outline: `2px solid ${activeAccent}`,
												outlineOffset: '2px',
											},
											'&:hover': { bgcolor: activeAccent, opacity: 0.7 },
										}}
									/>
								))}
							</Stack>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</Box>
	);
};

export default OurSolutions;
