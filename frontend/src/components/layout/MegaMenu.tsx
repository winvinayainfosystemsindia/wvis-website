import React from 'react';
import {
	Drawer,
	Container,
	Box,
	Grid,
	Typography,
	Button,
	alpha,
	useTheme,
	Divider,
} from '@mui/material';
import {
	ChevronRight,
	AutoAwesome,
	Code,
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import {
	ServiceCategoryBox,
	CategoryHeader,
	CategoryIconWrapper,
	ServiceItemLink,
	ResourceItem,
} from '../../theme/muiTheme';
import { WHAT_WE_DO_DATA, NAV_MENU_ITEMS, type ServiceSection } from '../../data/shared/navbarData';

interface MegaMenuProps {
	activeMenu: 'whatWeDo' | 'ourSolutions' | 'resources' | 'whoWeAre' | null;
	onClose: () => void;
	navbarHeight: number;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ activeMenu, onClose, navbarHeight }) => {
	const theme = useTheme();

	const renderServiceSection = (section: ServiceSection) => (
		<ServiceCategoryBox>
			<CategoryHeader>
				<CategoryIconWrapper>{section.icon}</CategoryIconWrapper>
				<Box>
					<Typography variant="h6" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', fontSize: '1rem' }}>
						{section.title}
					</Typography>
					<Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.75rem' }}>
						{section.description}
					</Typography>
				</Box>
			</CategoryHeader>

			<Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
				{section.items.map((item, idx) => {
					const ServiceItemLinkAsAny = ServiceItemLink as any;
					return (
						<ServiceItemLinkAsAny
							key={idx}
							component={RouterLink}
							to={item.path}
							onClick={onClose}
							sx={{ textDecoration: 'none' }}
						>
							<Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
								{item.icon && (
									<Box sx={{
										color: 'primary.main',
										display: 'flex',
										bgcolor: (theme: any) => alpha(theme.palette.primary.main, 0.1),
										p: 0.5,
										borderRadius: 1
									}}>
										{item.icon}
									</Box>
								)}
								<Box>
									<Typography sx={{ fontWeight: 600, fontSize: '0.8125rem', color: 'text.primary', lineHeight: 1.2 }}>
										{item.label}
									</Typography>
									<Typography variant="body2" sx={{ fontSize: '0.7rem', color: 'text.secondary', lineHeight: 1.2, mt: 0.25 }}>
										{item.subtext}
									</Typography>
								</Box>
							</Box>
							<ChevronRight className="item-arrow" sx={{ fontSize: '1rem' }} />
						</ServiceItemLinkAsAny>
					);
				})}
			</Box>
		</ServiceCategoryBox>
	);

	return (
		<Drawer
			anchor="top"
			open={Boolean(activeMenu)}
			onClose={onClose}
			slotProps={{ paper: { 'data-lenis-prevent': true } as Record<string, unknown> }}
			sx={{
				zIndex: theme.zIndex.drawer + 1,
				'& .MuiDrawer-paper': {
					top: navbarHeight,
					height: 'auto',
					maxHeight: 'calc(100vh - 100px)',
					borderTop: 1,
					borderColor: alpha(theme.palette.divider, 0.1),
					boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
					overflowY: 'auto',
				},
				'& .MuiBackdrop-root': {
					top: navbarHeight,
					backgroundColor: alpha('#000000', 0.2),
				},
			}}
		>
			<Container maxWidth="xl" sx={{ py: { md: 3, lg: 4 }, px: { md: 3, lg: 6 } }}>
				{/* WHAT WE DO (Formerly SERVICES) MEGA MENU */}
				{activeMenu === 'whatWeDo' && (
					<Grid container spacing={2}>
						{/* Column 1: Enterprise Solutions */}
						<Grid size={{ xs: 12, md: 6, lg: 3 }} sx={{ display: 'flex' }}>
							<Box sx={{ flexGrow: 1 }}>
								{WHAT_WE_DO_DATA[0] && renderServiceSection(WHAT_WE_DO_DATA[0])}
							</Box>
							<Divider
								orientation="vertical"
								flexItem
								sx={{
									display: { xs: 'none', md: 'block' },
									mx: 2,
									borderRight: 2,
									borderColor: (theme) => alpha(theme.palette.divider, 0.5)
								}}
							/>
						</Grid>

						{/* Column 2: Accessibility & Corporate Training */}
						<Grid size={{ xs: 12, md: 6, lg: 3 }} sx={{ display: 'flex' }}>
							<Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 3 }}>
								{WHAT_WE_DO_DATA[1] && renderServiceSection(WHAT_WE_DO_DATA[1])}
								<Divider sx={{ borderTop: 2, borderColor: (theme) => alpha(theme.palette.divider, 0.5) }} />
								{WHAT_WE_DO_DATA[4] && renderServiceSection(WHAT_WE_DO_DATA[4])}
							</Box>
							<Divider
								orientation="vertical"
								flexItem
								sx={{
									display: { xs: 'none', lg: 'block' },
									mx: 2,
									borderRight: 2,
									borderColor: (theme) => alpha(theme.palette.divider, 0.5)
								}}
							/>
						</Grid>

						{/* Column 3: NGO & Social Impact */}
						<Grid size={{ xs: 12, md: 6, lg: 3 }} sx={{ display: 'flex' }}>
							<Box sx={{ flexGrow: 1 }}>
								{WHAT_WE_DO_DATA[2] && renderServiceSection(WHAT_WE_DO_DATA[2])}
							</Box>
							<Divider
								orientation="vertical"
								flexItem
								sx={{
									display: { xs: 'none', md: 'block' },
									mx: 2,
									borderRight: 2,
									borderColor: (theme) => alpha(theme.palette.divider, 0.5)
								}}
							/>
						</Grid>

						{/* Column 4: AI & Innovation */}
						<Grid size={{ xs: 12, md: 6, lg: 3 }}>
							{WHAT_WE_DO_DATA[3] && renderServiceSection(WHAT_WE_DO_DATA[3])}
						</Grid>

						<Grid size={12}>
							<Box
								sx={{
									pt: 3,
									borderTop: 1,
									borderColor: 'divider',
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'center',
								}}
							>
								<Typography variant="body2" sx={{ color: 'text.secondary' }}>
									Need help choosing the right solution?
								</Typography>
								<Button
									variant="outlined"
									component={RouterLink}
									to="/contact"
									onClick={onClose}
									sx={{
										borderWidth: 1.5,
										fontWeight: 600,
										fontSize: '0.8125rem',
										py: 1,
										px: 2.5,
										'&:hover': { borderWidth: 1.5 },
									}}
								>
									Schedule Consultation
								</Button>
							</Box>
						</Grid>
					</Grid>
				)}

				{/* OUR SOLUTIONS (Formerly PRODUCTS) MEGA MENU */}
				{activeMenu === 'ourSolutions' && (
					<Grid container spacing={6}>
						<Grid size={{ xs: 12, md: 8 }}>
							<Grid container spacing={2}>
								{NAV_MENU_ITEMS.ourSolutions.map((product) => (
									<Grid key={product.label} size={{ xs: 12, sm: 6 }}>
										<Box
											component={RouterLink}
											to={product.path}
											onClick={onClose}
											sx={{
												display: 'flex',
												gap: 2,
												p: 2,
												borderRadius: 3,
												textDecoration: 'none',
												cursor: 'pointer',
												transition: 'all 0.2s ease',
												'&:hover': {
													bgcolor: alpha(product.color || theme.palette.primary.main, 0.06),
													transform: 'translateY(-2px)',
													'& .product-title': {
														color: product.color || 'primary.main',
													}
												},
											}}
										>
											{/* Icon Wrapper */}
											<Box
												sx={{
													width: 48,
													height: 48,
													borderRadius: 2.2,
													display: 'flex',
													alignItems: 'center',
													justifyContent: 'center',
													bgcolor: alpha(product.color || theme.palette.primary.main, 0.1),
													color: product.color || 'primary.main',
													flexShrink: 0,
												}}
											>
												{React.cloneElement(product.icon as React.ReactElement<any>, { fontSize: 'medium' })}
											</Box>

											{/* Content */}
											<Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, flexGrow: 1 }}>
												<Typography
													className="product-title"
													sx={{
														fontWeight: 700,
														fontSize: '0.95rem',
														color: 'text.primary',
														transition: 'color 0.2s ease',
													}}
												>
													{product.label}
												</Typography>
												<Typography
													variant="body2"
													sx={{
														color: 'text.secondary',
														lineHeight: 1.5,
														fontSize: '0.8rem',
													}}
												>
													{product.description}
												</Typography>
											</Box>
										</Box>
									</Grid>
								))}
							</Grid>
						</Grid>

						<Grid size={{ xs: 12, md: 4 }}>
							<Box sx={{
								position: 'relative',
								height: '100%',
								p: 4,
								borderRadius: 4,
								background: (theme) => `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
								border: '1px solid',
								borderColor: (theme) => alpha(theme.palette.primary.main, 0.1),
								overflow: 'hidden',
								display: 'flex',
								flexDirection: 'column',
								transition: 'all 0.3s ease',
								'&:hover': {
									borderColor: (theme) => alpha(theme.palette.primary.main, 0.2),
									boxShadow: (theme) => `0 12px 24px ${alpha(theme.palette.primary.main, 0.05)}`,
								}
							}}>
								{/* Decorative Elements */}
								<Box sx={{
									position: 'absolute',
									top: -40,
									right: -40,
									width: 200,
									height: 200,
									borderRadius: '50%',
									background: (theme) => `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.08)} 0%, transparent 70%)`,
									zIndex: 0
								}} />

								<Box sx={{ position: 'relative', zIndex: 1 }}>
									<Typography variant="h6" sx={{ fontWeight: 800, mb: 3, color: 'text.primary' }}>
										Enterprise Expertise
									</Typography>
									<Box sx={{ display: 'flex', gap: 2.5, mb: 4 }}>
										<Box
											sx={{
												width: 64,
												height: 64,
												borderRadius: 3,
												background: theme.gradients.freshworks,
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'center',
												color: '#fff',
												boxShadow: (theme) => `0 8px 16px ${alpha(theme.palette.primary.main, 0.2)}`,
												flexShrink: 0,
											}}
										>
											<Code sx={{ fontSize: '2rem' }} />
										</Box>
										<Box>
											<Typography sx={{ fontWeight: 800, fontSize: '1.125rem', mb: 0.5, color: 'text.primary' }}>
												Software Architecture
											</Typography>
											<Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
												Expertise in software and web application development with enterprise architecture.
											</Typography>
										</Box>
									</Box>
									<Button
										component={RouterLink}
										to="/contact"
										variant="contained"
										onClick={onClose}
										sx={{
											fontWeight: 700,
											textTransform: 'none',
											background: theme.gradients.freshworks,
											borderRadius: 2,
											px: 3,
											py: 1.2,
											width: 'fit-content',
										}}
									>
										Engage With Us
									</Button>
								</Box>
							</Box>
						</Grid>
					</Grid>
				)}

				{/* RESOURCES MEGA MENU */}
				{activeMenu === 'resources' && (
					<Grid container spacing={6}>
						<Grid size={{ xs: 12, md: 8 }}>
							<Grid container spacing={2}>
								{NAV_MENU_ITEMS.resources.map((resource) => (
									<Grid key={resource.label} size={{ xs: 12, sm: 6 }}>
										<Box
											component={RouterLink}
											to={resource.path}
											onClick={onClose}
											sx={{
												display: 'flex',
												gap: 2,
												p: 2,
												borderRadius: 3,
												textDecoration: 'none',
												cursor: 'pointer',
												transition: 'all 0.2s ease',
												'&:hover': {
													bgcolor: alpha(resource.color || theme.palette.primary.main, 0.06),
													transform: 'translateY(-2px)',
													'& .resource-title': {
														color: resource.color || 'primary.main',
													}
												},
											}}
										>
											{/* Icon Wrapper */}
											<Box
												sx={{
													width: 48,
													height: 48,
													borderRadius: 2.2,
													display: 'flex',
													alignItems: 'center',
													justifyContent: 'center',
													bgcolor: alpha(resource.color || theme.palette.primary.main, 0.1),
													color: resource.color || 'primary.main',
													flexShrink: 0,
												}}
											>
												{React.cloneElement(resource.icon as React.ReactElement<any>, { fontSize: 'medium' })}
											</Box>

											{/* Content */}
											<Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, flexGrow: 1 }}>
												<Typography
													className="resource-title"
													sx={{
														fontWeight: 700,
														fontSize: '0.95rem',
														color: 'text.primary',
														transition: 'color 0.2s ease',
													}}
												>
													{resource.label}
												</Typography>
												<Typography
													variant="body2"
													sx={{
														color: 'text.secondary',
														lineHeight: 1.5,
														fontSize: '0.8rem',
													}}
												>
													{resource.description}
												</Typography>
											</Box>
										</Box>
									</Grid>
								))}
							</Grid>
						</Grid>

						<Grid size={{ xs: 12, md: 4 }}>
							<Box sx={{
								position: 'relative',
								height: '100%',
								p: 4,
								borderRadius: 4,
								background: (theme) => `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
								border: '1px solid',
								borderColor: (theme) => alpha(theme.palette.primary.main, 0.1),
								overflow: 'hidden',
								display: 'flex',
								flexDirection: 'column',
								transition: 'all 0.3s ease',
								'&:hover': {
									borderColor: (theme) => alpha(theme.palette.primary.main, 0.2),
									boxShadow: (theme) => `0 12px 24px ${alpha(theme.palette.primary.main, 0.05)}`,
								}
							}}>
								{/* Decorative Elements */}
								<Box sx={{
									position: 'absolute',
									top: -40,
									right: -40,
									width: 200,
									height: 200,
									borderRadius: '50%',
									background: (theme) => `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.08)} 0%, transparent 70%)`,
									zIndex: 0
								}} />

								<Box sx={{ position: 'relative', zIndex: 1 }}>
									<Typography variant="h6" sx={{ fontWeight: 800, mb: 3, color: 'text.primary' }}>
										Featured Capability
									</Typography>
									<Box sx={{ display: 'flex', gap: 2.5, mb: 4 }}>
										<Box
											sx={{
												width: 64,
												height: 64,
												borderRadius: 3,
												background: theme.gradients.freshworks,
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'center',
												color: '#fff',
												boxShadow: (theme) => `0 8px 16px ${alpha(theme.palette.primary.main, 0.2)}`,
												flexShrink: 0,
											}}
										>
											<AutoAwesome sx={{ fontSize: '2rem' }} />
										</Box>
										<Box>
											<Typography sx={{ fontWeight: 800, fontSize: '1.125rem', mb: 0.5, color: 'text.primary' }}>
												AI-Driven Innovation
											</Typography>
											<Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
												Harness Agentic AI and LLMs to transform workflows
											</Typography>
										</Box>
									</Box>
									<Button
										component={RouterLink}
										to="/contact"
										variant="contained"
										onClick={onClose}
										sx={{
											fontWeight: 700,
											textTransform: 'none',
											background: theme.gradients.freshworks,
											borderRadius: 2,
											px: 3,
											py: 1.2,
											width: 'fit-content',
										}}
									>
										Learn More
									</Button>
								</Box>
							</Box>
						</Grid>
					</Grid>
				)}

				{/* WHO WE ARE MEGA MENU */}
				{activeMenu === 'whoWeAre' && (
					<Grid container spacing={3}>
						{NAV_MENU_ITEMS.whoWeAre.map((item) => (
							<Grid key={item.label} size={{ xs: 12, sm: 6 }}>
								{/* @ts-ignore */}
								<ResourceItem component={RouterLink as any} to={item.path} onClick={onClose}>
									<Box sx={{ color: 'primary.main' }}>{item.icon}</Box>
									<Box sx={{ flex: 1 }}>
										<Typography sx={{ fontWeight: 600, fontSize: '0.875rem', color: 'text.primary' }}>
											{item.label}
										</Typography>
									</Box>
									<ChevronRight className="resource-arrow" sx={{ fontSize: '1.25rem' }} />
								</ResourceItem>
							</Grid>
						))}
					</Grid>
				)}
			</Container>
		</Drawer>
	);
};

export default MegaMenu;
